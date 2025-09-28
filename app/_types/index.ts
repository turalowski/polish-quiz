export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizSet {
  id: number;
  name: string;
  questions: Question[];
} 