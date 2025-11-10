import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PaginasRecomendadasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-inter font-bold mb-4">
                Páginas Recomendadas
              </h1>
              <p className="text-xl font-light">
                Otros lugares excelentes para practicar y mejorar tus habilidades matemáticas
              </p>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-inter font-semibold mb-4 text-sky-700">
                  ¿Por qué estas páginas?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sabemos que la práctica constante es clave para el éxito en las olimpiadas de matemática. 
                  Por eso, hemos seleccionado cuidadosamente estas plataformas que ofrecen recursos 
                  excepcionales para complementar tu entrenamiento. Cada una tiene características únicas 
                  que pueden ayudarte a desarrollar diferentes aspectos de tu formación matemática.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Páginas Recomendadas */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                
                {/* Evan Chen's Olympiad Page */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link
                          href="https://web.evanchen.cc/olympiad.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-sky-700 mb-2 hover:text-sky-800 transition-colors block"
                        >
                          Evan Chen's Olympiad Resources
                        </Link>
                        <p className="text-sm text-gray-500">web.evanchen.cc/olympiad.html</p>
                      </div>
                      <Link
                        href="https://web.evanchen.cc/olympiad.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
                      >
                        Visitar →
                      </Link>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Una de las mejores colecciones de recursos para olimpiadas de matemática, creada por 
                      Evan Chen (ex-participante de IMO). Incluye handouts organizados por tema (álgebra, 
                      geometría, teoría de números, combinatoria), guías de escritura de pruebas, y 
                      experiencias personales en competencias.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Handouts</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Teoría</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Experiencias</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">LaTeX</span>
                    </div>
                  </div>
                </div>

                {/* OMA Foros */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link
                          href="https://omaforos.com.ar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-sky-700 mb-2 hover:text-sky-800 transition-colors block"
                        >
                          OMA Foros Argentina
                        </Link>
                        <p className="text-sm text-gray-500">omaforos.com.ar</p>
                      </div>
                      <Link
                        href="https://omaforos.com.ar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
                      >
                        Visitar →
                      </Link>
                    </div>
                    <p className="text-gray-700 mb-3">
                      El foro oficial de la Olimpiada Matemática Argentina (OMA). Aquí encontrarás 
                      discusiones sobre problemas, un extenso archivo de enunciados de competencias 
                      anteriores, y una comunidad activa de estudiantes y entrenadores de habla hispana. 
                      Incluye problemas del día y recursos específicos para olimpiadas regionales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Español</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Foro</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Archivo</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Comunidad</span>
                    </div>
                  </div>
                </div>

                {/* Art of Problem Solving */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link
                          href="https://artofproblemsolving.com/community"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-sky-700 mb-2 hover:text-sky-800 transition-colors block"
                        >
                          Art of Problem Solving Community
                        </Link>
                        <p className="text-sm text-gray-500">artofproblemsolving.com/community</p>
                      </div>
                      <Link
                        href="https://artofproblemsolving.com/community"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
                      >
                        Visitar →
                      </Link>
                    </div>
                    <p className="text-gray-700 mb-3">
                      La comunidad más grande de matemática competitiva en inglés. AoPS ofrece foros 
                      organizados por competencia (IMO, USAMO, etc.), problemas clasificados por dificultad, 
                      y una plataforma donde puedes resolver problemas online. También incluye preparación 
                      específica para diferentes niveles y competencias.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Inglés</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Comunidad</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Cursos</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">IMO</span>
                    </div>
                  </div>
                </div>

                {/* Yufei Zhao's Olympiad */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Link
                          href="https://yufeizhao.com/olympiad/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-sky-700 mb-2 hover:text-sky-800 transition-colors block"
                        >
                          Yufei Zhao's Olympiad Resources
                        </Link>
                        <p className="text-sm text-gray-500">yufeizhao.com/olympiad/</p>
                      </div>
                      <Link
                        href="https://yufeizhao.com/olympiad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
                      >
                        Visitar →
                      </Link>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Recursos creados por Yufei Zhao (Profesor en MIT, ex-participante de IMO). 
                      Incluye materiales avanzados de entrenamiento, problemas seleccionados, 
                      y guías específicas para diferentes áreas de las matemáticas olímpicas. 
                      Especialmente valioso para estudiantes de nivel avanzado.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Avanzado</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">MIT</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Entrenamiento</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Académico</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Consejos de uso */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-6 text-center">
                Consejos para aprovechar estos recursos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-sky-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Estudio Sistemático</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Dedica tiempo regular a estudiar los handouts de Evan Chen, 
                    especialmente en las áreas donde sientes que necesitas reforzar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2V6a2 2 0 012-2h6a2 2 0 012 2v2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Participación Activa</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Únete a las discusiones en los foros. Resolver problemas en 
                    comunidad te ayuda a ver diferentes enfoques y técnicas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Práctica Diversificada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Alterna entre diferentes fuentes para exponerte a diversos 
                    estilos de problemas y metodologías de resolución.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Progresión Gradual</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comienza con problemas más básicos y gradualmente avanza 
                    hacia contenido más desafiante según tu nivel actual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="py-12 bg-sky-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-4">
                ¿Conoces otros recursos excelentes?
              </h2>
              <p className="text-xl font-light mb-6">
                Si tienes sugerencias de otras páginas que deberíamos incluir en esta lista, 
                no dudes en contactarnos.
              </p>
              <Link
                href="/contacto"
                className="bg-white text-sky-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
} 