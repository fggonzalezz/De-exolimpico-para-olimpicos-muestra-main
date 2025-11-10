import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

const assets = {
  '2021': {
    img: 'https://ext.same-assets.com/1728315765/512160776.png',
    color: '#5c7b83',
  },
  '2020': {
    img: 'https://ext.same-assets.com/1728315765/3350069791.png',
    color: '#b48a78',
  },
  '2019': {
    img: 'https://ext.same-assets.com/1728315765/3097668772.png',
    color: '#7b5c83',
  },
  'anteriores': {
    img: 'https://ext.same-assets.com/1728315765/2391142948.png',
    color: '#6b8b93',
  },
};
const TEACHER_ICON = 'https://ext.same-assets.com/4168015766/3169824431.png';

export default async function YearPage({ params }) {
  const year = params.year;
  const asset = assets[year] || assets['2021'];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mt-4">
                <Image src={asset.img} alt={year} width={240} height={80} className="object-contain rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* First Resolution Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 mb-8">
              <Image src={TEACHER_ICON} alt="Teacher Icon" width={80} height={80} className="mb-4 md:mb-0" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-sky-700 mb-2">RESOLUCIÓN PRIMERA INSTANCIA</h2>
                <Link href={`/nacional/${year}/primera`} className="inline-block bg-sky-700 text-white font-bold py-2 px-6 rounded-full hover:bg-sky-800 transition-all">
                  Ver soluciones
                </Link>
              </div>
            </div>
            {/* Second Resolution Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-[#f0f6fa] rounded-2xl shadow-lg p-8">
              <Image src={TEACHER_ICON} alt="Teacher Icon" width={80} height={80} className="mb-4 md:mb-0" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#6b8b93] mb-2">RESOLUCIÓN SEGUNDA INSTANCIA</h2>
                <Link href={`/nacional/${year}/segunda`} className="inline-block bg-white text-[#6b8b93] font-bold py-2 px-6 rounded-full border border-[#6b8b93] hover:bg-[#e6eef0] transition-all">
                  Ver soluciones
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: 'anteriores' },
  ];
} 