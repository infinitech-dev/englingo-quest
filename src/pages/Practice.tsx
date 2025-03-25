
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mic, Play, Check, X } from 'lucide-react';

const practiceData = [
  {
    english: "How are you today?",
    translation: "¿Cómo estás hoy?",
  },
  {
    english: "What's your name?",
    translation: "¿Cómo te llamas?",
  },
  {
    english: "I like learning English.",
    translation: "Me gusta aprender inglés.",
  },
  {
    english: "Where is the restaurant?",
    translation: "¿Dónde está el restaurante?",
  },
  {
    english: "The weather is nice today.",
    translation: "El clima está agradable hoy.",
  },
];

const Practice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  
  const currentPhrase = practiceData[currentIndex];
  
  const handleListen = () => {
    setIsListening(true);
    // In a real app, this would use the Web Speech API to listen
    setTimeout(() => {
      setIsListening(false);
    }, 3000);
  };
  
  const handleCheck = () => {
    // Simple check - in a real app would use more sophisticated comparison
    const isCorrect = userInput.toLowerCase().trim() === currentPhrase.english.toLowerCase().trim();
    setResult(isCorrect);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % practiceData.length);
    setUserInput("");
    setResult(null);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <section className="page-container pt-16">
          <div className="text-center mb-16 animate-slide-down">
            <h1 className="section-title">Practice Your English</h1>
            <p className="section-subtitle mx-auto">
              Improve your speaking and listening skills with these interactive exercises.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 animate-zoom-in">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground mb-2">Translate to English:</div>
              <div className="text-2xl font-medium mb-6">{currentPhrase.translation}</div>
              
              <div className="flex mb-4">
                <button 
                  onClick={() => {
                    // In a real app, this would use the Web Speech API to speak
                    console.log("Playing audio");
                  }}
                  className="bg-secondary rounded-full p-3 mr-3"
                >
                  <Play className="h-5 w-5 text-primary" />
                </button>
                <button 
                  onClick={handleListen}
                  className={`${isListening ? "bg-red-500" : "bg-secondary"} rounded-full p-3 transition-colors`}
                >
                  <Mic className={`h-5 w-5 ${isListening ? "text-white" : "text-primary"}`} />
                </button>
              </div>
              
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full p-4 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Type your translation here..."
                rows={3}
              />
            </div>
            
            {result !== null && (
              <div className={`mb-6 p-4 rounded-lg ${result ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                <div className="flex items-center">
                  {result ? (
                    <Check className="h-5 w-5 mr-2" />
                  ) : (
                    <X className="h-5 w-5 mr-2" />
                  )}
                  <span>{result ? "Correct!" : "Not quite. Try again!"}</span>
                </div>
                {!result && (
                  <div className="mt-2 text-sm">
                    Correct answer: {currentPhrase.english}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-between">
              <button
                onClick={handleCheck}
                className="button-hover bg-primary text-white rounded-full px-6 py-2"
                disabled={userInput.trim() === ""}
              >
                Check Answer
              </button>
              
              <button
                onClick={handleNext}
                className="button-hover bg-secondary text-foreground rounded-full px-6 py-2"
              >
                Next Phrase
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress: {currentIndex + 1}/{practiceData.length}</span>
                <span>Daily streak: 3 days</span>
              </div>
              <div className="mt-2 bg-secondary h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / practiceData.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2023 Englingo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Practice;
