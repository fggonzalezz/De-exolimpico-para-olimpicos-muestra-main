'use client';

import Header from '@/components/layout/Header';
import Image from 'next/image';
import { buildNationalYearMetadata } from '@/lib/seo';

export const metadata = buildNationalYearMetadata('2019');

export default function Page2019() {
  return (
    <>
      <Header />
      <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mt-4">
                <Image 
                  src="https://ext.same-assets.com/1728315765/3097668772.png" 
                  alt="2019" 
                  width={240} 
                  height={80} 
                  className="object-contain rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
} 