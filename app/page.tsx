'use client';

import Image from 'next/image';
import Quiz from './_components/quiz';
import TopicSelection from './_components/topic-selection';
import { useState } from 'react';

interface Question {
  sentence: string;
  correctWord: string;
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
        correctWord: 'Bo',
        options: ['czyli', 'Bo', 'Ale', 'Albo'],
      },
      {
        sentence:
          'I want to buy a new phone, ____ I need to save some money first.',
        correctWord: 'więc',
        options: ['Już', 'Ale', 'więc', 'Chyba'],
      },
      {
        sentence: 'Would you like coffee ____ tea?',
        correctWord: 'Albo',
        options: ['Też', 'Ale', 'Już', 'Albo'],
      },
      {
        sentence: 'He is very tall, ____ he plays basketball.',
        correctWord: 'czyli',
        options: ['czyli', 'Bo', 'Ale', 'z nami'],
      },
      {
        sentence: 'I have finished my homework ____ I can relax now.',
        correctWord: 'Już',
        options: ['U ciebie', 'wszyscy', 'Już', 'Chyba'],
      },
    ],
  },
  {
    variant: 'Adverbs',
    questions: [
      {
        sentence: 'She speaks Spanish, and she ____ speaks French.',
        correctWord: 'Też',
        options: ['Bo', 'Też', 'Już', 'wszyscy'],
      },
      {
        sentence: 'I’m not sure, but ____ it’s going to rain today.',
        correctWord: 'Chyba',
        options: ['Chyba', 'Ale', 'Bo', 'razem'],
      },
      {
        sentence: 'We need to meet ____ to discuss the project.',
        correctWord: 'razem',
        options: ['Już', 'wszyscy', 'z nami', 'razem'],
      },
      {
        sentence: 'Is this your book, or is it ____?',
        correctWord: 'U ciebie',
        options: ['U ciebie', 'Ale', 'Już', 'Bo'],
      },
      {
        sentence: 'You ____ finish your work before going out.',
        correctWord: 'Trzeba',
        options: ['Ale', 'Też', 'Trzeba', 'wszyscy'],
      },
      {
        sentence: 'She will come with us, ____ she?',
        correctWord: 'z nami',
        options: ['czyli', 'Bo', 'Ale', 'z nami'],
      },
      {
        sentence: 'We will do it ____.',
        correctWord: 'wszyscy',
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
