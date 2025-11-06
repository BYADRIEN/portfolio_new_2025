'use client';

import { Code, Server, Palette, Rocket, Layers } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 
      bg-gradient-to-b from-[#2ca678] via-[#1d5f4c] to-[#2ca678] text-white"
    >
      <h2 className="text-4xl font-bold mb-12">Ce que je fais</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Front-end */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition">
          <Code className="text-[#ff8c66] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Développement Front-end</h3>
          <p>HTML, CSS, TailwindCSS, Bootstrap, JavaScript, Vue.js, Angular.</p>
        </div>

        {/* Back-end */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition">
          <Server className="text-[#ff8c66] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Développement Back-end</h3>
          <p>PHP, Laravel, Symfony (bases), MySQL, PDO, Java (bases).</p>
        </div>

        {/* CMS */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition">
          <Palette className="text-[#ff8c66] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">CMS & Sites vitrines</h3>
          <p>WordPress, CMS personnalisés, création de sites modernes.</p>
        </div>

        {/* Déploiement */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition">
          <Rocket className="text-[#ff8c66] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Déploiement & Performance</h3>
          <p>Git, GitHub, Vercel & optimisation des performances.</p>
        </div>

        {/* Organisation */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition">
          <Layers className="text-[#ff8c66] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Organisation & Collaboration</h3>
          <p>Trello, Jira, Slack, Postman.</p>
        </div>

      </div>
    </section>
  );
}