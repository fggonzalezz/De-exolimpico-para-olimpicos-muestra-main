import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function LibroNacionalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Libro Nacional 2018-2019
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Material oficial de la Olimpíada Nacional de Matemática de Uruguay
            </p>

            {/* Main Info Card */}
            <Card className="mb-8 border-t-4 border-green-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="bg-green-100 rounded-full p-6 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-700 mb-4">
                    Libro Nacional de Matemática
                  </h2>
                  <p className="text-gray-700 leading-relaxed max-w-2xl">
                    El Libro Nacional 2018-2019 es una compilación oficial de problemas, 
                    soluciones y material teórico utilizado en la Olimpíada Nacional de Matemática de Uruguay. 
                    Este recurso es fundamental para la preparación de estudiantes que desean participar 
                    en competencias nacionales e internacionales.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Contenido */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800">Contenido</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        <span>Problemas de la Olimpíada Nacional</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        <span>Soluciones detalladas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        <span>Material teórico complementario</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">▸</span>
                        <span>Problemas de años anteriores</span>
                      </li>
                    </ul>
                  </div>

                  {/* Utilidad */}
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-amber-800">¿Para quién?</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">▸</span>
                        <span>Estudiantes de secundaria</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">▸</span>
                        <span>Participantes de olimpíadas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">▸</span>
                        <span>Profesores y entrenadores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">▸</span>
                        <span>Entusiastas de la matemática</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Áreas Cubiertas */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-800">Áreas de Matemática Cubiertas</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">▸</span>
                      <span className="font-medium">Álgebra</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">▸</span>
                      <span className="font-medium">Geometría</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">▸</span>
                      <span className="font-medium">Teoría de Números</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">▸</span>
                      <span className="font-medium">Combinatoria</span>
                    </div>
                  </div>
                </div>

                {/* Instagram Post Preview */}
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 p-8 rounded-lg text-white text-center mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <h3 className="text-2xl font-bold">¡Síguenos en Instagram!</h3>
                  </div>
                  <p className="mb-6 text-pink-50">
                    Para solicitar información sobre el Libro Nacional, contáctanos a través de nuestro Instagram oficial
                  </p>
                  <a
                    href="https://www.instagram.com/olim_mat_uy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors font-bold shadow-lg text-lg mb-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @olim_mat_uy
                  </a>
                </div>

                {/* Embedded Instagram Post */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                    📢 Anuncio sobre el Libro Nacional
                  </h4>
                  <div className="flex justify-center">
                    <div className="max-w-md w-full">
                      <blockquote 
                        className="instagram-media" 
                        data-instgrm-captioned 
                        data-instgrm-permalink="https://www.instagram.com/p/DQxEhOSkd6U/" 
                        data-instgrm-version="14"
                        style={{
                          background: '#FFF',
                          border: 0,
                          borderRadius: '3px',
                          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                          margin: '1px',
                          maxWidth: '540px',
                          minWidth: '326px',
                          padding: 0,
                          width: 'calc(100% - 2px)'
                        }}
                      >
                        <div style={{ padding: '16px' }}>
                          <a 
                            href="https://www.instagram.com/p/DQxEhOSkd6U/" 
                            style={{ 
                              background: '#FFFFFF',
                              lineHeight: 0,
                              padding: '0 0',
                              textAlign: 'center',
                              textDecoration: 'none',
                              width: '100%'
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver esta publicación en Instagram
                          </a>
                        </div>
                      </blockquote>
                      <script async src="//www.instagram.com/embed.js"></script>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Consulta la publicación completa para más detalles sobre cómo obtener el libro
                  </p>
                </div>

                {/* Botón alternativo */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Explora Más Material</h3>
                  <p className="mb-4 text-green-50">
                    También puedes consultar otros recursos de estudio disponibles
                  </p>
                  <Link
                    href="/nacional"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-bold shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Ver Material Nacional
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Material de Estudio */}
              <Card className="border-t-4 border-sky-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky-100 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-sky-700">Más Material</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explora otros recursos de estudio, incluyendo problemas de olimpíadas nacionales 
                    de diferentes años y niveles.
                  </p>
                  <Link
                    href="/nacional"
                    className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                  >
                    Ver Material Nacional
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>

              {/* Seminarios */}
              <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-orange-700">Seminarios</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Accede a grabaciones de seminarios impartidos por exolímpicos y entrenadores 
                    para profundizar en temas específicos.
                  </p>
                  <Link
                    href="/seminarios-exolimpicos"
                    className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
                  >
                    Ver Seminarios
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Info Note */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-pink-800 mb-2">📲 Cómo Obtener el Libro</h4>
                  <p className="text-gray-700 mb-3">
                    El Libro Nacional es un recurso elaborado por el equipo de la Olimpíada Nacional de Matemática de Uruguay. 
                    Para obtener información sobre disponibilidad y acceso al libro, contáctanos a través de nuestro{' '}
                    <a 
                      href="https://www.instagram.com/olim_mat_uy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 font-bold underline inline-flex items-center"
                    >
                      Instagram oficial @olim_mat_uy
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    💡 Tip: Revisa el post destacado en nuestro Instagram para obtener toda la información sobre el libro.
                  </p>
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
