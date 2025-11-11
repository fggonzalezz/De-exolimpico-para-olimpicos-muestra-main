import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Contacto
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Estamos aquí para responder todas tus consultas
            </p>

            {/* Contact Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-center mb-8 text-sky-700">¿Con quién contactar?</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coordinadores */}
                    <div className="text-center p-6 bg-sky-50 rounded-lg">
                      <div className="flex justify-center mb-4">
                        <div className="bg-sky-500 rounded-full p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-sky-700">Para Coordinadores</h3>
                      <p className="text-gray-600 mb-4">
                        Si eres coordinador de un centro educativo o deseas convertirte en uno
                      </p>
                      <a 
                        href="mailto:lacompartida@gmail.com"
                        className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium text-base break-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">lacompartida@gmail.com</span>
                      </a>
                    </div>

                    {/* Participantes */}
                    <div className="text-center p-6 bg-yellow-50 rounded-lg">
                      <div className="flex justify-center mb-4">
                        <div className="bg-yellow-500 rounded-full p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-yellow-700">Para Participantes</h3>
                      <p className="text-gray-600 mb-4">
                        Si eres estudiante interesado en participar en las olimpiadas
                      </p>
                      <a 
                        href="mailto:cpm.exolimpicos@gmail.com"
                        className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium text-base break-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">cpm.exolimpicos@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Preguntas frecuentes</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg text-sky-700">¿Cómo puedo participar en las olimpiadas matemáticas?</h3>
                  <p className="mt-2 text-gray-600">
                    Para participar en nuestras olimpiadas debes acercarte a un coordinador de tu centro educativo 
                    o contactarnos directamente. Las convocatorias se suelen publicar al comienzo del año lectivo.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg text-sky-700">¿Qué materiales de estudio ofrecen?</h3>
                  <p className="mt-2 text-gray-600">
                    Contamos con una amplia biblioteca de problemas, seminarios de ex-olímpicos y material de 
                    preparación. Puedes acceder a ellos desde la sección de Materiales en nuestra web.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 