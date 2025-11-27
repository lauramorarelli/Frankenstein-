import React from 'react';
import { Stage } from './types';

// Helper to shuffle array
const shuffle = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const STAGES: Stage[] = [
  {
    id: 1,
    title: "Context, Author, and History",
    colorTheme: "bg-purple-100",
    icon: 'book',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed font-serif">
        <h3 className="font-bold text-xl text-purple-800">I. Context, Author, and Literary Approach</h3>
        <h4 className="font-bold text-lg">A. Biographical and Historical Context</h4>
        <p>
          <strong>Mary Shelley</strong> was the daughter of two important intellectuals: William Godwin and <strong>Mary Wollstonecraft</strong>, one of the first feminist writers. Shelley’s mother died only a week after Mary was born, and later in life Shelley also lost her own children. These painful experiences created a deep <strong>obsession with the idea of giving life</strong>.
        </p>
        <div className="bg-white/60 p-4 rounded-lg border-l-4 border-purple-400">
          <p><strong>Writing as Therapy:</strong> Shelley used writing to process her grief and personal difficulties. At the same time, she incorporated the scientific discoveries and revolutionary ideas of the late 18th century.</p>
        </div>
        <p>
          <strong>The Age of Revolutions:</strong> The novel reflects a period full of curiosity, change, and scientific experimentation.
        </p>
      </div>
    ),
    questions: [
      {
        id: 1,
        question: "Who were Mary Shelley's parents?",
        options: shuffle(["William Godwin and Mary Wollstonecraft", "Percy Shelley and Queen Victoria", "Lord Byron and Jane Austen", "William Wordsworth and Emily Brontë"]),
        correctAnswer: "William Godwin and Mary Wollstonecraft"
      },
      {
        id: 2,
        question: "How did Mary Shelley's personal tragedies influence her writing?",
        options: shuffle(["They created an obsession with the idea of giving life", "They made her stop writing for ten years", "They inspired her to write exclusively comedies", "They led her to become a doctor"]),
        correctAnswer: "They created an obsession with the idea of giving life"
      },
      {
        id: 3,
        question: "Which historical period does the novel reflect?",
        options: shuffle(["The Age of Revolutions and scientific experimentation", "The Medieval period and religious wars", "The Victorian era of strict morality", "The Renaissance and artistic rebirth"]),
        correctAnswer: "The Age of Revolutions and scientific experimentation"
      }
    ]
  },
  {
    id: 2,
    title: "Pedagogical Approach",
    colorTheme: "bg-blue-100",
    icon: 'brain',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed font-serif">
        <h4 className="font-bold text-lg text-blue-800">B. Pedagogical Approach and Literary Interpretation</h4>
        <p>In class, the focus is not on memorising facts but on understanding, thinking, and interpreting.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 p-3 rounded-lg">
             <h5 className="font-bold text-blue-700">Literature as Metaphor</h5>
             <p>Frankenstein works as a psychological metaphor for individual life (e.g., challenges of adolescence) and society.</p>
          </div>
          <div className="bg-white/60 p-3 rounded-lg">
             <h5 className="font-bold text-blue-700">Maieutics (Socratic Method)</h5>
             <p>The teacher asks questions to force students to think, reason, and “open the sense” of the text. Discovery leads to better memory.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p><strong>Co-construction of Meaning:</strong> In literature, there is rarely only one correct interpretation. Meaning is created together by the author and the reader. When students share personal interpretations, it shows real understanding.</p>
        </div>
      </div>
    ),
    questions: [
      {
        id: 4,
        question: "What is the goal of the 'Maieutics' or Socratic method used in class?",
        options: shuffle(["To force students to think, reason, and discover ideas", "To make students memorize dates perfectly", "To watch films without interruption", "To have the teacher explain everything immediately"]),
        correctAnswer: "To force students to think, reason, and discover ideas"
      },
      {
        id: 5,
        question: "What does 'Co-construction of Meaning' imply?",
        options: shuffle(["Meaning is created together by the author and the reader", "The author is the only one who knows the true meaning", "The reader must guess exactly what the teacher thinks", "Meaning is fixed and never changes"]),
        correctAnswer: "Meaning is created together by the author and the reader"
      }
    ]
  },
  {
    id: 3,
    title: "Science & The Modern Prometheus",
    colorTheme: "bg-green-100",
    icon: 'flask',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed font-serif">
        <h3 className="font-bold text-xl text-green-800">II. Main Themes of Frankenstein</h3>
        <h4 className="font-bold text-lg">A. The Uncontrolled Use of Science and the Lust for Knowledge</h4>
        <p>
          The story begins with Captain Walton exploring the dangerous North Pole. This mirrors Dr. Frankenstein’s journey into forbidden scientific territory.
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Galvanism:</strong> Victor experiments with the idea that electricity could make a dead body move again.</li>
          <li><strong>The Modern Prometheus:</strong> Prometheus stole fire from the gods and was punished. Similarly, Victor tries to “play God” by creating life.</li>
          <li><strong>Lack of Limits:</strong> Driven by a “lust for knowledge” and desire for eternal fame, Victor ignores the rules.</li>
        </ul>

        <div className="bg-white/60 p-4 rounded-lg border-l-4 border-green-500 italic">
          At university, Victor refuses to just follow rules, believing imagination is essential. But when science enters unknown territory without control, consequences are dangerous.
        </div>
      </div>
    ),
    questions: [
      {
        id: 6,
        question: "What does Captain Walton's journey to the North Pole mirror?",
        options: shuffle(["Dr. Frankenstein's journey into forbidden scientific territory", "The creature's escape to the forest", "Mary Shelley's travels in Europe", "The progress of industrial machinery"]),
        correctAnswer: "Dr. Frankenstein's journey into forbidden scientific territory"
      },
      {
        id: 7,
        question: "What scientific concept does Victor experiment with?",
        options: shuffle(["Galvanism (electricity reanimating dead bodies)", "Nuclear Fission", "Genetic cloning of sheep", "Steam engine mechanics"]),
        correctAnswer: "Galvanism (electricity reanimating dead bodies)"
      },
      {
        id: 8,
        question: "Why is the novel subtitled 'The Modern Prometheus'?",
        options: shuffle(["Because Victor tries to 'play God' like Prometheus stole fire", "Because it takes place in ancient Greece", "Because Prometheus was Victor's middle name", "Because the creature loves fire"]),
        correctAnswer: "Because Victor tries to 'play God' like Prometheus stole fire"
      }
    ]
  },
  {
    id: 4,
    title: "Society & The Creature",
    colorTheme: "bg-peach-100", // mapped in tailwind config as pastel-peach usually, but using custom class in map or style
    icon: 'eye',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed font-serif">
        <h4 className="font-bold text-lg text-orange-800">B. How Society Perceives the Different</h4>
        <p>The central conflict is how society reacts to someone who cannot be categorized.</p>
        
        <div className="space-y-3">
          <div className="bg-white/50 p-3 rounded-md shadow-sm">
            <strong>Fear of the Unknown:</strong> The human brain fears what is familiar. The creature is made of corpse parts, so people immediately reject him aggressively.
          </div>
          
          <div className="bg-white/50 p-3 rounded-md shadow-sm border-l-4 border-orange-400">
             <h5 className="font-bold">The Blind Man – A Moment of Acceptance</h5>
             <p>When the creature meets a blind man, something changes. Since the blind man cannot see his appearance, he judges him by <strong>character</strong>, not by looks. He builds a relationship based on trust. The blind man understands exclusion because of his own disability.</p>
          </div>
        </div>
      </div>
    ),
    questions: [
      {
        id: 9,
        question: "Why does society immediately reject the creature?",
        options: shuffle(["Because of fear of the unknown and his appearance", "Because he speaks a foreign language", "Because he is too intelligent", "Because he steals food"]),
        correctAnswer: "Because of fear of the unknown and his appearance"
      },
      {
        id: 10,
        question: "Why does the Blind Man accept the creature?",
        options: shuffle(["He judges him by character, not looks", "He thinks the creature is a doctor", "He is also a scientist", "He wants the creature to protect him"]),
        correctAnswer: "He judges him by character, not looks"
      }
    ]
  }
];
