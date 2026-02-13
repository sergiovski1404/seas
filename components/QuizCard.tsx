import React from 'react';
import { Question, AnswerType } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
  userAnswer?: AnswerType;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, userAnswer }) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = userAnswer === question.answer;

  return (
    <div className="flex flex-col h-full max-w-3xl">
      <div className="mb-10 lg:mb-14">
        <p className="text-2xl md:text-3xl font-bold leading-[1.35] text-slate-800 dark:text-slate-100 tracking-tight">
          {question.text}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          onClick={() => onAnswer(AnswerType.CORRETO)}
          className={`group flex items-center justify-between px-8 py-6 rounded-[2rem] border-2 transition-all active:scale-[0.97] ${
            isAnswered 
              ? (question.answer === AnswerType.CORRETO ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' : (userAnswer === AnswerType.CORRETO ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-40'))
              : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 text-slate-600 dark:text-slate-300'
          }`}
        >
          <span className="font-black text-sm tracking-widest uppercase">Correto</span>
          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${isAnswered && question.answer === AnswerType.CORRETO ? 'bg-white text-emerald-500' : 'border-slate-200 dark:border-slate-700'}`}>
            {isAnswered && question.answer === AnswerType.CORRETO && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
          </div>
        </button>

        <button 
          onClick={() => onAnswer(AnswerType.ERRADO)}
          className={`group flex items-center justify-between px-8 py-6 rounded-[2rem] border-2 transition-all active:scale-[0.97] ${
            isAnswered 
              ? (question.answer === AnswerType.ERRADO ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' : (userAnswer === AnswerType.ERRADO ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-40'))
              : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 text-slate-600 dark:text-slate-300'
          }`}
        >
          <span className="font-black text-sm tracking-widest uppercase">Errado</span>
          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${isAnswered && question.answer === AnswerType.ERRADO ? 'bg-white text-emerald-500' : 'border-slate-200 dark:border-slate-700'}`}>
            {isAnswered && question.answer === AnswerType.ERRADO && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
          </div>
        </button>
      </div>

      {isAnswered && question.explanation && (
        <div className={`mt-10 p-8 rounded-[2.5rem] border-2 animate-in slide-in-from-top-4 duration-500 ${isCorrect ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-900/30 text-emerald-900 dark:text-emerald-400' : 'bg-rose-50/30 dark:bg-rose-950/10 border-rose-100 dark:border-rose-900/30 text-rose-900 dark:text-rose-400'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-6 rounded-full bg-current opacity-10 flex items-center justify-center">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isCorrect ? 'Análise do Item' : 'Explicação do Erro'}</span>
          </div>
          <p className="text-sm md:text-base font-medium leading-relaxed opacity-90">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};