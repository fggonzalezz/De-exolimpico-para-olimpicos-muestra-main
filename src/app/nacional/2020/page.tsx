'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Page2020() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">   
              <div className="flex justify-center mt-4">
                <Image 
                  src="https://ext.same-assets.com/1728315765/3350069791.png" 
                  alt="2020" 
                  width={240} 
                  height={80} 
                  className="object-contain rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* YouTube Video */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/LCe8kFif4LQ"
                  title="Olimpiada 2020 video"
                  className="w-full h-[650px]" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Final Escolar */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-sky-700 mb-10 pb-2 border-b-2 border-sky-200">FINAL ESCOLAR</h2>

            {/* Nivel IA */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL IA (4° DE PRIMARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Facundo Reina - Nuestra Señora del Carmen, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Federico Stempelet - Escuela n° 92 Placido Laguna, Colonia</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>David Vareika - Saint Brendan's School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Juan Diego Leal - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Hernán Cousillas - Christian Andersen, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Conrado Aguiar</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Nicolás Bronstein - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Dana Barnett - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>María Joaquina Preve Flores - Dr. Carlos Paz Ferreira, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Valentín María Barros - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Delfina Stahl - N° 8 John F. Kennedy, Paysandú</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Juan Cruz Dowling - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Benjamín Goldman - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Sofía Belén Lorenzo Fungi - Christian Andersen, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Juan Schnyder</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>José Ignacio Folle - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Inés Collares - Los Pilares, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Pilar Luzardo - Centro Integral Armenio Nubarian, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Juan Martín Duarte Martínez - José Pedro Varela, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Agustina Bracco</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Sara Ferrés - Los Pilares, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Maite Uria</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Lara Silveira</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Lautaro Sandin Padilla - N° 20 Grupo Escolar Felipe Sanguinetti</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Enzo García Da Rosa - N° 2 José G. Artigas, Paysandú</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Juan Manuel Rava - Saleciano de la Costa, Canelones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nivel IB */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL IB (5° DE PRIMARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Camila Nardone - Escuela Logosófica, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Fabrizio Nardone - Escuela Logosófica, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Juan Diego Delgado - José Pedro Varela, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Lara Parodi - Escuela Logosófica, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Diego Ferreira - John F. Kennedy, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Juan Brito del Pino - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Inés Martinelli - Saint George's School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Mateo Veiroj - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Ivo Dávila</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Sol Bidegaray - Harwood School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Valentina Veiga</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Pedro Invernizzi - Nuestra Señora del Carmen, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Lusín Guekdjian - Centro Integral Armenio Nubarian, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Ma Bergero - N° 92 Plácido Laguna, Colonia</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Catalina Dellature Podestá - Saleciano de la Costa, Canelones</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Alfonso Severi - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Maia Scarone - Harwood School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Mateo Rodríguez - Jardín y Colegio Maldonado, Maldonado</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Martina Fernández - Centro Integral Armenio Nubarian, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Emiliano Cauduro</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Santiago Tanco - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Manuela Algorta - Los Pilares, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Juan Bautista Santurio - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Guzmán Zorrilla de San Martín - Harwood School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Facundo Ramos - Christian Andersen, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Máximo Espel - Harwood School, Montevideo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nivel IC */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL IC (6° DE PRIMARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Isabel Montauban</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Sophia Rockwell - Uruguayan American School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Riho Natsume - Uruguayan American School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Francesca Shaw - Uruguayan American School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Eial Boruchovas - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Joaquín Catan - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Maian Bincovich - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Matías Liberman - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Dafna Buszkaniec - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Joaquín Schmidt - Saint George's School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Mercedes Pombo - Escuela Logosófica, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Ari Dominitz - Instituto Hebreo Uruguayo YAVNE, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Mateo Harteneck - María Auxiliadora, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Lautaro Goyeche</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Mikaela Angres - Uruguayan American School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Lucas Abel Battocletti Bisio - Nuestra Señora del Carmen, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Rafael Morales - Saint Patrick's School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Ignacio Figoli - Colegio Monte VI, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Gonzalo Macellaro - José Pedro Varela, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Joaquín Agis - Elbio Fernández, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Eugenia Azpiroz - Christian Andersen, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Brenda Fernández</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Leandro Garré - Christian Andersen, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Facundo Cesar - Christian Andersen, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Joaquín Rodríguez</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Ezequiel Skorka - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Santiago Giménez - Christian Andersen, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Joaquín Pamparato Silva</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Shai Elenter - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Manuela Mangino - Saint Patrick's College, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Ignacio Carriquiry - Crandon, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Guili Ehrlich</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Fabricio Machado Costante - José Pedro Varela, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Roni Barilas - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Luca Vaczy - Los Pilares, Montevideo</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Liceal */}
          <section>
            <h2 className="text-3xl font-bold text-center text-sky-700 mb-10 pb-2 border-b-2 border-sky-200">FINAL LICEAL</h2>

            {/* Nivel II */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL II (PRIMERO DE SECUNDARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Juan Martín González - Liceo N°1, Carmelo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Rafael Trápani - Liceo N°5, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Florencia Broggi - La Mennais, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Menciones de Honor:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Facundo Reina - Nuestra Señora del Carmen, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Ariana Da Costa - Liceo Sagrada Familia, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Constanza Prior - Colegio Maldonado, Maldonado</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Uziel Gandelman - Yavne, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Lucía Giacometti - Liceo N°5, Salto</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Ignacio Rodríguez - Logosófico, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Agustín Steiner - Liceo Alemán, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>José Pedro Urquiola - Colegio y Liceo Hans Christian Anderson</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Juan Manuel Frugoni - Liceo Elbio Fernandez, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Renato De Paula - Liceo Alemán, Montevideo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nivel III */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL III (SEGUNDO Y TERCERO DE SECUNDARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Florencia Sapriza - La Mennais, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Facundo Olivera - Liceo N° 20, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Ada Blustein - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Guillermo Wajner - Saint George's School, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Menciones de Honor:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>María Noel Pelufo - Seminario, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Tais Martínez</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Joaquín González - Liceo N°20, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Camila Pazos - Liceo Alemán, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Sebastián Álvarez - Impulso, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Rosario Stoppiello - La Mennais, Montevideo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nivel IV */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL IV (CUARTO Y QUINTO DE SECUNDARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto (Puntaje Perfecto):</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Mauro Akerman - Elbio Fernández, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Nicolás Hirschfeld - Escuela Integral Hebreo Uruguaya, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Nicolás Seré - PREU, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Menciones de Honor:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Agustín Álvarez - Juan XXIII, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Camila Bassetti - Saint George's School, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Facundo Méndez - Liceo N°4, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Agustina Pena - La Mennais, Montevideo</span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Milagros Kucharsky - EAS, Salto</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Nivel V */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-sky-100">
              <h3 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-sky-200">NIVEL V (SEXTO DE SECUNDARIA)</h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Primer Puesto (Puntaje Perfecto):</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-amber-500 mr-2">🏆</span>
                    <span>Hernán Puschiasis - Juan XXIII, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Segundo Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border-l-4 border-sky-400 shadow-sm hover:shadow-md transition-all">
                    <span className="text-sky-500 mr-2">🥈</span>
                    <span>Federico Fornesi - PREU, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Tercer Puesto:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-orange-50 to-rose-50 p-3 rounded-lg border-l-4 border-orange-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-orange-500 mr-2">🥉</span>
                    <span>Agustín Panizza - Seminario, Montevideo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-sky-700 mb-3 bg-sky-50 p-2 rounded">Mención de Honor:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0">
                  <li className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-all">
                    <span className="text-purple-500 mr-2">🏅</span>
                    <span>Francisco Silva - Liceo N°1, Treinta y Tres</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 