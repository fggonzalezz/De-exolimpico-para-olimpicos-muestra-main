import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

function CardItem({ href, img, alt, title }) {
  return (
    <Link href={href} className="group block rounded-2xl shadow-lg border border-sky-100 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="flex flex-col items-center justify-center p-6 h-full">
        <Image src={img} alt={alt} width={180} height={120} className="object-contain mb-4 transition-transform duration-200 group-hover:scale-105" />
        <h3 className="text-xl font-bold text-sky-700 group-hover:text-yellow-600 mb-2 text-center">{title}</h3>
      </div>
    </Link>
  );
}

export default function Nacional() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-inter font-bold mb-4">OLIMPIADA NACIONAL</h1>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-sky-700">Niveles</h2>
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl max-w-2xl mx-auto mb-12 shadow-lg border border-sky-100">
              <p className="mb-2 text-lg font-semibold text-sky-800">¿No sabes de qué nivel eres?</p>
              <p className="mb-4 text-base text-gray-700">La Olimpiada Nacional tiene 5 niveles:</p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base">
                <li>El nivel I es para los escolares, y se divide en IA (4° de primaria), IB (5° de primaria) y IC (6° de primaria)</li>
                <li>El nivel II es para los estudiantes de 1° año de secundaria</li>
                <li>El nivel III es para aquellos que cursan 2° y 3° año de secundaria</li>
                <li>El nivel IV es para 4° y 5° de secundaria</li>
                <li>El nivel V es para los alumnos de 6° de secundaria</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <CardItem href="/nacional/2021" img="https://ext.same-assets.com/1728315765/512160776.png" alt="2021" title="2021" />
              <CardItem href="/nacional/2020" img="https://ext.same-assets.com/1728315765/3350069791.png" alt="2020" title="2020" />
              <CardItem href="/nacional/2019" img="https://ext.same-assets.com/1728315765/3097668772.png" alt="2019" title="2019" />
              <CardItem href="/nacional/anteriores" img="https://ext.same-assets.com/1728315765/2391142948.png" alt="Años anteriores" title="Años anteriores" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 