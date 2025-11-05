'use client';
import { Typewriter } from 'react-simple-typewriter';
import { Roboto_Mono } from 'next/font/google';

// Import Google Font
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400' });

export default function SliderHero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0f1f] via-[#1a1f3f] to-[#0a0f1f] text-white text-center p-4 sm:p-8">
      
      {/* Hero Title */}
      <h1 className={`${robotoMono.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-6`}>
        <Typewriter
          words={[
            'Hello, je suis Adrien 👋',
            'Développeur Web Full Stack 💻',
            'Passionné par le code et le design ✨'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>

      {/* Underline / accent animé */}
      <div className="h-1 w-28 bg-cyan-500 mt-4 animate-pulse rounded-full"></div>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl opacity-90 mt-6 max-w-xl">
        Je transforme vos idées en projets concrets 🚀
      </p>
    </div>
  );
}