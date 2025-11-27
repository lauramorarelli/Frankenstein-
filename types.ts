export interface Question {
  id: number;
  question: string;
  options: string[]; // These should be pre-shuffled or shuffled via logic
  correctAnswer: string;
}

export interface Stage {
  id: number;
  title: string;
  colorTheme: string;
  icon: 'book' | 'brain' | 'flask' | 'eye';
  content: React.ReactNode;
  questions: Question[];
}

export type GameState = 'start' | 'playing' | 'completed';
