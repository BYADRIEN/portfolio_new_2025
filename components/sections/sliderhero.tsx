'use client';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#1d5f4c] via-[#2ca678] to-[#1a3f2c] text-white"
    >
      <h1 className="text-5xl sm:text-6xl font-bold mb-6">
        <Typewriter
          words={[
            'Hello, je suis Adrien 👋',
            'Développeur Web Full Stack 💻',
            'Passionné par le code et le design ✨'
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
      <p className="text-xl sm:text-2xl max-w-xl opacity-90 mb-8">
        Je transforme vos idées en projets concrets 🚀
      </p>
      <div className="flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#ff8c66] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}