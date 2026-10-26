"use client";

import { useEffect } from "react";
import { X, ArrowUpRight, Sparkles } from "lucide-react";
import { FeatureKey } from "./types";
import { MedicalHistoryFeature } from "./MedicalHistoryFeature";
import { AppointmentsFeature } from "./AppointmentsFeature";
import { AppointmentRequestsFeature } from "./AppointmentRequestsFeature";
import { PetsAndOwnersFeature } from "./PetsAndOwnersFeature";

interface FeatureOverlayModalProps {
  featureKey: FeatureKey | null;
  onClose: () => void;
  onNavigateToSection: () => void;
}

const FEATURE_TITLES: Record<FeatureKey, string> = {
  pets: "Ficha de Pacientes, Razas e IA",
  appointments: "Agenda y Citas Médicas",
  records: "Historial Clínico Digital y Vacunación",
  requests: "Solicitud y Aprobación de Citas",
};

export function FeatureOverlayModal({
  featureKey,
  onClose,
  onNavigateToSection,
}: FeatureOverlayModalProps) {
  useEffect(() => {
    if (!featureKey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [featureKey, onClose]);

  if (!featureKey) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-feature-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xs shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-100 dark:bg-orange-950/70 text-[#ff6a2b]">
              <Sparkles className="w-3.5 h-3.5" />
              Vista Previa
            </span>
            <h2
              id="modal-feature-title"
              className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md"
            >
              {FEATURE_TITLES[featureKey]}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onNavigateToSection}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#ff6a2b] hover:text-[#e55518] hover:underline px-2 py-1 rounded-lg transition-colors cursor-pointer"
            >
              <span>Ver en página</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content: The exact authentic feature card */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(92vh-130px)] space-y-4">
          {featureKey === "records" && <MedicalHistoryFeature />}
          {featureKey === "appointments" && <AppointmentsFeature />}
          {featureKey === "requests" && <AppointmentRequestsFeature />}
          {featureKey === "pets" && <PetsAndOwnersFeature />}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-5 sm:px-7 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex items-center justify-between shrink-0">
          <p className="text-[11px] text-slate-500">
            Tarjeta interactiva en vivo · Basada en la plataforma real
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onNavigateToSection}
              className="sm:hidden text-xs font-bold text-[#ff6a2b] px-3 py-1.5 rounded-lg"
            >
              Ver en página
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
