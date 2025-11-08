'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1d5f4c] py-5 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <div className="text-2xl font-bold text-white">
          Adrien <span className="text-[#ff8c66]">Dev</span>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-[#ff8c66] transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#ff8c66] transition">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-[#ff8c66] transition">
                Compétences
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-[#ff8c66] transition">
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff8c66] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#1d5f4c] w-full px-6 pt-4 pb-6">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-[#ff8c66] transition" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#ff8c66] transition" onClick={() => setIsOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-[#ff8c66] transition" onClick={() => setIsOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-[#ff8c66] transition" onClick={() => setIsOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff8c66] transition" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}