import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-10">
          <div className="container-mate">
            <h1 className="text-3xl font-oswald font-bold text-center mb-8">
              ¡Entrenar, compartir y competir te hace mejor!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <div className="flex justify-center items-center">
                <Image
                  src="https://ext.same-assets.com/237922056/1484181571.jpeg"
                  alt="Com-Partida Matemática Uruguay"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Text */}
              <div>
                <p className="mb-4">
                  Com-Partida Matemática Uruguay es una comunidad de entrenadores, exolímpicos y estudiantes
                  que busca acompañar y potenciar a quienes se preparan para olimpiadas de matemática en Uruguay
                  y la región.
                </p>
                <p className="mb-4">
                  Nuestros entrenamientos están orientados a estudiantes que participan o quieren participar en
                  competencias como la Olimpiada Nacional de Matemática del Uruguay (ONMU), la Olimpiada Matemática
                  Rioplatense, la Olimpiada de Mayo, la Olimpiada de Matemática de Países del Cono Sur, la Olimpiada
                  Iberoamericana de Matemática (OIM), la Olimpiada Internacional de Matemática (IMO), entre otras.
                </p>
                <p className="mb-4">
                  Trabajamos con sesiones virtuales, simulacros de prueba, correcciones detalladas y espacios de
                  comunidad, donde se comparte solución por solución. También realizamos actividades presenciales
                  puntuales en Montevideo y otras ciudades del país, e invitamos a entrenadores de otros países de
                  Latinoamérica para enriquecer la experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Options */}
        <section className="py-8 bg-gray-50">
          <div className="container-mate">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* How to Participate */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-oswald font-semibold text-center mb-3">
                    ¿Cómo puedo participar?
                  </h3>
                  <p className="text-sm text-gray-700">
                    Si sos estudiante de los últimos años de primaria o de secundaria (ciclo básico o bachillerato),
                    y te gustan los problemas desafiantes de matemática, podés sumarte a nuestros entrenamientos.
                    Si sos madre, padre o docente y querés que tus estudiantes desarrollen pensamiento crítico y
                    creatividad a través de las olimpiadas, también estás invitado a conocer nuestros programas.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      href="/entrenamiento"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Más información
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-10">
          <div className="container-mate">
            <h2 className="text-2xl font-oswald font-bold text-center mb-8">
              Nuestro equipo de entrenadores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Group 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/264456791.jpeg"
                  alt="Equipo de coordinación"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">
                    Equipo de coordinación
                  </h3>
                  <p className="text-sm text-center">
                    Diseño de entrenamientos y simulacros<br />
                    Experiencia en ONMU, Rioplatense, Cono Sur y OIM<br />
                    Trabajo voluntario en la comunidad olímpica uruguaya
                  </p>
                </div>
              </div>

              {/* Team Group 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/3155691714.jpeg"
                  alt="Entrenadores de Uruguay"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-green-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">
                    Entrenadores de Uruguay
                  </h3>
                  <p className="text-sm text-center">
                    Ex participantes de olimpiadas nacionales e internacionales<br />
                    Experiencia en enseñanza a distintos niveles<br />
                    Acompañamiento cercano y correcciones detalladas
                  </p>
                </div>
              </div>

              {/* Team Group 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/264456791.jpeg"
                  alt="Entrenadores internacionales"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">
                    Entrenadores internacionales
                  </h3>
                  <p className="text-sm text-center">
                    Colaboraciones con entrenadores de la región<br />
                    Visión amplia del circuito olímpico latinoamericano<br />
                    Talleres y sesiones especiales temáticas
                  </p>
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
