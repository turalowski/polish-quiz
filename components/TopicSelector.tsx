'use client';

import { Topic } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopicSelectorProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
}

export default function TopicSelector({ topics, onSelectTopic }: TopicSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Wybierz temat</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant="outline"
              className="w-full justify-start h-auto py-4 px-6"
              onClick={() => onSelectTopic(topic)}
            >
              {topic.name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
} 