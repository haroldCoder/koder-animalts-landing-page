"use client";

import { useState } from "react";
import { UserRole } from "./types";
import { FeaturesHeader } from "./FeaturesHeader";
import { MedicalHistoryFeature } from "./MedicalHistoryFeature";
import { AppointmentsFeature } from "./AppointmentsFeature";
import { AppointmentRequestsFeature } from "./AppointmentRequestsFeature";
import { PetsAndOwnersFeature } from "./PetsAndOwnersFeature";
import { ComparisonTable } from "./ComparisonTable";
import { DemoAccessCard } from "./DemoAccessCard";

const CLIENT_APP_URL = "https://koder-animalts-client.netlify.app/";

export function FeaturesSection() {
  const [activeRole, setActiveRole] = useState<UserRole>("veterinarian");

  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#070b13] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Role Switcher (SRP) */}
        <FeaturesHeader
          activeRole={activeRole}
          onRoleChange={setActiveRole}
        />

        {/* =========================================================================
            CORE 4 BENEFIT MODULES (BENTO GRID)
            1. Creación y visualización de historiales médicos
            2. Creación y visualización de citas
            3. Solicitudes de citas
            4. Registro de mascotas y dueños
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {/* Benefit 1: Historiales Médicos */}
          <MedicalHistoryFeature />

          {/* Benefit 2: Citas Médicas */}
          <AppointmentsFeature />

          {/* Benefit 3: Solicitudes de Citas */}
          <AppointmentRequestsFeature />

          {/* Benefit 4: Registro de Mascotas y Dueños */}
          <PetsAndOwnersFeature />
        </div>

        {/* Comparative Analysis: Traditional vs Koder Animalts */}
        <ComparisonTable />

        {/* Live Demo Access Banner */}
        <DemoAccessCard clientAppUrl={CLIENT_APP_URL} />
      </div>
    </section>
  );
}
