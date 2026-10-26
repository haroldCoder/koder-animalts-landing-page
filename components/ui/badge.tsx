import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "orange";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-[#ff6a2b] text-white hover:bg-[#e55518] shadow-xs",
    secondary: "bg-orange-50 text-[#ff6a2b] dark:bg-orange-950/60 dark:text-orange-300 border border-orange-200/60 dark:border-orange-800/60",
    outline: "text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60",
    orange: "bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] text-white shadow-xs",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
