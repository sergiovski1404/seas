
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { QUESTIONS } from './data.ts';
import { ModuleType, AnswerType, UserAnswer, Question } from './types.ts';
import { QuizCard } from './components/QuizCard.tsx';

const STORAGE_KEY = 'seas_ce_quiz_progress_v2';

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
  const [isReading, setIsReading] = useState(false);
  const [isOffline] = useState(!navigator.onLine);

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
    return { correct, wrong: relevantAnswers.length - correct, progress };
  }, [answers, filteredQuestions, activeModule, isReviewMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeModule, answers, explanationEnabled }));
  }, [activeModule, answers, explanationEnabled]);

  // Função para usar a Voz Gratuita do Sistema (Microsoft Edge / Google)
  const speakNative = (text: string) => {
    window.speechSynthesis.cancel(); // Para qualquer fala anterior
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.1;
    
    // Tenta encontrar uma voz feminina/humana melhor (Microsoft Maria ou Google)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      (v.name.includes('Maria') || v.name.includes('Francisca') || v.name.includes('Neural')) && v.lang.includes('pt-BR')
    ) || voices.find(v => v.lang.includes('pt-BR'));
    
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak = (q: Question) => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    speakNative(q.text);
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
    window.speechSynthesis.cancel();
    setIsReading(false);
    if (currentIndex < filteredQuestions.length - 1) setCurrentIndex(prev => prev + 1);
    else setShowFinished(true);
  };

  const startReview = () => {
    setIsReviewMode(true);
    setCurrentIndex(0);
    setShowFinished(false);
    setExplanationEnabled(true);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setShowFinished(false);
    setIsReviewMode(false);
    setExplanationEnabled(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 max-w-md mx-auto relative shadow-2xl border-x border-slate-200">
      <header className={`bg-white border-b px-3 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${isReviewMode ? 'border-b-amber-200 bg-amber-50/50' : ''}`}>
        <div className="flex items-center gap-2">
          <div className={`${isReviewMode ? 'bg-amber-600' : 'bg-blue-600'} p-1.5 rounded-lg`}>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h1 className="text-sm font-black text-slate-900 uppercase tracking-tighter">
            {isReviewMode ? 'Modo Revisão' : 'SEAS-CE'}
          </h1>
        </div>
        <button 
          onClick={() => setExplanationEnabled(!explanationEnabled)}
          className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${explanationEnabled ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-400 border-slate-200'}`}
        >
          {explanationEnabled ? 'DICA ATIVA' : 'VER DICA'}
        </button>
      </header>

      <div className="w-full bg-slate-200 h-1.5">
        <div className={`${isReviewMode ? 'bg-amber-500' : 'bg-blue-600'} h-full transition-all duration-700 ease-out`} style={{ width: `${stats.progress}%` }}></div>
      </div>

      <main className="flex-grow p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar">
        {!showFinished ? (
          <>
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>{isReviewMode ? 'Revisando Erros' : activeModule} • {currentIndex + 1}/{(filteredQuestions.length || 1)}</span>
              <div className="flex gap-2">
                <span className="text-emerald-500">C: {stats.correct}</span>
                <span className="text-rose-500">E: {stats.wrong}</span>
              </div>
            </div>

            {!isReviewMode && (
              <div className="overflow-x-auto no-scrollbar flex gap-2 pb-1">
                {['TODOS', ...Object.values(ModuleType)].map((mod) => (
                  <button
                    key={mod}
                    onClick={() => { setActiveModule(mod as any); setCurrentIndex(0); setAnswers([]); }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-black transition-all ${activeModule === mod ? 'bg-slate-900 text-white shadow-lg scale-105' : 'bg-white text-slate-400 border border-slate-200'}`}
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
                isAudioLoading={false}
                isAudioCached={true}
              />
            ) : (
              <div className="text-center p-12 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-bold uppercase text-xs">Nenhuma questão encontrada</p>
              </div>
            )}

            <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
              <button 
                onClick={() => { if(currentIndex > 0) setCurrentIndex(v => v-1); }}
                disabled={currentIndex === 0}
                className="py-4 rounded-2xl bg-white border border-slate-200 text-slate-500 font-black text-xs active:scale-95 disabled:opacity-30 transition-all"
              >
                ANTERIOR
              </button>
              <button 
                onClick={next}
                disabled={!currentAnswer}
                className={`py-4 rounded-2xl font-black text-xs text-white shadow-xl transition-all active:scale-95 ${currentAnswer ? (isReviewMode ? 'bg-amber-600' : 'bg-blue-600') : 'bg-slate-300'}`}
              >
                {currentIndex === filteredQuestions.length - 1 ? 'RESULTADO' : 'PRÓXIMA'}
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
            <div className={`w-20 h-20 ${isReviewMode ? 'bg-amber-600' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center mb-6 shadow-2xl ring-8 ring-blue-50`}>
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Parabéns!</h2>
            <div className="bg-white w-full p-8 rounded-3xl border border-slate-100 mb-8 shadow-sm">
              <div className="text-5xl font-black text-slate-900 mb-2">{Math.round((stats.correct/(filteredQuestions.length || 1))*100)}%</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aproveitamento Final</p>
              
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-50">
                <div>
                  <div className="text-emerald-500 font-black text-2xl">{stats.correct}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Acertos</div>
                </div>
                <div>
                  <div className="text-rose-500 font-black text-2xl">{stats.wrong}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Erros</div>
                </div>
              </div>
            </div>
            
            <div className="w-full space-y-3">
              {stats.wrong > 0 && !isReviewMode && (
                <button onClick={startReview} className="w-full bg-amber-500 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all">
                  Revisar Erros ({stats.wrong})
                </button>
              )}
              <button onClick={resetQuiz} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all">
                Novo Simulado
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-4 text-center border-t bg-white">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Professor Robson Sousa</p>
      </footer>
    </div>
  );
};

export default App;
