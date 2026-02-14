import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { QUESTIONS } from './data';
import { ModuleType, AnswerType, UserAnswer, Question } from './types';
import { QuizCard } from './components/QuizCard';

const STORAGE_KEY = 'seas_ce_v7_tts';

// Funções de utilidade para Áudio PCM (Conforme guia Gemini API)
function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [activeModule, setActiveModule] = useState<ModuleType | 'TODOS'>('TODOS');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).answers : [];
  });
  const [showFinished, setShowFinished] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers }));
  }, [answers]);

  const filteredQuestions = useMemo(() => {
    const q = activeModule === 'TODOS' ? QUESTIONS : QUESTIONS.filter(q => q.module === activeModule);
    return q.sort((a, b) => a.id - b.id);
  }, [activeModule]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);

  const stats = useMemo(() => {
    const moduleQs = filteredQuestions;
    const moduleAs = answers.filter(a => moduleQs.some(q => q.id === a.questionId));
    const correct = moduleAs.filter(a => a.isCorrect).length;
    const progress = Math.round((moduleAs.length / (moduleQs.length || 1)) * 100);
    return { correct, progress, total: moduleQs.length };
  }, [answers, filteredQuestions]);

  const stopAudio = () => {
    if (currentSourceRef.current) {
      currentSourceRef.current.stop();
      currentSourceRef.current = null;
    }
    setIsReading(false);
  };

  const speakWithIA = async (text: string) => {
    if (isReading) {
      stopAudio();
      return;
    }

    try {
      setIsReading(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Leia pausadamente esta questão de concurso: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // Kore tem voz masculina firme
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        
        const audioBuffer = await decodeAudioData(
          decodeBase64(base64Audio),
          audioContextRef.current,
          24000,
          1
        );

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setIsReading(false);
        currentSourceRef.current = source;
        source.start();
      } else {
        setIsReading(false);
      }
    } catch (error) {
      console.error("Erro no TTS:", error);
      setIsReading(false);
      // Fallback para voz do sistema se a API falhar
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      window.speechSynthesis.speak(utter);
    }
  };

  const handleAnswer = (answer: AnswerType) => {
    if (currentAnswer) return;
    const isCorrect = answer === currentQuestion.answer;
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, answer, isCorrect }]);
    if (isCorrect && currentIndex < filteredQuestions.length - 1) {
      setTimeout(() => {
        stopAudio();
        setCurrentIndex(c => c + 1);
      }, 1500);
    }
  };

  const ModuleList = () => (
    <div className="space-y-1.5">
      <button 
        onClick={() => { setActiveModule('TODOS'); setCurrentIndex(0); setIsMenuOpen(false); stopAudio(); }}
        className={`w-full text-left p-4 rounded-2xl font-semibold transition-all flex items-center justify-between ${activeModule === 'TODOS' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100'}`}
      >
        <span>Simulado Geral</span>
        <span className="text-[10px] px-2 py-0.5 bg-black/10 rounded-full">230 Q</span>
      </button>
      {Object.values(ModuleType).map(mod => (
        <button 
          key={mod}
          onClick={() => { setActiveModule(mod); setCurrentIndex(0); setIsMenuOpen(false); stopAudio(); }}
          className={`w-full text-left p-4 rounded-2xl font-semibold transition-all flex items-center justify-between ${activeModule === mod ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100'}`}
        >
          <span>{mod}</span>
          <span className="text-[10px] px-2 py-0.5 bg-black/10 rounded-full">{QUESTIONS.filter(q => q.module === mod).length} Q</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-72 lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 p-6 overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">S</div>
          <div>
            <h1 className="font-bold text-sm leading-none uppercase tracking-tighter">SEAS CE</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Simulado Premium</p>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">Navegação</h3>
          <ModuleList />
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase mb-2">
            <span>Progresso</span>
            <span className="text-blue-600">{stats.progress}%</span>
          </div>
          <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-700" style={{ width: `${stats.progress}%` }} />
          </div>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full mt-6 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors">
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-grow flex flex-col items-center overflow-y-auto no-scrollbar relative">
        {/* Mobile Header */}
        <header className="md:hidden w-full h-14 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">S</div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{activeModule}</span>
          </button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-slate-400">
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </header>

        <main className="w-full max-w-3xl px-6 py-8 md:py-16 flex-grow flex flex-col pb-32">
          {!showFinished ? (
            <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-1">Questão {currentIndex + 1}</h2>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{activeModule} • {currentIndex + 1}/{stats.total}</p>
                </div>
                <button 
                  onClick={() => speakWithIA(currentQuestion.text)} 
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm border ${isReading ? 'bg-blue-600 text-white border-blue-600 scale-110' : 'bg-white dark:bg-slate-900 text-slate-400 border-slate-100 dark:border-slate-800'}`}
                >
                  {isReading ? (
                    <div className="flex gap-0.5 items-end h-3">
                      <div className="w-1 bg-current animate-bounce h-2" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 bg-current animate-bounce h-3" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 bg-current animate-bounce h-2" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                  )}
                </button>
              </div>

              <QuizCard 
                question={currentQuestion} 
                onAnswer={handleAnswer} 
                userAnswer={currentAnswer?.answer} 
              />
            </div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center animate-in zoom-in-95">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-2xl shadow-blue-600/30">✓</div>
              <h2 className="text-3xl font-black mb-2">Simulado Finalizado!</h2>
              <p className="text-slate-500 mb-10 text-sm">Parabéns por completar o módulo {activeModule}.</p>
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                <button onClick={() => { setShowFinished(false); setCurrentIndex(0); stopAudio(); }} className="py-4 bg-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg">Reiniciar</button>
                <button onClick={() => { setActiveModule('TODOS'); setShowFinished(false); setCurrentIndex(0); stopAudio(); }} className="py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-xs uppercase tracking-widest">Menu</button>
              </div>
            </div>
          )}
        </main>

        {/* Floating Controls */}
        {!showFinished && (
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl p-2 z-30">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => { setCurrentIndex(c => Math.max(0, c - 1)); stopAudio(); }} 
                disabled={currentIndex === 0}
                className="py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 font-bold text-[10px] uppercase tracking-widest disabled:opacity-20 transition-all"
              >
                Anterior
              </button>
              <button 
                onClick={() => { if (currentIndex === filteredQuestions.length - 1) setShowFinished(true); else setCurrentIndex(c => c + 1); stopAudio(); }}
                className={`py-3.5 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all ${currentAnswer ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}
              >
                {currentIndex === filteredQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-slate-950/40 backdrop-blur-sm animate-in fade-in" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[2.5rem] p-8 pb-12 animate-in slide-in-from-bottom-full duration-400" onClick={e => e.stopPropagation()}>
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-8" />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center">Selecione o Módulo</h3>
            <ModuleList />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;