'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

interface TopicSelectionProps {
  topics: string[];
  onStartQuiz: (selectedTopics: string[]) => void;
}

const TopicSelection: React.FC<TopicSelectionProps> = ({
  topics,
  onStartQuiz,
}) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleCheckboxChange = (topic: string) => {
    setSelectedTopics(prevState =>
      prevState.includes(topic)
        ? prevState.filter(t => t !== topic)
        : [...prevState, topic]
    );
  };

  const handleStartQuizClick = () => {
    onStartQuiz(selectedTopics);
  };

  return (
    <div className="flex grow h-full justify-between flex-col gap-3 w-full">
      <h2 className="w-full mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Select Topics
      </h2>
      <div className='flex gap-3 grow flex-col'>
      {topics.map(topic => (
        <div key={topic} className='flex  items-center gap-3'>
          <Checkbox
            id={topic}
            value={topic}
            onCheckedChange={() => handleCheckboxChange(topic)}
          />
          <Label htmlFor={topic}>{topic}</Label>
        </div>
      ))}
      </div>
      <Button
        onClick={handleStartQuizClick}
        disabled={selectedTopics.length === 0}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default TopicSelection;
