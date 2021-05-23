export type Option = {
  text: any;
  isRight: boolean;
};

export type Question = {
  question: string;
  points: number;
  options: Option[];
};

export type Quiz = {
  quizName: string;
  id: number;
  questions: Question[];
};
export type QuizOne = Quiz[];
