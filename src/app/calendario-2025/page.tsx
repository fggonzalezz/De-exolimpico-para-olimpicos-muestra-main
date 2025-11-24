import CompetitionsTable from "@/components/competitions/CompetitionsTable";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { allCompetitions } from "@/data/competitions";
import { buildStaticPageMetadata } from "@/lib/seo";
import Link from "next/link";
import React from "react";

export const metadata = buildStaticPageMetadata("/calendario-2025");

export default function CalendarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-8">
          <div className="max-w-4xl mx-auto px-1 sm:px-2 md:px-8">
            <CompetitionsTable
              competitions={allCompetitions}
              title="Calendario Completo 2025"
              variant="full"
              showLegend={true}
              showCountdown={true}
            />

            <div className="mt-6 sm:mt-8 md:mt-10 text-center flex flex-col items-center gap-2 sm:gap-3 px-2">
              <p className="text-gray-500 text-xs sm:text-sm">
                Calendario actualizado periódicamente
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Para más información sobre cualquiera de estos eventos, no dudes
                en contactarnos.
              </p>
              <Link href="/contacto">
                <Button
                  variant="default"
                  size="lg"
                  className="mt-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 w-full sm:w-auto"
                >
                  Ir a Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
