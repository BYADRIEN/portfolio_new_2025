'use client';

import { motion } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaDatabase,
} from 'react-icons/fa';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains',
});

const skills = [
  { icon: <FaHtml5 />, color: '#e34c26', label: 'HTML' },
  { icon: <FaCss3Alt />, color: '#264de4', label: 'CSS' },
  { icon: <FaJs />, color: '#f0db4f', label: 'JavaScript' },
  { icon: <FaLaravel />, color: '#ff2d20', label: 'Laravel' },
  { icon: <FaDatabase />, color: '#1d5f4c', label: 'MySQL' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#0b1f3a] text-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-5xl font-bold text-center mb-20 ${jetBrains.variable} font-mono`}
        >
          À propos
        </motion.h2>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-[260px_1fr] gap-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          {/* PHOTO */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl">
              <img
                src="/images/adrien.jpg"
                alt="Adrien Selle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xl font-medium">
              Je suis <span className="text-sky-400">Adrien</span>, développeur web
              full stack spécialisé dans la création de sites modernes,
              performants et orientés utilisateur.
            </p>

            <p className="text-white/80 leading-relaxed">
              J’aime transformer des idées en expériences concrètes : une
              interface claire, une logique solide côté back-end et une attention
              particulière aux performances.
            </p>

            <p className="text-white/80 leading-relaxed">
              Mon objectif est simple : livrer des projets qui apportent un vrai{' '}
              <span className="text-sky-400 font-semibold">
                impact business
              </span>
              , améliorent l’engagement et renforcent la crédibilité des marques.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-2 text-sm font-medium"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 shadow-md"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  {skill.label}
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-12 pt-10 text-sm font-semibold">
              <div>
                <span className="block text-3xl text-sky-400">3+</span>
                Projets réalisés
              </div>
              <div>
                <span className="block text-3xl text-sky-400">2+</span>
                Ans d’expérience
              </div>
              <div>
                <span className="block text-3xl text-sky-400">100%</span>
                Clients satisfaits
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-sky-400 text-slate-900 font-semibold shadow-xl hover:bg-sky-300 transition"
          >
            Travaillons ensemble
          </motion.a>
        </div>
      </div>
    </section>
  );
}