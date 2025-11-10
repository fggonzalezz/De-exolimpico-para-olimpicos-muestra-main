"use client"
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Datos del equipo
const teamMembers = [
  {
    id: "URU 1",
    name: "Correa, Facundo",
    school: "Liceo San Ignacio",
    image: "/images/Personas/Facundo_Correa_Foto.jpg"
  },
  {
    id: "URU 2",
    name: "Fischbein, Luca",
    school: "Uruguayan American School",
    image: "/images/Personas/Luca_Fischbein_Foto.jpg"
  },
  {
    id: "URU 3",
    name: "Murguía, Julia",
    school: "Uruguayan American School",
    image: "/images/Personas/Julia_Murguía_Foto.jpg"
  },
  {
    id: "URU 4",
    name: "Rivarola, Lautaro",
    school: "San Miguel, Mercedes, Soriano",
    image: "/images/Personas/Lautaro_Raviola_Foto.jpg"
  }
];

export default function EquipoConosurPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold mb-4 text-sky-800">
                Equipo Conosur 2025
              </h1>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-yellow-500 rounded mb-6"></div>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estudiantes seleccionados para representar a Uruguay en la 36ª Olimpíada de Matemática de Países del Conosur
              </p>
            </div>

            {/* Event Info Card */}
            <Card className="mb-12 overflow-hidden shadow-lg bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative w-full md:w-1/3 h-48 md:h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero-background.jpg"
                      alt="Conosur 2025"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-xl"
                      priority
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-sky-800 mb-4">
                      36ª Olimpíada de Matemática de Países del Conosur
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">4 al 9 de junio de 2025</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Minas, Uruguay</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">4 estudiantes seleccionados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{objectFit: 'cover'}}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded mb-2">
                          {member.id}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-gray-600">{member.school}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Los estudiantes están listados en orden alfabético
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 