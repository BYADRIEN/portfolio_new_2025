import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Providers from "./providers";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Adrien Dev",
  description: "Portfolio de Adrien Selle – Développeur Web Full Stack",
  icons: {
    icon: "/favicon.ico",
  },
};

// 1. On ajoute "async" devant la fonction
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // 2. Le type de params devient une Promise
  params: Promise<{ locale: string }>;
}) {
  
  // 3. On "déballe" les paramètres avec await
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 4. On utilise la constante 'locale' extraite ci-dessus */}
        <Providers locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}