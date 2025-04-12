import { Topic } from '../_types';
import { verbsTopic } from './topics/verbs';
import { adjectivesTopic } from './topics/adjectives';
import { dialoguesTopic } from './topics/dialogues';

// Export all topics
export const topics: Topic[] = [
  verbsTopic,
  adjectivesTopic,
  dialoguesTopic
];

// Export individual topics for direct access
export { verbsTopic, adjectivesTopic, dialoguesTopic }; 