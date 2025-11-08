'use client';
import { JetBrains_Mono } from 'next/font/google';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaDatabase } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-jetbrains' });

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#eaf6f1] text-[#1d5f4c]"
    >
      <h2 className={`text-2xl sm:text-5xl font-bold mb-4 ${jetBrains.variable} font-mono`}>
        <Typewriter
          words={['À mon propos']}
          loop
          cursor
          cursorStyle="|"
          cursorColor="#ff8c66"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>
      <span className="w-20 h-1 bg-[#ff8c66] rounded-full mb-10"></span>

      {/* Conteneur photo + texte */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl gap-10 text-center md:text-left">
        
        {/* Photo */}
        <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
          <img
            src="/images/adrien.jpg" // ← Mets ici ta vraie photo
            alt="Adrien Selle"
            className="rounded-full shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Texte et compétences */}
        <div className="flex-1 space-y-6">
          <p>
            Je crée des sites modernes, rapides et élégants, pensés pour offrir la meilleure expérience utilisateur.
          </p>

          <p className="opacity-90">
            J’aime transformer des idées en projets concrets, avec une attention particulière portée au design et aux performances. 
            Mon objectif ? Construire des projets qui <strong className="font-semibold text-[#ff8c66]">ont un impact</strong> et qui rendent les utilisateurs heureux.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6 flex-wrap">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-[#e34c26] w-8 h-8 mb-2" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-[#264de4] w-8 h-8 mb-2" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-[#f0db4f] w-8 h-8 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLaravel className="text-[#ff2d20] w-8 h-8 mb-2" />
              <span>Laravel</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-[#1d5f4c] w-8 h-8 mb-2" />
              <span>MySQL</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-12 mt-8 text-[#1d5f4c] font-semibold flex-wrap">
            <div>
              <span className="text-[#ff8c66] text-2xl font-bold">3+</span> projets réalisés
            </div>
            <div>
              <span className="text-[#ff8c66] text-2xl font-bold">2+</span> ans d’expérience
            </div>
            <div>
              <span className="text-[#ff8c66] text-2xl font-bold">100%</span> satisfaction clients
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-6 flex-wrap justify-center">
        <a
          href="/contact"
          className="px-8 py-3 bg-[#ff8c66] text-white font-semibold rounded-lg hover:opacity-90 transition shadow-md hover:shadow-lg"
        >
          Me contacter ✉️
        </a>
      </div>
    </section>
  );
}