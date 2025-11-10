"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";

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
    /^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)(?:\/.*)?$/
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
    return parsedUrl.hostname === 'drive.google.com' && 
           parsedUrl.pathname.includes('/file/d/') &&
           extractIdFromUrl(url) !== null;
  } catch {
    return false;
  }
}

const GoogleDrivePDFViewer: React.FC<GoogleDrivePDFViewerProps> = ({
  pdfUrl,
  title = "Vista previa PDF",
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Memoizar la validación de URL
  const isValidUrl = useMemo(() => validateGoogleDriveUrl(pdfUrl), [pdfUrl]);
  
  // Memoizar el fileId para evitar re-cálculos innecesarios
  const fileId = useMemo(() => {
    return isValidUrl ? extractIdFromUrl(pdfUrl) : null;
  }, [pdfUrl, isValidUrl]);

  // URL de embed segura con validación
  const embedUrl = useMemo(() => {
    if (!fileId) return null;
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }, [fileId]);

  // Callback para manejo de errores del iframe
  const handleIframeError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onError?.("Error al cargar el PDF desde Google Drive");
  }, [onError]);

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
    }
  }, [pdfUrl]);

  // Validación temprana
  if (!isValidUrl || !fileId || !embedUrl) {
    return (
      <div className="w-full flex flex-col items-center p-4 border border-red-200 rounded-lg bg-red-50">
        <p className="text-red-600 text-center mb-2">
          URL de Google Drive inválida.
        </p>
        <p className="text-red-500 text-sm text-center">
          URL recibida: {pdfUrl}
        </p>
        <p className="text-red-500 text-sm text-center mt-2">
          Por favor, verifica que la URL sea de Google Drive en formato correcto.
        </p>
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
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
          aria-label={`Abrir PDF "${title}" en una nueva pestaña`}
        >
          Abrir PDF en nueva pestaña
        </a>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {isLoading && (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 rounded-lg border mb-4">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
            <p className="text-gray-600">Cargando PDF...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={embedUrl}
        width="100%"
        height="500"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        // Configuración de seguridad robusta
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        // Políticas de permisos restrictivas
        allow="fullscreen"
        // Prevenir ciertos comportamientos
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
        aria-label={`Vista previa del PDF: ${title}`}
        style={{
          maxWidth: "100%",
          background: "#fafafa",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          display: isLoading ? "none" : "block"
        }}
        className="mb-4 w-full rounded-lg shadow-sm"
      />
      
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 mb-6 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        aria-label={`Abrir PDF "${title}" en una nueva pestaña`}
      >
        Abrir PDF en nueva pestaña
      </a>
    </div>
  );
};

export default GoogleDrivePDFViewer;
