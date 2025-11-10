"use client"
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import CompetitionsTable from '@/components/competitions/CompetitionsTable';
import { nextSixCompetitions } from '@/data/competitions';
import React, { useEffect, useState } from 'react';

export default function Home() {
  
  const [mascotVisible, setMascotVisible] = useState(false);
  useEffect(() => {
    setMascotVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative bg-[#daf3ff] py-16 text-white">
          <div className="absolute inset-0 z-0 opacity-70">
            {/* Replace with a real image of students solving math problems */}
            <Image
              src="/images/Equipo_Ibero_2024_000.png"
              alt="Jóvenes participando en olimpiadas"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-inter text-4xl md:text-5xl font-bold mb-4 [text-shadow:-0.5px_-0.5px_0_#000,0_-0.5px_0_#000,0.5px_-0.5px_0_#000,-0.5px_0_0_#000,0.5px_0_0_#000,-0.5px_0.5px_0_#000,0_0.5px_0_#000,0.5px_0.5px_0_#000]">
                <span >Com-Partida</span> de Matemática del Uruguay
              </h1>
              <h2 className="text-xl md:text-2xl font-bold mb-6 [text-shadow:-0.5px_-0.5px_0_#000,0_-0.5px_0_#000,0.5px_-0.5px_0_#000,-0.5px_0_0_#000,0.5px_0_0_#000,-0.5px_0.5px_0_#000,0_0.5px_0_#000,0.5px_0.5px_0_#000]">
                Fomentando el talento matemático desde 1992
              </h2>
              <p className="text-lg font-bold mb-8 [text-shadow:-0.5px_-0.5px_0_#000,0_-0.5px_0_#000,0.5px_-0.5px_0_#000,-0.5px_0_0_#000,0.5px_0_0_#000,-0.5px_0.5px_0_#000,0_0.5px_0_#000,0.5px_0.5px_0_#000]">
                Un proyecto educativo surgido por iniciativa de profesores de matemática,
                que consideran a la resolución de problemas como la herramienta más
                importante para el aprendizaje de la asignatura.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/sobre-nosotros" className="bg-sky-700 text-white hover:bg-sky-800 px-6 py-3 rounded-md font-medium transition-colors">
                  Conoce más
                </Link>
                <Link href="/calendario-2025" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Calendario 2025
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* De ex-olímpicos para olímpicos section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              De Ex-Olímpicos para Olímpicos: Una Comunidad que Crece
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                Con enorme satisfacción ponemos a vuestra disposición una nueva forma de acercarse a nuestras actividades.
              </p>
              <p className="mb-4">
                Satisfacción que surge por ser una página creada por ex-olímpicos de la Com-Partida de Matemática del Uruguay, 
                quienes sintieron la necesidad de retribuir las oportunidades de desarrollo que se les han brindado durante su 
                trayecto por ella y decidieron trasmitir a quienes siguen su camino sus experiencias y conocimientos.
              </p>
              <p className="mb-4">
                Todos los contenidos son decisión y creación de ellos; mediante esta herramienta buscan facilitar y enriquecer 
                el camino de los actuales y futuros participantes en nuestras actividades.
              </p>
              <p className="font-medium text-sky-700">
                Valoramos y agradecemos el trabajo de estos jóvenes, en cuyas manos estará la continuidad y el futuro de esta experiencia.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              Resultados Destacados 2024
            </h2>

          </div>
        </section>

        {/* News Section */}
        <section className="py-12 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              En los Medios: Reconocimiento Nacional
            </h2>
            
            {/* Hero Images */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/olimpiada-estudiantes-1.jpg"
                    alt="Estudiantes uruguayos con la bandera nacional celebrando sus logros en las olimpiadas matemáticas"
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 md:h-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                    ¡Felicitaciones! - Olimpíada Mundial de Matemática 2024 
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/olimpiada-estudiantes-2.jpg"
                    alt="Celebración familiar de los estudiantes uruguayos tras su exitosa participación en la Olimpíada Mundial de Matemática 2024"
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 md:h-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                    Delegación uruguaya con sus certificados de participación
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-700 mb-8">
                Los logros de nuestros estudiantes en competencias internacionales han sido destacados por diferentes medios de comunicación nacional:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {/* La Diaria */}
                <Link 
                  href="https://ladiaria.com.uy/usuarios/entrar/?article=122406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                    <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold">La Diaria</div>
                        <div className="text-sm opacity-90">Periódico</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-3 text-sky-700 group-hover:text-sky-800 transition-colors">
                        Delegación uruguaya se prepara para Olimpíadas Internacionales
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        Luego de superar distintas instancias nacionales, una delegación de estudiantes se prepara para las Olimpíadas Internacionales de Matemática.
                      </p>
                      <span className="text-sky-600 group-hover:text-sky-800 font-medium text-sm inline-flex items-center transition-colors mt-auto">
                        Leer artículo completo →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Montevideo Portal */}
                <Link 
                  href="https://www.montevideo.com.uy/Noticias/Estudiantes-uruguayos-participaron-de-Olimpiada-de-Matematica-y-ANEP-resalto-su-puntaje-uc895014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                    <div className="h-32 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold">Montevideo Portal</div>
                        <div className="text-sm opacity-90">Noticias</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-3 text-sky-700 group-hover:text-sky-800 transition-colors">
                        ANEP resaltó el puntaje de estudiantes uruguayos
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        Seis liceales destacaron "en un contexto de altísima exigencia y competencia global", afirmó el organismo tras la participación en la Olimpíada de Matemática.
                      </p>
                      <span className="text-sky-600 group-hover:text-sky-800 font-medium text-sm inline-flex items-center transition-colors mt-auto">
                        Leer artículo completo →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Telenoche */}
                <Link 
                  href="https://www.telenoche.com.uy/nacionales/uruguayos-reconocidos-olimpiada-internacional-matematica-n5370859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                    <div className="h-32 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold">Telenoche</div>
                        <div className="text-sm opacity-90">Canal 4</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-3 text-sky-700 group-hover:text-sky-800 transition-colors">
                        Uruguayos reconocidos en Olimpíada Internacional
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        La competencia fue en Reino Unido y tres estudiantes tuvieron una mención de honor, logrando el mejor puntaje para Uruguay desde 1987.
                      </p>
                      <span className="text-sky-600 group-hover:text-sky-800 font-medium text-sm inline-flex items-center transition-colors mt-auto">
                        Leer artículo completo →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Competitions */}
        <CompetitionsTable
          competitions={nextSixCompetitions}
          title="¡Prepárate! Próximas Competencias"
          variant="compact"
          maxItems={6}
          footerLink={{
            href: "/calendario-2025",
            text: "Ver calendario completo"
          }}
        />
        {/* Mascot Section */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/3 bg-white p-8 flex items-center justify-center">
                {/* Placeholder for mascot image */}
                <div className={`w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${mascotVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <Image
                    src="/images/Eulerito.jpg"
                    alt="Foto de la mascota Eulerito"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-4">
                  ¡Saluda a Nuestra Mascota Matemática!
                </h2>
                <p className="mb-4">
                  Te presentamos a nuestra alegre compañero que nos inspira en cada desafío matemático. 
                  ¡El representa la curiosidad, la perseverancia y la diversión de aprender matemáticas en Uruguay!
                </p>
                <div className="flex justify-end mt-6">
                  <div className="italic text-yellow-600 font-medium border-t border-yellow-300 pt-2">
                    ¡Nos vemos en las olimpiadas!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
