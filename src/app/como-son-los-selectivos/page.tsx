import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function SelectivosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              ¿Cómo son los Selectivos?
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Información sobre las pruebas selectivas para representar a Uruguay en competencias internacionales
            </p>

            {/* Main Info Card */}
            <Card className="mb-8 border-t-4 border-sky-500 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-700 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Características de las Pruebas Selectivas
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Las pruebas selectivas para representar a Uruguay en las olimpiadas internacionales 
                      de matemática tienen características específicas diseñadas para evaluar el conocimiento 
                      matemático, la creatividad y las habilidades de resolución de problemas de los estudiantes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Duración */}
                    <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-sky-500 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-sky-800">Duración</h3>
                      </div>
                      <p className="text-gray-700">
                        Cada prueba selectiva tiene una duración de <span className="font-bold">3 horas</span>, 
                        durante las cuales los estudiantes deben resolver los problemas propuestos.
                      </p>
                    </div>

                    {/* Cantidad de Problemas */}
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-500 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-amber-800">Problemas</h3>
                      </div>
                      <p className="text-gray-700">
                        Se presentan <span className="font-bold">4 problemas</span> en cada prueba, 
                        abarcando diferentes áreas de la matemática.
                      </p>
                    </div>
                  </div>

                  {/* Áreas de la Matemática */}
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">Áreas de la Matemática</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Los problemas abarcan diversas áreas de la matemática olímpica, incluyendo:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">▸</span>
                        Teoría de Números
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">▸</span>
                        Álgebra
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">▸</span>
                        Geometría
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">▸</span>
                        Combinatoria
                      </li>
                    </ul>
                  </div>

                  {/* Metodología */}
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-500 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-purple-800">Formato de las Soluciones</h3>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold">Es fundamental</span> presentar soluciones completas con 
                      <span className="font-bold"> demostraciones rigurosas</span>. No basta con dar una respuesta; 
                      se debe justificar cada paso del razonamiento matemático utilizado. Las soluciones 
                      deben ser claras, lógicas y bien fundamentadas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pruebas Anteriores */}
            <Card className="mb-8 border-t-4 border-yellow-500 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Ejemplos de Pruebas Anteriores
                </h2>
                <p className="text-gray-700 mb-6">
                  Para familiarizarte con el formato y el nivel de dificultad de los selectivos, 
                  puedes consultar las pruebas de años anteriores:
                </p>

                <div className="space-y-4">
                  {/* 2025 */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-sky-400 transition-all">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">Selectivos 2025</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Pruebas selectivas para IMO 2025
                        </p>
                      </div>
                      <a
                        href="https://artofproblemsolving.com/community/c4615245_2025_uruguay_imo_tst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
                      >
                        Ver Problemas
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* 2024 */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-sky-400 transition-all">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">Selectivos 2024</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Pruebas selectivas para IMO 2024
                        </p>
                      </div>
                      <a
                        href="https://artofproblemsolving.com/community/c4615171_2024_uruguay_imo_tst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
                      >
                        Ver Problemas
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-700">💡 Consejo:</span> En la sección de{' '}
                    <Link href="/nacional" className="text-sky-600 hover:text-sky-800 font-medium underline">
                      Material y Pruebas Pasadas
                    </Link>
                    {' '}podrás encontrar más ejemplos y recursos para tu preparación.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Calendario Info */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-lg shadow-sm border border-sky-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-sky-100 rounded-full p-5 md:p-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/>
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/>
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/>
                  </svg>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-sky-700 mb-3">¿Cuándo se realizan los selectivos?</h3>
                  <p className="mb-4 text-gray-700">
                    Las fechas de las pruebas selectivas se publican en nuestro calendario oficial. 
                    Consulta allí para conocer las próximas convocatorias y no perderte ninguna oportunidad.
                  </p>
                  <Link
                    href="/calendario-2025"
                    className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium transition-colors"
                  >
                    Ver Calendario 2025
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
