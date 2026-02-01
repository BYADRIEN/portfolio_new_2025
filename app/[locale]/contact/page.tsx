'use client';

import React, { useState } from "react";
import { useI18n } from '@/Locales/client';

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const t = useI18n();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xqagrnzd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus(t('contact.status.success')); // Traduction du succès
      form.reset();
    } else {
      setStatus(t('contact.status.error')); // Traduction de l'erreur
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden
      bg-gradient-to-b from-[#0b1f33] via-[#0f2d4a] to-[#0b1f33]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-[420px] h-[420px] bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-24 right-1/4 w-[420px] h-[420px] bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left content */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>

          <p className="text-white/75 text-lg mb-12 leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col gap-4 text-white/80 text-base">
            <a href="mailto:selleadrien@gmail.com" className="hover:text-cyan-400 transition">
              ✉️ selleadrien@gmail.com
            </a>
            <a href="tel:+32472542413" className="hover:text-cyan-400 transition">
              📞 +32 472 54 24 13
            </a>
            <a
              href="https://wa.me/32472542413"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              💬 WhatsApp
            </a>
            <span>{t('contact.location')}</span>
          </div>
        </div>

        {/* Form */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder={t('contact.placeholder.name')}
              required
              className="bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              name="email"
              type="email"
              placeholder={t('contact.placeholder.email')}
              required
              className="bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              name="message"
              rows={5}
              placeholder={t('contact.placeholder.message')}
              required
              className="bg-white/10 text-white placeholder-white/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="mt-2 bg-cyan-400 text-[#0b1f33] py-3 rounded-xl font-semibold tracking-wide hover:bg-cyan-300 transition-all duration-300"
            >
              {t('contact.btn')}
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center font-medium text-cyan-400">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}