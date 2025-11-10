"use client";

import React, { useRef, useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface MascotaCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
  description: string;
}

function MascotaCard({ imageSrc, name, subtitle, description }: MascotaCardProps) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center bg-sky-50 rounded-xl shadow-lg p-8 gap-8">
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-sky-200 shadow-md">
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold font-inter mb-2 text-sky-700">{name}</h1>
        <p className="text-gray-600 mb-2 font-medium">{subtitle}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

// Modal para visualizar imágenes ampliadas
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handler para cerrar al hacer clic fuera de la imagen
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Solo cerrar si el clic fue en el backdrop (overlay), no en la imagen
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handler para prevenir que el clic en la imagen cierre el modal
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 cursor-pointer"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl max-h-full cursor-default" onClick={handleImageClick}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-sky-300 z-10 transition-colors duration-200"
        >
          <X size={32} />
        </button>
        <div className="relative max-h-[80vh] max-w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="object-contain max-h-[80vh] w-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default function MascotaPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canGalleryScrollLeft, setCanGalleryScrollLeft] = useState(false);
  const [canGalleryScrollRight, setCanGalleryScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const galleryImages = [
    { src: "/images/Momento_Gauchito_Segundo_000.jpg", alt: "Momento con Gauchito II" },
    { src: "/images/Momento_Gauchito_Segundo_001.jpg", alt: "Gauchito I en acción" },
    { src: "/images/Momento_Gauchito_Segundo_002.jpg", alt: "Competencia matemática" },
    { src: "/images/Momento_Gauchito_Segundo_003.jpg", alt: "Delegación IMO" },
    { src: "/images/Momento_Gauchito_Segundo_004.jpg", alt: "Fuffy histórico" },
    { src: "/images/Momento_Gauchito_Segundo_005.jpg", alt: "Momentos únicos" },
    { src: "/images/Momento_Gauchito_Segundo_006.jpg", alt: "Momentos únicos" },
  ];

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const checkGalleryScrollButtons = () => {
    if (galleryScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryScrollRef.current;
      setCanGalleryScrollLeft(scrollLeft > 0);
      setCanGalleryScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const slideWidth = 600;
  const gallerySlideWidth = 320;

  const scrollLeftHandler = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRightHandler = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const galleryScrollLeftHandler = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: -gallerySlideWidth, behavior: 'smooth' });
      setTimeout(checkGalleryScrollButtons, 300);
    }
  };

  const galleryScrollRightHandler = () => {
    if (galleryScrollRef.current) {
      galleryScrollRef.current.scrollBy({ left: gallerySlideWidth, behavior: 'smooth' });
      setTimeout(checkGalleryScrollButtons, 300);
    }
  };

  // Funciones para el drag de la galería
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryScrollRef.current.offsetLeft);
    setScrollLeft(galleryScrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !galleryScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(checkGalleryScrollButtons, 100);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Funciones para touch (móviles)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!galleryScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - galleryScrollRef.current.offsetLeft);
    setScrollLeft(galleryScrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !galleryScrollRef.current) return;
    const x = e.touches[0].pageX - galleryScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(checkGalleryScrollButtons, 100);
  };

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    checkScrollButtons();
    checkGalleryScrollButtons();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Título principal */}
        <section className="py-8 bg-gradient-to-br from-sky-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-700 mb-4">
              Nuestras Mascotas
            </h1>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Conoce a los compañeros que han acompañado a nuestras delegaciones a lo largo de los años
            </p>
          </div>
        </section>

        {/* Sección de mascotas principales */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative">
              <button
                onClick={scrollLeftHandler}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canScrollLeft 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-500 hover:text-sky-600' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={scrollRightHandler}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canScrollRight 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-500 hover:text-sky-600' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto py-4 px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onScroll={checkScrollButtons}
              >
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Eulerito.jpg"
                    name="Gauchito II"
                    subtitle="Mascota actual, desde la Ibero 2024"
                    description="Este carpincho, digno sucesor del original, ha acompañado con orgullo a las delegaciones de Ibero y Río 2024, viendo nacer a potenciales leyendas."
                  />
                </div>
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Gauchito_primero_borrosa.JPG"
                    name="Gauchito I"
                    subtitle="Mascota de la IMO 2024"
                    description="A pesar de haber acompañado a una sola delegación, su aparición fue tan icónica que su reemplazo no fue más que una versión agrandada de él mismo."
                  />
                </div>
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Gauchito_primero_borrosa.JPG"
                    name="Fuffy"
                    subtitle="Mascota desde la IMO 2018"
                    description="Su simpática forma y la satisfacción de apretarlo cautivaron a la delegación de la IMO 2018. Sin embargo, se rumorea que el nombre correcto de Fuffy debería ser Muffy, pues solo trajo desgracia."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de fotos mejorada */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">Galería de Momentos</h2>
            
            <div className="relative">
              <button
                onClick={galleryScrollLeftHandler}
                disabled={!canGalleryScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canGalleryScrollLeft 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-500 hover:text-sky-600' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={galleryScrollRightHandler}
                disabled={!canGalleryScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canGalleryScrollRight 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-500 hover:text-sky-600' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} />
              </button>

              <div 
                ref={galleryScrollRef}
                className={`flex gap-4 overflow-x-auto pb-4 px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onScroll={checkGalleryScrollButtons}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={320}
                      height={240}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openModal(image.src, image.alt)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg hover:bg-sky-50"
                      >
                        <ZoomIn className="text-sky-600" size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal para imágenes */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
        />
      )}
    </div>
  );
}