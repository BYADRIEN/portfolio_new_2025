export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C12] text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo ou nom */}
        <h3 className="text-xl font-semibold">Adrien Selle — Developer</h3>

        {/* Liens */}
        <nav className="flex gap-6 text-sm opacity-80">
          <a href="#about" className="hover:text-purple-400 transition">À propos</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projets</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>

        {/* Réseaux */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/BYADRIEN" target="_blank" className="hover:text-purple-400 transition">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="hover:text-purple-400 transition">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="mailto:selleadrien@gmail.com" className="hover:text-purple-400 transition">
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>

      {/* Bas du footer */}
      <p className="mt-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()} — Crafted with ❤️ & Next.js
      </p>
    </footer>
  );
}