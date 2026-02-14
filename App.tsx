import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { QUESTIONS } from './data';
import { ModuleType, AnswerType, UserAnswer, Question } from './types';
import { QuizCard } from './components/QuizCard';

const STORAGE_KEY = 'seas_minimal_v3_persistence';
const PROGRESS_KEY = 'seas_progress_v3';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType | 'TODOS' | 'REVISAO'>(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved).activeModule : 'TODOS';
  });

  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved).currentIndex : 0;
  });

  const [answers, setAnswers] = useState<UserAnswer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).answers : [];
  });
  
  const [isReading, setIsReading] = useState(false);
  const [readingType, setReadingType] = useState<'question' | 'explanation' | null>(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [voiceLoaded, setVoiceLoaded] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const getThalitaVoice = useCallback(() => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find(v => v.name.includes('Thalita')) || 
           voices.find(v => v.lang.includes('pt-BR') && v.name.includes('Natural')) ||
           voices.find(v => v.lang.includes('pt-BR'));
  }, []);

  useEffect(() => {
    const handleVoices = () => {
      if (window.speechSynthesis.getVoices().length > 0) setVoiceLoaded(true);
    };
    window.speechSynthesis.onvoiceschanged = handleVoices;
    handleVoices();
    return () => window.speechSynthesis.cancel();
  }, []);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ activeModule, currentIndex }));
  }, [activeModule, currentIndex]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers }));
  }, [answers]);

  const stopAudio = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setReadingType(null);
    setCurrentCharIndex(-1);
  }, []);

  const speak = useCallback((text: string, type: 'question' | 'explanation', onComplete?: () => void) => {
    stopAudio();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    const thalita = getThalitaVoice();
    if (thalita) utterance.voice = thalita;
    
    utterance.onstart = () => {
      setIsReading(true);
      setReadingType(type);
    };
    
    utterance.onend = () => {
      setIsReading(false);
      setReadingType(null);
      if (onComplete) onComplete();
    };

    utterance.onerror = () => {
      setIsReading(false);
      setReadingType(null);
    };

    utterance.onboundary = (event) => {
      if (event.name === 'word') setCurrentCharIndex(event.charIndex);
    };
    
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    
    // Hack de vitalidade para evitar que o Chrome silencie a voz em textos longos
    const interval = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else clearInterval(interval);
    }, 10000);
  }, [stopAudio, getThalitaVoice]);

  const missedQuestions = useMemo(() => {
    const missedIds = answers.filter(a => !a.isCorrect).map(a => a.questionId);
    return QUESTIONS.filter(q => missedIds.includes(q.id));
  }, [answers]);

  const filteredQuestions = useMemo(() => {
    let q: Question[];
    if (activeModule === 'REVISAO') q = missedQuestions;
    else if (activeModule === 'TODOS') q = QUESTIONS;
    else q = QUESTIONS.filter(item => item.module === activeModule);
    return [...q].sort((a, b) => a.id - b.id);
  }, [activeModule, missedQuestions]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);

  // Auto-leitura da pergunta ao carregar nova questão
  useEffect(() => {
    if (hasInteracted && currentQuestion && !currentAnswer) {
      const t = setTimeout(() => speak(currentQuestion.text, 'question'), 600);
      return () => clearTimeout(t);
    }
  }, [currentIndex, activeModule, hasInteracted, currentQuestion, currentAnswer, speak]);

  const handleAnswer = (answer: AnswerType) => {
    if (currentAnswer && activeModule !== 'REVISAO') return;
    const isCorrect = answer === currentQuestion.answer;
    
    setAnswers(prev => {
      const other = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...other, { questionId: currentQuestion.id, answer, isCorrect }];
    });

    // Lógica de leitura do comentário com callback de finalização
    const explanationText = `Gabarito: ${currentQuestion.answer === AnswerType.CORRETO ? 'Correto' : 'Errado'}. ${currentQuestion.explanation || ''}`;
    
    speak(explanationText, 'explanation', () => {
      // Avança para a próxima questão SOMENTE se a resposta estiver correta e após a Thalita terminar de falar
      if (isCorrect && currentIndex < filteredQuestions.length - 1) {
        // Pequeno delay visual antes de mudar
        setTimeout(() => setCurrentIndex(i => i + 1), 500);
      }
    });
  };

  const changeModule = (mod: ModuleType | 'TODOS' | 'REVISAO') => {
    setActiveModule(mod);
    setCurrentIndex(0);
    setIsMenuOpen(false);
    stopAudio();
  };

  if (!hasInteracted) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex items-center justify-center p-8 z-[100]">
        <div className="max-w-xs w-full text-center space-y-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-24 h-24 bg-blue-600 rounded-[2rem] mx-auto flex items-center justify-center text-4xl shadow-[0_0_60px_rgba(37,99,235,0.2)]">S</div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-white tracking-tighter">SEAS-CE</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Minimalist Series</p>
          </div>
          <button 
            onClick={() => setHasInteracted(true)}
            className="w-full py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Continuar Simulado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-['Inter']">
      <header className="h-24 flex items-center justify-between px-8 z-50">
        <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[8px] font-black group-hover:bg-blue-600 transition-colors">M</div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 hidden sm:block">Filtros</span>
        </button>
        <div className="text-center">
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em] block mb-1">{activeModule}</span>
          <span className="text-[10px] font-bold text-slate-600">{currentIndex + 1} / {filteredQuestions.length || 0}</span>
        </div>
        <button 
          onClick={() => {
            if (currentAnswer) {
              speak(currentQuestion.explanation || "", 'explanation');
            } else {
              speak(currentQuestion?.text || "", 'question');
            }
          }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isReading ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'text-slate-500 hover:text-white'}`}
        >
          {isReading ? <div className="flex gap-1 items-end h-3"><div className="w-1 bg-white animate-pulse h-2"></div><div className="w-1 bg-white animate-pulse h-3"></div><div className="w-1 bg-white animate-pulse h-2"></div></div> : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>}
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-8 max-w-4xl mx-auto w-full">
        {currentQuestion ? (
          <QuizCard 
            question={currentQuestion}
            onAnswer={handleAnswer}
            userAnswer={currentAnswer?.answer}
            isReading={isReading}
            readingType={readingType}
            currentCharIndex={currentCharIndex}
          />
        ) : (
          <div className="text-center animate-in zoom-in duration-500">
            <h2 className="text-4xl font-black mb-6">Módulo Concluído</h2>
            <button onClick={() => changeModule('TODOS')} className="px-12 py-4 bg-blue-600 rounded-full font-black uppercase tracking-widest text-xs">Recomeçar</button>
          </div>
        )}
      </main>

      <footer className="h-32 flex items-center justify-center gap-6">
        <button 
          onClick={() => { setCurrentIndex(i => Math.max(0, i - 1)); stopAudio(); }}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center text-slate-700 disabled:opacity-0 hover:border-slate-700 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={() => { if (currentIndex < filteredQuestions.length - 1) { setCurrentIndex(i => i + 1); stopAudio(); } }}
          disabled={currentIndex >= filteredQuestions.length - 1}
          className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 disabled:opacity-0 hover:text-white hover:border-slate-600 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </footer>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-[#0a0a0a] w-full max-w-sm rounded-[3rem] p-10 space-y-3 shadow-2xl border border-white/5" onClick={e => e.stopPropagation()}>
            <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-8">Selecione o Módulo</h3>
            <button 
              onClick={() => changeModule('REVISAO')}
              disabled={missedQuestions.length === 0}
              className={`w-full p-5 rounded-2xl flex justify-between items-center transition-all ${activeModule === 'REVISAO' ? 'bg-amber-500 text-white' : 'bg-white/5 text-amber-500 disabled:opacity-20'}`}
            >
              <span className="font-bold text-sm">Revisar Erros</span>
              <span className="text-[10px] font-black bg-black/20 px-2 py-1 rounded-lg">{missedQuestions.length}</span>
            </button>
            {['TODOS', ...Object.values(ModuleType)].map(mod => (
              <button 
                key={mod}
                onClick={() => changeModule(mod as any)}
                className={`w-full p-5 rounded-2xl flex justify-between items-center transition-all ${activeModule === mod ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                <span className="font-bold text-sm">{mod === 'TODOS' ? 'Simulado Geral' : mod}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;