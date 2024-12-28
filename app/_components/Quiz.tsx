'use client';

import { useState } from 'react';
import { QuizSet } from '@/app/_types';
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import { ChevronLeft } from "lucide-react";

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

  const progress = ((currentQuestion + 1) / quizSet.questions.length) * 100;

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Wyniki</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">
              {score} / {quizSet.questions.length}
            </p>
            <p className="text-muted-foreground">
              {score === quizSet.questions.length 
                ? "Świetnie! Wszystkie odpowiedzi poprawne!" 
                : "Dobra robota! Spróbuj jeszcze raz aby poprawić wynik."}
            </p>
          </div>
          <Button 
            onClick={onBack}
            className="w-full"
          >
            Spróbuj innego zestawu
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = quizSet.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Button 
        variant="ghost" 
        onClick={onBack}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Powrót do zestawów
      </Button>

      <Card>
        <CardHeader>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground text-right">
              Pytanie {currentQuestion + 1} z {quizSet.questions.length}
            </p>
          </div>
          <CardTitle className="mt-4">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start h-auto py-4 px-6"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
} 