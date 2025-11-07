'use client';
import { Code, Server, Palette, Rocket, Layers } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-jetbrains' });

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#2ca678] via-[#1d5f4c] to-[#2ca678] text-white"
    >
      <h2 className={`text-2xl sm:text-5xl font-bold mb-12 ${jetBrains.variable} font-mono`}>
        <Typewriter
          words={['Compétences clés']}
          loop
          cursor
          cursorStyle="|"
          cursorColor="#ff8c66"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Front-end */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
          <Code className="text-[#ff8c66] w-12 h-12 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Développement Front-end</h3>
          <p className="leading-relaxed">HTML, CSS, TailwindCSS, Bootstrap, JavaScript, Vue.js, Angular.</p>
        </div>

        {/* Back-end */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
          <Server className="text-[#ff8c66] w-12 h-12 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Développement Back-end</h3>
          <p className="leading-relaxed">PHP, Laravel, Symfony (bases), MySQL, PDO, Java (bases).</p>
        </div>

        {/* CMS */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
          <Palette className="text-[#ff8c66] w-12 h-12 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">CMS & Sites vitrines</h3>
          <p className="leading-relaxed">WordPress, CMS personnalisés, création de sites modernes.</p>
        </div>

        {/* Déploiement */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
          <Rocket className="text-[#ff8c66] w-12 h-12 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Déploiement & Performance</h3>
          <p className="leading-relaxed">Git, GitHub, Vercel & optimisation des performances.</p>
        </div>

        {/* Organisation */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
          <Layers className="text-[#ff8c66] w-12 h-12 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Organisation & Collaboration</h3>
          <p className="leading-relaxed">Trello, Jira, Slack, Postman.</p>
        </div>
      </div>
    </section>
  );
}