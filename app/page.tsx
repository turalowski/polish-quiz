'use client';

import { useState, useEffect } from 'react';
import { topics } from './_data';
import TopicSelector from './_components/TopicSelector';
import QuizSetSelector from './_components/QuizSetSelector';
import Quiz from './_components/Quiz';
import { Topic, QuizSet } from './_types';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenTooSmall(window.innerWidth < 360);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isScreenTooSmall) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Przepraszamy</h1>
          <p className="text-muted-foreground">
            Quiz Polski wymaga minimalnej szerokości ekranu 360px dla optymalnego doświadczenia.
            Proszę otworzyć aplikację na większym ekranie.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">Quiz Polski</h1>
        <p className="text-muted-foreground text-center mt-2">
          Wybierz temat i sprawdź swoją wiedzę!
        </p>
      </div>
      
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
