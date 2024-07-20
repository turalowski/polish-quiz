'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

interface Question {
  sentence: string;
  correctWord: string;
  options: string[];
}

interface Variant {
  variant: string;
  questions: Question[];
}

interface QuizProps {
  questions: Variant[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    const currentVariant = questions[currentVariantIndex];

    if (nextQuestionIndex < currentVariant.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else if (currentVariantIndex + 1 < questions.length) {
      setCurrentQuestionIndex(0);
      setCurrentVariantIndex(currentVariantIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const currentVariant = questions[currentVariantIndex];
  const currentQuestion = currentVariant.questions[currentQuestionIndex];

  return (
    <div className="flex items-center gap-3 flex-col">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of{' '}
          {questions.reduce(
            (total, variant) => total + variant.questions.length,
            0
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              <span>Question {currentQuestionIndex + 1}</span>/
              {currentVariant.questions.length}
            </h3>
            <span className="question-text">{currentQuestion.sentence}</span>
          </div>
          <div className="flex flex-col gap-3 w-full">
            {currentQuestion.options.map((option, index) => (
              <Button
              variant="outline"
              className='w-full'
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    option === currentQuestion.correctWord
                  )
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
