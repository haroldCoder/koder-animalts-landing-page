"use client";

import { Check, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "573006397804";

interface PricingPlan {
  id: string;
  name: string;
  amount: string;
  periodLabel: string;
  monthlyEquivalent?: string;
  savingsNote: string;
  badge?: string;
  badgeColor?: "emerald" | "orange";
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

const PLANS: PricingPlan[] = [
  {
    id: "mensual",
    name: "Mensual",
    amount: "$120.000",
    periodLabel: "/ mes",
    savingsNote: "Facturación mes a mes sin cláusulas de permanencia",
    badge: "Flexibilidad Total",
    badgeColor: "emerald",
    description: "Ideal para veterinarias o consultorios que prefieren pagar mes a mes con total libertad.",
    features: [
      "Acceso completo a la plataforma Koder Animalts",
      "Pacientes y tutores ilimitados",
      "Historias clínicas digitales completas y recetas en PDF",
      "Agenda médica y control de citas del día",
      "Portal móvil y web para tutores de pacientes",
      "Copias de seguridad automáticas y base de datos protegida",
    ],
    ctaText: "Pedir Plan Mensual por WhatsApp",
  },
  {
    id: "semestral",
    name: "Semestral",
    amount: "$648.000",
    periodLabel: "/ 6 meses",
    monthlyEquivalent: "≈ $108.000/mes",
    savingsNote: "Pago único cada 6 meses · Ahorras $72.000 (10% OFF)",
    badge: "Ahorra 10%",
    badgeColor: "orange",
    popular: true,
    description: "La opción más elegida por clínicas veterinarias en crecimiento que buscan estabilidad y ahorro.",
    features: [
      "Todo lo incluido en el Plan Mensual",
      "Ahorro inmediato del 10% frente al pago mensual",
      "Tarifa preferencial equivalente a ≈ $108.000/mes",
      "Parametrización y configuración guiada de tu veterinaria",
      "Almacenamiento seguro en la nube para exámenes y archivos",
    ],
    ctaText: "Pedir Plan Semestral por WhatsApp",
  },
  {
    id: "anual",
    name: "Anual",
    amount: "$1.152.000",
    periodLabel: "/ año",
    monthlyEquivalent: "≈ $96.000/mes",
    savingsNote: "Pago único anual · Ahorras $288.000 (20% OFF)",
    badge: "Mayor Ahorro · 20% OFF",
    badgeColor: "orange",
    description: "La inversión más inteligente para clínicas que buscan el costo mensual más bajo y máxima rentabilidad.",
    features: [
      "Todo lo incluido en el Plan Semestral",
      "Mayor ahorro del año: pagas el equivalente a ≈ $96.000/mes",
      "Ahorro total de $288.000 (más de 2 meses gratis)",
      "Migración asistida de bases de datos desde tu software anterior",
      "Infraestructura cloud dedicada con alta disponibilidad 99.9%",
      "Acceso prioritario a nuevos módulos y actualizaciones",
    ],
    ctaText: "Pedir Plan Anual por WhatsApp",
  },
];

export function PricingSection() {
  const getWhatsAppLink = (plan: PricingPlan) => {
    const priceDetail = plan.monthlyEquivalent
      ? `${plan.amount} COP (${plan.monthlyEquivalent})`
      : `${plan.amount} COP/mes`;
    const message = `¡Hola! Me interesa el plan *${plan.name}* de Koder Animalts (${priceDetail}). Deseo recibir información para implementarlo en mi veterinaria.`;
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#ff6a2b]" />
            Planes y Precios Claros en Pesos Colombianos
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            La inversión que se paga sola con cada cita recuperada
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Elige la modalidad de pago que mejor se ajuste a tu veterinaria. Acceso completo al sistema, datos protegidos en la nube e infraestructura en alta disponibilidad 24/7.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            const waHref = getWhatsAppLink(plan);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white dark:bg-slate-900 border-2 border-[#ff6a2b] shadow-xl shadow-orange-500/10 md:scale-[1.03] z-10"
                    : "bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-orange-200 dark:hover:border-slate-700"
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white text-[11px] font-bold shadow-xs tracking-wide uppercase">
                    Más Elegido · Recomendado
                  </span>
                )}

                <div>
                  {/* Plan Name & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                          plan.badgeColor === "orange"
                            ? "bg-orange-100 dark:bg-orange-950/70 text-[#ff6a2b] dark:text-orange-400"
                            : "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price display with COP currency */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {plan.amount}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        COP
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {plan.periodLabel}
                      </span>
                    </div>

                    {/* Monthly equivalent indicator (semiannual & annual) */}
                    {plan.monthlyEquivalent && (
                      <div className="mt-2">
                        <span className="inline-flex items-center text-xs font-extrabold px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-950/50 text-[#ff6a2b] dark:text-orange-400 border border-orange-200/60 dark:border-orange-900/50">
                          {plan.monthlyEquivalent}
                        </span>
                      </div>
                    )}

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      {plan.savingsNote}
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
                    Activación inmediata: +57 300 639 7804
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
