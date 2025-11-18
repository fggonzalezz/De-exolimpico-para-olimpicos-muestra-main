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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
            <section className="mt-12 mb-12">
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

            {/* Suggestions Form */}
            <section className="mt-12 mb-8">
              <Card className="shadow-lg border-t-4 border-green-500">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">¿Tienes sugerencias de mejora?</h2>
                    <p className="text-gray-600">
                      Tu opinión es muy importante para nosotros. Cuéntanos qué te gustaría ver en la web o qué podríamos mejorar.
                    </p>
                  </div>

                  <form 
                    action="https://formsubmit.co/fg188707@gmail.com" 
                    method="POST"
                    className="max-w-2xl mx-auto space-y-6"
                  >
                    {/* Configuration for FormSubmit */}
                    <input type="hidden" name="_subject" value="Nueva sugerencia de mejora - Web Ex-Olímpicos" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://de-exolimpico-para-olimpicos-muestra.netlify.app/contacto?success=true" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Nombre (Opcional)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email (Opcional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="suggestion" className="text-sm font-medium text-gray-700">
                        ¿Qué sugerencia tienes? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="suggestion"
                        name="suggestion"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Me gustaría que agregaran..."
                      ></textarea>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-md hover:shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Enviar Sugerencia
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 