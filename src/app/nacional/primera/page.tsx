'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function PrimeraInstanciaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-2">Primera Instancia</h1>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Información de Primera Instancia</h2>
            
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              {/* Niveles de Primaria */}
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-sky-600">
                <div className="text-xl font-bold text-sky-800 mb-6 text-center">
                  Niveles<br />de<br />Primaria
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Link href="/nacional/primera/nivel-IA" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-sky-50 transition-colors">
                    Nivel<br />IA
                  </Link>
                  <Link href="/nacional/primera/nivel-IB" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-sky-50 transition-colors">
                    Nivel<br />IB
                  </Link>
                  <Link href="/nacional/primera/nivel-IC" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-sky-50 transition-colors">
                    Nivel<br />IC
                  </Link>
                </div>
              </div>

              {/* Niveles de Secundaria */}
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500">
                <div className="text-xl font-bold text-sky-800 mb-6 text-center">
                  Niveles<br />de<br />Secundaria
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/nacional/primera/nivel-II" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-yellow-50 transition-colors">
                    Nivel<br />II
                  </Link>
                  <Link href="/nacional/primera/nivel-III" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-yellow-50 transition-colors">
                    Nivel<br />III
                  </Link>
                  <Link href="/nacional/primera/nivel-IV" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-yellow-50 transition-colors">
                    Nivel<br />IV
                  </Link>
                  <Link href="/nacional/primera/nivel-V" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-4 px-2 text-center font-medium hover:bg-yellow-50 transition-colors">
                    Nivel<br />V
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 