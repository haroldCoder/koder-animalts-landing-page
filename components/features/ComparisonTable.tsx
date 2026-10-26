import { CheckCircle2, Check, X as XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ComparisonTable() {
  return (
    <div className="mt-20 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-lg shadow-orange-500/5">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Badge variant="secondary" className="mb-2">
          Transformación Inmediata
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          ¿Por qué migrar tu veterinaria a Koder Animalts?
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Compara el impacto de digitalizar tu clínica frente a los métodos tradicionales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Column 1: Traditional Way */}
        <div className="p-6 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
          <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-bold text-base">
            <XIcon className="w-5 h-5" />
            <span>Gestión Tradicional (Papel, Ficheros, WhatsApp)</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>Historiales médicos en papel que se extravían o tienen letra ilegible.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>Citas anotadas en cuadernos propensas a cruces de horario y ausentismo.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>Mensajes dispersos por WhatsApp para solicitar turnos sin orden centralizado.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold shrink-0">✕</span>
              <span>Mascotas sin trazabilidad de dueño, microchip ni antecedentes clínicos unificados.</span>
            </li>
          </ul>
        </div>

        {/* Column 2: With Koder Animalts */}
        <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 shadow-xs">
          <div className="flex items-center gap-2 mb-4 text-emerald-700 dark:text-emerald-400 font-bold text-base">
            <Check className="w-5 h-5" />
            <span>Con Koder Animalts</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Creación y consulta de expedientes médicos digitales en segundos desde la nube.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Agenda médica organizada por consultorio, doctor y tipo de atención.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Módulo directo de solicitudes de citas con aprobación o reprogramación en 1 clic.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Registro biométrico multiespecie (con microchip) y vinculación con su dueño.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
