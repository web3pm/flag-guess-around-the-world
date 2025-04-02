
export interface Country {
  name: string;
  code: string;
}

// List of countries with their 2-letter ISO codes
export const countries: Country[] = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Japan", code: "jp" },
  { name: "Brazil", code: "br" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "India", code: "in" },
  { name: "South Africa", code: "za" },
  { name: "Mexico", code: "mx" },
  { name: "China", code: "cn" },
  { name: "Italy", code: "it" },
  { name: "Spain", code: "es" },
  { name: "Russia", code: "ru" },
  { name: "South Korea", code: "kr" },
  { name: "Sweden", code: "se" },
  { name: "Norway", code: "no" },
  { name: "Netherlands", code: "nl" },
  { name: "Switzerland", code: "ch" },
  { name: "Argentina", code: "ar" },
  { name: "Nigeria", code: "ng" },
  { name: "Egypt", code: "eg" },
  { name: "Turkey", code: "tr" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Greece", code: "gr" },
  { name: "Poland", code: "pl" },
  { name: "Thailand", code: "th" },
  { name: "Singapore", code: "sg" },
  { name: "New Zealand", code: "nz" }
];

// Helper functions for the game
export const getRandomCountry = (): Country => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

export const getMultipleChoices = (correctCountry: Country, numberOfChoices: number = 4): Country[] => {
  // Create a copy of countries array without the correct answer
  const availableCountries = countries.filter(country => country.code !== correctCountry.code);
  
  // Shuffle the available countries
  const shuffledCountries = [...availableCountries].sort(() => 0.5 - Math.random());
  
  // Take the required number of wrong answers
  const wrongAnswers = shuffledCountries.slice(0, numberOfChoices - 1);
  
  // Combine with correct answer and shuffle again
  const choices = [...wrongAnswers, correctCountry];
  return choices.sort(() => 0.5 - Math.random());
};

// Get flag image URL from country code
export const getFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
};
