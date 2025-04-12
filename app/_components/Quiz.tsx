'use client';

import { useState } from 'react';
import { QuizSet } from '../_types';
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import { ChevronLeft, Check, X } from "lucide-react";
import { cn } from "@/app/_lib/utils";

interface QuizProps {
  quizSet: QuizSet;
  onBack: () => void;
}

export default function Quiz({ quizSet, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    setShowFeedback(true);
    
    if (selectedOption === quizSet.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    
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
  const isCorrect = selectedAnswer === question.correctAnswer;

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
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            
            let buttonVariant: "outline" | "default" | "destructive" = "outline";
            let buttonClassName = "w-full justify-start h-auto py-4 px-6";
            
            if (showFeedback) {
              if (isCorrectAnswer) {
                buttonVariant = "default";
                buttonClassName = cn(buttonClassName, "bg-green-500 hover:bg-green-600");
              } else if (isSelected) {
                buttonVariant = "destructive";
                buttonClassName = cn(buttonClassName, "bg-red-500 hover:bg-red-600");
              }
            }
            
            return (
              <Button
                key={index}
                variant={buttonVariant}
                className={buttonClassName}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
              >
                <div className="flex items-center w-full">
                  <span className="flex-grow">{option}</span>
                  {showFeedback && isSelected && (
                    isCorrect ? (
                      <Check className="h-5 w-5 ml-2" />
                    ) : (
                      <X className="h-5 w-5 ml-2" />
                    )
                  )}
                  {showFeedback && isCorrectAnswer && !isSelected && (
                    <Check className="h-5 w-5 ml-2" />
                  )}
                </div>
              </Button>
            );
          })}
          
          {showFeedback && (
            <div className="mt-4">
              <Button 
                onClick={handleNextQuestion}
                className="w-full"
              >
                {currentQuestion + 1 < quizSet.questions.length ? "Następne pytanie" : "Zobacz wyniki"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 