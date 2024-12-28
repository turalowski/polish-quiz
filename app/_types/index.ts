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

export interface Topic {
  id: number;
  name: string;
  quizSets: QuizSet[];
} 