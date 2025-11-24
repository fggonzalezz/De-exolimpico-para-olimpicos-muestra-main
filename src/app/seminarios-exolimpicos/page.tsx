import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import GoogleDrivePDFViewer from '@/components/GoogleDrivePDFViewer';
import { buildStaticPageMetadata } from '@/lib/seo';

export const metadata = buildStaticPageMetadata('/seminarios-exolimpicos');

export default function SeminariosPage() {
  const uyMathVideos = [
    {
      category: "Álgebra",
      videos: [
        { title: "Manipulaciones algebraicas", url: "https://www.youtube.com/embed/fnC_gL0dA5w", description: "En este video, hablamos un poco sobre qué es la matemática, qué es el álgebra y aprendemos las normas algebraicas más relevantes para la olimpiada" },
        { title: "Sumatoria y suma de gauss", url: "https://www.youtube.com/embed/SIL7aKuJbtQ", description: "En este video hablaremos de la popular \"suma de gauss\", y hablaremos de las sumatorias en general" }
      ]
    },
    {
      category: "Combinatoria",
      videos: [
        { title: "Combinaciones, permutaciones y arreglos", url: "https://www.youtube.com/embed/vCDpK-XdWcI", description: "En este video vamos a estar viendo conceptos básicos de combinatoria como los son las permutaciones, arreglos y combinaciones, así como resolviendo problemas con lo aprendido." },
        { title: "Principio del mínimo y de palomar", url: "https://www.youtube.com/embed/dI80b-dhuJA", description: "En este video se van a presentar dos principios muy importantes, en especial el del palomar, y resolverán problemas con ellos." },
        { title: "Juegos y estrategia ganadora", url: "https://www.youtube.com/embed/oxfDsxpNuPc", description: "En este video estaremos viendo estrategias para resolver problemas de juegos en olimpiadas." },
        { title: "Coloraciones", url: "https://www.youtube.com/embed/pxa8cU5vXp4", description: "En este video estaremos dando las nociones básicas de colorear como estrategia para resolver problemas." },
        { title: "Invariantes", url: "https://www.youtube.com/embed/zaqojx28Rvg", description: "¿Que son las invariantes? En este video estaremos viendo algunos problemas con ellas" },
        { title: "Principio inclusión-exclusión", url: "https://www.youtube.com/embed/cqhlgVXesjQ", description: "¿Que es este principio? en este video daremos una explicacion teórica, y también lo explicaremos mediante problemas" }
      ]
    },
    {
      category: "Geometría",
      videos: [
        { title: "Paralelas y congruencias", url: "https://www.youtube.com/embed/yqdpQ3usBHU", description: "En este video estaremos viendo paralelas, paralelogramos y congruencias de triángulos y resolviendo problemas con las herramientas aprendidas." },
        { title: "Thales, semejanza y pitágoras", url: "https://www.youtube.com/embed/MMtTqg5w6C4", description: "en este video veremos los criterios de semejanza de triangulo, que es la paralela media y los teoremas de thales y pitagoras" },
        { title: "Angulos en la circunferencia", url: "https://www.youtube.com/embed/wpcNv3KbHQE", description: "En este video estaremos demostrando propiedades de ángulos en circunferencias y resolviendo problemas." },
        { title: "Puntos notables del triángulo", url: "https://www.youtube.com/embed/_yeCR6UJBz8", description: "En este video estaremos viendo algunas propiedades importantes de los centros del triángulo." },
        { title: "Lemas del incentro", url: "https://www.youtube.com/embed/9L_jRASaZ4E", description: "En este video estaremos viendo el lemas relacionados con el incentro." }
      ]
    },
    {
      category: "Teoría de Números",
      videos: [
        { title: "Teorema fundamental de la aritmetica", url: "https://www.youtube.com/embed/vK0U4yza4bM", description: "En este video vamos a aprender los criterios de divisibilidad de muchos numeros, el Teorema Fundemental de la Aritmética y de como usarlos para resolver problemas." },
        { title: "MCM, mcd y euclides", url: "https://www.youtube.com/embed/i5tUT_0Z2mM", description: "En este video hablamos de el mínimo común múltiplo, el máximo común divisor, y del algortimo de Euclides para hallar MCD, al igual que otras identidades como la de Bezout." },
        { title: "Divisibilidad y congruencias", url: "https://www.youtube.com/embed/8bO6L4tmPW8", description: "En este video vamos a estar viendo las nociones básicas de divisibilidad y congruencias." },
        { title: "Bases numéricas", url: "https://www.youtube.com/embed/Rfq6tt5f7M0", description: "En este video estaremos introduciendo el tema de bases numéricas, como pueden ser la base 10 o la base binaria por ejemplo." }
      ]
    },
    {
      category: "Estrategias",
      videos: [
        { title: "Lógica, pruebas y matemáticas", url: "https://www.youtube.com/embed/RCOTZqc71fQ", description: "En este video hablaremos de qué significa probar algo matemáticamente y distintos métodos para hacerlo" },
        { title: "Inducción matemática", url: "https://www.youtube.com/embed/lIj72ZSiQTs", description: "En este video estaremos introduciendo a una de las herramientas más potentes: Inducción." },
        { title: "Teorema del binomio", url: "https://www.youtube.com/embed/cGi-hsR_63s", description: "En este video estaremos introduciendo el Teorema del Binomio." }
      ]
    }
  ];

  // Sample seminars data
  const seminarios = [
    {
      id: 1,
      title: "Entrenamiento 4 - Cono Sur",
      presenter: "Ex-Olímpicos",
      role: "Entrenamiento",
      date: "2021",
      description: "Sesión de entrenamiento enfocada en problemas tipo Cono Sur.",
      materials: "https://drive.google.com/file/d/1Cs36JRTmR8jrapNJJPUkWKNsblwADpL0/view",
      video: "https://www.youtube.com/embed/nBFNE8_OQjU",
    },
    {
      id: 2,
      title: "Combinatoria Conosur",
      presenter: "Ex-Olímpicos",
      role: "Entrenamiento",
      date: "2021",
      description: "Resolución de problemas y técnicas generales.",
      materials: "https://drive.google.com/file/d/1P5m3hbPKb_S7GR16_aTDiJS2g-Jr2pIS/view",
      video: "https://www.youtube.com/embed/CdKR-yORMu8",
    },
    {
      id: 3,
      title: "Desigualdades: MA-MG y Cauchy-Schwarz",
      presenter: "Ex-Olímpicos",
      role: "Teoría y Práctica",
      date: "2021",
      description: "Introducción y aplicación de las desigualdades de Medias y Cauchy-Schwarz.",
      materials: "https://drive.google.com/file/d/1b_CzGJ9kit7-A8WC3Xtjr0gOQ9u8bENn/view",
      video: "https://www.youtube.com/embed/XRA-sE3TGBI",
    },
    {
      id: 4,
      title: "Entrenamiento de Geometría",
      presenter: "Ex-Olímpicos",
      role: "Entrenamiento",
      date: "2021",
      description: "Sesión práctica de geometría.",
      materials: "https://drive.google.com/file/d/1riPhnykoRiCqivbpSY868IgUBjMeZvTw/view",
      video: "https://www.youtube.com/embed/Rk_ggBVdrxo",
    },
    {
      id: 5,
      title: "Entrenamiento de Combinatoria",
      presenter: "Ex-Olímpicos",
      role: "Entrenamiento",
      date: "2021",
      description: "Sesión práctica de combinatoria.",
      materials: "https://drive.google.com/file/d/1eYl9dDuoy_zk0XWNX5Sb-UMsB3Qa5FT2/view",
      video: "https://www.youtube.com/embed/jr59fxQ53eA",
    },
    {
      id: 6,
      title: "Primer Selectivo Olimpiada del Cono Sur 2021",
      presenter: "Ex-Olímpicos",
      role: "Selectivo",
      date: "2021",
      description: "Discusión y resolución del primer selectivo para la Olimpiada del Cono Sur.",
      materials: "https://drive.google.com/file/d/16E6iMJ9-JnGOs82VjrneEtDt9farm_4Q/view",
      video: "https://www.youtube.com/embed/--hAwxY28MA",
    },
    {
      id: 7,
      title: "Segundo Selectivo Cono Sur / Cuarto Ibero 2021",
      presenter: "Ex-Olímpicos",
      role: "Selectivo",
      date: "2021",
      description: "Análisis del segundo selectivo Cono Sur y cuarto selectivo Iberoamericano.",
      materials: "https://drive.google.com/file/d/1WOStJa9R_HI8Ujqk7o1aKjlcmGG4HMsc/view",
      video: "https://www.youtube.com/embed/9klVMaLUEEE",
    },
    {
      id: 8,
      title: "Potencia de un Punto",
      presenter: "Ex-Olímpicos",
      role: "Teoría Geométrica",
      date: "2021",
      description: "Clase teórica y práctica sobre la potencia de un punto respecto a una circunferencia.",
      materials: "https://drive.google.com/file/d/1OwXTjnBUVsC7lAn_T_85aAPBi_xV32fk/view",
      video: "https://www.youtube.com/embed/Swec2Ci3w1M",
    },
    {
      id: 9,
      title: "Ejes Radicales",
      presenter: "Ex-Olímpicos",
      role: "Teoría Geométrica",
      date: "2021",
      description: "Continuación de geometría: Ejes radicales y sus aplicaciones.",
      materials: "https://drive.google.com/file/d/1mwQkhVwxqgR0HrgB8AVgQZEjm0Sx_SWN/view",
      video: "https://www.youtube.com/embed/UmU6VH2TEEc",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4 text-sky-800">
              Seminarios de Ex-Olímpicos
            </h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Aprende de quienes han representado a Uruguay en competencias internacionales
            </p>

            {/* Introduction */}
            <div className="bg-white p-8 rounded-xl shadow-sm mb-12 border-l-4 border-sky-500">
              <p className="mb-4 text-gray-700 text-lg">
                Nuestros ex-olímpicos comparten sus conocimientos y experiencias a través de estos seminarios 
                especialmente diseñados para estudiantes que desean profundizar en temas de matemática olímpica.
              </p>
              <p className="text-gray-700 text-lg">
                Cada seminario incluye material de práctica (PDF) y la grabación de la clase, brindándote la oportunidad de estudiar a tu propio ritmo.
              </p>
            </div>

            {/* UyMath Videos */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-8 border-b-2 border-sky-200 pb-2">
                Videos de UyMath!
              </h2>
              
              <div className="space-y-12">
                {uyMathVideos.map((category, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-sky-600 text-white p-4">
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.videos.map((video, vIdx) => (
                        <div key={vIdx} className="flex flex-col h-full">
                          <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black mb-4">
                            <iframe 
                              width="100%" 
                              height="100%" 
                              src={video.url} 
                              title={video.title}
                              frameBorder="0" 
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                          <h4 className="font-bold text-lg text-gray-800 mb-2">{video.title}</h4>
                          <p className="text-gray-600 text-sm flex-grow">{video.description}</p>
                          <a 
                            href={video.url.replace('embed/', 'watch?v=')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-3 text-sm text-sky-600 hover:text-sky-800 font-medium flex items-center"
                          >
                            Ver en YouTube
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seminars List */}
            <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-8 border-b-2 border-sky-200 pb-2">
              Seminarios Cono Sur
            </h2>
            <div className="space-y-16">
              {seminarios.map((seminario) => (
                <div key={seminario.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-sky-700 text-white p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold">{seminario.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sky-100 text-sm md:text-base">
                      <span>{seminario.role}</span>
                      <span>•</span>
                      <span>{seminario.date}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 text-lg">{seminario.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* PDF Viewer (Left) */}
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          Material de Clase
                        </h4>
                        <div className="flex-grow border rounded-lg overflow-hidden bg-gray-100 h-[400px]">
                           <GoogleDrivePDFViewer pdfUrl={seminario.materials} title={`Material - ${seminario.title}`} />
                        </div>
                        <a 
                          href={seminario.materials} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 text-sm text-sky-600 hover:text-sky-800 font-medium flex items-center justify-end"
                        >
                          Abrir en nueva pestaña
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      {/* Video Embed (Right) */}
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                          Video de la Clase
                        </h4>
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={seminario.video} 
                            title={`Video - ${seminario.title}`}
                            frameBorder="0" 
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                        <a 
                          href={seminario.video.replace('embed/', 'watch?v=')} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 text-sm text-sky-600 hover:text-sky-800 font-medium flex items-center justify-end"
                        >
                          Ver en YouTube
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-16 bg-yellow-50 p-8 rounded-xl text-center border border-yellow-100 shadow-sm">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">¿Eres ex-olímpico y te gustaría compartir tu experiencia?</h3>
              <p className="mb-6 text-yellow-900 max-w-2xl mx-auto">
                Nos encantaría contar contigo para futuros seminarios. Tu experiencia es valiosa para 
                las nuevas generaciones de matemáticos uruguayos.
              </p>
              <Link 
                href="/contacto" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md hover:shadow-lg"
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