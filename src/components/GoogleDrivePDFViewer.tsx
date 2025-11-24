"use client";

import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface GoogleDrivePDFViewerProps {
  pdfUrl: string;
  title?: string;
  onError?: (error: string) => void;
}

function extractIdFromUrl(url: string): string | null {
  // Manejar URLs de Google Drive con diferentes formatos
  const patterns = [
    // Formato: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/view(?:\?.*)?$/,
    // Formato: https://drive.google.com/file/d/FILE_ID/preview
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/preview(?:\?.*)?$/,
    // Formato: https://drive.google.com/file/d/FILE_ID (sin sufijo)
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
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [useAlternativeViewer, setUseAlternativeViewer] = useState(false);

  // Memoizar la validación de URL
  const isValidUrl = useMemo(() => validateGoogleDriveUrl(pdfUrl), [pdfUrl]);

  // Memoizar el fileId para evitar re-cálculos innecesarios
  const fileId = useMemo(() => {
    return isValidUrl ? extractIdFromUrl(pdfUrl) : null;
  }, [pdfUrl, isValidUrl]);

  // URL de embed - primero intenta preview directo, luego Google Docs Viewer como fallback
  const embedUrl = useMemo(() => {
    if (!fileId) return null;
    
    if (useAlternativeViewer) {
      // Google Docs Viewer como fallback - funciona mejor con archivos que requieren auth
      const exportUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      return `https://docs.google.com/viewer?url=${encodeURIComponent(exportUrl)}&embedded=true`;
    }
    
    // URL de preview directo de Google Drive
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }, [fileId, useAlternativeViewer]);

  // Callback para manejo de errores del iframe
  const handleIframeError = useCallback(() => {
    if (!useAlternativeViewer) {
      // Intentar con el visor alternativo antes de mostrar error
      setUseAlternativeViewer(true);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
      onError?.("Error al cargar el PDF desde Google Drive");
    }
  }, [onError, useAlternativeViewer]);

  // Callback para cuando el iframe se carga exitosamente
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  // Efecto para resetear estados cuando cambia la URL
  useEffect(() => {
    if (pdfUrl) {
      setIsLoading(true);
      setHasError(false);
      setUseAlternativeViewer(false);
    }
  }, [pdfUrl]);

  // Validación temprana - mostrar enlace directo si no hay URL válida
  if (!isValidUrl || !fileId || !embedUrl) {
    return (
      <div className="w-full flex flex-col items-center p-4 border border-amber-200 rounded-lg bg-amber-50">
        <p className="text-amber-700 text-center mb-4">
          No se pudo cargar la vista previa del PDF.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          aria-label={`Abrir PDF "${title}" en una nueva pestaña`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Abrir PDF en Google Drive
        </a>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full flex flex-col items-center p-4 border border-amber-200 rounded-lg bg-amber-50">
        <p className="text-amber-700 text-center mb-4">
          No se pudo cargar la vista previa del PDF.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          aria-label={`Abrir PDF "${title}" en una nueva pestaña`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Abrir PDF en Google Drive
        </a>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {isLoading && (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 rounded-lg border mb-4">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2" />
            <p className="text-gray-600">Cargando PDF...</p>
          </div>
        </div>
      )}

      <iframe
        src={embedUrl}
        width="100%"
        height="500"
        loading="lazy"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allow="autoplay; fullscreen"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        aria-label={`Vista previa del PDF: ${title}`}
        style={{
          maxWidth: "100%",
          background: "#fafafa",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          display: isLoading ? "none" : "block",
        }}
        className="mb-4 w-full rounded-lg shadow-sm"
      />

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        aria-label={`Abrir PDF "${title}" en una nueva pestaña`}
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
