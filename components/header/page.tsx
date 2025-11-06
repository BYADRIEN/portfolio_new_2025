'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#1d5f4c] py-5 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-2xl font-bold text-white">
          Adrien Selle
        </div>

        {/* Liens de navigation */}
        <nav>
          <ul className="flex gap-6 text-white font-medium">
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
      </div>
    </header>
  );
}