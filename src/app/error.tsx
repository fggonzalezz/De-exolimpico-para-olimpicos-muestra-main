"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for monitoring
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center bg-gray-50 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              ¡Ups! Algo salió mal
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ha ocurrido un error inesperado. Nuestro equipo de matemáticos ya
              está trabajando en la solución.
            </p>

            {/* Mostrar detalles del error en desarrollo */}
            {process.env.NODE_ENV === "development" && (
              <details className="text-left mb-6 bg-gray-50 p-4 rounded border border-gray-200">
                <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                  Detalles del error (solo visible en desarrollo)
                </summary>
                <pre className="text-xs text-red-600 overflow-auto whitespace-pre-wrap break-words max-h-40">
                  {error.message}
                </pre>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
              >
                Intentar de nuevo
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
              >
                Volver al inicio
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                ¿El problema persiste?
              </p>
              <Link
                href="/contacto"
                className="text-sky-600 hover:text-sky-800 font-medium text-sm"
              >
                Contáctanos para reportar el problema →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
