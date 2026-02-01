'use client';

import { motion } from 'framer-motion';
import { Code, Server, Palette, Rocket, Layers } from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';
import { useI18n } from '@/Locales/client';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains',
});

export default function Skills() {
  const t = useI18n();

  // On définit le tableau ici pour avoir accès à t()
  const skillsData = [
    {
      icon: <Code />,
      title: t('skills.front.title'),
      text: t('skills.front.text'),
      stack: 'HTML, CSS, TailwindCSS, JavaScript, Vue.js, Angular',
    },
    {
      icon: <Server />,
      title: t('skills.back.title'),
      text: t('skills.back.text'),
      stack: 'PHP, Laravel, Symfony (bases), MySQL',
    },
    {
      icon: <Palette />,
      title: t('skills.cms.title'),
      text: t('skills.cms.text'),
      stack: 'WordPress, CMS sur mesure, UI/UX',
    },
    {
      icon: <Rocket />,
      title: t('skills.deploy.title'),
      text: t('skills.deploy.text'),
      stack: 'Git, GitHub, Vercel, performances',
    },
    {
      icon: <Layers />,
      title: t('skills.collab.title'),
      text: t('skills.collab.text'),
      stack: 'Trello, Jira, Slack, Postman',
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#0b1f3a] text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-5xl font-bold text-center mb-20 ${jetBrains.variable} font-mono`}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-8 shadow-xl hover:-translate-y-2
              hover:border-sky-400/40 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-white/10 text-sky-400 mb-6
              group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

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