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
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100">
          {question.text}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
        <button 
          onClick={() => onAnswer(AnswerType.CORRETO)}
          disabled={isAnswered}
          className={`flex items-center justify-between px-8 py-5 rounded-2xl border-2 transition-all active:scale-95 ${
            isAnswered 
              ? (question.answer === AnswerType.CORRETO ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : (userAnswer === AnswerType.CORRETO ? 'bg-rose-500 border-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-40'))
              : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-300'
          }`}
        >
          <span className="font-bold text-xs tracking-widest uppercase">Correto</span>
          {isAnswered && question.answer === AnswerType.CORRETO && <span>✓</span>}
        </button>

        <button 
          onClick={() => onAnswer(AnswerType.ERRADO)}
          disabled={isAnswered}
          className={`flex items-center justify-between px-8 py-5 rounded-2xl border-2 transition-all active:scale-95 ${
            isAnswered 
              ? (question.answer === AnswerType.ERRADO ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : (userAnswer === AnswerType.ERRADO ? 'bg-rose-500 border-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-40'))
              : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-300'
          }`}
        >
          <span className="font-bold text-xs tracking-widest uppercase">Errado</span>
          {isAnswered && question.answer === AnswerType.ERRADO && <span>✓</span>}
        </button>
      </div>

      {isAnswered && question.explanation && (
        <div className={`mt-8 p-6 rounded-3xl border animate-in slide-in-from-top-4 duration-500 ${isCorrect ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30 text-emerald-900 dark:text-emerald-400' : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30 text-rose-900 dark:text-rose-400'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Gabarito Comentado</span>
          </div>
          <p className="text-sm md:text-base font-medium leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};