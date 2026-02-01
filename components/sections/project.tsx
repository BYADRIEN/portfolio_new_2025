'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { JetBrains_Mono } from 'next/font/google';
import { useI18n } from '@/Locales/client';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains'
});

export default function Projects() {
  const t = useI18n();

  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#0b1f33] via-[#0f2d4a] to-[#0b1f33] text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${jetBrains.variable} font-mono`}>
            {t('projects.title')}
          </h2>
          <span className="block w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></span>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Grid ajustée pour 3 projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <ProjectCard
            image="/images/laboh-teas.jpg"
            title={t('projects.labo.title')}
            stack="Laravel · MySQL · Tailwind"
            description={t('projects.labo.desc')}
            github="https://github.com/BYADRIEN/Labo-th-s"
            tCode={t('projects.code')}
            tVisit={t('projects.visit')}
          />

          <ProjectCard
            image="/images/lucas.png" // Assure-toi de nommer ton image lucas.png dans /public/images/
            title={t('projects.lucas.title')}
            stack="Next.js · Tailwind · Vercel"
            description={t('projects.lucas.desc')}
            github="https://github.com/BYADRIEN/lucas_heymans_drawing_v2"
            demo="https://lucas-heymans-drawing-v2.vercel.app/"
            tCode={t('projects.code')}
            tVisit={t('projects.visit')}
          />

          <ProjectCard
            image="/images/zz.png"
            title={t('projects.roue.title')}
            stack="JavaScript · CSS · Animations"
            description={t('projects.roue.desc')}
            github="https://github.com/BYADRIEN/roue_shortys"
            demo="https://byadrien.github.io/roue_shortys/"
            tCode={t('projects.code')}
            tVisit={t('projects.visit')}
          />
          
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  image, title, description, stack, github, demo, tCode, tVisit
}: {
  image: string; title: string; description: string; stack: string; 
  github: string; demo?: string; tCode: string; tVisit: string;
}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f33]/90 to-transparent" />
      </div>

      <div className="p-8 flex flex-col gap-6 flex-grow">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-cyan-400 text-sm font-medium">{stack}</p>
        </div>
        <p className="text-white/75 leading-relaxed text-sm flex-grow">{description}</p>
        <div className="flex gap-6 mt-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition-colors text-sm">
            <FaGithub /> {tCode}
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition-colors text-sm">
              <FaExternalLinkAlt /> {tVisit}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}