'use client';

import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#eaf6f1] text-[#1d5f4c]"
    >
      <h2 className="text-4xl font-bold mb-12">Mes projets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl w-full">
        {/* Projet TFE */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Image du projet */}
          <div className="w-full md:w-1/3">
            <img
              src="/images/laboh-teas.png" // mets ici le chemin vers ton image
              alt="Laboh des Thés"
              className="rounded-lg shadow-md object-cover w-full h-48 md:h-full"
            />
          </div>

          {/* Description et lien GitHub */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Laboh des Thés</h3>
              <p className="mb-4">
                Site de vente de thés développé dans le cadre de mon TFE avec Laravel et MySQL.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <a
                href="https://github.com/BYADRIEN/Labo-th-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1d5f4c] hover:text-[#2ca678] font-semibold"
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