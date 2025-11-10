"use client"
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import CompetitionsTable from '@/components/competitions/CompetitionsTable';
import { allCompetitions } from '@/data/competitions';
import Link from 'next/link';

export default function CalendarPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto px-2 md:px-8">

            <CompetitionsTable
              competitions={allCompetitions}
              title="Calendario Completo 2025"
              variant="full"
              showLegend={true}
              showCountdown={true}
            />

            <div className="mt-10 text-center flex flex-col items-center gap-3">
              <p className="text-gray-500 text-sm">Fecha de referencia: 3 de noviembre de 2025</p>
              <p className="text-gray-700 text-base">Para más información sobre cualquiera de estos eventos, no dudes en contactarnos.</p>
              <Link href="/contacto">
                <Button variant="default" size="lg" className="mt-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg px-8 py-3 rounded-full text-base font-semibold transition-all duration-200">
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
