
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FlagCardProps {
  flagUrl: string;
  countryName: string;
  showAnswer: boolean;
}

const FlagCard: React.FC<FlagCardProps> = ({ flagUrl, countryName, showAnswer }) => {
  return (
    <Card className="w-full shadow-lg border-2 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[3/2] relative overflow-hidden">
          <img 
            src={flagUrl} 
            alt={showAnswer ? `Flag of ${countryName}` : "Mystery country flag"} 
            className="w-full h-full object-cover"
          />
        </div>
        {showAnswer && (
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold">
            {countryName}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlagCard;
