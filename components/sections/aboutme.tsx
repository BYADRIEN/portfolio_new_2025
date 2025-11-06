'use client';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#eaf6f1] text-[#1d5f4c]"
    >
      <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
      <span className="w-16 h-1 bg-[#ff8c66] rounded-full mb-10"></span>

      <div className="max-w-4xl text-center space-y-6">
        <p className="text-lg sm:text-xl leading-relaxed">
          Hey 👋 Moi c’est <strong>Adrien Selle</strong>, développeur Web Full Stack basé à Charleroi.
          Je conçois et développe des sites modernes, rapides, élégants et pensés pour les utilisateurs.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed opacity-90">
          J’aime créer des interfaces fluides, avec une attention particulière portée au design et à l’expérience.
          Mon objectif ? Construire des projets qui <strong>ont un impact</strong>.
        </p>
      </div>

      <a
        href="#contact"
        className="mt-10 px-8 py-3 bg-[#ff8c66] text-white font-semibold rounded-lg hover:opacity-90 transition shadow-md hover:shadow-lg"
      >
        Me contacter ✉️
      </a>
    </section>
  );
}