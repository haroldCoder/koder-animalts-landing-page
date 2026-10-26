"use client";

import { useState } from "react";
import {
  PawPrint,
  CheckCircle2,
  Sparkles,
  Scale,
  Calendar,
  Palette,
  Tag,
  Building2,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PetsAndOwnersFeature() {
  const [isAiMode, setIsAiMode] = useState(false);
  const [selectedPet, setSelectedPet] = useState<"milo" | "tommy">("milo");

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-orange-300 dark:hover:border-slate-700 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b]">
            <PawPrint className="w-6 h-6" />
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300">
              <Sparkles className="w-3 h-3 text-purple-600" /> Avatar con IA
            </span>
            <Badge variant="secondary">Multiespecie</Badge>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Registro de Mascotas y Dueños
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          Gestiona expedientes biométricos completos: especie, raza, peso, microchip de 15 dígitos
          y asignación de clínica. Integra generación de avatares con inteligencia artificial y
          vinculación directa con los datos del tutor.
        </p>

        {/* Pet Switcher tabs */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-slate-500">Seleccionar paciente:</span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => {
                setSelectedPet("milo");
                setIsAiMode(false);
              }}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedPet === "milo"
                  ? "bg-[#ff6a2b] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              🐱 Milo (Felino)
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedPet("tommy");
                setIsAiMode(false);
              }}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedPet === "tommy"
                  ? "bg-[#ff6a2b] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              🐶 Tommy (Canino)
            </button>
          </div>
        </div>

        <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Ficha con microchip internacional, fecha de nacimiento y color.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Procesamiento de imagen real y avatar interactivo con IA.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Vinculación con el tutor registrado y su clínica de cabecera.</span>
          </li>
        </ul>
      </div>

      {/* Faithful Replica of CardMainPet from koder-animalts-web */}
      <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Top Header with Avatar & IA Toggle */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff6a2b] to-[#f59e0b] border-2 border-amber-500/20 flex items-center justify-center text-white text-2xl font-bold shadow-xs">
                {selectedPet === "milo" ? (isAiMode ? "✨🐱" : "🐱") : (isAiMode ? "✨🐕" : "🐕")}
              </div>
              <button
                type="button"
                onClick={() => setIsAiMode(!isAiMode)}
                className={`absolute -bottom-1 -right-1 p-1 rounded-full text-[10px] font-bold shadow-sm transition-transform hover:scale-110 cursor-pointer ${
                  isAiMode
                    ? "bg-purple-600 text-white"
                    : "bg-amber-500 text-white"
                }`}
                title="Alternar avatar IA"
              >
                <Sparkles className="w-3 h-3" />
              </button>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  {selectedPet === "milo" ? "Milo" : "Tommy"}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Activo
                </span>
                {isAiMode && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-950">
                    Modo IA
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">
                {selectedPet === "milo"
                  ? "British Shorthair · Macho"
                  : "Golden Retriever · Macho"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/60 border border-orange-200/60 dark:border-orange-900/40 text-xs font-semibold text-[#ff6a2b]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Clínica San Vicente</span>
          </div>
        </div>

        {/* Bio metrics grid */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-slate-50/50 dark:bg-slate-950">
          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Scale className="w-3 h-3 text-slate-400" /> Peso
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {selectedPet === "milo" ? "4.6 kg" : "28.5 kg"}
            </span>
          </div>

          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Palette className="w-3 h-3 text-slate-400" /> Color
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {selectedPet === "milo" ? "Gris Ceniza" : "Dorado Claro"}
            </span>
          </div>

          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Tag className="w-3 h-3 text-slate-400" /> Especie
            </span>
            <span className="font-bold text-[#ff6a2b]">
              {selectedPet === "milo" ? "Felino (Cat)" : "Canino (Dog)"}
            </span>
          </div>

          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" /> Nacimiento
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {selectedPet === "milo" ? "14 May 2022" : "08 Ene 2021"}
            </span>
          </div>
        </div>

        {/* Linked Owner Footer */}
        <div className="px-4 py-3 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-950 text-[#ff6a2b]">
              <User className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Tutor Registrado</p>
              <p className="font-bold text-slate-800 dark:text-slate-200">Test owner (test-owner@test.co)</p>
            </div>
          </div>
          <span className="font-mono text-[11px] text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
            Chip: 985141000123456
          </span>
        </div>
      </div>
    </div>
  );
}
