'use client';
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

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
      setStatus("Message envoyé ✅");
      form.reset();
    } else {
      setStatus("Erreur, réessayez plus tard.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2ca678] via-[#1d5f4c] to-[#2ca678] py-20 px-6">
      <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-10 max-w-xl w-full text-[#1d5f4c]">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>

        {/* Bloc infos contact */}
        <div className="flex flex-col gap-3 mb-8 text-center md:text-left">
          <a href="mailto:selleadrien@gmail.com" className="text-[#1d5f4c] hover:text-[#ff8c66] transition font-medium">
            ✉️ selleadrien@gmail.com
          </a>
          <a href="tel:+32472542413" className="text-[#1d5f4c] hover:text-[#ff8c66] transition font-medium">
            📞 +32 472 54 24 13
          </a>
          <a href="https://wa.me/32472542413" target="_blank" rel="noopener noreferrer" className="text-[#1d5f4c] hover:text-[#ff8c66] transition font-medium">
            💬 WhatsApp
          </a>
          <p className="text-[#1d5f4c] font-medium">Charleroi, Belgique</p>
        </div>

        {/* Formulaire */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Votre nom" className="border rounded px-4 py-2 focus:ring-2 focus:ring-[#ff8c66]" />
          <input name="email" type="email" placeholder="Votre email" className="border rounded px-4 py-2 focus:ring-2 focus:ring-[#ff8c66]" />
          <textarea name="message" rows={5} placeholder="Votre message..." className="border rounded px-4 py-2 focus:ring-2 focus:ring-[#ff8c66]"></textarea>
          <button type="submit" className="bg-[#1d5f4c] text-white py-3 rounded-lg hover:bg-[#184c3c] transition">
            Contactez-moi
          </button>
        </form>

        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </div>
    </section>
  );
}