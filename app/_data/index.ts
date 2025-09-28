import { QuizSet } from '../_types';

// Import quiz sets from different topics
import { commonVerbs1 } from './commonVerbs1';
import { commonVerbs2 } from './commonVerbs2';
import { commonVerbs3 } from './commonVerbs3';
import { commonVerbs4 } from './commonVerbs4';

// If you have more quiz sets, import them here and add to the array

// Assign unique IDs to each quiz set
export const quizSets: QuizSet[] = [
  {
    ...commonVerbs1,
    id: 1,
  },
  {
    ...commonVerbs2,
    id: 2,
  },
  {
    ...commonVerbs3,
    id: 3,
  },
  {
    ...commonVerbs4,
    id: 4,
  },
];