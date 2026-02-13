
export enum AnswerType {
  CORRETO = 'CORRETO',
  ERRADO = 'ERRADO'
}

export enum ModuleType {
  MODULO_I = 'Módulo I',
  MODULO_II = 'Módulo II',
  MODULO_III = 'Módulo III',
  MODULO_IV = 'Módulo IV'
}

export interface Question {
  id: number;
  text: string;
  answer: AnswerType;
  explanation?: string;
  module: ModuleType;
}

export interface UserAnswer {
  questionId: number;
  answer: AnswerType;
  isCorrect: boolean;
}
