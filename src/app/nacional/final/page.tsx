'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function FinalNacionalPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-2">Final Nacional</h1>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Información de Final Nacional</h2>
            
            {/* Single grid layout for all levels in 3x2 format with 7th item */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-sky-600">
              <div className="text-2xl font-bold text-sky-800 mb-8 text-center">
                Todos los Niveles
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* First row - 3 items */}
                <Link href="/nacional/final/nivel-IA" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-sky-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel IA</div>
                  <div className="text-sm text-gray-600 mt-1">Primaria</div>
                </Link>
                <Link href="/nacional/final/nivel-IB" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-sky-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel IB</div>
                  <div className="text-sm text-gray-600 mt-1">Primaria</div>
                </Link>
                <Link href="/nacional/final/nivel-IC" className="bg-white border-2 border-sky-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-sky-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel IC</div>
                  <div className="text-sm text-gray-600 mt-1">Primaria</div>
                </Link>
                
                {/* Second row - 3 items */}
                <Link href="/nacional/final/nivel-II" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-yellow-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel II</div>
                  <div className="text-sm text-gray-600 mt-1">Secundaria</div>
                </Link>
                <Link href="/nacional/final/nivel-III" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-yellow-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel III</div>
                  <div className="text-sm text-gray-600 mt-1">Secundaria</div>
                </Link>
                <Link href="/nacional/final/nivel-IV" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-yellow-50 transition-colors shadow-sm">
                  <div className="text-lg font-semibold">Nivel IV</div>
                  <div className="text-sm text-gray-600 mt-1">Secundaria</div>
                </Link>
                
                {/* Third row - 1 item centered */}
                <div className="col-start-2">
                  <Link href="/nacional/final/nivel-V" className="bg-white border-2 border-yellow-500 text-sky-700 rounded-lg py-6 px-4 text-center font-medium hover:bg-yellow-50 transition-colors shadow-sm block">
                    <div className="text-lg font-semibold">Nivel V</div>
                    <div className="text-sm text-gray-600 mt-1">Secundaria</div>
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