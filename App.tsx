
import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS } from './data.ts';
import { ModuleType, AnswerType, UserAnswer, Question } from './types.ts';
import { QuizCard } from './components/QuizCard.tsx';

const STORAGE_KEY = 'seas_ce_quiz_v3_pc';

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
  const [explanationEnabled, setExplanationEnabled] = useState(true);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isReading, setIsReading] = useState(false);

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
    const total = relevantQuestions.length || 1;
    const progress = Math.round((relevantAnswers.length / total) * 100) || 0;
    return { correct, wrong: relevantAnswers.length - correct, progress, total: relevantQuestions.length, answered: relevantAnswers.length };
  }, [answers, filteredQuestions, activeModule, isReviewMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeModule, answers, explanationEnabled }));
  }, [activeModule, answers, explanationEnabled]);

  // Função para Voz Humana Gratuita (Microsoft/Google)
  const speakNative = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    
    // Busca vozes "Microsoft" ou "Neural" no sistema
    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(v => 
      (v.name.includes('Microsoft') || v.name.includes('Neural') || v.name.includes('Google')) && v.lang.includes('pt-BR')
    ) || voices.find(v => v.lang.includes('pt-BR'));
    
    if (premiumVoice) utterance.voice = premiumVoice;

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
  };

  const resetQuiz = () => {
    if(confirm("Deseja reiniciar este módulo? Todo o progresso dele será perdido.")) {
      setAnswers(prev => prev.filter(a => !filteredQuestions.some(q => q.id === a.questionId)));
      setCurrentIndex(0);
      setShowFinished(false);
      setIsReviewMode(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-100 font-sans selection:bg-blue-100">
      {/* Sidebar Desktop / Header Mobile */}
      <aside className="lg:w-80 bg-white border-r border-slate-200 lg:sticky lg:top-0 lg:h-screen flex flex-col z-40 shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-100">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 tracking-tighter uppercase leading-none">SEAS-CE</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Simulado Interativo</p>
          </div>
        </div>

        {/* Estatísticas na Sidebar (Desktop) */}
        <div className="hidden lg:block p-6 bg-slate-50/50">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Seu Desempenho</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-[11px] font-bold mb-1">
                <span className="text-slate-500 uppercase">Progresso</span>
                <span className="text-blue-600">{stats.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full transition-all duration-1000" style={{ width: `${stats.progress}%` }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-3 rounded-xl border border-slate-100">
                <p className="text-emerald-600 font-black text-xl">{stats.correct}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase">Acertos</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-100">
                <p className="text-rose-500 font-black text-xl">{stats.wrong}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase">Erros</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seleção de Módulos */}
        <nav className="p-4 flex-grow overflow-y-auto no-scrollbar">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Módulos</h2>
          <div className="space-y-1">
            {['TODOS', ...Object.values(ModuleType)].map((mod) => (
              <button
                key={mod}
                onClick={() => { setActiveModule(mod as any); setCurrentIndex(0); setShowFinished(false); setIsReviewMode(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${activeModule === mod ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <span>{mod === 'TODOS' ? 'Simulado Geral' : mod}</span>
                {activeModule === mod && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50/30">
           <button onClick={resetQuiz} className="w-full py-3 rounded-xl text-[10px] font-black text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest">
              Reiniciar Módulo
           </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-grow flex flex-col relative min-h-screen">
        {/* Header Mobile Only */}
        <header className="lg:hidden bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
           <span className="text-sm font-black text-slate-900">{activeModule === 'TODOS' ? 'Geral' : activeModule}</span>
           <div className="flex gap-2">
              <span className="text-[10px] font-black text-emerald-600">C: {stats.correct}</span>
              <span className="text-[10px] font-black text-rose-500">E: {stats.wrong}</span>
           </div>
        </header>

        {/* Barra de Progresso Mobile */}
        <div className="lg:hidden w-full h-1 bg-slate-100">
           <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${stats.progress}%` }}></div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-4 lg:p-12">
          {!showFinished ? (
            <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">Questão {currentIndex + 1}</h2>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">De {filteredQuestions.length} questões no total</p>
                </div>
                <button 
                  onClick={() => setExplanationEnabled(!explanationEnabled)}
                  className={`px-4 py-2 rounded-full text-[10px] font-black transition-all border ${explanationEnabled ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400'}`}
                >
                  DICA {explanationEnabled ? 'ON' : 'OFF'}
                </button>
              </div>

              {currentQuestion && (
                <QuizCard 
                  question={currentQuestion} 
                  onAnswer={handleAnswer}
                  userAnswer={currentAnswer?.answer}
                  showExplanation={explanationEnabled}
                  onSpeak={() => handleSpeak(currentQuestion)}
                  isReading={isReading}
                  isAudioLoading={false}
                  isAudioCached={true}
                />
              )}

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button 
                  onClick={() => { if(currentIndex > 0) setCurrentIndex(v => v-1); window.speechSynthesis.cancel(); }}
                  disabled={currentIndex === 0}
                  className="py-5 rounded-2xl bg-white border border-slate-200 text-slate-500 font-black text-sm hover:bg-slate-50 disabled:opacity-30 transition-all shadow-sm active:scale-95"
                >
                  VOLTAR
                </button>
                <button 
                  onClick={next}
                  disabled={!currentAnswer}
                  className={`py-5 rounded-2xl font-black text-sm text-white shadow-xl shadow-blue-100 transition-all active:scale-95 ${currentAnswer ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-300'}`}
                >
                  {currentIndex === filteredQuestions.length - 1 ? 'CONCLUIR' : 'PRÓXIMA'}
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-lg bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 text-center animate-in zoom-in-95 duration-500 border border-slate-100">
               <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
               </div>
               <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Resultados</h2>
               <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Módulo: {activeModule}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                     <p className="text-emerald-600 text-4xl font-black">{stats.correct}</p>
                     <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest mt-1">Acertos</p>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
                     <p className="text-rose-600 text-4xl font-black">{stats.wrong}</p>
                     <p className="text-[10px] font-bold text-rose-800 uppercase tracking-widest mt-1">Erros</p>
                  </div>
               </div>

               <div className="space-y-3">
                  {stats.wrong > 0 && (
                    <button onClick={startReview} className="w-full py-5 rounded-2xl bg-amber-500 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-amber-100 active:scale-95 transition-all">
                      Revisar Erros
                    </button>
                  )}
                  <button onClick={() => { setShowFinished(false); setCurrentIndex(0); setIsReviewMode(false); }} className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-blue-100 active:scale-95 transition-all">
                    Tentar Novamente
                  </button>
               </div>
            </div>
          )}
        </div>
        
        <footer className="p-6 text-center lg:text-right">
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Professor Robson Sousa • Socioeducação</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
