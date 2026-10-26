import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "573006397804";
const CONTACT_WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola! Deseo más información y una demostración personalizada de Koder Animalts para mi clínica veterinaria."
)}`;

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-24 bg-slate-50/70 dark:bg-[#070b13] scroll-mt-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-500" />
            Atención Inmediata por WhatsApp
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            ¿Tienes preguntas o deseas una demostración para tu equipo?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
            Escríbenos directamente a nuestra línea oficial de atención. Te ayudamos con la migración
            de tus historias clínicas y la configuración de tu clínica sin costo inicial.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 text-left text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-950 text-[#ff6a2b]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Correo Electrónico</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">soporte@koderanimalts.com</span>
              </div>
            </div>

            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center gap-3 hover:bg-emerald-100/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-emerald-700 dark:text-emerald-400 block font-semibold">WhatsApp Oficial</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">+57 300 639 7804</span>
              </div>
            </a>
          </div>

          <a
            href={CONTACT_WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar con un Asesor por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
