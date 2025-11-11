import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ResultadosPage() {
  // Recent results data for past competitions (2024-2025)
  const resultados = [
    {
      year: 2025,
      competitions: [
        {
          name: "66ª Olimpíada Internacional de Matemática (IMO)",
          location: "Sunshine Coast, Australia",
          date: "Julio 10-20, 2025",
          team: [
            { name: "Diego Correa", award: "Mención Honorífica" },
            { name: "Juan Martín González", award: "Mención Honorífica" },
            { name: "Federico Méndez", award: null },
            { name: "Alfonso Ramos", award: null },
            { name: "Rafael Trápani", award: null }
          ]
        },
        {
          name: "40ª Olimpíada Iberoamericana de Matemática",
          location: "La Araucania, Chile",
          date: "Septiembre 22-29, 2025",
          team: [
            { name: "Diego Correa", award: "Medalla de Bronce" },
            { name: "Juan Martín González", award: "Medalla de Bronce" },
            { name: "Alfonso Ramos", award: "Medalla de Bronce" },
            { name: "Rafael Trápani", award: "Medalla de Bronce" }
          ]
        },
        {
          name: "36ª Olimpíada Matemática de Países del Conosur",
          location: "Minas, Uruguay",
          date: "Junio 4-9, 2025",
          team: [
            { name: "Facundo Correa", award: null },
            { name: "Luca Fischbein", award: "Mención Honorífica" },
            { name: "Julia Murguía", award: "Mención Honorífica" },
            { name: "Lautaro Rivarola", award: null }
          ]
        },
        {
          name: "5ª Olimpíada PAGMO",
          location: "Fortaleza, Brasil",
          date: "Octubre 26 - Noviembre 1, 2025",
          team: [
            { name: "Julia Murguía", award: "Medalla de Bronce" },
            { name: "Emilia Muxi", award: null },
            { name: "Emma Stilman", award: null },
            { name: "Valentina Veiga", award: null }
          ]
        }
      ]
    },
    {
      year: 2024,
      competitions: [
        {
          name: "31ª Olimpíada Matemática Rioplatense",
          location: "Victoria, Argentina",
          date: "Diciembre de 2024",
          team: [
            { name: "Luca Fischbein", award: "Medalla de Bronce" },
            { name: "Agustina Malenky", award: "Mención Honorífica" },
            { name: "Valentino Oliva", award: "Mención Honorífica" },
            { name: "Facundo Correa", award: "Mención Honorífica" },
            { name: "Alfonso Ramos", award: "Mención Honorífica" },
            { name: "Diego Correa", award: "Mención Honorífica" },
            { name: "Federico Méndez", award: "Mención Honorífica" }
          ]
        },
        {
          name: "4ª Olimpiada Panamericana Femenina de Matemática (PAGMO)",
          location: "Durango, México",
          date: "Noviembre 2024",
          team: [
            { name: "Julia Murguía", award: "Medalla de Bronce" },
            { name: "María Capone", award: null },
            { name: "Anette Kunnin", award: null },
            { name: "Emma Stilman", award: null }
          ]
        },
        {
          name: "39ª Olimpíada Iberoamericana de Matemática",
          location: "Ciudad de México, México",
          date: "Septiembre 2024",
          team: [
            { name: "Francisco González", award: "Medalla de Plata" },
            { name: "Rafael Trapani", award: "Medalla de Bronce" },
            { name: "Juan Martín González", award: "Medalla de Bronce" },
            { name: "Federico Méndez", award: "Mención Honorífica" }
          ]
        },
        {
          name: "65ª Olimpíada Internacional de Matemática (IMO)",
          location: "Bath, Reino Unido",
          date: "Julio 2024",
          team: [
            { name: "Tobías Rodriguez", award: "Mención Honorífica" },
            { name: "Florencia Sapriza", award: "Mención Honorífica" },
            { name: "Gastón Correa", award: "Mención Honorífica" },
            { name: "Agustín Miraballes", award: null },
            { name: "Francisco González", award: null },
            { name: "Rafael Trapani", award: null }
          ]
        },
        {
          name: "35ª Olimpíada Matemática de Países del Conosur",
          location: "Fortaleza, Brasil",
          date: "Mayo 2024",
          team: [
            { name: "Diego Correa", award: "Medalla de Bronce" },
            { name: "Facundo Correa", award: null },
            { name: "Matías Cossatti", award: null },
            { name: "Matías Martony", award: null }
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
              Resultados de Olimpiadas Internacionales
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Historia y logros de los equipos uruguayos en competencias matemáticas internacionales
            </p>

            {/* Introduction */}
            <div className="bg-sky-50 p-6 rounded-lg mb-8">
              <p className="mb-4">
                A lo largo de los años, Uruguay ha tenido una destacada participación en diversas competencias
                matemáticas internacionales. En esta sección, podrás conocer los resultados obtenidos por nuestros
                representantes en las olimpiadas más recientes.
              </p>
              <p>
                Cada medalla y mención honorífica representa el esfuerzo, dedicación y talento de nuestros
                estudiantes, así como el compromiso del equipo de entrenadores y profesores que los preparan.
              </p>
            </div>

            {/* Medal Legend */}
            <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Leyenda de Premios:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Oro</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-gray-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Plata</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-amber-700 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Bronce</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-sky-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Mención Honorífica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results by year */}
            {resultados.map((yearData) => (
              <section key={yearData.year} className="mb-10" aria-labelledby={`heading-${yearData.year}`}>
                <h2
                  id={`heading-${yearData.year}`}
                  className="text-2xl font-bold mb-6 pb-2 border-b-2 border-sky-500 inline-block text-sky-800"
                >
                  Resultados {yearData.year}
                </h2>

                <div className="space-y-6">
                  {yearData.competitions.map((competition) => (
                    <Card key={`${yearData.year}-${competition.name}`} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-sky-700 mb-2">{competition.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mb-4">
                          <span>{competition.location}</span>
                          <span>{competition.date}</span>
                        </div>

                        <h4 className="font-medium mt-4 mb-3">Equipo uruguayo:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          {competition.team.map((member) => (
                            <div key={`${competition.name}-${member.name}`} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                              <div className="flex items-center justify-between">
                                <h5 className="font-bold text-gray-800">{member.name}</h5>
                                {member.award && (
                                  <span className={`text-sm font-medium ${
                                    member.award.includes("Oro") ? "text-yellow-600" :
                                    member.award.includes("Plata") ? "text-gray-400" :
                                    member.award.includes("Bronce") ? "text-amber-600" :
                                    "text-sky-600"
                                  }`}>
                                    {member.award.includes("Oro") && "🥇"}
                                    {member.award.includes("Plata") && "🥈"}
                                    {member.award.includes("Bronce") && "🥉"}
                                    {member.award.includes("Mención") && "⭐"}
                                  </span>
                                )}
                              </div>
                              {member.award && (
                                <p className={`text-sm mt-1 ${
                                  member.award.includes("Oro") ? "text-yellow-600" :
                                  member.award.includes("Plata") ? "text-gray-500" :
                                  member.award.includes("Bronce") ? "text-amber-600" :
                                  "text-sky-600"
                                }`}>
                                  {member.award}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            {/* Historical note */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-sm border border-yellow-200 mt-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-yellow-100 rounded-full p-5 md:p-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">Historia olímpica uruguaya</h3>
                  <p className="mb-4 text-gray-700">
                    Uruguay participa en la Olimpíada Internacional de Matemática desde 1997, y ha
                    obtenido hasta el momento <span className="font-medium text-amber-700">2 medallas de bronce</span> y
                    <span className="font-medium text-sky-600"> 36 menciones honoríficas</span>.
                  </p>
                  <p className="mb-4 text-gray-700">
                    En esta página mostramos los resultados más recientes (2024-2025). Para consultar 
                    resultados de años anteriores, puedes visitar:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="https://iberoofficial.vercel.app/paises/URY?section=estadisticas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium text-sm sm:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Resultados Iberoamericana
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://www.oma.org.ar/contents/paginas/rio.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm sm:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Resultados Rioplatense
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://www.imo-official.org/country_info.aspx?code=URY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium text-sm sm:text-base sm:col-span-2 sm:justify-self-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Resultados IMO
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Resultados de Olimpiadas Internacionales | Uruguay',
  description:
    'Resultados recientes de los equipos uruguayos en competencias matemáticas internacionales como IMO, Iberoamericana y Cono Sur (2024-2025).',
  keywords: ['Uruguay', 'Olimpíada de Matemática', 'IMO', 'Iberoamericana', 'Cono Sur', 'resultados', 'olimpiadas'],
  alternates: { canonical: '/resultados-olimpiadas' },
  openGraph: {
    title: 'Resultados de Olimpiadas Internacionales | Uruguay',
    description:
      'Resultados de Uruguay en IMO, Iberoamericana y Cono Sur. Medallas y menciones honoríficas de 2024 y 2025.',
    url: '/resultados-olimpiadas',
    siteName: 'De Exolímpicos para Olímpicos',
    locale: 'es_UY',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
