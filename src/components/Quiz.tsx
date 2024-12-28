import { useState } from 'react';
import { QuizSet } from '../types';

interface QuizProps {
  quizSet: QuizSet;
  onBack: () => void;
}

export default function Quiz({ quizSet, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === quizSet.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizSet.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl mb-4">Wyniki</h2>
        <p className="text-xl">
          Zdobyłeś {score} z {quizSet.questions.length} punktów!
        </p>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Spróbuj innego zestawu
        </button>
      </div>
    );
  }

  const question = quizSet.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Powrót do zestawów
      </button>

      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Pytanie {currentQuestion + 1} z {quizSet.questions.length}
        </p>
      </div>

      <h2 className="text-xl mb-4">{question.question}</h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="p-4 border rounded-lg hover:bg-gray-100 text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 