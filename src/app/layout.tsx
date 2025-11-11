import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Montserrat, Roboto, Oswald } from "next/font/google";
import StagewiseDevToolbar from "@/components/StagewiseDevToolbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "600", "700"] });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["300", "400", "500", "700"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://de-exolimpicos-para-olimpicos.vercel.app";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "De Exolímpicos para Olímpicos",
  alternateName: "Com-Partida de Matemática del Uruguay",
  url: siteUrl,
  logo: `${siteUrl}/images/CPM.png`,
  sameAs: [
    "https://www.instagram.com/olim_mat_uy/",
    "https://www.facebook.com/olimpiadamatematicauy",
    "https://x.com/olimpiadamat_uy"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@compartidauruguay.org",
      contactType: "customer service",
      availableLanguage: ["es"]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "De Exolímpicos para Olímpicos",
    template: "%s | De Exolímpicos para Olímpicos"
  },
  description: "Entrenamiento, recursos y resultados de las delegaciones uruguayas en olimpiadas matemáticas.",
  keywords: ["olimpiadas matematicas", "uruguay", "IMO", "olimpiada nacional", "entrenamiento", "matematica"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "De Exolímpicos para Olímpicos",
    description: "Entrenamiento y recursos matemáticos para las olimpiadas de Uruguay.",
    siteName: "De Exolímpicos para Olímpicos",
    locale: "es_UY"
  },
  twitter: {
    card: "summary_large_image",
    title: "De Exolímpicos para Olímpicos",
    description: "Noticias, resultados y materiales de las olimpiadas matemáticas uruguayas.",
    site: "@olim_mat_uy",
    creator: "@olim_mat_uy"
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showStagewiseToolbar = process.env.NODE_ENV !== "production";

  return (
    <html lang="es">
      <head>
        {/* Speed up first click to Instagram by warming DNS/TLS */}
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="preconnect" href="https://scontent.cdninstagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//scontent.cdninstagram.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
  <body className={`${inter.variable} ${montserrat.variable} ${roboto.variable} ${oswald.variable} font-roboto`}>
        {showStagewiseToolbar ? <StagewiseDevToolbar /> : null}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

