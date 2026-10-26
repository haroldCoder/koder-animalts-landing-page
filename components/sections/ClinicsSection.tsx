import { Building2, Stethoscope, CheckCircle2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ClinicsSection() {
  return (
    <section id="clinicas" className="py-20 lg:py-24 bg-white dark:bg-[#090d16] scroll-mt-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-3.5 h-3.5 mr-1 text-[#ff6a2b]" />
              Para Clínicas y Consultorios
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Organiza a tu equipo médico y múltiples consultorios sin fricción
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Koder Animalts permite registrar consultorios o sedes completas, asignar doctores
              con su especialidad y controlar la atención médica con trazabilidad total.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950 text-[#ff6a2b] shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Asignación por Doctor y Especialidad
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Cada médico veterinario accede a su propia agenda, firma historias clínicas y
                    revisa pacientes asignados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Métricas del Consultorio en Tiempo Real
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Conoce el total de pacientes activos, tutores registrados y citas del mes
                    para una mejor toma de decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 sm:p-8 border border-orange-200/80 dark:border-slate-800 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Clínica San Vicente
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                Sede Activa
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">Total Pacientes</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">9</span>
                <span className="text-[10px] text-emerald-600 block mt-0.5">En seguimiento</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">Tutores Activos</span>
                <span className="text-2xl font-black text-[#ff6a2b]">4</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Registrados</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Equipo Veterinario Asignado
              </p>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#ff6a2b] flex items-center justify-center font-bold">
                    V1
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Dr. Test veterinary</p>
                    <p className="text-[10px] text-slate-400">Medicina General · Tel: +57 300 123 4567</p>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    V2
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Dr. koder vet</p>
                    <p className="text-[10px] text-slate-400">Cirugía & Urgencias · Tel: +57 311 987 6543</p>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
