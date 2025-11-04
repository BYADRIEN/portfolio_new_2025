'use client';
import { Typewriter } from 'react-simple-typewriter';

export default function SliderHero() {
  return (
    <div className="h-96 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        <Typewriter
          words={[
            'Hello, je suis Adrien 👋',
            'Développeur Web Full Stack 💻',
            'Passionné par le code et le design ✨',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
      <p className="text-lg opacity-90">Je transforme vos idées en projets concrets 🚀</p>
    </div>
  );
}