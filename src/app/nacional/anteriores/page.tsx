import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

const TEACHER_ICON = 'https://ext.same-assets.com/4168015766/3169824431.png';
const YEARS_ANTERIORES_IMG = 'https://ext.same-assets.com/1728315765/2391142948.png';

export default function AnterioresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mt-4">
                <Image src={YEARS_ANTERIORES_IMG} alt="Años anteriores" width={240} height={80} className="object-contain rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* First Resolution Section */}
        <div className="content-container mx-auto max-w-4xl p-8 text-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              href="/nacional/primera"
              className="link-button text-lg md:text-xl py-4 px-8 flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Primera Instancia</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                  </svg>
            </Link>
            <Link
              href="/nacional/final"
              className="link-button text-lg md:text-xl py-4 px-8 flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Final Nacional</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
              </svg>
            </Link>
          </div>
          <div className="mt-8">
            <Link
              href="/nacional/PruebasSemanales"
              className="link-button text-lg md:text-xl py-4 px-8 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center gap-2 group w-full max-w-md mx-auto"
            >
              <span className="relative z-10">Problemas Semanales 2020</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 