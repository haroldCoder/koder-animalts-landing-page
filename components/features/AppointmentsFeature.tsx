"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Stethoscope,
  Scissors,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AppointmentsFeature() {
  const [filter, setFilter] = useState<"all" | "scheduled" | "completed">("all");

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-orange-300 dark:hover:border-slate-700 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
            <Calendar className="w-6 h-6" />
          </span>
          <Badge variant="outline">Organización Total</Badge>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Creación y Visualización de Citas
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          Agenda médica centralizada por consultorio y doctor. Organiza turnos de consulta general,
          vacunación o cirugías, con control de estados en tiempo real (Programada, Realizada o Cancelada)
          para evitar cruces y ausentismo.
        </p>

        {/* Filter buttons matching web app status-labels */}
        <div className="flex gap-1.5 mb-4">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              filter === "all"
                ? "bg-[#ff6a2b] text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            Todas las Citas
          </button>
          <button
            type="button"
            onClick={() => setFilter("scheduled")}
            className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              filter === "scheduled"
                ? "bg-[#ff6a2b] text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            Programadas
          </button>
          <button
            type="button"
            onClick={() => setFilter("completed")}
            className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              filter === "completed"
                ? "bg-[#ff6a2b] text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            Realizadas
          </button>
        </div>

        <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Creación rápida de citas con fecha, hora, consultorio y doctor asignado.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Visualización cronológica y filtro por estado para el equipo médico.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Integración directa con el historial clínico una vez realizada la cita.</span>
          </li>
        </ul>
      </div>

      {/* Faithful Replica of Appointment Schedule Cards from koder-animalts-web */}
      <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 text-xs">
        <div className="flex items-center justify-between pb-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Agenda del Día · Clínica San Vicente
          </span>
          <span className="text-[10px] font-bold text-[#ff6a2b]">
            2 citas en lista
          </span>
        </div>

        {(filter === "all" || filter === "scheduled") && (
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-800 dark:text-slate-200">
                    Tommy · Revisión visual y Vacunas
                  </p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-950">
                    Programada
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Dr. Test veterinary · Tutor: Test owner
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-500" /> 10:00 AM
              </span>
              <span className="text-[10px] text-slate-400">Consultorio 1</span>
            </div>
          </div>
        )}

        {(filter === "all" || filter === "completed") && (
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-800 dark:text-slate-200">
                    Milo · Profilaxis Dental
                  </p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-950">
                    Realizada
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Dr. Alejandro R. · Procedimiento Quirúrgico
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-500" /> 11:30 AM
              </span>
              <span className="text-[10px] text-slate-400">Quirófano A</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
