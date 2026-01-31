'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#020617]/90 backdrop-blur shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-white tracking-wide"
        >
          Adrien<span className="text-sky-400">Dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm text-slate-200">
            {[
              { name: 'À propos', href: '/#about' },
              { name: 'Compétences', href: '/#skills' },
              { name: 'Projets', href: '/#projects' },
            ].map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative transition hover:text-sky-400 
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                  after:bg-sky-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact icons */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="mailto:selleadrien@gmail.com"
              className="hover:text-sky-400 transition"
            >
              <FiMail />
            </a>
            <a
              href="tel:+32472542413"
              className="hover:text-sky-400 transition"
            >
              <FiPhone />
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-md 
            bg-sky-400 text-slate-900 
            hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/30 transition"
          >
            Me contacter
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? (
            <HiOutlineX className="w-6 h-6" />
          ) : (
            <HiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#020617] px-6 pb-6 animate-slideDown">
          <ul className="flex flex-col gap-4 text-slate-200 text-sm">
            <li>
              <Link href="/#about" onClick={() => setIsOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setIsOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={() => setIsOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sky-400 font-medium"
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}