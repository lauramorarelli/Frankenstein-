import React, { useState, useMemo, useEffect } from 'react';
import { STAGES } from './constants';
import { BookOpen, Brain, FlaskConical, Eye, CheckCircle2, Lock, Unlock, ArrowRight, RefreshCcw } from 'lucide-react';

// Custom Pastel Colors Mapping for dynamic classes
const PASTEL_COLORS: Record<number, string> = {
  1: "bg-purple-100 border-purple-200 text-purple-900",
  2: "bg-blue-100 border-blue-200 text-blue-900",
  3: "bg-green-100 border-green-200 text-green-900",
  4: "bg-orange-100 border-orange-200 text-orange-900",
};

const PASTEL_BUTTONS: Record<number, string> = {
  1: "bg-purple-500 hover:bg-purple-600",
  2: "bg-blue-500 hover:bg-blue-600",
  3: "bg-green-500 hover:bg-green-600",
  4: "bg-orange-500 hover:bg-orange-600",
};

export default function App() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'completed'>('start');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentStage = STAGES[currentStageIndex];

  // Reset state when stage changes
  useEffect(() => {
    setSelectedAnswers({});
    setShowFeedback(false);
    setErrorMsg(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStageIndex]);

  const handleStart = () => {
    setGameState('playing');
    setCurrentStageIndex(0);
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    if (showFeedback) return; // Prevent changing after checking
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
    setErrorMsg(null);
  };

  const checkAnswers = () => {
    const questions = currentStage.questions;
    
    // Check if all answered
    const allAnswered = questions.every(q => selectedAnswers[q.id]);
    if (!allAnswered) {
      setErrorMsg("Please answer all questions before proceeding.");
      return;
    }

    setShowFeedback(true);

    // Check correctness
    const allCorrect = questions.every(q => selectedAnswers[q.id] === q.correctAnswer);

    if (!allCorrect) {
      setErrorMsg("Some answers are incorrect. Review the notes and try again!");
    }
  };

  const nextStage = () => {
    if (currentStageIndex < STAGES.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
    } else {
      setGameState('completed');
    }
  };

  const resetGame = () => {
    setGameState('start');
    setCurrentStageIndex(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setErrorMsg(null);
  };

  // Memoize icons to avoid re-renders causing issues
  const StageIcon = useMemo(() => {
    if (!currentStage) return BookOpen;
    switch (currentStage.icon) {
      case 'book': return BookOpen;
      case 'brain': return Brain;
      case 'flask': return FlaskConical;
      case 'eye': return Eye;
      default: return BookOpen;
    }
  }, [currentStage]);

  if (gameState === 'start') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6 font-sans">
        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 text-center border border-white">
          <div className="mb-6 flex justify-center">
             <FlaskConical size={64} className="text-purple-500 animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-serif tracking-tight">
            Escape Frankenstein's Lab
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            You are trapped in the narrative of Mary Shelley. To escape, you must reconstruct the creature of knowledge. 
            Analyze the notes, understand the themes, and unlock the doors of perception.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500 uppercase tracking-widest font-bold">
              <span>4 Stages</span>
              <span>•</span>
              <span>10 Questions</span>
            </div>
            <button 
              onClick={handleStart}
              className="w-full md:w-auto px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
            >
              Enter the Novel <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-teal-100 to-emerald-100 p-6 font-sans">
        <div className="max-w-2xl w-full bg-white/90 shadow-2xl rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-400"></div>
          <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-800 mb-4 font-serif">You have Escaped!</h1>
          <p className="text-xl text-slate-600 mb-8">
            "Beware; for I am fearless, and therefore powerful." <br/>
            <span className="text-sm mt-2 block">- The Creature</span>
          </p>
          <p className="text-slate-600 mb-8">
            You have successfully analyzed the context, pedagogy, and themes of Frankenstein.
          </p>
          <button 
            onClick={resetGame}
            className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center mx-auto"
          >
            <RefreshCcw className="mr-2" size={20} /> Play Again
          </button>
        </div>
      </div>
    );
  }

  const isStageComplete = showFeedback && !errorMsg && currentStage.questions.every(q => selectedAnswers[q.id] === q.correctAnswer);

  return (
    <div className={`min-h-screen py-8 px-4 font-sans transition-colors duration-500 ${PASTEL_COLORS[currentStage.id].split(' ')[0]}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header / Progress */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/70 backdrop-blur rounded-2xl p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
             <div className={`p-3 rounded-full ${PASTEL_COLORS[currentStage.id].replace('bg-', 'bg-white text-')}`}>
               <StageIcon size={24} />
             </div>
             <div>
               <h2 className="font-bold text-slate-700">Stage {currentStage.id} of {STAGES.length}</h2>
               <p className="text-sm text-slate-500">{currentStage.title}</p>
             </div>
          </div>
          <div className="flex space-x-2">
            {STAGES.map((s) => (
              <div 
                key={s.id} 
                className={`w-3 h-3 rounded-full transition-all ${
                  s.id === currentStage.id ? 'bg-slate-800 scale-125' : 
                  s.id < currentStage.id ? 'bg-green-500' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Notes Section */}
          <div className="bg-white shadow-xl rounded-3xl p-8 border-t-8 border-slate-200">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen className="mr-3 opacity-50" /> Study Notes
            </h2>
            <div className="prose prose-slate max-w-none">
              {currentStage.content}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="space-y-6">
             {currentStage.questions.map((q, idx) => (
               <div key={q.id} className="bg-white shadow-lg rounded-2xl p-6 transition-all hover:shadow-xl">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-bold text-slate-800 text-lg">Question {idx + 1}</h3>
                   {showFeedback && (
                     selectedAnswers[q.id] === q.correctAnswer 
                       ? <CheckCircle2 className="text-green-500" />
                       : <div className="text-red-400 font-bold">!</div>
                   )}
                 </div>
                 <p className="text-slate-600 mb-4 font-medium">{q.question}</p>
                 <div className="space-y-2">
                   {q.options.map((opt, optIdx) => {
                     let btnClass = "w-full text-left p-3 rounded-xl border-2 transition-all duration-200 text-sm md:text-base ";
                     
                     if (showFeedback) {
                       if (opt === q.correctAnswer) {
                         btnClass += "bg-green-100 border-green-500 text-green-800 font-bold";
                       } else if (selectedAnswers[q.id] === opt) {
                         btnClass += "bg-red-50 border-red-300 text-red-800 opacity-70";
                       } else {
                         btnClass += "bg-gray-50 border-transparent text-gray-400 opacity-50";
                       }
                     } else {
                       if (selectedAnswers[q.id] === opt) {
                         btnClass += "bg-slate-800 border-slate-800 text-white shadow-md transform scale-[1.02]";
                       } else {
                         btnClass += "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100 hover:border-slate-300";
                       }
                     }

                     return (
                       <button
                         key={optIdx}
                         onClick={() => handleOptionSelect(q.id, opt)}
                         disabled={showFeedback}
                         className={btnClass}
                       >
                         {opt}
                       </button>
                     );
                   })}
                 </div>
               </div>
             ))}

             {/* Action Area */}
             <div className="sticky bottom-4 z-10">
               <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50">
                 {errorMsg && (
                   <div className="text-red-500 text-center mb-3 font-bold text-sm bg-red-50 p-2 rounded-lg animate-pulse">
                     {errorMsg}
                   </div>
                 )}
                 
                 {!isStageComplete ? (
                   <button
                     onClick={checkAnswers}
                     className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center space-x-2 ${
                       currentStage.questions.every(q => selectedAnswers[q.id]) 
                       ? PASTEL_BUTTONS[currentStage.id]
                       : 'bg-slate-300 cursor-not-allowed text-slate-500'
                     }`}
                     disabled={!currentStage.questions.every(q => selectedAnswers[q.id])}
                   >
                     <Lock size={20} />
                     <span>{showFeedback ? "Try Again" : "Unlock Next Stage"}</span>
                   </button>
                 ) : (
                   <button
                     onClick={nextStage}
                     className="w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center space-x-2 animate-bounce"
                   >
                     <Unlock size={20} />
                     <span>Proceed to Next Room</span>
                   </button>
                 )}
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
