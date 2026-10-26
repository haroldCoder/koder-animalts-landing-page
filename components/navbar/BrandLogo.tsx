interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-11 h-11" : "w-9 h-9";
  const titleSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("inicio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#inicio"
      onClick={handleClick}
      className={`group flex items-center gap-3 transition-transform hover:scale-[1.01] cursor-pointer ${className}`}
      id="brand-logo"
    >
      {/* Icon with orange-amber gradient & paw-medical mark */}
      <div
        className={`${iconSize} relative rounded-xl bg-gradient-to-tr from-[#ff6a2b] to-[#f59e0b] flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Paw pads & medical cross fusion */}
          <circle cx="7" cy="8" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="17" cy="8" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="14" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
          {/* Main paw base with cross outline */}
          <path
            d="M8.5 13.5c-1.5 0-3 1.2-3 2.8 0 2.2 2.5 4.7 6.5 4.7s6.5-2.5 6.5-4.7c0-1.6-1.5-2.8-3-2.8-.8 0-1.8.6-2.5 1.5-.7-.9-1.7-1.5-2.5-1.5z"
            fill="currentColor"
            stroke="none"
          />
          {/* Subtle medical plus cut-out inside */}
          <path
            d="M12 14v4M10 16h4"
            stroke="#ff6a2b"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        {/* Ambient subtle ping on badge corner */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-slate-900 dark:text-white ${titleSize}`}>
            Koder
          </span>
          <span className={`font-extrabold tracking-tight bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] bg-clip-text text-transparent ${titleSize}`}>
            Animalts
          </span>
          <span className="ml-1 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b] border border-orange-200 dark:border-orange-900/50">
            Vet
          </span>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-medium">
          Software Veterinario
        </span>
      </div>
    </a>
  );
}
