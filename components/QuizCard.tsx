import React, { useMemo } from 'react';
import { Question, AnswerType } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
  userAnswer?: AnswerType;
  isReading: boolean;
  readingType: 'question' | 'explanation' | null;
  currentCharIndex: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  onAnswer, 
  userAnswer, 
  isReading,
  readingType,
  currentCharIndex 
}) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = userAnswer === question.answer;

  const questionWords = useMemo(() => {
    const arr: { text: string; start: number; end: number }[] = [];
    let pos = 0;
    const parts = question.text.split(/(\s+)/);
    parts.forEach(part => {
      arr.push({ text: part, start: pos, end: pos + part.length });
      pos += part.length;
    });
    return arr;
  }, [question.text]);

  const explanationWords = useMemo(() => {
    if (!question.explanation) return [];
    // Adicionamos o prefixo "Gabarito: Correto. " ou "Gabarito: Errado. " para alinhar com o áudio
    const prefix = `Gabarito: ${question.answer === AnswerType.CORRETO ? 'Correto' : 'Errado'}. `;
    const fullText = prefix + question.explanation;
    const arr: { text: string; start: number; end: number }[] = [];
    let pos = 0;
    const parts = fullText.split(/(\s+)/);
    parts.forEach(part => {
      arr.push({ text: part, start: pos, end: pos + part.length });
      pos += part.length;
    });
    return arr;
  }, [question.explanation, question.answer]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Texto da Questão com Realce */}
      <div className="mb-20 text-center relative px-4">
        <p className="text-xl md:text-3xl font-semibold leading-[1.7] tracking-tight">
          {questionWords.map((w, idx) => {
            const active = isReading && readingType === 'question' && currentCharIndex >= w.start && currentCharIndex < w.end;
            return (
              <span 
                key={idx} 
                className={`transition-all duration-200 rounded px-0.5 ${
                  active 
                    ? 'text-blue-500 bg-blue-500/10' 
                    : (isReading && readingType === 'question') ? 'opacity-30' : 'opacity-90'
                }`}
              >
                {w.text}
              </span>
            );
          })}
        </p>
      </div>

      {/* Botões de Resposta Minimalistas */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12">
        <button 
          onClick={() => onAnswer(AnswerType.CORRETO)}
          disabled={isAnswered}
          className={`py-8 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] transition-all ${
            isAnswered 
              ? (question.answer === AnswerType.CORRETO ? 'bg-emerald-500 text-white' : (userAnswer === AnswerType.CORRETO ? 'bg-rose-500 text-white' : 'bg-white/5 opacity-10'))
              : 'bg-white/5 hover:bg-white/10 text-white/40 hover:text-white'
          }`}
        >
          Correto
        </button>

        <button 
          onClick={() => onAnswer(AnswerType.ERRADO)}
          disabled={isAnswered}
          className={`py-8 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] transition-all ${
            isAnswered 
              ? (question.answer === AnswerType.ERRADO ? 'bg-emerald-500 text-white' : (userAnswer === AnswerType.ERRADO ? 'bg-rose-500 text-white' : 'bg-white/5 opacity-10'))
              : 'bg-white/5 hover:bg-white/10 text-white/40 hover:text-white'
          }`}
        >
          Errado
        </button>
      </div>

      {/* Comentário com Realce de Leitura */}
      {isAnswered && (
        <div className={`p-8 rounded-[2.5rem] border animate-in slide-in-from-bottom-6 duration-700 w-full ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-100/70' : 'bg-rose-500/5 border-rose-500/10 text-rose-100/70'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-2 h-2 rounded-full ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50">Explicação do Professor</span>
          </div>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            {explanationWords.map((w, idx) => {
              const active = isReading && readingType === 'explanation' && currentCharIndex >= w.start && currentCharIndex < w.end;
              return (
                <span 
                  key={idx} 
                  className={`transition-all duration-200 rounded px-0.5 ${
                    active 
                      ? 'text-white bg-blue-600/40 shadow-sm' 
                      : (isReading && readingType === 'explanation') ? 'opacity-30' : 'opacity-100'
                  }`}
                >
                  {w.text}
                </span>
              );
            })}
          </p>
        </div>
      )}
    </div>
  );
};