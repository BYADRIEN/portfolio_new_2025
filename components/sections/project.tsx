'use client';
import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-jetbrains' });

export default function Projects() {
  const [displayText, setDisplayText] = useState('');
  const phrases = ['Projets en vedette'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#eaf6f1] text-[#1d5f4c]"
    >
      <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${jetBrains.variable} font-mono`}>
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
      <span className="w-20 h-1 bg-[#ff8c66] rounded-full mb-10"></span>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10 max-w-4xl w-full">
        {/* Projet TFE */}
        <div className="bg-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Image du projet */}
          <div className="w-full md:w-1/3">
            <img
              src="/images/laboh-teas.jpg" 
              alt="Laboh des Thés"
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-full hover:scale-105 transition-transform"
            />
          </div>

          {/* Description et lien GitHub */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Laboh des Thés</h3>
              <p className="mb-4 leading-relaxed">
                Site de vente pensé pour offrir une expérience fluide et agréable aux amateurs de thé. Développé dans le cadre de mon TFE avec 
                <strong className='text-[#ff8c66]'> Laravel</strong> et <strong className='text-[#ff8c66]'>MySQL</strong>, interface moderne et responsive.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
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
    </section>
  );
}