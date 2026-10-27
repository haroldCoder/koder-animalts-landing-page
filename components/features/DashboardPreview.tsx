"use client";

import { useState } from "react";
import {
  Building2,
  Calendar,
  CalendarClock,
  CalendarPlus,
  ClipboardList,
  Clock,
  FileText,
  History,
  LayoutDashboard,
  PawPrint,
  Search,
  Stethoscope,
  Syringe,
  Tag,
  Users,
  CheckCircle2,
  BellRing,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DashboardPreview() {
  const [role, setRole] = useState<"veterinary" | "owner">("veterinary");
  const [searchTerm, setSearchTerm] = useState("");

  const pets = [
    {
      id: "1",
      name: "Max",
      breed: "Golden Retriever",
      birthdate: "12/04/2021",
      owner: "Carlos Mendoza",
      microchip: "981098102938475",
      avatarBg: "from-amber-400 to-orange-500",
      avatarLetter: "M",
      isActive: true,
      species: "Canino",
    },
    {
      id: "2",
      name: "Luna",
      breed: "Siamés Tradicional",
      birthdate: "05/08/2022",
      owner: "Sofía Gómez",
      microchip: "981098102938476",
      avatarBg: "from-purple-400 to-indigo-500",
      avatarLetter: "L",
      isActive: true,
      species: "Felino",
    },
    {
      id: "3",
      name: "Rocky",
      breed: "Bulldog Francés",
      birthdate: "19/01/2023",
      owner: "Andrés Ramírez",
      microchip: "981098102938477",
      avatarBg: "from-blue-400 to-cyan-500",
      avatarLetter: "R",
      isActive: true,
      species: "Canino",
    },
  ];

  const filteredPets = pets.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-14 max-w-6xl mx-auto rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-orange-200/50 via-amber-100/30 to-slate-100/30 dark:from-slate-800/50 dark:via-slate-900/50 dark:to-slate-950/50 border border-orange-200/80 dark:border-slate-800 shadow-2xl">
      <div className="rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg">
        {/* Simulated Browser Chrome / Top Bar */}
        <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />

            <div className="hidden sm:flex items-center gap-1.5 ml-3 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
              <span className="text-emerald-500">https://</span>
              <span>app.koderanimalts.com/dashboard</span>
            </div>
          </div>

          {/* Role Switcher Pill (Vet vs Owner) */}
          <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              type="button"
              onClick={() => setRole("veterinary")}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                role === "veterinary"
                  ? "bg-white dark:bg-slate-900 text-[#ff6a2b] shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Panel Veterinario</span>
            </button>
            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                role === "owner"
                  ? "bg-white dark:bg-slate-900 text-[#ff6a2b] shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <PawPrint className="w-3.5 h-3.5" />
              <span>Portal de Tutor</span>
            </button>
          </div>
        </div>

        {/* Real App Header from koder-animalts-web */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1220] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Square 'A' Logo */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#ff6a2b] rounded-xl flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/30">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-black text-[#ff6a2b] leading-tight">
                Dashboard
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                {role === "veterinary"
                  ? "Bienvenido, Dr. Alejandro Rodríguez"
                  : "Bienvenido, Carlos Mendoza"}
              </p>
            </div>
          </div>

          {/* Desktop NavMenu Links Replica */}
          <div className="hidden lg:flex items-center gap-1">
            <span className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 flex items-center gap-1.5">
              <BellRing className="w-3.5 h-3.5 text-[#ff6a2b]" />
              <span>Solicitudes</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#ff6a2b] text-white text-[10px] font-bold">
                2
              </span>
            </span>

            <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#ff6a2b] bg-orange-50 dark:bg-orange-950/60 flex items-center gap-1.5">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </span>

            {role === "veterinary" ? (
              <>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <CalendarClock className="w-3.5 h-3.5" />
                  <span>Eventos Médicos</span>
                </span>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Programar Cita</span>
                </span>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>Historial Médico</span>
                </span>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <Syringe className="w-3.5 h-3.5" />
                  <span>Vacunas</span>
                </span>
              </>
            ) : (
              <>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <PawPrint className="w-3.5 h-3.5" />
                  <span>Mis Mascotas</span>
                </span>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5" />
                  <span>Historial de Citas</span>
                </span>
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Documentos</span>
                </span>
              </>
            )}
          </div>

          {/* User Profile Avatar & Status */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff6a2b] to-[#f59e0b] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              {role === "veterinary" ? "AR" : "CM"}
            </div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 hidden md:inline-block">
              {role === "veterinary" ? "Dr. Alejandro" : "Carlos M."}
            </span>
          </div>
        </div>

        {/* Dashboard Main Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/70 dark:bg-[#070b13] space-y-8">
          {role === "veterinary" ? (
            <>
              {/* 1. SECCIÓN: Citas Próximas (AppointmentNoticeVet + CardNotice & CardVaccination) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      Citas Próximas
                    </h3>
                    <BellRing className="w-5 h-5 text-[#ff6a2b]" />
                  </div>
                  <Badge variant="outline" className="text-xs border-orange-200 text-[#ff6a2b]">
                    2 para hoy
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* CardNotice (Appointment) */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-orange-200/80 dark:border-slate-800 shadow-xs flex flex-col items-center text-center hover:border-orange-300 transition-all">
                    <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
                      Hoy · 10:30 AM
                    </span>
                    <div className="w-16 h-16 rounded-full border-2 border-[#ff6a2b] p-0.5 mb-3 shadow-xs">
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-xl font-black">
                        🐾
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      ¡A <span className="font-black text-[#ff6a2b]">Max</span> le toca su cita{" "}
                      <span className="font-black text-slate-900 dark:text-white">Hoy</span>!
                    </p>
                    <span className="mt-2.5 text-[11px] font-bold uppercase tracking-wider text-[#ff6a2b] bg-orange-50 dark:bg-orange-950/60 border border-orange-200/50 px-2.5 py-0.5 rounded-md">
                      Consulta General y Refuerzo
                    </span>
                    <p className="text-xs text-slate-500 mt-2">
                      Tutor: <span className="font-bold text-slate-700 dark:text-slate-300">Carlos Mendoza</span>
                    </p>
                  </div>

                  {/* CardVaccination (Vaccination) */}
                  <div className="relative p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between overflow-hidden">
                    {/* Top gradient stripe matching web app */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6a2b] to-emerald-500" />

                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] shrink-0">
                            <Syringe className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                              Vacuna Quíntuple Canina
                            </h4>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <PawPrint className="w-3 h-3 text-[#ff6a2b]" />
                              <span>Max Robinson</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                            #LOT-2026-VET
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                            Programada
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            Aplicación
                          </span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            Hoy · 11:00 AM
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/50">
                          <span className="text-[10px] uppercase font-bold text-[#ff6a2b] block">
                            Próximo Refuerzo
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            15/11/2026
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                      <span className="text-slate-500">Responsable:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        Dr. Alejandro Rodríguez
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. SECCIÓN: Buscador Rápido de Pacientes (SearchPet) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="max-w-xl mx-auto text-center mb-5">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    Búsqueda Inmediata de Paciente o Tutor
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Encuentra expedientes médicos, citas y tutores en segundos por nombre o raza
                  </p>
                  <div className="mt-3.5 flex gap-2">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar por mascota (Max, Luna, Rocky) o tutor..."
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#ff6a2b]"
                      />
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#ff6a2b] hover:bg-[#e55518] text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      Buscar
                    </button>
                  </div>
                </div>

                {/* PetCard Grid matching koder-animalts-web */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {filteredPets.map((pet) => (
                    <div
                      key={pet.id}
                      className="relative p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 hover:border-orange-300 dark:hover:border-slate-700 transition-all flex items-center gap-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-3 right-3" />
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${pet.avatarBg} flex items-center justify-center text-white font-bold text-base shadow-xs shrink-0`}
                      >
                        {pet.avatarLetter}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            {pet.name}
                          </h5>
                          <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 dark:bg-orange-950 px-1.5 py-0.2 rounded">
                            {pet.species}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{pet.breed}</p>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          Tutor: <span className="text-slate-600 dark:text-slate-300 font-medium">{pet.owner}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. SECCIÓN: 2 Columnas: Últimas Visitas & Resumen Clínica */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Columna Izquierda: Últimas Visitas (AppointmentLastVisitVet) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Últimas Visitas Realizadas
                    </h4>
                    <span className="text-xs text-[#ff6a2b] font-bold cursor-pointer hover:underline">
                      Ver todas las visitas
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* VisitCard 1 */}
                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            Rocky · Limpieza Dental
                          </h5>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold shrink-0">
                            Realizada
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Stethoscope className="w-3.5 h-3.5 text-[#ff6a2b]" />
                            Dr. Alejandro R.
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-[#ff6a2b]" />
                            Sede Principal
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* VisitCard 2 */}
                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            Luna · Ecografía de Control
                          </h5>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold shrink-0">
                            Realizada
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Stethoscope className="w-3.5 h-3.5 text-[#ff6a2b]" />
                            Dra. Mariana P.
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-[#ff6a2b]" />
                            Sede Norte
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Resumen de la Clínica (SummaryClinic) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                      Resumen de la Clínica
                    </h4>

                    {/* Clinic identity banner */}
                    <div className="p-3.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-900/40 flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ff6a2b] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                          Clínica Activa
                        </p>
                        <h5 className="text-sm font-black text-slate-900 dark:text-white truncate">
                          Clínica Veterinaria San Vicente
                        </h5>
                      </div>
                    </div>

                    {/* Two stats metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] flex items-center justify-center shrink-0">
                          <PawPrint className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xl font-black text-slate-900 dark:text-white">
                            348
                          </p>
                          <p className="text-[11px] text-slate-500 font-medium">
                            Total Mascotas
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xl font-black text-slate-900 dark:text-white">
                            215
                          </p>
                          <p className="text-[11px] text-slate-500 font-medium">
                            Total Tutores
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      Copias de seguridad al día
                    </span>
                    <span className="text-[11px] text-slate-400">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Portal de Tutor View (Owner) */
            <div className="space-y-6">
              {/* Pet Overview Banner */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <PawPrint className="w-4 h-4 text-[#ff6a2b]" />
                  Mis Mascotas Registradas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/40 dark:bg-slate-900/60 flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                      🐾
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Max Robinson
                      </h5>
                      <p className="text-xs text-slate-500">
                        Golden Retriever · 3 años
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                        Vacunación al día
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                      🐱
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Luna
                      </h5>
                      <p className="text-xs text-slate-500">
                        Siamés Tradicional · 2 años
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                        Control programado
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Appointment Card for Owner */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-orange-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#ff6a2b] text-white shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff6a2b]">
                      Próxima Cita Agendada
                    </span>
                    <h5 className="text-base font-bold text-slate-900 dark:text-white">
                      Consulta de Control y Vacunación con Dr. Alejandro
                    </h5>
                    <p className="text-xs text-slate-500">
                      Viernes 30 de Octubre · 10:30 AM · Clínica San Vicente
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold transition cursor-pointer"
                >
                  Ver Ficha Médica
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
