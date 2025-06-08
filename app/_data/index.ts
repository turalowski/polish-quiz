import { Topic } from '../_types';
import { verbsTopic } from './topics/verbs';
import { adjectivesTopic } from './topics/adjectives';
import { dialoguesTopic } from './topics/dialogues';
import { vocabularyTopic } from './topics/vocabulary';
// Export all topics
export const topics: Topic[] = [
  vocabularyTopic,
  verbsTopic,
  adjectivesTopic,
  dialoguesTopic
];

