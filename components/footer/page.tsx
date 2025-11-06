'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1d5f4c] text-white py-16 shadow-md">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">

        {/* Logo / Nom */}
        <div className="text-3xl font-bold text-center md:text-left">
          Adrien <span className='text-[#ff8c66]'>Dev</span>
        </div>

        {/* Liens de navigation */}
        <nav className="text-center">
          <ul className="flex flex-wrap justify-center gap-6 text-white font-medium">
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
            {/* Logo GitHub */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.306.762-1.606-2.665-.303-5.467-1.332-5.467-5.933 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.004 2.047.137 3 .404 2.29-1.554 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.479 5.922.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.292 0 .322.216.698.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adrien-selle/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff8c66] transition"
          >
            {/* Logo LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.78v2.33h.07c.66-1.24 2.28-2.55 4.7-2.55 5.02 0 5.94 3.3 5.94 7.58V24h-5v-7.95c0-1.9-.03-4.36-2.65-4.36-2.66 0-3.07 2.07-3.07 4.21V24h-5V7z" />
            </svg>
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