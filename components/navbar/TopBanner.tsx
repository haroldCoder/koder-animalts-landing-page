"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id="top-announcement-banner"
      className="relative bg-gradient-to-r from-orange-600 via-[#ff6a2b] to-amber-500 text-white text-xs py-2 px-4 font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-white shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-amber-200" /> Nuevo
          </span>
          <span className="hidden sm:inline">
            ¡Ya disponible el nuevo módulo para tutores y recordatorios automáticos de vacunas!
          </span>
          <span className="sm:hidden">
            Nuevo módulo para tutores y gestión de citas
          </span>
          <a
            href="https://koder-animalts-client.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-amber-100 transition-colors ml-1"
          >
            Explorar demo <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Cerrar anuncio"
          id="close-top-banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
