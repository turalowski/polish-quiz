'use client';

import { QuizSet } from '../_types';
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";

interface QuizSetSelectorProps {
  quizSets: QuizSet[];
  onSelectQuizSet: (quizSet: QuizSet) => void;
}

export default function QuizSetSelector({ quizSets, onSelectQuizSet }: QuizSetSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Wybierz zestaw pytań</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {quizSets.map((quizSet) => (
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