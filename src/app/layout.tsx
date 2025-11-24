import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Montserrat, Roboto, Oswald } from "next/font/google";
import StagewiseDevToolbar from "@/components/StagewiseDevToolbar";
import { BRAND_NAME, BRAND_SHORT, SITE_URL, defaultKeywords } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: 'swap' });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["300", "400", "500", "700"], display: 'swap' });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: 'swap' });

const siteUrl = SITE_URL;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: BRAND_NAME,
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
  name: `${BRAND_SHORT} | Com-Partida de Matemática`,
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
  description: "Com-Partida de Matemática del Uruguay: recursos y entrenamiento para olimpiadas matemáticas. Preparación para IMO, Cono Sur y Nacional desde 1992.",
  keywords: defaultKeywords,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${BRAND_SHORT} | Com-Partida de Matemática`,
    description: "Material de estudio, entrenamiento y recursos para olimpiadas matemáticas en Uruguay. Com-Partida de Matemática - preparación IMO, Iberoamericana y Cono Sur.",
    siteName: BRAND_SHORT,
    locale: "es_UY",
    images: [
      {
        url: `${siteUrl}/images/CPM.png`,
        width: 198,
        height: 183,
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
  icons: {
    icon: "/images/CPM.png",
    apple: "/images/CPM.png"
  },
  authors: [
    { name: BRAND_NAME }
  ],
  category: "Education",
  classification: "Mathematics Education, Math Olympiads Uruguay"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showStagewiseToolbar = process.env.NODE_ENV !== "production";

  return (
  <html lang="es" className="light" suppressHydrationWarning>
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
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-sky-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none">
          Saltar al contenido principal
        </a>
        {showStagewiseToolbar ? <StagewiseDevToolbar /> : null}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

