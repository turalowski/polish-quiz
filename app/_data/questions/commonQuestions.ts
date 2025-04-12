import { Question } from '../../_types';

// Common questions that can be shared across different topics
export const commonQuestions: Question[] = [
  {
    id: 1,
    question: "Jak powiesz 'to be' po polsku?",
    options: [
      "egzystować",
      "być",
      "istnieć",
      "bytować"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Jak powiesz 'to have' po polsku?",
    options: [
      "posiadać",
      "mieć",
      "władać",
      "rozporządzać"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Jak powiesz 'to do' po polsku?",
    options: [
      "wykonywać",
      "czynić",
      "robić",
      "działać"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Jak powiesz 'to say' po polsku?",
    options: [
      "rzec",
      "powiadać",
      "wypowiadać",
      "mówić"
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "Jak powiesz 'to go' po polsku?",
    options: [
      "chodzić",
      "iść",
      "kroczyć",
      "wędrować"
    ],
    correctAnswer: 1
  }
];