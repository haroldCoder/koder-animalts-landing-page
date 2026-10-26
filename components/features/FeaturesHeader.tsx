"use client";

import { Sparkles, Stethoscope, PawPrint } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { UserRole } from "./types";

interface FeaturesHeaderProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function FeaturesHeader({ activeRole, onRoleChange }: FeaturesHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Badge variant="secondary" className="mb-4 py-1 px-3 text-xs">
        <Sparkles className="w-3.5 h-3.5 mr-1 text-[#ff6a2b]" />
        Funcionalidades Clave del Software
      </Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
        Todo el ciclo clínico y de atención{" "}
        <span className="bg-gradient-to-r from-[#ff6a2b] via-[#ff783f] to-[#f59e0b] bg-clip-text text-transparent">
          centralizado y en tiempo real
        </span>
      </h2>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        Diseñado para simplificar el día a día de la veterinaria: historiales médicos completos,
        control de citas, solicitudes online y registro centralizado de mascotas y dueños.
      </p>

      {/* Role Switcher Tabs */}
      <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <button
          onClick={() => onRoleChange("veterinarian")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            activeRole === "veterinarian"
              ? "bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white shadow-md shadow-orange-500/20"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
          id="btn-tab-veterinarian"
        >
          <Stethoscope className="w-4 h-4" />
          <span>Panel de la Clínica</span>
          <span className="hidden sm:inline-block ml-1 text-[11px] px-2 py-0.5 rounded-full bg-white/20 text-white">
            Gestión Médica
          </span>
        </button>

        <button
          onClick={() => onRoleChange("owner")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            activeRole === "owner"
              ? "bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white shadow-md shadow-orange-500/20"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
          id="btn-tab-owner"
        >
          <PawPrint className="w-4 h-4" />
          <span>Portal para Dueños</span>
          <span className="hidden sm:inline-block ml-1 text-[11px] px-2 py-0.5 rounded-full bg-orange-100 dark:bg-slate-800 text-[#ff6a2b]">
            Acceso Tutor
          </span>
        </button>
      </div>
    </div>
  );
}
