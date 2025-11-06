'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1d5f4c] text-white py-16 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Nom */}
        <div className="text-3xl font-bold">
          Adrien Selle
        </div>

        {/* Liens de navigation */}
        <nav>
          <ul className="flex gap-6 text-white font-medium flex-wrap justify-center md:justify-start">
            <li>
              <Link href="#home" className="hover:text-[#ff8c66] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#ff8c66] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-[#ff8c66] transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-[#ff8c66] transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#ff8c66] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://github.com/BYADRIEN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff8c66] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-selle/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff8c66] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm opacity-70 text-center mt-6">
        © {new Date().getFullYear()} Adrien Selle. All rights reserved.
      </div>
    </footer>
  );
}