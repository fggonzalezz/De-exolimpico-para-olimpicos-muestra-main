import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ResultadosPage() {
  // Results data for past competitions
  const resultados = [
    {
      year: 2025,
      competitions: [
        {
          name: "66ª Olimpíada Internacional de Matemática (IMO)",
          location: "Sunshine Coast, Australia",
          date: "Julio 10-20, 2025",
          team: [
            { name: "Diego Correa", award: null },
            { name: "Juan Martín González", award: null },
            { name: "Federico Méndez", award: null },
            { name: "Alfonso Ramos", award: null },
            { name: "Rafael Trápani", award: null }
          ],
          leaders: ["Por confirmar"]
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
          ],
          leaders: ["Por confirmar"]
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
          ],
          leaders: ["Por confirmar"]
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
          ],
          leaders: ["Por confirmar"]
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
          ],
          leaders: ["Tobías Rodriguez", "Facundo Méndez"]
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
          ],
          leaders: ["Florencia Sapriza", "Prof. Natalia Colino"]
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
          ],
          leaders: ["Facundo Méndez", "Vladimir Silva"]
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
          ],
          leaders: ["Prof. Guillermo Stok", "Prof. Nelson Chocca"]
        },
        {
          name: "35ª Olimpíada Matemática de Países del Conosur",
          location: "Fortaleza, Brasil",
          date: "Mayo 2024",
          team: [
            { name: "Diego Correa", award: "Medalla de Bronce" },
            { name: "Facundo Correa", award: "Mención Honorífica" },
            { name: "Matías Cossatti", award: null },
            { name: "Matías Martony", award: null }
          ],
          leaders: ["Prof. Nelson Chocca", "Facundo Méndez"]
        }
      ]
    },
    {
      year: 2023,
      competitions: [
        {
          name: "IV Olimpiada Internacional de Matemática para Primaria (OLIMPRI)",
          location: "Virtual - Lima, Perú",
          date: "Diciembre 2023",
          team: [
            { name: "Juan Roade Bernaola", award: null },
            { name: "Valentín González Roland", award: null },
            { name: "Santiago Kriz Yimalkovski", award: null },
            { name: "José Ignacio Platero", award: null },
            { name: "Manuel Harteneck Pereira das Neves", award: null },
            { name: "Federico Stemphelet Vence", award: null },
            { name: "Santiago Tanco Vanrell", award: null },
            { name: "Mateo Bidegain Martínez", award: null }
          ],
          leaders: ["Por confirmar"]
        },
        {
          name: "38ª Olimpíada Iberoamericana de Matemática",
          location: "Río de Janeiro, Brasil",
          date: "Setiembre 2023",
          team: [
            { name: "Florencia Sapriza", award: "Medalla de Bronce" },
            { name: "Renato De Paula", award: null },
            { name: "Mateo Domenech", award: null },
            { name: "Agustín Miraballes", award: null }
          ],
          leaders: ["Prof. Nelson Chocca", "Prof. Federico Fornesi"]
        },
        {
          name: "34ª Olimpíada de Matemática de Países del Conosur",
          location: "Buenos Aires, Argentina",
          date: "Agosto 2023",
          team: [
            { name: "Rafael Trápani", award: "Medalla de Bronce" },
            { name: "Renato De Paula", award: null },
            { name: "Juan Martín González", award: null },
            { name: "Francisco Rodríguez", award: null }
          ],
          leaders: ["Prof. Nelson Chocca", "Vladimir Silva"]
        },
        {
          name: "3ª Olimpíada de Matemática PAGMO",
          location: "Costa Rica",
          date: "Agosto 6-12, 2023",
          team: [
            { name: "Florencia Broggi", award: null },
            { name: "María Capone", award: null },
            { name: "Alina Dávila", award: null },
            { name: "Anette Kunin", award: null }
          ],
          leaders: ["Por confirmar"]
        },
        {
          name: "64ª Olimpiada Internacional de Matemática (IMO)",
          location: "Chiba, Japón",
          date: "Julio 2023",
          team: [
            { name: "Mauro Akerman", award: "Mención Honorífica" },
            { name: "Facundo Méndez", award: "Mención Honorífica" },
            { name: "Tobías Rodríguez", award: "Mención Honorífica" }
          ],
          leaders: ["Hernán Puschiasis"]
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
                  <span className="text-yellow-600 mr-2">🥇</span>
                  <span className="font-medium">Medalla de Oro</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">🥈</span>
                  <span className="font-medium">Medalla de Plata</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600 mr-2">🥉</span>
                  <span className="font-medium">Medalla de Bronce</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sky-600 mr-2">⭐</span>
                  <span className="font-medium">Mención Honorífica</span>
                </div>
              </div>
            </div>

            {/* Results by year */}
            {resultados.map((yearData) => (
              <div key={yearData.year} className="mb-10">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-sky-500 inline-block text-sky-800">
                  Resultados {yearData.year}
                </h2>

                <div className="space-y-6">
                  {yearData.competitions.map((competition, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-sky-700 mb-2">{competition.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mb-4">
                          <span>📍 {competition.location}</span>
                          <span>📅 {competition.date}</span>
                        </div>

                        <h4 className="font-medium mt-4 mb-3">Equipo uruguayo:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          {competition.team.map((member, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
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

                        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                          <span className="font-medium">👥 Líderes del equipo:</span>{" "}
                          {competition.leaders?.join(", ")}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Historical note */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-sm border border-yellow-200 mt-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-yellow-100 rounded-full p-5 md:p-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">Historia olímpica uruguaya</h3>
                  <p className="mb-4 text-gray-700">
                    Uruguay participa en la Olimpíada Internacional de Matemática desde 1997, y ha
                    obtenido hasta el momento <span className="font-medium text-amber-700">2 medallas de bronce</span> y
                    <span className="font-medium text-sky-600"> 36 menciones honoríficas</span>.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
                  >
                    ¿Tienes información histórica que quieras compartir? Contáctanos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
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
