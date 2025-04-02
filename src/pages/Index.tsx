
import React from 'react';
import FlagGame from '@/components/FlagGame';
import { Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Globe className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Flag Guess</h1>
          </div>
          <p className="text-gray-600">Test your knowledge of flags from around the world!</p>
        </header>
        
        <main>
          <FlagGame />
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Challenge yourself with flags from around the world!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
