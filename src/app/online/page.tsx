"use client"
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

// FAQ Data actualizado
const faqItems = [
  {
    question: "¿Qué necesito para participar online?",
    answer: `➤ Un lugar cómodo con buena iluminación y sin ruido
➤ Útiles de geometría
➤ Lápiz y goma
➤ Hojas A4 (preferentemente)
➤ Agua y snacks (recomendado)
➤ Computadora con cámara web y micrófono
➤ Celular con CamScanner instalado para escanear la prueba`
  },
  {
    question: "¿Cómo debo preparar las hojas para la prueba?",
    answer: `Las hojas deben estar numeradas y contener los siguientes datos:

➤ Nombre Completo
➤ Institución Educativa
➤ Mail
➤ Teléfono
➤ Número de página

Se recomienda preparar las hojas con estos datos antes de comenzar la prueba para optimizar el tiempo.`
  },
  {
    question: "¿Cuáles son los requisitos durante la prueba?",
    answer: `➤ Mantener la cámara web y micrófono encendidos en todo momento
➤ La cámara debe enfocar tanto la hoja de la prueba como a ti mismo
➤ Usar lápiz oscuro o lapicera para garantizar la legibilidad
➤ No hablar con nadie
➤ No usar calculadora ni material de consulta
➤ Ser ordenado y enumerar todas las hojas`
  },
  {
    question: "¿Cómo debo entregar la prueba?",
    answer: `➤ Escanear todas las hojas, incluidos los borradores, usando CamScanner
➤ Convertir a PDF
➤ Verificar que el PDF sea legible y funcione correctamente
➤ Llenar el formulario de entrega en la página oficial
➤ Subir el archivo PDF en el orden correcto

Se recomienda practicar este proceso antes de la prueba.`
  },
  {
    question: "¿Qué niveles de participación existen?",
    answer: `Nivel 1: A (4º primaria), B (5º primaria), C (6º primaria)
Nivel 2: 1º año secundaria
Nivel 3: 2º y 3º año secundaria
Nivel 4: 4º y 5º año secundaria
Nivel 5: 6º año secundaria`
  },
  {
    question: "¿Qué debo verificar antes de la prueba?",
    answer: `➤ Funcionamiento correcto de cámara y micrófono
➤ Posición adecuada de la cámara para que capture tanto la hoja como a ti
➤ Tener instalado CamScanner y practicar su uso
➤ Tener todos los materiales necesarios
➤ Tener las hojas preparadas con los datos requeridos`
  }
];

export default function OnlinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold mb-4 text-sky-800">
                Recursos para Participación Online
              </h1>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-yellow-500 rounded mb-6"></div>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre recursos y guías para participar en nuestras competencias matemáticas desde tu casa
              </p>
            </div>

            {/* Video Section */}
            <Card className="overflow-hidden shadow-lg mb-16">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/QtQdZB0MBjA"
                    title="Recursos Online para Olimpíada Conosur"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-4">
                  Preguntas Frecuentes
                </h2>
                <div className="flex justify-center">
                  <div className="h-1 w-24 bg-yellow-500 rounded mb-6"></div>
                </div>
              </div>

              <div className="grid gap-6">
                {faqItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-sky-800 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
