"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: { process?: () => void };
    };
  }
}

type InstagramEmbedProps = {
  permalink: string;
  caption?: string;
  loadMode?: "click" | "auto"; // auto: carga inmediata al montar
  className?: string;
};

const INSTAGRAM_EMBED_MIN_HEIGHT = 520;

export default function InstagramEmbed({
  permalink,
  caption,
  loadMode = "click",
  className,
}: InstagramEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  // Carga inmediata al abrir la página si loadMode = "auto"
  useEffect(() => {
    if (loadMode === "auto") {
      setLoaded(true);
    }
  }, [loadMode]);

  useEffect(() => {
    if (!loaded || !scriptReady) return;
    window.instgrm?.Embeds?.process?.();
  }, [loaded, scriptReady]);

  return (
    <div className={className}>
      {!loaded ? (
        <div
          className="w-full max-w-md mx-auto bg-white rounded-lg border border-gray-200 p-4 sm:p-5 md:p-6 text-center shadow-sm"
          style={{ minHeight: INSTAGRAM_EMBED_MIN_HEIGHT }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 rounded-full p-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 mb-3 font-medium">Vista previa de Instagram</p>
            {caption ? (
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{caption}</p>
            ) : null}
            <div className="flex gap-2 flex-wrap justify-center">
              <a
                href={permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md bg-pink-600 text-white hover:bg-pink-700"
              >
                Ver en Instagram
              </a>
              {loadMode === "click" && (
                <button
                  type="button"
                  onClick={() => setLoaded(true)}
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Cargar vista previa
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md mx-auto" style={{ minHeight: INSTAGRAM_EMBED_MIN_HEIGHT }}>
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={() => setScriptReady(true)}
            onError={() => setScriptReady(false)}
          />
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "0 auto",
              maxWidth: "540px",
              minWidth: "0",
              padding: 0,
              minHeight: `${INSTAGRAM_EMBED_MIN_HEIGHT}px`,
              width: "100%",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href={permalink}
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver esta publicación en Instagram
              </a>
            </div>
          </blockquote>
        </div>
      )}
    </div>
  );
}
