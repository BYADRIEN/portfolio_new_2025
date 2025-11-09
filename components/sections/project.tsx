'use client';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { JetBrains_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(
  () => import('react-simple-typewriter').then(mod => mod.Typewriter),
  { ssr: false }
);

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-jetbrains' });

export default function Projects() {
  const phrases = ['Projets en vedette'];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#eaf6f1] text-[#1d5f4c]"
    >
      <h2
        className={`text-2xl sm:text-5xl font-bold mb-4 text-center ${jetBrains.variable} font-mono`}
      >
        <Typewriter
          words={phrases}
          loop
          cursor
          cursorStyle="|"
          cursorColor="#ff8c66"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <span className="w-20 h-1 bg-[#ff8c66] rounded-full mb-12"></span>

      {/* Labo des Thés */}
      <div className="w-full max-w-4xl mb-16">
        <div className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.02] flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/images/laboh-teas.jpg"
              alt="Laboh des Thés"
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-full hover:scale-105 transition-transform"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold">Labo des Thés</h3>
            <p className="leading-relaxed text-base sm:text-lg">
              Site e-commerce moderne permettant aux amateurs de thé de découvrir et acheter des produits de qualité.
              Conçu dans le cadre de mon TFE avec <strong className="text-[#ff8c66]">Laravel</strong> & <strong className="text-[#ff8c66]">MySQL</strong>.
              Interface propre, animations douces et design responsive.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a
                href="https://github.com/BYADRIEN/Labo-th-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1d5f4c] hover:text-[#2ca678] font-semibold transition-colors"
              >
                <FaGithub className="text-xl" /> Voir le code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Roue comme projet */}
      <div className="w-full max-w-4xl mb-16">
        <div className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.02] flex flex-col md:flex-row gap-6">
          {/* Image / visuel */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/images/zz.png" // <-- mettre une image représentative de la roue
              alt="Roue - Une seule chance"
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-full hover:scale-105 transition-transform"
            />
          </div>

          {/* Texte + liens */}
          <div className="w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold">Roue - Une seule chance</h3>
            <p className="leading-relaxed text-base sm:text-lg">
              Petit jeu interactif permettant aux visiteurs de découvrir leur saveur ou gain surprise ! 
              Démonstration d’animations CSS et interactions JavaScript dynamiques. 
              Design responsive, couleurs dynamiques et intégré directement dans mon portfolio.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a
                href="https://github.com/BYADRIEN/roue_shortys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1d5f4c] hover:text-[#2ca678] font-semibold transition-colors"
              >
                <FaGithub className="text-xl" /> Voir le code
              </a>
              <a
                href="https://byadrien.github.io/roue_shortys/" // <-- lien testable du projet
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1d5f4c] hover:text-[#ff8c66] font-semibold transition-colors"
              >
                <FaPlay className="text-xl" /> Tester
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}