'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';
import { useI18n } from '@/Locales/client';

export default function Footer() {
  const t = useI18n();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#0b1f33] to-[#020617] text-white">
      
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Identity */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">
              Adrien<span className="text-cyan-400">Dev</span>
            </h2>
            <p className="mt-2 text-sm text-white/70">
              {t('footer.role')} <br />
              Laravel • Front-end • UX
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/80">
              <li><Link href="/" className="hover:text-cyan-400 transition">{t('footer.nav.home')}</Link></li>
              <li><Link href="/#about" className="hover:text-cyan-400 transition">{t('footer.nav.about')}</Link></li>
              <li><Link href="/#skills" className="hover:text-cyan-400 transition">{t('footer.nav.skills')}</Link></li>
              <li><Link href="/#projects" className="hover:text-cyan-400 transition">{t('footer.nav.projects')}</Link></li>
              <li><Link href="/#contact" className="hover:text-cyan-400 transition">{t('footer.nav.contact')}</Link></li>
            </ul>
          </nav>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-5">
            <SocialLink href="https://github.com/BYADRIEN">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/adrien-selle/">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://www.malt.fr/profile/adrienselle">
              <SiMalt />
            </SocialLink>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10"></div>

        {/* Bottom */}
        <div className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Adrien Selle — {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}

/* Social button remains unchanged */
function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-xl flex items-center justify-center
      bg-white/5 border border-white/10
      hover:border-cyan-400/40 hover:bg-cyan-400/10
      transition-all duration-300 text-lg"
    >
      {children}
    </a>
  );
}