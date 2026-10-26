"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Syringe,
  FileText,
  HeartPulse,
  PawPrint,
  UserRound,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const CLIENT_APP_URL = "https://koder-animalts-client.netlify.app/";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  // Monitor scroll for glass effect elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header border-b border-orange-100/70 dark:border-slate-800/80 shadow-xs shadow-orange-500/5 py-3"
          : "bg-white/90 dark:bg-[#090d16]/90 border-b border-slate-100 dark:border-slate-800/50 py-4"
      }`}
      id="main-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Menú principal de navegación"
          >
            <Link
              href="#inicio"
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors"
              id="nav-link-inicio"
            >
              Inicio
            </Link>

            {/* Features Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesDropdownOpen(true)}
              onMouseLeave={() => setFeaturesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                id="nav-dropdown-features-btn"
                aria-expanded={featuresDropdownOpen}
              >
                <span>Funcionalidades</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 group-hover:text-[#ff6a2b] ${
                    featuresDropdownOpen ? "rotate-180 text-[#ff6a2b]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              {featuresDropdownOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  id="features-dropdown-panel"
                >
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-orange-100 dark:border-slate-800 shadow-xl shadow-orange-500/10 p-5 grid grid-cols-2 gap-4">
                    {/* Column 1: For Veterinarians */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-[#ff6a2b]">
                          <HeartPulse className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Para Veterinarios
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Gestión clínica avanzada
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Link
                          href="#funcionalidades-pacientes"
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <PawPrint className="w-4 h-4 text-orange-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6a2b]">
                              Ficha de Pacientes
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Caninos, felinos, aves y exóticos
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="#funcionalidades-citas"
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <Calendar className="w-4 h-4 text-orange-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6a2b]">
                              Agenda & Citas Médicas
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Consultas, cirugías y urgencias
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="#funcionalidades-historial"
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <FileText className="w-4 h-4 text-orange-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6a2b]">
                              Historial Clínico Digital
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Laboratorios, diagnósticos y recetas
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: For Pet Owners */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600">
                          <UserRound className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Para Tutores
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Cuidado integral de su mascota
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Link
                          href="#funcionalidades-vacunas"
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <Syringe className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6a2b]">
                              Carnet de Vacunación
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Control de dosis y refuerzos
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="#funcionalidades-solicitudes"
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 dark:hover:bg-slate-800/70 transition-colors group"
                        >
                          <ShieldCheck className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#ff6a2b]">
                              Solicitud de Citas Online
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Conexión directa con su veterinario
                            </p>
                          </div>
                        </Link>

                        <div className="pt-2">
                          <a
                            href={CLIENT_APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-800/50 border border-orange-200/50 dark:border-slate-700 hover:border-orange-300 transition-all text-xs font-semibold text-[#ff6a2b]"
                          >
                            <span>Ver App en Acción</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#clinicas"
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors"
              id="nav-link-clinicas"
            >
              Para Clínicas
            </Link>

            <Link
              href="#tutores"
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors"
              id="nav-link-tutores"
            >
              Para Tutores
            </Link>

            <Link
              href="#planes"
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors"
              id="nav-link-planes"
            >
              Planes
            </Link>

            <Link
              href="#contacto"
              className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors"
              id="nav-link-contacto"
            >
              Contacto
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#ff6a2b] dark:hover:text-[#ff6a2b] transition-colors rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800/60"
              id="btn-login"
            >
              Iniciar Sesión
            </a>

            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6a2b] via-[#ff783f] to-[#f59e0b] hover:from-[#e55518] hover:to-[#d97706] text-white text-sm font-bold shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              id="btn-register-clinic"
            >
              <span>Registrar Clínica</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-orange-100 text-[#ff6a2b] dark:bg-orange-950/60 dark:text-orange-400"
            >
              Entrar
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-orange-100 dark:border-slate-800 shadow-2xl p-6 transition-all duration-300 animate-in slide-in-from-top-4"
          id="mobile-menu-drawer"
        >
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            {/* Quick Banner in Mobile */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 border border-orange-200/60 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff6a2b]" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Prueba la app en vivo
                </span>
              </div>
              <a
                href={CLIENT_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#ff6a2b] underline"
              >
                Abrir Demo
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-1">
              <Link
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#funcionalidades"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Funcionalidades</span>
                <span className="text-xs font-bold text-[#ff6a2b] bg-orange-100 dark:bg-orange-950 px-2 py-0.5 rounded-full">
                  Veterinarias & Tutores
                </span>
              </Link>
              <Link
                href="#clinicas"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Para Clínicas Veterinarias
              </Link>
              <Link
                href="#tutores"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Para Tutores de Mascotas
              </Link>
              <Link
                href="#planes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Planes y Precios
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#ff6a2b] hover:bg-orange-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                Contacto
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href={CLIENT_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                Iniciar Sesión en Koder Animalts
              </a>
              <a
                href={CLIENT_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#ff6a2b] to-[#f59e0b] rounded-xl shadow-md shadow-orange-500/25 transition-all"
              >
                Registrar Clínica Gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
