
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

interface ScoreBoardProps {
  score: number;
  totalQuestions: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, totalQuestions }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <Card className="shadow-md border border-blue-100">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">Score:</span>
          </div>
          <div className="text-lg font-bold">
            {score} / {totalQuestions}
          </div>
        </div>
        
        {totalQuestions > 0 && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-muted-foreground">Accuracy</span>
              <span className="text-sm font-medium">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScoreBoard;
