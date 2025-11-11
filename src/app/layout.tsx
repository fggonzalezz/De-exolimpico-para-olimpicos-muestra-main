import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Montserrat, Roboto, Oswald } from "next/font/google";
import StagewiseDevToolbar from "@/components/StagewiseDevToolbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "600", "700"], display: 'swap' });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["300", "400", "500", "700"], display: 'swap' });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"], display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://de-exolimpicos-para-olimpicos.vercel.app";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Com-Partida de Matemática del Uruguay",
  alternateName: ["De Exolímpicos para Olímpicos", "Olimpiada Matemática Uruguay", "Compartida Matemática Uruguay"],
  description: "Organización educativa dedicada a las olimpiadas matemáticas en Uruguay. Ofrece material de estudio, entrenamiento y preparación para competencias nacionales e internacionales desde 1992.",
  url: siteUrl,
  logo: `${siteUrl}/images/CPM.png`,
  foundingDate: "1992",
  areaServed: {
    "@type": "Country",
    name: "Uruguay"
  },
  sameAs: [
    "https://www.instagram.com/olim_mat_uy/",
    "https://www.facebook.com/olimpiadamatematicauy",
    "https://x.com/olimpiadamat_uy",
    "https://com-partidauruguay.weebly.com/"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@compartidauruguay.org",
      contactType: "customer service",
      availableLanguage: ["es"],
      areaServed: "UY"
    }
  ],
  keywords: "olimpiada matemática uruguay, compartida matemática, material olimpiadas matemáticas, entrenamiento IMO uruguay, preparación olimpiadas matemáticas"
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olimpiada Matemática Uruguay | Com-Partida de Matemática",
  url: siteUrl,
  description: "Portal oficial de la Com-Partida de Matemática del Uruguay con material de estudio, recursos y preparación para olimpiadas matemáticas",
  inLanguage: "es-UY",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olimpiada Matemática Uruguay | Com-Partida de Matemática",
    template: "%s | Olimpiada Matemática Uruguay"
  },
  description: "Com-Partida de Matemática del Uruguay: material de estudio, entrenamiento y recursos para olimpiadas matemáticas. Preparación IMO, Iberoamericana, Cono Sur y olimpiada nacional uruguaya desde 1992.",
  keywords: [
    "olimpiada matemática uruguay",
    "compartida matemática",
    "compartida matemática uruguay",
    "olimpiadas matemáticas uruguay",
    "material olimpiada matemática",
    "olimpiada nacional matemática uruguay",
    "preparación olimpiadas matemáticas",
    "IMO uruguay",
    "olimpiada iberoamericana matemática",
    "olimpiada cono sur matemática",
    "com-partida matemática",
    "exolimpicos para olimpicos",
    "entrenamiento olimpiadas matemáticas",
    "problemas olimpiadas matemáticas uruguay",
    "recursos matemática uruguay",
    "competencias matemáticas uruguay",
    "olimpiada matemática nacional",
    "selectivos olimpiadas matemáticas",
    "material estudio matemática olimpiada"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Olimpiada Matemática Uruguay | Com-Partida de Matemática",
    description: "Material de estudio, entrenamiento y recursos para olimpiadas matemáticas en Uruguay. Com-Partida de Matemática - preparación IMO, Iberoamericana y Cono Sur.",
    siteName: "Olimpiada Matemática Uruguay - Com-Partida",
    locale: "es_UY",
    images: [
      {
        url: `${siteUrl}/images/CPM.png`,
        width: 512,
        height: 512,
        alt: "Com-Partida de Matemática del Uruguay"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Olimpiada Matemática Uruguay | Com-Partida de Matemática",
    description: "Material de estudio y recursos para olimpiadas matemáticas en Uruguay. Entrenamiento IMO, Iberoamericana y Cono Sur.",
    site: "@olim_mat_uy",
    creator: "@olim_mat_uy"
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  authors: [
    { name: "Com-Partida de Matemática del Uruguay" }
  ],
  category: "Education",
  classification: "Mathematics Education, Math Olympiads Uruguay"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369A1',
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
        
        {/* Geo targeting */}
        <meta name="geo.region" content="UY" />
        <meta name="geo.placename" content="Uruguay" />
        
        {/* Additional SEO */}
        <meta name="language" content="Spanish" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

