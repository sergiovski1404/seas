
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { QUESTIONS } from './data.ts';
import { ModuleType, AnswerType, UserAnswer, Question } from './types.ts';
import { QuizCard } from './components/QuizCard.tsx';

const STORAGE_KEY = 'seas_ce_app_data_v4';
const THEME_KEY = 'seas_ce_theme_v4';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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
  const [explanationEnabled, setExplanationEnabled] = useState(true);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handler = (e: any) => { 
      e.preventDefault(); 
      setDeferredPrompt(e); 
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setDeferredPrompt(null);
  };

  const filteredQuestions = useMemo(() => {
    if (isReviewMode) {
      const wrongIds = answers.filter(a => !a.isCorrect).map(a => a.questionId);
      return wrongIds.map(id => QUESTIONS.find(q => q.id === id)).filter((q): q is Question => !!q);
    }
    const q = activeModule === 'TODOS' ? QUESTIONS : QUESTIONS.filter(q => q.module === activeModule);
    return [...q].sort((a, b) => a.id - b.id);
  }, [activeModule, isReviewMode, answers]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentAnswer = useMemo(() => answers.find(a => a.questionId === currentQuestion?.id), [answers, currentQuestion]);

  const stats = useMemo(() => {
    const relevantQ = isReviewMode ? filteredQuestions : (activeModule === 'TODOS' ? QUESTIONS : QUESTIONS.filter(q => q.module === activeModule));
    const relevantA = answers.filter(a => relevantQ.some(q => q.id === a.questionId));
    const correct = relevantA.filter(a => a.isCorrect).length;
    const progress = Math.round((relevantA.length / (relevantQ.length || 1)) * 100);
    return { correct, wrong: relevantA.length - correct, progress, total: relevantQ.length };
  }, [answers, filteredQuestions, activeModule, isReviewMode]);

  // Cálculo de precisão por módulo para a sidebar
  const moduleStats = useMemo(() => {
    const results: Record<string, number> = {};
    
    // Geral
    const totalCorrect = answers.filter(a => a.isCorrect).length;
    results['TODOS'] = Math.round((totalCorrect / QUESTIONS.length) * 100);

    // Por módulo
    Object.values(ModuleType).forEach(mod => {
      const modQuestions = QUESTIONS.filter(q => q.module === mod);
      const modAnswers = answers.filter(a => modQuestions.some(q => q.id === a.questionId) && a.isCorrect);
      results[mod] = Math.round((modAnswers.length / modQuestions.length) * 100);
    });

    return results;
  }, [answers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeModule, answers, explanationEnabled }));
  }, [activeModule, answers, explanationEnabled]);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-BR';
    utter.rate = 1.0;
    
    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => (v.name.includes('Microsoft') || v.name.includes('Neural')) && v.lang.includes('pt-BR')) 
                 || voices.find(v => v.lang.includes('pt-BR'));
      if (voice) utter.voice = voice;
      window.speechSynthesis.speak(utter);
    };

    utter.onstart = () => setIsReading(true);
    utter.onend = () => setIsReading(false);
    utter.onerror = () => setIsReading(false);

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    } else {
      setVoiceAndSpeak();
    }
  }, []);

  const handleSpeak = (q: Question) => {
    if (isReading) { 
      window.speechSynthesis.cancel(); 
      setIsReading(false); 
      return; 
    }
    speak(`${q.text}. Dica: ${q.explanation || ''}`);
  };

  const handleAnswer = (answer: AnswerType) => {
    if (!currentQuestion || currentAnswer) return;
    const isCorrect = answer === currentQuestion.answer;
    setAnswers(prev => [...prev.filter(a => a.questionId !== currentQuestion.id), { questionId: currentQuestion.id, answer, isCorrect }]);
  };

  const startReview = () => {
    setIsReviewMode(true);
    setCurrentIndex(0);
    setShowFinished(false);
  };

  const reset = () => {
    if (confirm("Deseja realmente resetar seu progresso neste módulo?")) {
      const qIds = filteredQuestions.map(q => q.id);
      setAnswers(prev => prev.filter(a => !qIds.includes(a.questionId)));
      setCurrentIndex(0);
      setShowFinished(false);
      setIsReviewMode(false);
    }
  };

  const getAccuracyColor = (accuracy: number, active: boolean) => {
    if (active) return 'bg-white/20 text-white';
    if (accuracy >= 80) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400';
    if (accuracy >= 50) return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400';
    return 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400';
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-100 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      {/* Sidebar / Header */}
      <aside className="lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 lg:h-screen lg:sticky lg:top-0 z-40 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-lg font-black dark:text-white uppercase tracking-tighter">SEAS Quiz</h1>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            title="Alternar Tema"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 3.636l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {deferredPrompt && (
          <div className="p-4">
            <button 
              onClick={handleInstall} 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Instalar App
            </button>
          </div>
        )}

        <nav className="p-4 flex-grow overflow-y-auto no-scrollbar">
          {/* SIMULADO GERAL */}
          <div className="mb-6">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Geral</h2>
            <button 
              onClick={() => { setActiveModule('TODOS'); setCurrentIndex(0); setShowFinished(false); setIsReviewMode(false); }} 
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${activeModule === 'TODOS' && !isReviewMode ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              <span className="text-sm font-bold truncate pr-2">Simulado Completo</span>
              <div className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeModule === 'TODOS' ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600'}`}>
                {moduleStats['TODOS']}%
              </div>
            </button>
          </div>

          {/* PROGRESSO POR MÓDULO */}
          <div>
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Progresso por Módulo</h2>
            <div className="space-y-1.5">
              {Object.values(ModuleType).map(mod => {
                const accuracy = moduleStats[mod] || 0;
                const isActive = activeModule === mod && !isReviewMode;
                
                return (
                  <button 
                    key={mod} 
                    onClick={() => { setActiveModule(mod); setCurrentIndex(0); setShowFinished(false); setIsReviewMode(false); }} 
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="text-sm font-bold truncate pr-2">{mod}</span>
                    <div className={`text-[10px] font-black px-2 py-0.5 rounded-md transition-colors ${getAccuracyColor(accuracy, isActive)}`}>
                      {accuracy}%
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase mb-2">
            <span>Aproveitamento do Módulo</span>
            <span className="text-blue-600 dark:text-blue-400 font-black">{stats.progress}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full transition-all duration-500" style={{width: `${stats.progress}%`}}></div>
          </div>
          <button 
            onClick={reset} 
            className="w-full mt-4 text-[9px] font-black text-rose-500 uppercase tracking-widest hover:underline text-center"
          >
            Limpar Módulo Atual
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-4 lg:p-12 items-center justify-center">
        {!showFinished ? (
          <div className="w-full max-w-3xl">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
                  {isReviewMode ? 'Revisão' : `Questão ${currentIndex + 1}`}
                </h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  {isReviewMode ? 'Focando nos seus erros' : `${activeModule === 'TODOS' ? 'Simulado Geral' : activeModule} — ${currentIndex + 1} de ${filteredQuestions.length}`}
                </p>
              </div>
              <button 
                onClick={() => setExplanationEnabled(!explanationEnabled)} 
                className={`px-4 py-2 rounded-lg text-[10px] font-black border transition-all ${explanationEnabled ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800'}`}
              >
                EXPLICAÇÃO {explanationEnabled ? 'ON' : 'OFF'}
              </button>
            </div>

            {currentQuestion ? (
              <QuizCard 
                question={currentQuestion} 
                onAnswer={handleAnswer} 
                userAnswer={currentAnswer?.answer} 
                showExplanation={explanationEnabled} 
                onSpeak={() => handleSpeak(currentQuestion)} 
                isReading={isReading}
                isAudioLoading={false}
                isAudioCached={false}
              />
            ) : (
               <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 font-bold">Nenhuma questão disponível para este critério.</p>
                  <button onClick={() => {setIsReviewMode(false); setCurrentIndex(0);}} className="mt-4 text-blue-600 font-black uppercase text-xs">Voltar ao simulado</button>
               </div>
            )}

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button 
                onClick={() => { setCurrentIndex(c => Math.max(0, c - 1)); window.speechSynthesis.cancel(); }} 
                disabled={currentIndex === 0} 
                className="py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 rounded-2xl font-black text-sm disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 shadow-sm"
              >
                ANTERIOR
              </button>
              <button 
                onClick={() => { 
                  if (currentIndex === filteredQuestions.length - 1) setShowFinished(true); 
                  else setCurrentIndex(c => c + 1);
                  window.speechSynthesis.cancel();
                }} 
                disabled={!currentAnswer} 
                className={`py-5 text-white rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95 ${currentAnswer ? 'bg-blue-600 shadow-blue-200 dark:shadow-none hover:bg-blue-700' : 'bg-slate-300 dark:bg-slate-800 text-slate-400'}`}
              >
                {currentIndex === filteredQuestions.length - 1 ? 'CONCLUIR' : 'PRÓXIMA'}
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl text-center border border-slate-100 dark:border-slate-800 animate-in zoom-in-95">
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200 dark:shadow-none">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Parabéns!</h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">Você concluiu o módulo {activeModule}</p>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/30">
                <p className="text-emerald-600 dark:text-emerald-400 text-4xl font-black">{stats.correct}</p>
                <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-500 uppercase tracking-widest mt-1">Acertos</p>
              </div>
              <div className="bg-rose-50 dark:bg-rose-950/20 p-6 rounded-3xl border border-rose-100 dark:border-rose-900/30">
                <p className="text-rose-600 dark:text-rose-400 text-4xl font-black">{stats.wrong}</p>
                <p className="text-[10px] font-bold text-rose-800 dark:text-rose-500 uppercase tracking-widest mt-1">Erros</p>
              </div>
            </div>
            <div className="space-y-3">
              {stats.wrong > 0 && (
                <button 
                  onClick={startReview} 
                  className="w-full py-5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg transition-all active:scale-95"
                >
                  Revisar Apenas Erros
                </button>
              )}
              <button 
                onClick={() => { setShowFinished(false); setCurrentIndex(0); setIsReviewMode(false); }} 
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg transition-all active:scale-95"
              >
                Novo Simulado
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
