import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 1,
    name: "Historia Polski",
    quizSets: [
      {
        id: 1,
        name: "Zestaw 1 - Średniowiecze",
        questions: [
          {
            id: 1,
            question: "Który władca Polski przyjął chrzest w 966 roku?",
            options: [
              "Bolesław Chrobry",
              "Mieszko I",
              "Kazimierz Wielki",
              "Władysław Jagiełło"
            ],
            correctAnswer: 1
          },
          // Add more questions here
        ]
      },
      // Add more quiz sets here
    ]
  },
  // Add more topics here
]; 