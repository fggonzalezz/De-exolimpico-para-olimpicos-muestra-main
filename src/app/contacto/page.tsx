'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formsubmit.co/ajax/fg188707@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

                  {isSuccess ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in duration-500">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">¡Gracias por tu sugerencia!</h3>
                      <p className="text-green-700 mb-6">
                        Hemos recibido tu mensaje correctamente. Agradecemos tu tiempo para ayudarnos a mejorar.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-green-600 hover:text-green-800 font-medium underline"
                      >
                        Enviar otra sugerencia
                      </button>
                    </div>
                  ) : (
                    <form 
                      onSubmit={handleSubmit}
                      className="max-w-2xl mx-auto space-y-6"
                    >
                      {/* Configuration for FormSubmit */}
                      <input type="hidden" name="_subject" value="Nueva sugerencia de mejora - Web Ex-Olímpicos" />
                      <input type="hidden" name="_captcha" value="false" />
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
                          disabled={isSubmitting}
                          className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors shadow-md hover:shadow-lg ${
                            isSubmitting 
                              ? 'bg-green-400 cursor-not-allowed' 
                              : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                              Enviar Sugerencia
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
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