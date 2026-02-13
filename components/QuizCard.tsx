
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
  question, onAnswer, userAnswer, showExplanation, onSpeak, isReading, isAudioLoading, isAudioCached 
}) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = userAnswer === question.answer;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">Q{question.id}</span>
          <button 
            onClick={onSpeak}
            disabled={isAudioLoading && !isAudioCached}
            className={`p-1.5 rounded-full transition-all ${isReading ? 'bg-blue-600 text-white animate-pulse' : 'bg-blue-50 text-blue-600'}`}
          >
            {isReading ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            )}
          </button>
        </div>
        {isAudioLoading && <span className="text-[8px] font-bold text-blue-400 animate-pulse uppercase">Preparando áudio...</span>}
      </div>

      <p className="text-slate-800 text-sm sm:text-base font-medium leading-snug">
        {question.text}
      </p>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <button 
          onClick={() => onAnswer(AnswerType.CORRETO)} 
          className={`py-3 rounded-lg border-2 font-bold text-sm transition-all active:scale-95 ${
            userAnswer === AnswerType.CORRETO 
              ? (question.answer === AnswerType.CORRETO ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-rose-500 border-rose-600 text-white')
              : 'border-emerald-100 bg-emerald-50 text-emerald-700'
          }`}
          disabled={isAnswered && isCorrect} // Prevent re-answering if already correct
        >
          CORRETO
        </button>
        <button 
          onClick={() => onAnswer(AnswerType.ERRADO)} 
          className={`py-3 rounded-lg border-2 font-bold text-sm transition-all active:scale-95 ${
            userAnswer === AnswerType.ERRADO
              ? (question.answer === AnswerType.ERRADO ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-rose-500 border-rose-600 text-white')
              : 'border-rose-100 bg-rose-50 text-rose-700'
          }`}
          disabled={isAnswered && isCorrect} // Prevent re-answering if already correct
        >
          ERRADO
        </button>
      </div>

      {isAnswered && (
        <div className={`p-3 rounded-lg border flex flex-col gap-2 animate-in fade-in slide-in-from-top-1 ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-black uppercase ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
              {isCorrect ? '✓ Acertou' : '✕ Incorreto'}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">Gabarito: {question.answer}</span>
          </div>
          
          {showExplanation && question.explanation && (
            <div className="pt-2 border-t border-slate-200">
              <p className="text-[11px] leading-tight text-slate-600 italic">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
