import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import ClientPDFSection from './ClientPDFSection';

const niveles = [
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing', video: 'https://www.youtube.com/embed/HEGiZeOU6RM', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IB', title: 'Nivel IB', pdf: 'https://drive.google.com/file/d/1qOaUKYJI6Bqxa_VGz7PcYu1EBUdDH-z5/view?usp=sharing', video: 'https://www.youtube.com/embed/DX-gEB-De7s', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IC', title: 'Nivel IC', pdf: 'https://drive.google.com/file/d/1gM4c6IJfaU91Ik0aGroTZ9sxGieqIMab/view?usp=sharing', video: 'https://www.youtube.com/embed/9SyPsrpYJPI', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'II', title: 'Nivel II', pdf: 'https://drive.google.com/file/d/17--pQqwcK6Woe-K53e0bd3i3Z7TyNGgG/view?usp=sharing', video: 'https://www.youtube.com/embed/fLkQnpoHQiw', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'III', title: 'Nivel III', pdf: 'https://drive.google.com/file/d/1NtxRoA3dwVlGtP8GSn4PQPDncWcQhAST/view?usp=sharing', video: 'https://www.youtube.com/embed/8ws2xuK3B2I', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IV', title: 'Nivel IV', pdf: 'https://drive.google.com/file/d/1avnfLWOb_ZLZT4Jk6Je8acrOblc-1b11/view?usp=sharing', video: 'https://www.youtube.com/embed/-xj4lJ6nlFQ', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'V', title: 'Nivel V', pdf: 'https://drive.google.com/file/d/17HwJIN3VkdJhdigTH_JK71zqjMxpXAMc/view?usp=sharing', video: 'https://www.youtube.com/embed/xXTTMKgKJZk', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
];

export default function SegundaInstanciaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">2021 - Segunda Instancia</h1>
          <ClientPDFSection niveles={niveles} />
        </div>
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