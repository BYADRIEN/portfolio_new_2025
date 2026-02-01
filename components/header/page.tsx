'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiMail, FiPhone } from 'react-icons/fi'; 
import { useI18n, useChangeLocale, useCurrentLocale } from '@/Locales/client';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#020617]/90 backdrop-blur shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white tracking-wide">
          Adrien<span className="text-sky-400">Dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm text-slate-200">
            {[
              { name: t('nav.about'), href: '/#about' },
              { name: t('nav.skills'), href: '/#skills' },
              { name: t('nav.projects'), href: '/#projects' },
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

          {/* Contact & Language Icons */}
          <div className="flex items-center gap-5 border-l border-white/10 pl-5">
            <a href="mailto:selleadrien@gmail.com" title="Email" className="hover:text-sky-400 transition text-slate-300 text-lg">
              <FiMail />
            </a>

            {/* LE VOICI : Le logo téléphone */}
            <a href="tel:+32472542413" title="Téléphone" className="hover:text-sky-400 transition text-slate-300 text-lg">
              <FiPhone />
            </a>
            
            <div className="flex items-center gap-2 text-[10px] font-bold ml-2">
              <button 
                onClick={() => changeLocale('fr')}
                className={`transition ${currentLocale === 'fr' ? 'text-sky-400' : 'text-slate-500 hover:text-white'}`}
              >
                FR
              </button>
              <span className="text-slate-700">|</span>
              <button 
                onClick={() => changeLocale('en')}
                className={`transition ${currentLocale === 'en' ? 'text-sky-400' : 'text-slate-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium rounded-md 
            bg-sky-400 text-slate-900 
            hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/30 transition"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#020617] px-6 pb-6 border-b border-white/5">
          <ul className="flex flex-col gap-4 text-slate-200 text-sm">
            <li><Link href="/#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</Link></li>
            <li><Link href="/#skills" onClick={() => setIsOpen(false)}>{t('nav.skills')}</Link></li>
            <li><Link href="/#projects" onClick={() => setIsOpen(false)}>{t('nav.projects')}</Link></li>
            
            {/* Langues en mobile */}
            <li className="flex gap-4 py-2 border-y border-white/5 text-xs">
                <button onClick={() => { changeLocale('fr'); setIsOpen(false); }} className={currentLocale === 'fr' ? 'text-sky-400' : ''}>FRANÇAIS</button>
                <button onClick={() => { changeLocale('en'); setIsOpen(false); }} className={currentLocale === 'en' ? 'text-sky-400' : ''}>ENGLISH</button>
            </li>

            <li className="flex gap-6 py-2">
                <a href="mailto:selleadrien@gmail.com" className="text-xl"><FiMail /></a>
                <a href="tel:+32472542413" className="text-xl text-sky-400"><FiPhone /></a>
            </li>

            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sky-400 font-medium">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}