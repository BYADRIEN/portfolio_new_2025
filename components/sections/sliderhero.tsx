'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains',
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 text-white bg-[#0b1f3a]"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_1px,_transparent_1px)] bg-[size:26px_26px] opacity-20" />

      {/* FLOATING DOTS */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-sky-400/40 rounded-full blur-[0.5px]"
          initial={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 800 - 400,
          }}
          animate={{
            x: [null, Math.random() * 1200 - 600],
            y: [null, Math.random() * 800 - 400],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h1
          className={`text-3xl sm:text-6xl font-bold mb-6 ${jetBrains.variable} font-mono`}
        >
          <Typewriter
            words={[
              'Hello, je suis Adrien 👋',
              'Développeur Web Full Stack',
              'Je crée des expériences modernes',
            ]}
            loop
            cursor
            cursorStyle="|"
            cursorColor="#38bdf8"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h1>

        <p className="text-lg sm:text-2xl opacity-85 mb-12">
          Des sites rapides, élégants et pensés pour l’utilisateur 🚀
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 text-base font-semibold rounded-lg
          bg-sky-400 text-slate-900
          hover:bg-sky-300
          shadow-lg shadow-sky-400/30 transition"
        >
          Voir mes projets
        </motion.a>
      </motion.div>
    </section>
  );
}
