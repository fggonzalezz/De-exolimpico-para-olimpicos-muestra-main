import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Equipos Uruguayos 2025
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Nuestros representantes en las diferentes olimpiadas internacionales
            </p>

            {/* IMO Team */}
            <section className="mb-12">
              <Card className="border-t-4 border-yellow-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Equipo Olímpico Internacional de Matemática (IMO) 2025</h2>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Los alumnos clasificados para representar a Uruguay en la 66ª Olimpíada Internacional de Matemática 
                      a desarrollarse en Sunshine Coast, Australia, entre el 10 y el 20 de julio de 2025 son (en orden alfabético):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Diego Correa</h3>
                        <p className="text-sm text-gray-600">San Pablo</p>
                        <p className="text-xs text-blue-600 mt-1 font-semibold">⭐ MENCIÓN HONOR</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Juan Martín González</h3>
                        <p className="text-sm text-gray-600">Liceo N° 1, Carmelo</p>
                        <p className="text-xs text-blue-600 mt-1 font-semibold">⭐ MENCIÓN HONOR</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Federico Méndez</h3>
                        <p className="text-sm text-gray-600">José P. Varela</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Alfonso Ramos</h3>
                        <p className="text-sm text-gray-600">PRE/U</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Rafael Trápani</h3>
                        <p className="text-sm text-gray-600">Escuela Superior de Informática Buceo - UTU</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link 
                      href="/equipo-imo-2025" 
                      className="inline-block text-yellow-600 hover:text-yellow-800 font-medium"
                    >
                      Ver más detalles del equipo IMO →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Iberoamericana Team */}
            <section className="mb-12">
              <Card className="border-t-4 border-sky-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Olimpíada Iberoamericana de Matemática 2025</h2>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Los alumnos clasificados para representar a Uruguay en la 36ª Olimpíada Iberoamericana de Matemática 
                      a desarrollarse en La Araucania, Chile, entre el 22 y el 29 de setiembre de 2025 son (en orden alfabético):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Diego Correa</h3>
                        <p className="text-sm text-gray-600">San Pablo</p>
                        <p className="text-xs text-amber-600 mt-1 font-semibold">🥉 BRONCE</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Juan Martín González</h3>
                        <p className="text-sm text-gray-600">Liceo N° 1, Carmelo</p>
                        <p className="text-xs text-amber-600 mt-1 font-semibold">🥉 BRONCE</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Alfonso Ramos</h3>
                        <p className="text-sm text-gray-600">PRE/U</p>
                        <p className="text-xs text-amber-600 mt-1 font-semibold">🥉 BRONCE</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Rafael Trápani</h3>
                        <p className="text-sm text-gray-600">Escuela Superior de Informática Buceo - UTU</p>
                        <p className="text-xs text-amber-600 mt-1 font-semibold">🥉 BRONCE</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Conosur Team */}
            <section className="mb-12">
              <Card className="border-t-4 border-green-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Olimpíada de Matemática de Países del Cono Sur 2025</h2>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Los alumnos clasificados para representar a Uruguay en la 36ª Olimpíada de Matemática de Países del Cono Sur 
                      a desarrollarse en Minas, Uruguay, entre el 4 y el 9 de junio de 2025 son (en orden alfabético):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Facundo Correa</h3>
                        <p className="text-sm text-gray-600">Liceo San Ignacio</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Luca Fischbein</h3>
                        <p className="text-sm text-gray-600">Uruguayan American School</p>
                        <p className="text-xs text-blue-600 mt-1 font-semibold">⭐ MENCIÓN HONOR</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Julia Murguía</h3>
                        <p className="text-sm text-gray-600">Uruguayan American School</p>
                        <p className="text-xs text-blue-600 mt-1 font-semibold">⭐ MENCIÓN HONOR</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Lautaro Rivarola</h3>
                        <p className="text-sm text-gray-600">San Miguel, Mercedes, Soriano</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* PAGMO Team */}
            <section className="mb-12">
              <Card className="border-t-4 border-purple-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">PAGMO 2025 (Pan-American Girls´ Mathematical Olympiad)</h2>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Las alumnas clasificadas para representar a Uruguay en la 5ª PAGMO 
                      a desarrollarse en Fortaleza, Brasil, entre el 26 de octubre y el 1 de noviembre de 2025 son (en orden alfabético):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Julia Murguía</h3>
                        <p className="text-sm text-gray-600">Uruguayan American School</p>
                        <p className="text-xs text-amber-600 mt-1 font-semibold">🥉 BRONCE</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Emilia Muxi</h3>
                        <p className="text-sm text-gray-600">Woodlands</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Emma Stilman</h3>
                        <p className="text-sm text-gray-600">Instituto Uruguayo Argentino</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <h3 className="font-bold">Valentina Veiga</h3>
                        <p className="text-sm text-gray-600">Seminario</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="text-center">
              <p className="text-gray-600">
                ¡Apoya a nuestros representantes en las diferentes competencias internacionales!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}