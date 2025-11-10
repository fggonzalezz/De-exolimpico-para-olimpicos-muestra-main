import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function PruebasAnterioresPage() {
  // Sample data for previous tests
  const pruebasData = [
    {
      year: 2024,
      competitions: [
        {
          name: "Pruebas de Selección IMO 2024",
          tests: [
            { name: "Primera Prueba", url: "https://drive.google.com/file/example1" },
            { name: "Segunda Prueba", url: "https://drive.google.com/file/example2" },
            { name: "Tercera Prueba", url: "https://drive.google.com/file/example3" },
          ]
        },
        {
          name: "Pruebas de Selección Iberoamericana 2024",
          tests: [
            { name: "Primera Prueba", url: "https://drive.google.com/file/example4" },
            { name: "Segunda Prueba", url: "https://drive.google.com/file/example5" },
            { name: "Tercera Prueba", url: "https://drive.google.com/file/example6" },
            { name: "Cuarta Prueba", url: "https://drive.google.com/file/example7" },
          ]
        },
        {
          name: "Olimpíada Nacional 2024",
          tests: [
            { name: "Primera Instancia", url: "https://drive.google.com/file/example8" },
            { name: "Segunda Instancia", url: "https://drive.google.com/file/example9" },
            { name: "Tercera Instancia (Semifinal)", url: "https://drive.google.com/file/example10" },
            { name: "Cuarta Instancia (Final)", url: "https://drive.google.com/file/example11" },
          ]
        }
      ]
    },
    {
      year: 2023,
      competitions: [
        {
          name: "Olimpíada Internacional de Matemática (IMO) 2023",
          tests: [
            { name: "Primer Día", url: "https://drive.google.com/file/example12" },
            { name: "Segundo Día", url: "https://drive.google.com/file/example13" },
          ]
        },
        {
          name: "Olimpíada Iberoamericana de Matemática 2023",
          tests: [
            { name: "Primer Día", url: "https://drive.google.com/file/example14" },
            { name: "Segundo Día", url: "https://drive.google.com/file/example15" },
          ]
        },
        {
          name: "Olimpíada del Conosur 2023",
          tests: [
            { name: "Prueba Individual", url: "https://drive.google.com/file/example16" },
            { name: "Prueba por Equipos", url: "https://drive.google.com/file/example17" },
          ]
        },
        {
          name: "Olimpíada Nacional 2023",
          tests: [
            { name: "Primera Instancia", url: "https://drive.google.com/file/example18" },
            { name: "Segunda Instancia", url: "https://drive.google.com/file/example19" },
            { name: "Tercera Instancia (Semifinal)", url: "https://drive.google.com/file/example20" },
            { name: "Cuarta Instancia (Final)", url: "https://drive.google.com/file/example21" },
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Pruebas Anteriores
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Colección de pruebas de olimpiadas matemáticas nacionales e internacionales
            </p>

            {/* Introduction */}
            <div className="bg-sky-50 p-6 rounded-lg mb-8">
              <p className="mb-4">
                Esta sección contiene las pruebas de olimpiadas matemáticas de años anteriores, 
                organizadas por año y competencia. Son un recurso valioso para la preparación 
                de futuros olímpicos.
              </p>
              <p>
                Te invitamos a utilizarlas como material de práctica para mejorar tus habilidades 
                en la resolución de problemas matemáticos.
              </p>
            </div>

            {/* Search tip */}
            <div className="bg-yellow-50 p-4 rounded-lg mb-8 flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Consejo:</span> Para encontrar soluciones a estos problemas, 
                  te recomendamos consultar la sección de "Seminarios de Exolímpicos" o el material de estudio 
                  disponible en nuestro repositorio.
                </p>
              </div>
            </div>

            {/* Tests by year */}
            {pruebasData.map((yearData) => (
              <div key={yearData.year} className="mb-10">
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                  Pruebas {yearData.year}
                </h2>
                
                <div className="space-y-6">
                  {yearData.competitions.map((competition, index) => (
                    <Card key={index} className="shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-sky-700 mb-4">{competition.name}</h3>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {competition.tests.map((test, i) => (
                            <li key={i}>
                              <a 
                                href={test.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>{test.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Archive note */}
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                ¿Estás buscando pruebas de años anteriores a 2023?
              </p>
              <a 
                href="https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Acceder al archivo completo
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 