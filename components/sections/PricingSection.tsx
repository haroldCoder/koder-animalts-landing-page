import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CLIENT_APP_URL = "https://koder-animalts-client.netlify.app/";

export function PricingSection() {
  return (
    <section id="planes" className="py-20 lg:py-24 bg-white dark:bg-[#090d16] scroll-mt-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#ff6a2b]" />
            Planes y Precios Claros
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            La inversión que se paga sola con cada cita recuperada
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Escoge el plan perfecto para el tamaño de tu consultorio o clínica veterinaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Consultorio */}
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Plan Consultorio
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Para veterinarios independientes o consultorios individuales.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$29</span>
                <span className="text-xs text-slate-500">/mes</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Hasta 300 pacientes registrados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Creación de historiales médicos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Control básico de citas</span>
                </li>
              </ul>
            </div>
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 text-center text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
            >
              Comenzar Ahora
            </a>
          </div>

          {/* Plan 2: Clínica Pro (Featured) */}
          <div className="relative rounded-3xl bg-white dark:bg-slate-900 border-2 border-[#ff6a2b] p-8 flex flex-col justify-between shadow-xl shadow-orange-500/10">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white text-[11px] font-bold shadow-xs">
              MÁS POPULAR
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Plan Clínica Pro
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Para clínicas con equipo médico y alta demanda de pacientes.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$59</span>
                <span className="text-xs text-slate-500">/mes</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a2b]" />
                  <span className="font-semibold text-slate-900 dark:text-white">Pacientes y tutores ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a2b]" />
                  <span>Módulo completo de solicitudes de citas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a2b]" />
                  <span>Portal móvil exclusivo para tutores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a2b]" />
                  <span>Ficha con avatar procesado por IA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff6a2b]" />
                  <span>Carga de exámenes y recetas en PDF</span>
                </li>
              </ul>
            </div>
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white shadow-md shadow-orange-500/25 hover:from-[#e55518] hover:to-[#d97706] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Probar Clínica Pro</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Plan 3: Red Veterinaria */}
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Plan Red Hospitalaria
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Para redes con múltiples sucursales u hospitales 24 horas.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$129</span>
                <span className="text-xs text-slate-500">/mes</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Múltiples sedes y consultorios</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Doctores y recepcionistas ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Analítica avanzada de productividad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Soporte prioritario 24/7 y onboarding</span>
                </li>
              </ul>
            </div>
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 text-center text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
            >
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
