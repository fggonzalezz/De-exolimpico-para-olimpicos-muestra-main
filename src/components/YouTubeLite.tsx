"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface YouTubeLiteProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * YouTubeLite - Carga ligera de videos de YouTube
 * Muestra una miniatura y solo carga el iframe cuando el usuario hace clic
 * Esto mejora significativamente el tiempo de carga de la página
 */
export default function YouTubeLite({ videoId, title, className = "" }: YouTubeLiteProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extraer el ID del video si viene una URL completa
  const extractVideoId = (urlOrId: string): string => {
    if (urlOrId.includes('youtube.com/embed/')) {
      return urlOrId.split('embed/')[1]?.split('?')[0] || urlOrId;
    }
    if (urlOrId.includes('watch?v=')) {
      return urlOrId.split('watch?v=')[1]?.split('&')[0] || urlOrId;
    }
    if (urlOrId.includes('youtu.be/')) {
      return urlOrId.split('youtu.be/')[1]?.split('?')[0] || urlOrId;
    }
    return urlOrId;
  };

  const id = extractVideoId(videoId);
  const thumbnailUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className}
      />
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-full h-full bg-black cursor-pointer group ${className}`}
      aria-label={`Reproducir video: ${title}`}
      type="button"
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={`Miniatura de ${title}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />
      
      {/* Overlay oscuro al hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      
      {/* Botón de play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg group-hover:scale-110 transform transition-transform">
          <svg 
            className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* Título del video */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white text-sm md:text-base font-medium line-clamp-2 text-left">
          {title}
        </p>
      </div>
    </button>
  );
}
