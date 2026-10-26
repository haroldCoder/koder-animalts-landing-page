"use client";

import { useState } from "react";
import { Check, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "573006397804";

type BillingCycle = "monthly" | "semiannual" | "annual";

interface PlanTier {
  id: string;
  name: string;
  description: string;
  popular?: boolean;
  prices: {
    monthly: { amount: string; periodLabel: string; billingNote: string };
    semiannual: { amount: string; periodLabel: string; billingNote: string; badge: string };
    annual: { amount: string; periodLabel: string; billingNote: string; badge: string };
  };
  features: string[];
  ctaText: string;
}

const PLANS: PlanTier[] = [
  {
    id: "consultorio",
    name: "Plan Consultorio",
    description: "Para médicos veterinarios independientes o consultorios individuales con disponibilidad 24/7.",
    prices: {
      monthly: {
        amount: "$119.000",
        periodLabel: "/ mes",
        billingNote: "Facturación mes a mes sin permanencia",
      },
      semiannual: {
        amount: "$99.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $594.000 COP cada 6 meses",
        badge: "Ahorra 17%",
      },
      annual: {
        amount: "$89.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $1.068.000 COP al año (2 meses gratis)",
        badge: "Ahorra 25%",
      },
    },
    features: [
      "Hasta 300 pacientes y tutores registrados",
      "Creación y visualización de historias clínicas digitales",
      "Agenda médica y control de citas del día",
      "Base de datos protegida con copias de seguridad continuas",
      "Descarga de fórmulas y recetas médicas en PDF",
      "Soporte técnico y atención personalizada por WhatsApp",
    ],
    ctaText: "Pedir Plan Consultorio por WhatsApp",
  },
  {
    id: "clinica-pro",
    name: "Plan Clínica Pro",
    description: "Para clínicas veterinarias con equipo médico, varios consultorios y alta rotación de pacientes.",
    popular: true,
    prices: {
      monthly: {
        amount: "$219.000",
        periodLabel: "/ mes",
        billingNote: "Facturación mes a mes sin cláusulas de permanencia",
      },
      semiannual: {
        amount: "$189.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $1.134.000 COP cada 6 meses",
        badge: "Ahorra 14%",
      },
      annual: {
        amount: "$169.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $2.028.000 COP al año (Ahorras $600.000)",
        badge: "Ahorra 23%",
      },
    },
    features: [
      "Pacientes y tutores ilimitados",
      "Módulo en vivo de solicitudes de citas (Aprobar / Rechazar)",
      "Portal móvil y web para tutores de pacientes",
      "Ficha médica con generación de avatar de mascota por IA",
      "Almacenamiento seguro en la nube para exámenes y ecografías",
      "Historial clínico continuo con formato narrativo (Tell-History)",
      "Hasta 5 doctores o consultorios simultáneos",
      "Monitoreo 24/7 y mantenimiento continuo de infraestructura",
    ],
    ctaText: "Activar Clínica Pro por WhatsApp",
  },
  {
    id: "red-hospitalaria",
    name: "Plan Red Hospitalaria",
    description: "Para clínicas 24 horas, centros de especialidades quirúrgicas o múltiples sucursales.",
    prices: {
      monthly: {
        amount: "$449.000",
        periodLabel: "/ mes",
        billingNote: "Facturación mes a mes sin permanencia",
      },
      semiannual: {
        amount: "$389.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $2.334.000 COP cada 6 meses",
        badge: "Ahorra 13%",
      },
      annual: {
        amount: "$349.000",
        periodLabel: "/ mes",
        billingNote: "Facturado $4.188.000 COP al año (Ahorras $1.200.000)",
        badge: "Ahorra 22%",
      },
    },
    features: [
      "Múltiples clínicas y sedes interconectadas",
      "Doctores, recepcionistas y auxiliares ilimitados",
      "Gestión de turnos de quirófano, cirugía y urgencias 24/7",
      "Analítica avanzada de citas realizadas y productividad médica",
      "Migración asistida de bases de datos desde tu software anterior",
      "Servidores redundantes con alta disponibilidad (99.9% uptime)",
      "Asesor dedicado y soporte prioritario directo por WhatsApp",
    ],
    ctaText: "Cotizar Red Hospitalaria por WhatsApp",
  },
];

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("annual");

  const cycleNames: Record<BillingCycle, string> = {
    monthly: "Mensual",
    semiannual: "Semestral (6 Meses)",
    annual: "Anual (12 Meses)",
  };

  const getWhatsAppLink = (planName: string, amount: string) => {
    const cycleText = cycleNames[cycle];
    const message = `¡Hola! Me interesa el *${planName}* de Koder Animalts (${amount} COP en ciclo ${cycleText}). Deseo recibir información para implementarlo en mi veterinaria.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="planes"
      className="py-20 lg:py-24 bg-white dark:bg-[#090d16] scroll-mt-20 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#ff6a2b]" />
            Planes y Precios Reales en Pesos Colombianos
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            La inversión que se paga sola con cada cita recuperada
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Infraestructura cloud en alta disponibilidad 24/7, base de datos respaldada y soporte directo por WhatsApp:
          </p>
        </div>

        {/* 3-Tier Billing Cycle Selector (Mes, 6 Meses, Anual) */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                cycle === "monthly"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Mensual
            </button>

            <button
              type="button"
              onClick={() => setCycle("semiannual")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                cycle === "semiannual"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>6 Meses</span>
              <span className="hidden sm:inline-block text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400">
                Ahorro
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCycle("annual")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                cycle === "annual"
                  ? "bg-white dark:bg-slate-800 text-[#ff6a2b] shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Anual</span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950 text-[#ff6a2b]">
                2 meses gratis
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const currentPricing = plan.prices[cycle];
            const isPopular = plan.popular;
            const waHref = getWhatsAppLink(plan.name, currentPricing.amount);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white dark:bg-slate-900 border-2 border-[#ff6a2b] shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-orange-200 dark:hover:border-slate-700"
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white text-[11px] font-bold shadow-xs tracking-wide">
                    MÁS POPULAR · MEJOR VALOR
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    {"badge" in currentPricing && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                        {currentPricing.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price display with COP currency */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {currentPricing.amount}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        COP
                      </span>
                      <span className="text-xs text-slate-500">
                        {currentPricing.periodLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {currentPricing.billingNote}
                    </p>
                  </div>

                  <div className="h-px bg-slate-200 dark:bg-slate-800 my-6" />

                  {/* Features list */}
                  <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Qué incluye:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? "text-[#ff6a2b]" : "text-emerald-500"
                          }`}
                        />
                        <span className={idx === 0 && isPopular ? "font-bold text-slate-900 dark:text-white" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-8">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 text-center text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isPopular
                        ? "bg-gradient-to-r from-[#ff6a2b] via-[#ff783f] to-[#f59e0b] hover:from-[#e55518] hover:to-[#d97706] text-white shadow-orange-500/25 hover:shadow-lg hover:scale-[1.01]"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </a>
                  <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    Atención inmediata: +57 300 639 7804
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
