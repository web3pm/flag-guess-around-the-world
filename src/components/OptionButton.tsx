
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OptionButtonProps {
  option: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect: boolean | null;
  disabled: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({ 
  option, 
  onClick, 
  isSelected, 
  isCorrect, 
  disabled 
}) => {
  // Determine the button styling based on its state
  const getButtonStyle = () => {
    if (isSelected && isCorrect === true) {
      return "bg-green-500 hover:bg-green-600 text-white";
    } else if (isSelected && isCorrect === false) {
      return "bg-red-500 hover:bg-red-600 text-white";
    } else if (isCorrect === true) { // Show correct answer when game is over
      return "bg-green-500 hover:bg-green-600 text-white";
    } else {
      return "";
    }
  };

  return (
    <Button
      className={cn(
        "w-full text-left justify-start mb-2 transition-all",
        getButtonStyle()
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {option}
    </Button>
  );
};

export default OptionButton;
