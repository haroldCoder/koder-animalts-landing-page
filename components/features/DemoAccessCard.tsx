import { ExternalLink } from "lucide-react";

interface DemoAccessCardProps {
  clientAppUrl: string;
}

export function DemoAccessCard({ clientAppUrl }: DemoAccessCardProps) {
  return (
    <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 dark:from-slate-800 dark:to-slate-800/60 border border-orange-200 dark:border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Demostración en Vivo
          </span>
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white">
          Prueba el sistema con las cuentas de demostración
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Accede como <strong>Veterinario</strong> (testclient1@test.com) o como <strong>Dueño</strong> (test-owner@test.co) con contraseña <code className="px-1 py-0.5 rounded bg-white dark:bg-slate-900 font-mono font-bold text-[#ff6a2b]">test123</code>.
        </p>
      </div>

      <a
        href={clientAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] hover:from-[#e55518] hover:to-[#d97706] text-white text-sm font-bold shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] shrink-0"
        id="btn-features-open-demo"
      >
        <span>Explorar Demo en Vivo</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
