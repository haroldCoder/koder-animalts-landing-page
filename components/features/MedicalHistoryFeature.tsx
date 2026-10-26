"use client";

import { useState } from "react";
import {
  FileText,
  FileCheck2,
  CheckCircle2,
  Stethoscope,
  Scissors,
  AlertCircle,
  Syringe,
  ChevronDown,
  User,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MedicalHistoryFeature() {
  const [selectedType, setSelectedType] = useState<"consultation" | "surgery" | "vaccination" | "emergency">("consultation");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-orange-300 dark:hover:border-slate-700 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600">
            <FileText className="w-6 h-6" />
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b]">
              <Sparkles className="w-3 h-3 text-[#ff6a2b]" /> Tell History
            </span>
            <Badge variant="secondary">Cero Papel</Badge>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Creación y Visualización de Historiales Médicos
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          Registra consultas médicas clasificadas por tipo de atención, diagnósticos detallados,
          tratamientos farmacológicos y documentos adjuntos. Incluye formato narrativo
          cronológico (*Tell History*) para que doctores y tutores comprendan la evolución del paciente.
        </p>

        {/* Consultation Types Selector (from types-config.ts in web app) */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <button
            type="button"
            onClick={() => setSelectedType("consultation")}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
              selectedType === "consultation"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Consulta General</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedType("vaccination")}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
              selectedType === "vaccination"
                ? "bg-sky-600 text-white shadow-xs"
                : "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900/40"
            }`}
          >
            <Syringe className="w-3.5 h-3.5" />
            <span>Vacunación</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedType("surgery")}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
              selectedType === "surgery"
                ? "bg-rose-600 text-white shadow-xs"
                : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40"
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>Cirugía</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedType("emergency")}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
              selectedType === "emergency"
                ? "bg-red-600 text-white shadow-xs"
                : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 border border-red-200/60 dark:border-red-900/40"
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Urgencias</span>
          </button>
        </div>

        <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Creación rápida de expediente con notas clínicas y prescripción.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Carga de exámenes de laboratorio (PDFs) y recetas digitales.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Soporte cronológico para seguimiento post-operatorio y evoluciones.</span>
          </li>
        </ul>
      </div>

      {/* Faithful Replica of MedicalRecordCardToggle from koder-animalts-web */}
      <div
        className={`rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden border-l-4 ${
          selectedType === "consultation"
            ? "border-l-emerald-500"
            : selectedType === "vaccination"
            ? "border-l-sky-500"
            : selectedType === "surgery"
            ? "border-l-rose-500"
            : "border-l-red-600"
        }`}
      >
        {/* Toggle Header */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-100/60 dark:hover:bg-slate-900 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl text-white font-bold ${
                selectedType === "consultation"
                  ? "bg-emerald-600"
                  : selectedType === "vaccination"
                  ? "bg-sky-600"
                  : selectedType === "surgery"
                  ? "bg-rose-600"
                  : "bg-red-600"
              }`}
            >
              {selectedType === "consultation" && <Stethoscope className="w-4 h-4" />}
              {selectedType === "vaccination" && <Syringe className="w-4 h-4" />}
              {selectedType === "surgery" && <Scissors className="w-4 h-4" />}
              {selectedType === "emergency" && <AlertCircle className="w-4 h-4" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    selectedType === "consultation"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      : selectedType === "vaccination"
                      ? "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"
                      : selectedType === "surgery"
                      ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                      : "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"
                  }`}
                >
                  {selectedType === "consultation" && "Consulta General"}
                  {selectedType === "vaccination" && "Vacunación"}
                  {selectedType === "surgery" && "Cirugía"}
                  {selectedType === "emergency" && "Urgencias"}
                </span>
                <span className="text-xs text-slate-400">14 Octubre 2026</span>
              </div>
              <h5 className="font-bold text-slate-800 dark:text-slate-200 text-xs mt-0.5">
                {selectedType === "consultation" && "Gastroenteritis bacteriana aguda · Tommy"}
                {selectedType === "vaccination" && "Refuerzo Quíntuple + Rabia Anual · Milo"}
                {selectedType === "surgery" && "Profilaxis y Limpieza Dental Ultrasónica · Doggy"}
                {selectedType === "emergency" && "Traumatismo por caída con cojera leve · Rocky"}
              </h5>
            </div>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expanded Content Area Toggle */}
        {isExpanded && (
          <div className="p-4 bg-slate-50/50 dark:bg-slate-950 space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-950 text-[#ff6a2b]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Veterinario Tratante</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Dr. Test veterinary (Clínica San Vicente)</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                Evolución Favorable
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold uppercase block">Tratamiento & Prescripción</span>
              <p className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                Antibioticoterapia oral por 7 días · Dieta blanda gastrointestinal gastro-enteric · Control en 5 días.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                <FileCheck2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Hemograma_Completo.pdf</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                <FileCheck2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Receta_Digital_#402.pdf</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
