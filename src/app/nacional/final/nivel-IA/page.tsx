'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import GoogleDrivePDFViewer from "@/components/GoogleDrivePDFViewer";
import { NIVELES_FINAL } from '../nivelesData';

export default function NivelIAFinalPage() {
  const nivelData = NIVELES_FINAL['IA'];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-2">{nivelData.titulo}</h1>
              <p className="text-lg mt-4">{nivelData.descripcion}</p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Problemas y Soluciones</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nivelData.problemas.map((problema) => (
                <div key={problema.key} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">{problema.title}</h3>
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full relative overflow-hidden rounded-md">
                      <GoogleDrivePDFViewer pdfUrl={problema.pdf} title={problema.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 