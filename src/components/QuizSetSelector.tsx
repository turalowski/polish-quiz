import { Topic, QuizSet } from '../types';

interface QuizSetSelectorProps {
  topic: Topic;
  onSelectQuizSet: (quizSet: QuizSet) => void;
  onBack: () => void;
}

export default function QuizSetSelector({ topic, onSelectQuizSet, onBack }: QuizSetSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Powrót do tematów
      </button>
      
      <h2 className="text-xl mb-4">Wybierz zestaw pytań z tematu: {topic.name}</h2>
      
      <div className="grid gap-4">
        {topic.quizSets.map((quizSet) => (
          <button
            key={quizSet.id}
            onClick={() => onSelectQuizSet(quizSet)}
            className="p-4 border rounded-lg hover:bg-gray-100 text-left"
          >
            {quizSet.name}
          </button>
        ))}
      </div>
    </div>
  );
} 