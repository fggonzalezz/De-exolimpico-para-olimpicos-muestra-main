import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientPDFSection from './ClientPDFSection';
import { NATIONAL_YEARS, buildNationalYearStageMetadata } from '@/lib/seo';

interface Nivel {
  key: string;
  title: string;
  pdf: string;
  video: string;
  img: string;
}

interface Params {
  year: string;
}

const NIVELES_2021: Nivel[] = [
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing', video: 'https://www.youtube.com/embed/HEGiZeOU6RM', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IB', title: 'Nivel IB', pdf: 'https://drive.google.com/file/d/1qOaUKYJI6Bqxa_VGz7PcYu1EBUdDH-z5/view?usp=sharing', video: 'https://www.youtube.com/embed/DX-gEB-De7s', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IC', title: 'Nivel IC', pdf: 'https://drive.google.com/file/d/1gM4c6IJfaU91Ik0aGroTZ9sxGieqIMab/view?usp=sharing', video: 'https://www.youtube.com/embed/9SyPsrpYJPI', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'II', title: 'Nivel II', pdf: 'https://drive.google.com/file/d/17--pQqwcK6Woe-K53e0bd3i3Z7TyNGgG/view?usp=sharing', video: 'https://www.youtube.com/embed/fLkQnpoHQiw', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'III', title: 'Nivel III', pdf: 'https://drive.google.com/file/d/1NtxRoA3dwVlGtP8GSn4PQPDncWcQhAST/view?usp=sharing', video: 'https://www.youtube.com/embed/8ws2xuK3B2I', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IV', title: 'Nivel IV', pdf: 'https://drive.google.com/file/d/1avnfLWOb_ZLZT4Jk6Je8acrOblc-1b11/view?usp=sharing', video: 'https://www.youtube.com/embed/-xj4lJ6nlFQ', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'V', title: 'Nivel V', pdf: 'https://drive.google.com/file/d/17HwJIN3VkdJhdigTH_JK71zqjMxpXAMc/view?usp=sharing', video: 'https://www.youtube.com/embed/xXTTMKgKJZk', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
];

const DATA: Record<string, Nivel[]> = {
  '2021': NIVELES_2021,
  '2020': [], // TODO: Add 2020 data
  '2019': [], // TODO: Add 2019 data
  'anteriores': [], // TODO: Add anteriores data
};

type SegundaPageProps = { params: Params };

export function generateMetadata({ params }: SegundaPageProps) {
  return buildNationalYearStageMetadata(params.year, 'segunda');
}

export default function SegundaInstanciaPage({ params }: SegundaPageProps) {
  const { year } = params;
  const niveles = DATA[year] || [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">{year} - Segunda Instancia</h1>
          {niveles.length > 0 ? (
            <ClientPDFSection niveles={niveles} />
          ) : (
            <div className="text-center text-gray-600">
              <p>No hay información disponible para este año.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return NATIONAL_YEARS.map((year) => ({ year }));
} 