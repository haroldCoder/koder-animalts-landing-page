import { TopBanner } from "@/components/navbar/TopBanner";
import { Navbar } from "@/components/navbar/Navbar";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { ClinicsSection } from "@/components/sections/ClinicsSection";
import { OwnersSection } from "@/components/sections/OwnersSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DashboardPreview } from "@/components/features/DashboardPreview";
import {
  HeartPulse,
  Calendar,
  Syringe,
  Users2,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const CLIENT_APP_URL = "https://koder-animalts-client.netlify.app/";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090d16]">
      {/* Top Announcement Bar */}
      <TopBanner />

      {/* Main Sticky Navigation Menu */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 scroll-mt-24" id="inicio">
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
          {/* Subtle brand ambient glow backgrounds */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-400/15 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-400/15 dark:bg-amber-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/80 dark:border-orange-800/60 shadow-xs mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[#ff6a2b]" />
                <span className="text-xs font-bold text-[#ff6a2b] tracking-wide uppercase">
                  Gestión Veterinaria de Próxima Generación
                </span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  Koder Animalts <Sparkles className="w-3 h-3 text-amber-500" />
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
                El software inteligente para{" "}
                <span className="bg-gradient-to-r from-[#ff6a2b] via-[#ff783f] to-[#f59e0b] bg-clip-text text-transparent">
                  clínicas veterinarias
                </span>{" "}
                y el cuidado de mascotas
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10">
                Centraliza expedientes médicos, carnet digital de vacunas, citas
                quirúrgicas y consultas. Conecta directamente a tu equipo
                médico con los tutores de mascotas desde cualquier dispositivo.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
                <a
                  href={CLIENT_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] hover:from-[#e55518] hover:to-[#d97706] text-white text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  id="hero-cta-register"
                >
                  <span>Registrar Mi Veterinaria</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={CLIENT_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-base font-semibold shadow-xs hover:bg-orange-50/30 transition-all duration-200"
                  id="hero-cta-demo"
                >
                  <span>Ver Demo en Vivo</span>
                  <ExternalLink className="w-4 h-4 text-orange-500" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left w-full max-w-4xl pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b]">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Expediente Clínico
                    </h3>
                    <p className="text-[11px] text-slate-500">Historial completo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600">
                    <Syringe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Carnet de Vacunación
                    </h3>
                    <p className="text-[11px] text-slate-500">Alertas de refuerzo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Agenda Inteligente
                    </h3>
                    <p className="text-[11px] text-slate-500">Citas en tiempo real</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-slate-900/40">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      Portal de Tutores
                    </h3>
                    <p className="text-[11px] text-slate-500">Acceso para dueños</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Faithful Replica of koder-animalts-web Dashboard */}
            <DashboardPreview />
          </div>
        </section>

        {/* Core Features & Services Section */}
        <FeaturesSection />

        {/* Section: Clínicas y Consultorios */}
        <ClinicsSection />

        {/* Section: Tutores de Mascotas */}
        <OwnersSection />

        {/* Section: Planes y Precios */}
        <PricingSection />

        {/* Section: Contacto y Soporte */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 bg-slate-50 dark:bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © 2026 Koder Animalts. Todos los derechos reservados.
            Software para gestión de clínicas veterinarias.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff6a2b] transition-colors"
            >
              Acceso a la Plataforma
            </a>
            <span>·</span>
            <a href="#contacto" className="hover:text-[#ff6a2b] transition-colors">
              Soporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
