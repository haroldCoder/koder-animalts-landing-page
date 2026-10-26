"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  X,
  Calendar,
  Clock,
  User,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AppointmentRequestsFeature() {
  const [requestStatus, setRequestStatus] = useState<"pending" | "approved" | "rejected">("pending");

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-orange-300 dark:hover:border-slate-700 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600">
            <Bell className="w-6 h-6" />
          </span>
          <Badge variant="orange">Flujo en Tiempo Real</Badge>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Solicitudes de Citas Médicas
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          Los tutores envían solicitudes directas con fecha preferida, doctor y motivo.
          La clínica recibe la solicitud en su bandeja de entrada y puede aprobarla o rechazarla
          inmediatamente con un solo clic.
        </p>

        <ul className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Recepción de solicitudes online sin llamadas telefónicas.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Botones de acción directa: Aprobar con agenda automática o Rechazar.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Notificación inmediata del estado al tutor en su panel.</span>
          </li>
        </ul>
      </div>

      {/* Faithful Replica of RequestAppointmentCard & ActionsRequest from koder-animalts-web */}
      <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Request Card Header */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                requestStatus === "approved"
                  ? "bg-green-500"
                  : requestStatus === "rejected"
                  ? "bg-red-500"
                  : "bg-amber-500 animate-pulse"
              }`}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Solicitud de Cita
            </span>
          </div>

          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
              requestStatus === "approved"
                ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                : requestStatus === "rejected"
                ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
            }`}
          >
            {requestStatus === "approved"
              ? "Aprobada"
              : requestStatus === "rejected"
              ? "Rechazada"
              : "Pendiente"}
          </span>
        </div>

        {/* Request Details Body */}
        <div className="p-4 space-y-3 text-xs bg-slate-50/40 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950 text-[#ff6a2b] flex items-center justify-center font-bold text-sm">
                🐾
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                  Tommy
                </h5>
                <p className="text-[11px] text-slate-400">Canino · Golden Retriever</p>
              </div>
            </div>

            <div className="text-right text-[11px] text-slate-500">
              <p className="flex items-center gap-1 justify-end font-semibold text-slate-700 dark:text-slate-300">
                <Calendar className="w-3 h-3 text-orange-500" /> 16 de Octubre
              </p>
              <p className="flex items-center gap-1 justify-end">
                <Clock className="w-3 h-3 text-slate-400" /> 10:00 AM
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
              Motivo de la Solicitud
            </span>
            <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
              Revisión visual general y aplicación de refuerzo anual de vacuna.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600 dark:text-slate-300 truncate">
                Tutor: Test owner
              </span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
              <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-slate-600 dark:text-slate-300 truncate">
                Dr. Test veterinary
              </span>
            </div>
          </div>
        </div>

        {/* Faithful ActionsRequest Bar */}
        <div className="flex items-center gap-2.5 px-4 py-3 justify-end border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setRequestStatus("rejected")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-red-400 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Rechazar</span>
          </button>

          <button
            type="button"
            onClick={() => setRequestStatus("approved")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-green-600 hover:bg-green-700 text-white shadow-xs transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Aprobar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
