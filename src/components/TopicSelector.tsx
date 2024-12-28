import { Topic } from '../types';

interface TopicSelectorProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
}

export default function TopicSelector({ topics, onSelectTopic }: TopicSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl mb-4">Wybierz temat:</h2>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="p-4 border rounded-lg hover:bg-gray-100 text-left"
          >
            {topic.name}
          </button>
        ))}
      </div>
    </div>
  );
} 