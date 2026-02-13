
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { QUESTIONS } from './data.ts';
import { ModuleType, AnswerType, UserAnswer, Question } from './types.ts';
import { QuizCard } from './components/QuizCard.tsx';

const STORAGE_KEY = 'seas_ce_quiz_progress_v1';
const DB_NAME = 'SeasAudioCache';
const STORE_NAME = 'audios';

const getDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeRawPcm(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer, data.byteOffset, data.byteLength / 2);
  const frameCount = dataInt16.length / numChannels;
  const audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return audioBuffer;
}

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType | 'TODOS'>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).activeModule || 'TODOS'; } catch (e) { return 'TODOS'; }
    }
    return 'TODOS';
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).answers || []; } catch (e) { return []; }
    }
    return [];
  });

  const [showFinished, setShowFinished] = useState(false);
  const [explanationEnabled, setExplanationEnabled] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [rateLimitedUntil, setRateLimitedUntil] = useState<number>(0);
  
  const [isReading, setIsReading] = useState(false);
  const [loadingAudioIds, setLoadingAudioIds] = useState<Set<number>>(new Set());
  const audioCache = useRef<Record<number, AudioBuffer>>({});
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const filteredQuestions = useMemo(() => {
    if (isReviewMode) {
      const wrongAnswerIds = answers.filter(a => !a.isCorrect).map(a => a.questionId);
      return wrongAnswerIds.map(id => QUESTIONS.find(q => q.id === id)).filter((q): q is Question => !!q);
    }
    const q = activeModule === 'TODOS' ? QUESTIONS : QUESTIONS.filter(q => q.module === activeModule);
    return [...q].sort((a, b) => a.id - b.id);
  }, [activeModule, isReviewMode, answers]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentAnswer = useMemo(() => answers.find(a => a.questionId === currentQuestion?.id), [answers, currentQuestion]);

  const stats = useMemo(() => {
    const relevantQuestions = isReviewMode ? filteredQuestions : (activeModule === 'TODOS' ? QUESTIONS : QUESTIONS.filter(q => q.module === activeModule));
    const relevantAnswers = answers.filter(a => relevantQuestions.some(q => q.id === a.questionId));
    const correct = relevantAnswers.filter(a => a.isCorrect).length;
    const progress = Math.round((relevantAnswers.length / (relevantQuestions.length || 1)) * 100) || 0;
    return { correct, wrong: relevantAnswers.length - correct, progress, total: relevantAnswers.length };
  }, [answers, filteredQuestions, activeModule, isReviewMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeModule, answers, explanationEnabled }));
  }, [activeModule, answers, explanationEnabled]);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchAudio = async (q: Question) => {
    if (audioCache.current[q.id] || loadingAudioIds.has(q.id)) return;
    if (Date.now() < rateLimitedUntil) return;

    try {
      const db = await getDB();
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const cachedData = await new Promise<Uint8Array | null>((resolve) => {
        const getReq = store.get(q.id);
        getReq.onsuccess = () => resolve(getReq.result);
        getReq.onerror = () => resolve(null);
      });
      if (cachedData) {
        if (!audioContextRef.current) audioContextRef.current = new AudioContext({ sampleRate: 24000 });
        audioCache.current[q.id] = await decodeRawPcm(cachedData, audioContextRef.current, 24000, 1);
        return;
      }
    } catch (e) {}

    if (isOffline) return;

    setLoadingAudioIds(prev => new Set(prev).add(q.id));
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: q.text }] }],
        config: { responseModalities: [Modality.AUDIO], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } } }
      });

      const base64 = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64) return;
      const audioData = decodeBase64(base64);
      if (!audioContextRef.current) audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      audioCache.current[q.id] = await decodeRawPcm(audioData, audioContextRef.current, 24000, 1);
      
      const db = await getDB();
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).put(audioData, q.id);
    } catch (e: any) {
      if (e.message?.includes('429')) {
        console.warn("Limite de cota atingido (429). Pausando requisições de áudio por 15s.");
        setRateLimitedUntil(Date.now() + 15000);
      }
      console.error("Audio error:", e);
    } finally {
      setLoadingAudioIds(prev => { const n = new Set(prev); n.delete(q.id); return n; });
    }
  };

  useEffect(() => {
    if (showFinished || !currentQuestion) return;
    
    // Timer para evitar disparos frenéticos ao mudar de questão
    const timeout = setTimeout(() => {
      fetchAudio(currentQuestion);
      // Pré-carrega apenas a PRÓXIMA questão para economizar cota
      const nextQ = filteredQuestions[currentIndex + 1];
      if (nextQ) fetchAudio(nextQ);
    }, 800);

    return () => clearTimeout(timeout);
  }, [currentIndex, filteredQuestions, showFinished, rateLimitedUntil]);

  const handleSpeak = async (q: Question) => {
    if (isReading) {
      if (audioSourceRef.current) try { audioSourceRef.current.stop(); } catch(e) {}
      setIsReading(false);
      return;
    }
    if (!audioContextRef.current) audioContextRef.current = new AudioContext({ sampleRate: 24000 });
    if (audioContextRef.current.state === 'suspended') await audioContextRef.current.resume();
    
    let buffer = audioCache.current[q.id];
    if (!buffer) {
      await fetchAudio(q);
      buffer = audioCache.current[q.id];
    }

    if (buffer && audioContextRef.current) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => setIsReading(false);
      setIsReading(true);
      audioSourceRef.current = source;
      source.start();
    }
  };

  const handleAnswer = (answer: AnswerType) => {
    if (!currentQuestion) return;
    const isCorrect = answer === currentQuestion.answer;
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, { questionId: currentQuestion.id, answer, isCorrect }];
    });
  };

  const next = () => {
    if (currentIndex < filteredQuestions.length - 1) setCurrentIndex(prev => prev + 1);
    else setShowFinished(true);
    if (audioSourceRef.current) try { audioSourceRef.current.stop(); } catch(e) {}
    setIsReading(false);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setShowFinished(false);
    setIsReviewMode(false);
    setExplanationEnabled(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 max-w-md mx-auto relative shadow-2xl">
      <header className={`bg-white border-b px-3 py-2 flex items-center justify-between sticky top-0 z-50 transition-colors ${isReviewMode ? 'border-b-amber-200 bg-amber-50/30' : ''}`}>
        <div className="flex items-center gap-2">
          <div className={`${isReviewMode ? 'bg-amber-600' : 'bg-blue-600'} p-1.5 rounded-lg relative`}>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {isOffline && <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-amber-500 border-2 border-white rounded-full"></span>}
          </div>
          <div>
            <h1 className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none">
              {isReviewMode ? 'Revisão' : 'SEAS-CE'}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setExplanationEnabled(!explanationEnabled)}
            className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-colors ${explanationEnabled ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200'}`}
          >
            DICA: {explanationEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </header>

      <div className="w-full bg-slate-200 h-1">
        <div className={`${isReviewMode ? 'bg-amber-500' : 'bg-blue-600'} h-1 transition-all duration-500`} style={{ width: `${stats.progress}%` }}></div>
      </div>

      <main className="flex-grow p-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
        {!showFinished ? (
          <>
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
              <span>{isReviewMode ? 'Modo Revisão' : activeModule} • {currentIndex + 1}/{(filteredQuestions.length || 1)}</span>
              <div className="flex gap-2">
                <span className="text-emerald-600">C: {stats.correct}</span>
                <span className="text-rose-600">E: {stats.wrong}</span>
              </div>
            </div>

            {Date.now() < rateLimitedUntil && (
              <div className="bg-blue-50 text-blue-700 text-[10px] p-2 rounded-lg font-bold border border-blue-100 animate-pulse">
                Áudio temporariamente indisponível (limite atingido). Aguarde alguns segundos.
              </div>
            )}

            {!isReviewMode && (
              <div className="overflow-x-auto no-scrollbar flex gap-1 py-1">
                {['TODOS', ...Object.values(ModuleType)].map((mod) => (
                  <button
                    key={mod}
                    onClick={() => { setActiveModule(mod as any); setCurrentIndex(0); setAnswers([]); setIsReviewMode(false); }}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${activeModule === mod ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}
                  >
                    {mod === 'TODOS' ? 'GERAL' : mod}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion ? (
              <QuizCard 
                question={currentQuestion} 
                onAnswer={handleAnswer}
                userAnswer={currentAnswer?.answer}
                showExplanation={isReviewMode ? true : explanationEnabled}
                onSpeak={() => handleSpeak(currentQuestion)}
                isReading={isReading}
                isAudioLoading={loadingAudioIds.has(currentQuestion?.id)}
                isAudioCached={!!audioCache.current[currentQuestion?.id]}
              />
            ) : (
              <div className="text-center p-10 text-slate-400 font-bold uppercase text-xs">Nenhuma questão encontrada</div>
            )}

            <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
              <button 
                onClick={() => { if(currentIndex > 0) setCurrentIndex(v => v-1); setIsReading(false); }}
                disabled={currentIndex === 0}
                className="py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-xs active:scale-95 disabled:opacity-30"
              >
                VOLTAR
              </button>
              <button 
                onClick={next}
                disabled={!currentAnswer}
                className={`py-3 rounded-xl font-bold text-xs text-white shadow-lg active:scale-95 transition-all ${currentAnswer ? (isReviewMode ? 'bg-amber-600' : 'bg-blue-600') : 'bg-slate-300'}`}
              >
                {currentIndex === filteredQuestions.length - 1 ? 'FINALIZAR' : 'PRÓXIMA'}
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center p-4 text-center animate-in zoom-in-95">
            <div className={`w-16 h-16 ${isReviewMode ? 'bg-amber-600' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center mb-4 shadow-xl`}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-black text-slate-900 mb-1 uppercase tracking-tight">Resultado</h2>
            <div className="bg-white w-full p-6 rounded-2xl border mb-6 shadow-sm">
              <p className={`text-4xl font-black ${isReviewMode ? 'text-amber-600' : 'text-blue-600'}`}>{Math.round((stats.correct/(filteredQuestions.length || 1))*100)}%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Aproveitamento</p>
            </div>
            <button onClick={resetQuiz} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs shadow-lg transition-all active:scale-95">RECOMEÇAR</button>
          </div>
        )}
      </main>

      <footer className="py-2 text-center border-t bg-white">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Professor Robson Sousa</p>
      </footer>
    </div>
  );
};

export default App;
