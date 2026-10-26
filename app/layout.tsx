import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Koder Animalts | Software Integral de Gestión Veterinaria",
  description:
    "Simplifica la gestión de tu clínica veterinaria, citas, historial médico, vacunas y mantén la mejor conexión con los tutores de mascotas.",
  keywords: [
    "veterinaria",
    "software veterinario",
    "gestión de clínicas",
    "cuidado de mascotas",
    "historial médico mascotas",
    "vacunas animales",
    "koder animalts",
  ],
  authors: [{ name: "Koder Animalts" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-orange-500/20 selection:text-orange-600">
        {children}
      </body>
    </html>
  );
}
