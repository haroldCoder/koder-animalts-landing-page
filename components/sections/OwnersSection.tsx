import { PawPrint, Smartphone, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function OwnersSection() {
  return (
    <section id="tutores" className="py-20 lg:py-24 bg-slate-50/60 dark:bg-[#070b13] scroll-mt-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Showcase Card */}
          <div className="order-2 lg:order-1 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#ff6a2b]" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Portal Móvil del Tutor
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ff6a2b] dark:bg-orange-950">
                Acceso 24/7
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Mis Mascotas Vinculadas
                </span>
                <span className="text-slate-400">2 registradas</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <span className="text-lg">🐱</span>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Milo</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">Vacunas al día</p>
                  </div>
                </div>
                <div className="flex-1 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <span className="text-lg">🐶</span>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Tommy</p>
                    <p className="text-[10px] text-amber-600 font-semibold">Cita pendiente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-orange-50/70 dark:bg-slate-950 border border-orange-200/70 dark:border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#ff6a2b]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Solicitud Rápida de Cita</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                El tutor escoge doctor, hora preferida y envía la solicitud en 3 toques.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="orange" className="mb-4">
              <PawPrint className="w-3.5 h-3.5 mr-1" />
              Para Tutores de Mascotas
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              La experiencia digital que fideliza a tus clientes para siempre
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Ofrece a los dueños de mascotas una plataforma moderna donde consultar el carnet
              de vacunas, solicitar citas y descargar recetas sin necesidad de papeles ni llamadas.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Carnet de vacunación digital siempre a mano en su smartphone.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Solicitud de citas online en cualquier horario sin esperas telefónicas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Historial de atenciones médicas y recetas emitidas por tu clínica.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
