"use client";

import type React from "react";
import { useMemo } from "react";

interface GoogleDrivePDFViewerProps {
  pdfUrl: string;
  title?: string;
  onError?: (error: string) => void;
}

function extractIdFromUrl(url: string): string | null {
  const patterns = [
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/view(?:\?.*)?$/,
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/preview(?:\?.*)?$/,
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)(?:\/.*)?$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

function validateGoogleDriveUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return (
      parsedUrl.hostname === "drive.google.com" &&
      parsedUrl.pathname.includes("/file/d/") &&
      extractIdFromUrl(url) !== null
    );
  } catch {
    return false;
  }
}

const GoogleDrivePDFViewer: React.FC<GoogleDrivePDFViewerProps> = ({
  pdfUrl,
  title = "Vista previa PDF",
}) => {
  const isValidUrl = useMemo(() => validateGoogleDriveUrl(pdfUrl), [pdfUrl]);

  const fileId = useMemo(() => {
    return isValidUrl ? extractIdFromUrl(pdfUrl) : null;
  }, [pdfUrl, isValidUrl]);

  // URL de embed usando el formato que Google Drive acepta para embeds públicos
  const embedUrl = useMemo(() => {
    if (!fileId) return null;
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }, [fileId]);

  if (!isValidUrl || !fileId || !embedUrl) {
    return (
      <div className="w-full flex flex-col items-center p-4 border border-amber-200 rounded-lg bg-amber-50">
        <p className="text-amber-700 text-center mb-4">
          URL de PDF no válida.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
        >
          Abrir enlace
        </a>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contenedor con aspect ratio de hoja A4 (1:1.414) para evitar barras negras */}
      <div className="w-full max-w-[595px] relative" style={{ aspectRatio: "1 / 1.414" }}>
        <iframe
          src={embedUrl}
          title={title}
          aria-label={`Vista previa del PDF: ${title}`}
          className="absolute inset-0 w-full h-full rounded-lg shadow-sm border border-gray-200"
        />
      </div>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4 mb-6 text-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Abrir PDF en nueva pestaña
      </a>
    </div>
  );
};

export default GoogleDrivePDFViewer;
