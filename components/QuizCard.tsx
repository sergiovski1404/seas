
import React from 'react';
import { Question, AnswerType } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
  userAnswer?: AnswerType;
  showExplanation: boolean;
  onSpeak: () => void;
  isReading: boolean;
  isAudioLoading: boolean;
  isAudioCached: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ 
  question, onAnswer, userAnswer, showExplanation, onSpeak, isReading 
}) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = userAnswer === question.answer;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300">
      <div className="p-6 lg:p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-full uppercase tracking-tighter">Questão # {question.id}</span>
          <button 
            onClick={onSpeak}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black transition-all ${isReading ? 'bg-blue-600 text-white shadow-lg animate-pulse' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            {isReading ? 'OUVINDO...' : 'OUVIR QUESTÃO'}
          </button>
        </div>

        <p className="text-slate-800 dark:text-slate-200 text-lg lg:text-xl font-bold leading-relaxed mb-10">
          {question.text}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onAnswer(AnswerType.CORRETO)} 
            className={`py-5 lg:py-6 rounded-2xl border-2 font-black text-sm lg:text-base transition-all active:scale-95 ${
              userAnswer === AnswerType.CORRETO 
                ? (question.answer === AnswerType.CORRETO ? 'bg-emerald-500 border-emerald-600 text-white shadow-lg shadow-emerald-100' : 'bg-rose-500 border-rose-600 text-white shadow-lg shadow-rose-100')
                : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-200 dark:hover:border-emerald-800'
            }`}
          >
            CERTO
          </button>
          <button 
            onClick={() => onAnswer(AnswerType.ERRADO)} 
            className={`py-5 lg:py-6 rounded-2xl border-2 font-black text-sm lg:text-base transition-all active:scale-95 ${
              userAnswer === AnswerType.ERRADO
                ? (question.answer === AnswerType.ERRADO ? 'bg-emerald-500 border-emerald-600 text-white shadow-lg shadow-emerald-100' : 'bg-rose-500 border-rose-600 text-white shadow-lg shadow-rose-100')
                : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:border-rose-200 dark:hover:border-rose-800'
            }`}
          >
            ERRADO
          </button>
        </div>
      </div>

      {isAnswered && (
        <div className={`px-6 py-8 lg:px-10 lg:py-10 border-t-2 animate-in slide-in-from-top-4 duration-500 ${isCorrect ? 'bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-900/30' : 'bg-rose-50/50 dark:bg-rose-950/10 border-rose-100 dark:border-rose-900/30'}`}>
          <div className="flex items-center gap-3 mb-4">
             <div className={`p-1 rounded-full ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'} text-white`}>
                {isCorrect ? <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> : <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/></svg>}
             </div>
             <span className={`text-sm font-black uppercase tracking-widest ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                {isCorrect ? 'Excelente!' : 'Não desanime!'}
             </span>
          </div>
          
          {showExplanation && question.explanation && (
            <div className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-white dark:border-slate-700 shadow-sm">
              <p className="text-sm lg:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium italic">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
