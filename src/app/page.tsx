import CompetitionsTable from "@/components/competitions/CompetitionsTable";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { nextSixCompetitions } from "@/data/competitions";
import {
  SITE_URL,
  buildStaticPageMetadata,
  createEventItemListJsonLd,
  createFaqJsonLd,
} from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export const metadata = buildStaticPageMetadata("/");

export default function Home() {
  const faqItems = [
    {
      question: "¿Cómo empiezo a participar en la Olimpiada Nacional?",
      answer:
        "Contacta a la organización o a tu centro educativo para inscribirte en la próxima instancia y recibir los materiales de práctica.",
    },
    {
      question: "¿Qué materiales recomiendan para entrenar cada nivel?",
      answer:
        "En la sección Material de Estudio encontrarás libros, videos y guías clasificados por nivel para primaria y secundaria.",
    },
    {
      question: "¿Dónde consulto el calendario completo de competencias 2025?",
      answer:
        "El calendario actualizado con fechas y sedes está disponible en la página Calendario 2025 y se actualiza semanalmente.",
    },
  ];

  const eventItems = nextSixCompetitions
    .filter((competition) => competition.targetDate instanceof Date)
    .map((competition) => ({
      name: competition.event,
      startDate: competition.targetDate?.toISOString() ?? "",
      location: "Uruguay",
      description: competition.date,
      url: competition.id
        ? `${SITE_URL}/calendario-2025#${competition.id}`
        : `${SITE_URL}/calendario-2025`,
    }))
    .filter((event) => event.startDate !== "");

  const eventsJsonLd = eventItems.length
    ? createEventItemListJsonLd(eventItems)
    : null;
  const faqJsonLd = createFaqJsonLd(faqItems);

  return (
    <div className="flex min-h-screen flex-col">
      {eventsJsonLd ? (
        <Script
          id="home-events-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      ) : null}
      <Script
        id="home-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero section */}
        <section className="relative bg-sky-900 flex flex-col md:block md:min-h-[65vh] text-white overflow-hidden">
          {/* Image Container */}
          <div className="relative w-full h-[40vh] md:absolute md:inset-0 md:h-full z-0">
            <Image
              src="/images/Equipo_Ibero_2024_000.png"
              alt="Jóvenes participando en olimpiadas"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Mobile Gradient: Fade to blue at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-sky-900 md:hidden" />
            {/* Desktop Overlay: Darken whole image */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center py-8 md:py-20 md:min-h-[65vh]">
            <div className="max-w-4xl mx-auto text-center -mt-6 md:mt-0">
              <h1 className="font-inter font-bold mb-6 text-shadow-outline flex flex-col gap-3">
                <span className="text-3xl sm:text-5xl md:text-6xl leading-tight">
                  Olimpiada Matemática Uruguay
                </span>
                <span className="text-xl sm:text-3xl md:text-4xl font-medium text-sky-100">
                  Com-Partida de Matemática
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 text-shadow-outline text-gray-100 max-w-2xl mx-auto">
                Material de estudio y entrenamiento para olimpiadas matemáticas
                desde 1992
              </h2>
              <p className="text-base sm:text-lg font-medium mb-10 text-shadow-outline max-w-3xl mx-auto text-gray-200">
                Preparación para IMO, Olimpiada Iberoamericana, Cono Sur y
                Olimpiada Nacional de Uruguay. Recursos, problemas y material de
                estudio creado por ex-olímpicos uruguayos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/sobre-nosotros"
                  className="bg-sky-600 text-white hover:bg-sky-700 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Conoce más
                </Link>
                <Link
                  href="/calendario-2025"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
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
                Con enorme satisfacción ponemos a vuestra disposición una nueva
                forma de acercarse a nuestras actividades.
              </p>
              <p className="mb-4">
                Satisfacción que surge por ser una página creada por
                ex-olímpicos de la Com-Partida de Matemática del Uruguay,
                quienes sintieron la necesidad de retribuir las oportunidades de
                desarrollo que se les han brindado durante su trayecto por ella
                y decidieron trasmitir a quienes siguen su camino sus
                experiencias y conocimientos.
              </p>
              <p className="mb-4">
                Todos los contenidos son decisión y creación de ellos; mediante
                esta herramienta buscan facilitar y enriquecer el camino de los
                actuales y futuros participantes en nuestras actividades.
              </p>
              <p className="font-medium text-sky-700">
                Valoramos y agradecemos el trabajo de estos jóvenes, en cuyas
                manos estará la continuidad y el futuro de esta experiencia.
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
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">3</div>
                  <div className="text-white font-medium">
                    Menciones de Honor
                  </div>
                  <div className="text-yellow-100 text-sm mt-1">
                    IMO 2024 - Reino Unido
                  </div>
                </div>
                <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">
                    Mejor
                  </div>
                  <div className="text-white font-medium">
                    Puntaje desde 1987
                  </div>
                  <div className="text-sky-100 text-sm mt-1">
                    Récord histórico
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-white font-medium">
                    Participantes IMO
                  </div>
                  <div className="text-green-100 text-sm mt-1">
                    Delegación completa
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                La delegación uruguaya logró el mejor resultado histórico en la
                Olimpíada Internacional de Matemática 2024.
              </p>
            </div>
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                Los logros de nuestros estudiantes en competencias
                internacionales han sido destacados por diferentes medios de
                comunicación nacional:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {/* La Diaria */}
                <Link
                  href="https://ladiaria.com.uy/educacion/articulo/2024/5/luego-de-superar-distintas-instancias-nacionales-una-delegacion-de-estudiantes-se-prepara-para-las-olimpiadas-internacionales-de-matematica/"
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
                        Delegación uruguaya se prepara para Olimpíadas
                        Internacionales
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        Luego de superar distintas instancias nacionales, una
                        delegación de estudiantes se prepara para las Olimpíadas
                        Internacionales de Matemática.
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
                        <div className="text-lg font-bold">
                          Montevideo Portal
                        </div>
                        <div className="text-sm opacity-90">Noticias</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-3 text-sky-700 group-hover:text-sky-800 transition-colors">
                        ANEP resaltó el puntaje de estudiantes uruguayos
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        Seis liceales destacaron "en un contexto de altísima
                        exigencia y competencia global", afirmó el organismo
                        tras la participación en la Olimpíada de Matemática.
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
                        La competencia fue en Reino Unido y tres estudiantes
                        tuvieron una mención de honor, logrando el mejor puntaje
                        para Uruguay desde 1987.
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
            text: "Ver calendario completo",
          }}
        />
        {/* Mascot Section */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/3 bg-white p-8 flex items-center justify-center">
                {/* Placeholder for mascot image */}
                <div className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden animate-fade-in">
                  <Image
                    src="/images/Eulerito.jpg"
                    alt="Foto de la mascota Gauchito"
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
                  Te presentamos a nuestra alegre compañero que nos inspira en
                  cada desafío matemático. ¡El representa la curiosidad, la
                  perseverancia y la diversión de aprender matemáticas en
                  Uruguay!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/mascota"
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Conoce a Gauchito
                  </Link>
                  <div className="flex items-center justify-end flex-1">
                    <div className="italic text-yellow-600 font-medium border-t border-yellow-300 pt-2">
                      ¡Nos vemos en las olimpiadas!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
                Preguntas frecuentes
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {faqItems.map((faq) => (
                  <article
                    key={faq.question}
                    className="bg-sky-50 border border-sky-100 rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
