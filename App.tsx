import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { QUESTIONS } from './data';
import { ModuleType, AnswerType, UserAnswer, Question } from './types';
import { QuizCard } from './components/QuizCard';

const STORAGE_KEY = 'seas_ce_v6_hybrid';

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
    return { correct, wrong: moduleAs.length - correct, progress, total: moduleQs.length, answered: moduleAs.length };
  }, [answers, filteredQuestions]);

  const handleAnswer = (answer: AnswerType) => {
    if (currentAnswer) return;
    const isCorrect = answer === currentQuestion.answer;
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, answer, isCorrect }]);
    
    if (isCorrect && currentIndex < filteredQuestions.length - 1) {
      setTimeout(() => setCurrentIndex(c => c + 1), 1200);
    }
  };

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-BR';
    utter.onstart = () => setIsReading(true);
    utter.onend = () => setIsReading(false);
    window.speechSynthesis.speak(utter);
  }, []);

  const ModuleList = () => (
    <div className="space-y-1.5">
      <button 
        onClick={() => { setActiveModule('TODOS'); setCurrentIndex(0); setIsMenuOpen(false); }}
        className={`w-full text-left p-4 rounded-2xl font-semibold transition-all flex items-center justify-between ${activeModule === 'TODOS' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
      >
        <span>Simulado Completo</span>
        <span className="text-[10px] opacity-60">230 Q</span>
      </button>
      {Object.values(ModuleType).map(mod => (
        <button 
          key={mod}
          onClick={() => { setActiveModule(mod); setCurrentIndex(0); setIsMenuOpen(false); }}
          className={`w-full text-left p-4 rounded-2xl font-semibold transition-all flex items-center justify-between ${activeModule === mod ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
        >
          <span>{mod}</span>
          <span className="text-[10px] opacity-60">{QUESTIONS.filter(q => q.module === mod).length} Q</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-72 lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 p-6 overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">S</div>
          <div>
            <h1 className="font-black text-sm tracking-tight uppercase">SEAS CE</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Socioeducação</p>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-2">Conteúdo</h3>
          <ModuleList />
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase mb-2">
            <span>Progresso Geral</span>
            <span className="text-blue-600">{stats.progress}%</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-700" style={{ width: `${stats.progress}%` }} />
          </div>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full mt-6 py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col items-center">
        {/* Mobile Header */}
        <header className="md:hidden w-full h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">S</div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{activeModule}</span>
          </button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-slate-400">
            {isDarkMode ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 3.636l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg> : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          </button>
        </header>

        {/* Question Content */}
        <main className="w-full max-w-4xl px-6 py-8 md:py-16 flex-grow flex flex-col pb-32">
          {!showFinished ? (
            <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-1">Questão {currentIndex + 1}</h2>
                  <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{activeModule} — {currentIndex + 1} de {filteredQuestions.length}</p>
                </div>
                <button 
                  onClick={() => speak(currentQuestion.text)} 
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isReading ? 'bg-blue-600 text-white animate-pulse' : 'bg-white dark:bg-slate-900 text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800'}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                </button>
              </div>

              <QuizCard 
                question={currentQuestion} 
                onAnswer={handleAnswer} 
                userAnswer={currentAnswer?.answer} 
              />
            </div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95">
              <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl shadow-blue-600/30">✓</div>
              <h2 className="text-4xl font-black mb-3 tracking-tight">Excelente trabalho!</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-sm">Você concluiu este módulo com sucesso. {stats.correct} acertos de {stats.total} questões.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                <button 
                  onClick={() => { setShowFinished(false); setCurrentIndex(0); }} 
                  className="py-5 bg-blue-600 text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-transform active:scale-95 shadow-xl shadow-blue-600/20"
                >
                  Reiniciar Módulo
                </button>
                <button 
                  onClick={() => { setActiveModule('TODOS'); setShowFinished(false); setCurrentIndex(0); }} 
                  className="py-5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 rounded-3xl font-black text-sm uppercase tracking-widest transition-transform active:scale-95 shadow-sm"
                >
                  Voltar ao Início
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Navigation Floating Bar */}
        {!showFinished && (
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-2xl p-2 z-30">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => { setCurrentIndex(c => Math.max(0, c - 1)); window.speechSynthesis.cancel(); }} 
                disabled={currentIndex === 0}
                className="py-4 rounded-[2rem] bg-slate-50 dark:bg-slate-800 text-slate-500 font-black text-[10px] uppercase tracking-widest disabled:opacity-20 transition-all hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Anterior
              </button>
              <button 
                onClick={() => { if (currentIndex === filteredQuestions.length - 1) setShowFinished(true); else setCurrentIndex(c => c + 1); window.speechSynthesis.cancel(); }}
                className={`py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all ${currentAnswer ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}
              >
                {currentIndex === filteredQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[3rem] p-10 pb-16 animate-in slide-in-from-bottom-full duration-500" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto mb-10" />
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">Selecione o Módulo</h3>
            <ModuleList />
            <button 
              onClick={() => { if(confirm("Deseja resetar todo o progresso?")) setAnswers([]); setIsMenuOpen(false); }}
              className="w-full mt-10 py-4 text-rose-500 font-bold text-xs uppercase tracking-widest border border-rose-100 dark:border-rose-900/30 rounded-2xl"
            >
              Resetar Progresso
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;