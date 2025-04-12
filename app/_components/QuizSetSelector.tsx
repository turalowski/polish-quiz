'use client';

import { Topic, QuizSet } from '../_types';
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft } from "lucide-react";

interface QuizSetSelectorProps {
  topic: Topic;
  onSelectQuizSet: (quizSet: QuizSet) => void;
  onBack: () => void;
}

export default function QuizSetSelector({ topic, onSelectQuizSet, onBack }: QuizSetSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-4"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Powrót do tematów
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Wybierz zestaw pytań z tematu: {topic.name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {topic.quizSets.map((quizSet) => (
            <Button
              key={quizSet.id}
              variant="outline"
              className="w-full min-h-[3.5rem] px-6 py-4 text-left whitespace-pre-wrap"
              onClick={() => onSelectQuizSet(quizSet)}
            >
              <span className="flex-grow break-words whitespace-pre-wrap text-left">{quizSet.name}</span>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}