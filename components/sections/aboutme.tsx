'use client';

import { useI18n } from '@/Locales/client'; 
import { motion } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaDatabase } from 'react-icons/fa';

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
  const t = useI18n();

  return (
    <section id="about" className="relative py-32 px-6 bg-[#0b1f3a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-5xl font-bold text-center mb-20 ${jetBrains.variable} font-mono`}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[260px_1fr] gap-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl">
              <img src="/images/adrien.jpg" alt="Adrien Selle" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-xl font-medium">
              {t('about.intro')}
              <span className="text-sky-400">{t('about.name')}</span>
              {t('about.role')}
            </p>

            <p className="text-white/80 leading-relaxed italic">
              {t('about.desc')}
            </p>

            <p className="text-white/80 leading-relaxed">
              {t('about.goal_start')}
              <span className="text-sky-400 font-semibold">{t('about.goal_impact')}</span>
              {t('about.goal_end')}
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-6">
              {skills.map((skill) => (
                <div key={skill.label} className="flex flex-col items-center gap-2 text-sm font-medium">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 shadow-md" style={{ color: skill.color }}>
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
                {t('stats.projects')}
              </div>
              <div>
                <span className="block text-3xl text-sky-400">2+</span>
                {t('stats.exp')}
              </div>
              <div>
                <span className="block text-3xl text-sky-400">100%</span>
                {t('stats.satisfied')}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-20">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-sky-400 text-slate-900 font-semibold shadow-xl hover:bg-sky-300 transition"
          >
            {t('about.cta')}
          </motion.a>
        </div>
      </div>
    </section>
  );
}