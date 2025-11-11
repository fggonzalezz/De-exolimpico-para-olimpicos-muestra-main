import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, FileText, Brain, Calculator } from 'lucide-react';

export default function MaterialEstudioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-6 md:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12 px-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-700 mb-3 md:mb-4">
                Material de Estudio
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Accede a nuestra colección completa de recursos, problemas y material educativo para prepararte para las olimpiadas de matemática
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              <Card className="border-t-4 border-sky-500">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-sky-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Libros y Apuntes</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Material teórico completo sobre álgebra, geometría, teoría de números y combinatoria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-green-500">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-green-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Problemas Resueltos</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Colección de problemas con soluciones detalladas de olimpiadas anteriores
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-purple-500">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-purple-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Estrategias y Técnicas</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Guías sobre técnicas de resolución y estrategias para competencias
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-amber-500">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Pruebas de Práctica</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Exámenes de práctica y simulacros de competencias nacionales e internacionales
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA Card */}
            <Card className="bg-gradient-to-br from-sky-50 to-blue-100 border-2 border-sky-300 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                    <svg 
                      className="w-8 h-8 sm:w-10 sm:h-10 text-sky-600" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"/>
                    </svg>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 px-2">
                    Accede a Google Drive
                  </h2>
                  
                  <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2">
                    Todo nuestro material de estudio está organizado en Google Drive. 
                    Haz clic en el botón para acceder (se abrirá en una nueva pestaña).
                  </p>
                  
                  <a 
                    href="https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg w-full sm:w-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 hover:scale-105"
                    >
                      <span className="truncate">Abrir Material en Google Drive</span>
                      <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    </Button>
                  </a>
                  
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2">
                    💡 Tip: Puedes agregar el enlace a tus favoritos para acceder más rápido
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-6 md:mt-8 text-center px-2">
              <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4">
                ¿Tienes dudas sobre el material o necesitas ayuda?
              </p>
              <a 
                href="/contacto" 
                className="text-sky-600 hover:text-sky-800 font-medium underline text-sm sm:text-base"
              >
                Contáctanos aquí
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
