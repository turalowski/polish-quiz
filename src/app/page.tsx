'use client';

import { useState } from 'react';
import { topics } from '../data/sampleData';
import TopicSelector from '../components/TopicSelector';
import QuizSetSelector from '../components/QuizSetSelector';
import Quiz from '../components/Quiz';
import { Topic, QuizSet } from '../types';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Quiz Polski</h1>
      
      {!selectedTopic ? (
        <TopicSelector 
          topics={topics} 
          onSelectTopic={setSelectedTopic} 
        />
      ) : !selectedQuizSet ? (
        <QuizSetSelector 
          topic={selectedTopic} 
          onSelectQuizSet={setSelectedQuizSet}
          onBack={() => setSelectedTopic(null)}
        />
      ) : (
        <Quiz 
          quizSet={selectedQuizSet}
          onBack={() => setSelectedQuizSet(null)}
        />
      )}
    </main>
  );
} 