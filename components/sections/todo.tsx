'use client';

import { motion } from 'framer-motion';
import { Code, Server, Palette, Rocket, Layers } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains',
});

const skills = [
  {
    icon: <Code />,
    title: 'Front-end',
    text: 'Interfaces modernes, accessibles et performantes.',
    stack: 'HTML, CSS, TailwindCSS, JavaScript, Vue.js, Angular',
  },
  {
    icon: <Server />,
    title: 'Back-end',
    text: 'Logique métier robuste et APIs fiables.',
    stack: 'PHP, Laravel, Symfony (bases), MySQL',
  },
  {
    icon: <Palette />,
    title: 'CMS & UI',
    text: 'Sites vitrines élégants et personnalisés.',
    stack: 'WordPress, CMS sur mesure, UI/UX',
  },
  {
    icon: <Rocket />,
    title: 'Déploiement',
    text: 'Mise en ligne rapide et optimisée.',
    stack: 'Git, GitHub, Vercel, performances',
  },
  {
    icon: <Layers />,
    title: 'Collaboration',
    text: 'Travail structuré et efficace en équipe.',
    stack: 'Trello, Jira, Slack, Postman',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#0b1f3a] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-5xl font-bold text-center mb-20 ${jetBrains.variable} font-mono`}
        >
          Compétences
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-8 shadow-xl hover:-translate-y-2
              hover:border-sky-400/40 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-white/10 text-sky-400 mb-6
              group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold mb-2">
                {skill.title}
              </h3>

              <p className="text-white/80 mb-4">
                {skill.text}
              </p>

              <p className="text-sm text-sky-400 font-medium">
                {skill.stack}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}