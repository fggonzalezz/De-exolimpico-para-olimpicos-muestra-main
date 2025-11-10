import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import GoogleDrivePDFViewer from '@/components/GoogleDrivePDFViewer';
import dynamic from "next/dynamic";
import ClientPDFSection from './ClientPDFSection';

interface Nivel {
  key: string;
  title: string;
  pdf: string;
  video: string;
}

interface Params {
  year: string;
}

// Base de niveles para customización
const NIVELES_BASE: Nivel[] = [
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing', video: '' },
  { key: 'IB', title: 'Nivel IB', pdf: '', video: '' },
  { key: 'IC', title: 'Nivel IC', pdf: '', video: '' },
  { key: 'II', title: 'Nivel II', pdf: '', video: '' },
  { key: 'III', title: 'Nivel III', pdf: '', video: '' },
  { key: 'IV', title: 'Nivel IV', pdf: '', video: '' },
  { key: 'V', title: 'Nivel V', pdf: '', video: '' },
];

// Parametrización por año
const DATA: Record<string, { primera: Nivel[]; segunda: Nivel[] }> = {
  '2021': {
    primera: [
      { ...NIVELES_BASE[0], pdf: 'https://drive.google.com/file/d/1AYDvXep9SYU_HY_J6qXl3ium5DcdOYXx/view?usp=sharing', video: 'https://www.youtube.com/embed/0nxDewGMmT4' },
      { ...NIVELES_BASE[1], pdf: 'https://drive.google.com/file/d/1rmFHR_FGYD3pNkZxDnuJh54dcfyZ5_92/view?usp=sharing', video: 'https://www.youtube.com/embed/BHGWRr0WHX4' },
      { ...NIVELES_BASE[2], pdf: 'https://drive.google.com/file/d/12CqLFkCBLxn7p3xPtOEKGEu8VghIGvXw/view?usp=sharing', video: 'https://www.youtube.com/embed/FUMYsbRoxfQ' },
      { ...NIVELES_BASE[3], pdf: 'https://drive.google.com/file/d/1yqNaM15R1F9Ui6m5KlS7qLjajjCnyKop/view?usp=sharing', video: 'https://www.youtube.com/embed/wAXjU0wWjMo' },
      { ...NIVELES_BASE[4], pdf: 'https://drive.google.com/file/d/1yAjri8lb-9fvEBQKnHLVDDHsk_OQKX3w/view?usp=sharing', video: 'https://www.youtube.com/embed/MNKSTaNomIU' },
      { ...NIVELES_BASE[5], pdf: 'https://drive.google.com/file/d/1wgyAjAwFdHEzB4dlY3wa8gMwtU94p1xO/view?usp=sharing', video: 'https://www.youtube.com/embed/JutTx_llv4Y' },
      { ...NIVELES_BASE[6], pdf: 'https://drive.google.com/file/d/1-gtX0OE_iImsjpMpUO0a3y7K4H5OL7qK/view?usp=sharing', video: 'https://www.youtube.com/embed/KR19RPniYTE' },
    ],
    segunda: [
      { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/ID_IA_2_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IA_2_2021' },
    ]
  },
  '2020': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
  '2019': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
  'anteriores': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
};

export default async function PrimeraInstanciaPage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const niveles: Nivel[] = DATA[year]?.primera || [];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">{year} - Primera Instancia</h1>
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