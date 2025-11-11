import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";
import StagewiseDevToolbar from "@/components/StagewiseDevToolbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "De Exolimpicos para Olimpicos",
  description: "De Exolimpicos para Olimpicos es un grupo conformado por entrenadores de olimpiadas matemáticas, cuyo objetivo principal es entrenar a estudiantes que deseen mejorar en olimpiadas matemáticas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-roboto`}>
        <StagewiseDevToolbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

