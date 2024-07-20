'use client';

import Image from 'next/image';
import Quiz from './_components/quiz';
import TopicSelection from './_components/topic-selection';
import { useState } from 'react';

interface Question {
  sentence: string;
  correctIndex: number;
  options: string[];
}

interface Variant {
  variant: string;
  questions: Question[];
}

const questions: Variant[] = [
  {
    variant: 'Conjunctions',
    questions: [
      {
        sentence: 'I didn’t go to the party, ____ I was tired.',
        correctIndex: 1,
        options: ['czyli', 'Bo', 'Ale', 'Albo'],
      },
      {
        sentence:
          'I want to buy a new phone, ____ I need to save some money first.',
          correctIndex: 2,
        options: ['Już', 'Ale', 'więc', 'Chyba'],
      },
      {
        sentence: 'Would you like coffee ____ tea?',
        correctIndex: 3,
        options: ['Też', 'Ale', 'Już', 'Albo'],
      },
      {
        sentence: 'He is very tall, ____ he plays basketball.',
        correctIndex: 0,
        options: ['czyli', 'Bo', 'Ale', 'z nami'],
      },
      {
        sentence: 'I have finished my homework ____ I can relax now.',
        correctIndex: 2,
        options: ['U ciebie', 'wszyscy', 'Już', 'Chyba'],
      },
    ],
  },
  {
    variant: 'Adverbs',
    questions: [
      {
        sentence: 'She speaks Spanish, and she ____ speaks French.',
        correctIndex: 1,
        options: ['Bo', 'Też', 'Już', 'wszyscy'],
      },
      {
        sentence: 'I’m not sure, but ____ it’s going to rain today.',
        correctIndex: 0,
        options: ['Chyba', 'Ale', 'Bo', 'razem'],
      },
      {
        sentence: 'We need to meet ____ to discuss the project.',
        correctIndex: 3,
        options: ['Już', 'wszyscy', 'z nami', 'razem'],
      },
      {
        sentence: 'Is this your book, or is it ____?',
        correctIndex: 0,
        options: ['U ciebie', 'Ale', 'Już', 'Bo'],
      },
      {
        sentence: 'You ____ finish your work before going out.',
        correctIndex: 2,
        options: ['Ale', 'Też', 'Trzeba', 'wszyscy'],
      },
      {
        sentence: 'She will come with us, ____ she?',
        correctIndex: 3,
        options: ['czyli', 'Bo', 'Ale', 'z nami'],
      },
      {
        sentence: 'We will do it ____.',
        correctIndex: 0,
        options: ['wszyscy', 'czyli', 'Już', 'Bo'],
      },
    ],
  },
];

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = (selectedTopics: string[]) => {
    setSelectedTopics(selectedTopics);
    setQuizStarted(true);
  };

  return (
    <main className="flex min-h-screen items-center flex-col p-3">
        {quizStarted ? (
          <Quiz
            questions={questions.filter(q =>
              selectedTopics.includes(q.variant)
            )}
          />
        ) : (
          <TopicSelection
            topics={questions.map(q => q.variant)}
            onStartQuiz={handleStartQuiz}
          />
        )}
    </main>
  );
}
