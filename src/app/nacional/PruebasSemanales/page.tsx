'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const ProblemasSemanales = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const weekLinks = [
    {
      week: 1,
      url: "https://drive.google.com/file/d/1awbDK_VuNZdSrlsgE-KarIx-5XHUmSDA/view?usp=sharing"
    },
    {
      week: 2,
      url: "https://drive.google.com/file/d/15WMk-DMQLJ5QiiZPI29RU_VpQUjcjhf8/view?usp=sharing"
    },
    {
      week: 3,
      url: "https://drive.google.com/file/d/1gQmpHBUiuTQ2SJ1tpihHl_YoVIgfha8g/view?usp=sharing"
    },
    {
      week: 4,
      url: "https://drive.google.com/file/d/1lWh7iq7-ZfoDTk0mEcrXOSXzSu81KKC_/view?usp=sharing"
    },
    {
      week: 5,
      url: "https://drive.google.com/file/d/17PBHUS8xzMGlu4FZIfh8O8aupCsAjsx9/view?usp=sharing"
    },
    {
      week: 6,
      url: "https://drive.google.com/file/d/17Fk3xSDJaQEOs-HD7h2aVURM36lJJ0GG/view?usp=sharing"
    },
    {
      week: 7,
      url: "https://drive.google.com/file/d/1QHOoQ4g9XqAYKpFuN_UgaHmVRwHxilLP/view?usp=sharing"
    },
    {
      week: 8,
      url: "https://drive.google.com/file/d/1P-ayNK7WYJtL_0jAuOz6z5CCiUIQZZan/view?usp=sharing"
    },
    {
      week: 9,
      url: "https://drive.google.com/file/d/1P-ayNK7WYJtL_0jAuOz6z5CCiUIQZZan/view?usp=sharing"
    },
    {
      week: 10,
      url: "https://drive.google.com/file/d/1sBXPHPuYQqRYMVJb6SgBL9cGyyzADyhw/view?usp=sharing"
    },
    {
      week: 11,
      url: "https://drive.google.com/file/d/1tvnDQCd6oaGANZOROri6qFec8vcafyEA/view?usp=sharing"
    },
    {
      week: 12,
      url: "https://drive.google.com/file/d/1-7In5PzEwxmPWS9kXKK2F5ZcsIKnZh5P/view?usp=sharing"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-2">Problemas Semanales</h1>
              <p className="text-lg text-sky-100 mt-4 max-w-2xl mx-auto">
                Ejercicios seleccionados para mejorar tus habilidades matemáticas y prepararte para las olimpiadas.
              </p>
              <div className="mt-6">
                <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Grid Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {weekLinks.map((item) => (
                  <a
                    key={item.week}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ 
                      transitionDelay: `${item.week * 50}ms`,
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                        {item.week}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Semana {item.week}</h3>
                      <p className="text-gray-600 text-sm">
                        Ejercicios seleccionados de la semana {item.week}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sky-600 font-medium">
                        <span>Ver ejercicios</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo utilizar los problemas semanales?</h2>
              <p className="text-gray-600 mb-8">
                Estos problemas han sido cuidadosamente seleccionados para ayudarte a desarrollar habilidades matemáticas progresivamente. Te recomendamos dedicar al menos 3 horas semanales a resolver estos ejercicios.
              </p>
              <div className="flex justify-center">
                <div className="inline-block text-sky-700 font-semibold text-xl border-b-2 border-sky-500 pb-1">
                  ¡Comienza hoy mismo!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProblemasSemanales; 