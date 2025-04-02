
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import FlagCard from "./FlagCard";
import OptionButton from "./OptionButton";
import ScoreBoard from "./ScoreBoard";
import { Country, getRandomCountry, getMultipleChoices, getFlagUrl } from "@/utils/flagData";
import { RefreshCw } from "lucide-react";

const FlagGame: React.FC = () => {
  const { toast } = useToast();
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);

  // Initialize or reset the game
  const initializeGame = () => {
    setLoading(true);
    const country = getRandomCountry();
    setCurrentCountry(country);
    setOptions(getMultipleChoices(country));
    setSelectedOption(null);
    setIsCorrect(null);
    setShowAnswer(false);
    setGameOver(false);
    setLoading(false);
  };

  // Start a new game
  useEffect(() => {
    initializeGame();
  }, []);

  // Handle option selection
  const handleOptionSelect = (countryName: string) => {
    if (gameOver || !currentCountry) return;
    
    setSelectedOption(countryName);
    const correct = countryName === currentCountry.name;
    setIsCorrect(correct);
    setShowAnswer(true);
    setGameOver(true);
    setTotalQuestions(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      toast({
        title: "Correct!",
        description: `That is indeed the flag of ${currentCountry.name}!`,
        variant: "default",
        className: "bg-green-500 text-white",
      });
    } else {
      toast({
        title: "Incorrect",
        description: `That's the flag of ${currentCountry.name}`,
        variant: "destructive",
      });
    }
  };

  // Start a new round
  const handleNextFlag = () => {
    initializeGame();
  };

  if (loading || !currentCountry) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <ScoreBoard score={score} totalQuestions={totalQuestions} />
      </div>
      
      <div className="mb-6">
        <FlagCard 
          flagUrl={getFlagUrl(currentCountry.code)} 
          countryName={currentCountry.name}
          showAnswer={showAnswer}
        />
      </div>
      
      <Card className="p-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">Which country's flag is this?</h2>
        <div className="space-y-2">
          {options.map((option) => (
            <OptionButton
              key={option.code}
              option={option.name}
              onClick={() => handleOptionSelect(option.name)}
              isSelected={selectedOption === option.name}
              isCorrect={gameOver ? option.name === currentCountry.name : null}
              disabled={gameOver}
            />
          ))}
        </div>
      </Card>
      
      {gameOver && (
        <Button 
          className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
          onClick={handleNextFlag}
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Next Flag
        </Button>
      )}
    </div>
  );
};

export default FlagGame;
