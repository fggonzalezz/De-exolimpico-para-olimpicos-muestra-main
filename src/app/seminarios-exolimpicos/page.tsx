import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function SeminariosPage() {
  // Sample seminars data
  const seminarios = [
    {
      id: 1,
      title: "Combinatoria Avanzada",
      presenter: "Ana Fernández",
      role: "Ex-olímpica, Medalla de Bronce IMO 2007",
      date: "Mayo 15, 2025",
      description: "Métodos avanzados de conteo, principio de inclusión-exclusión, y aplicaciones en problemas olímpicos.",
      materials: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj",
      video: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Geometría: Estrategias para la IMO",
      presenter: "Carlos Rodríguez",
      role: "Ex-olímpico, Participante IMO 2018-2019",
      date: "Junio 10, 2025",
      description: "Técnicas geométricas fundamentales para enfrentar problemas de nivel internacional.",
      materials: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj",
      video: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "Teoría de Números para Olimpiadas",
      presenter: "Martín Pérez",
      role: "Ex-olímpico, Medalla de Plata Iberoamericana 2020",
      date: "Junio 25, 2025",
      description: "Congruencias, ecuaciones diofánticas y técnicas para resolver problemas numéricos desafiantes.",
      materials: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj",
      video: "https://youtube.com/watch?v=example3",
    },
    {
      id: 4,
      title: "El Arte de Resolver Problemas",
      presenter: "Lucía Méndez",
      role: "Ex-olímpica, Medalla de Oro Conosur 2017",
      date: "Julio 8, 2025",
      description: "Metodologías y heurísticas para abordar problemas desconocidos y desarrollar intuición matemática.",
      materials: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj",
      video: "https://youtube.com/watch?v=example4",
    },
    {
      id: 5,
      title: "Álgebra Olímpica",
      presenter: "Gabriel Torres",
      role: "Ex-olímpico, Participante IMO 2022",
      date: "Agosto 3, 2025",
      description: "Desigualdades, polinomios y ecuaciones funcionales en el contexto de competencias matemáticas.",
      materials: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj",
      video: "https://youtube.com/watch?v=example5",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Seminarios de Ex-Olímpicos
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Aprende de quienes han representado a Uruguay en competencias internacionales
            </p>

            {/* Introduction */}
            <div className="bg-sky-50 p-6 rounded-lg mb-8">
              <p className="mb-4">
                Nuestros ex-olímpicos comparten sus conocimientos y experiencias a través de estos seminarios 
                especialmente diseñados para estudiantes que desean profundizar en temas de matemática olímpica.
              </p>
              <p>
                Cada seminario incluye material de práctica, problemas resueltos, y la oportunidad de interactuar 
                con matemáticos que han vivido la experiencia de las competencias internacionales.
              </p>
            </div>

            {/* Seminars */}
            <div className="space-y-6 mb-8">
              {seminarios.map((seminario) => (
                <Card key={seminario.id} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-sky-700">{seminario.title}</h3>
                        <p className="text-gray-600 mt-1">{seminario.presenter}</p>
                        <p className="text-sm text-gray-500 italic">{seminario.role}</p>
                        <p className="text-sm font-medium mt-2">Fecha: {seminario.date}</p>
                        <p className="mt-3">{seminario.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 min-w-[150px]">
                        <a 
                          href={seminario.materials} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-800 flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Materiales
                        </a>
                        <a 
                          href={seminario.video} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-800 flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Ver video
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-yellow-700 mb-2">¿Eres ex-olímpico y te gustaría compartir tu experiencia?</h3>
              <p className="mb-4">
                Nos encantaría contar contigo para futuros seminarios. Tu experiencia es valiosa para 
                las nuevas generaciones de matemáticos uruguayos.
              </p>
              <Link 
                href="/contacto" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}