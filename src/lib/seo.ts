import type { Metadata, MetadataRoute } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://exolimpicos-lacompartida.com";
export const BRAND_NAME = "Com-Partida de Matemática del Uruguay";
export const BRAND_SHORT = "Olimpiada Matemática Uruguay";
const DEFAULT_IMAGE = {
  url: "/images/CPM.png",
  width: 198,
  height: 183,
  alt: BRAND_NAME,
};

export const defaultKeywords = [
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
  "exolimpicos para olimpicos",
  "entrenamiento olimpiadas matemáticas",
  "problemas olimpiadas matemáticas uruguay",
  "recursos matemática uruguay",
  "competencias matemáticas uruguay",
  "selectivos olimpiadas matemáticas",
  "material estudio matemática olimpiada",
];

export type PageSeoEntry = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  priority?: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  useAbsoluteTitle?: boolean;
};

const toAbsoluteUrl = (value: string) => {
  if (!value) return SITE_URL;
  return value.startsWith("http") ? value : `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
};

export const canonicalUrl = (path: string) => {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const mergeKeywords = (customKeywords?: string[]) => {
  return Array.from(new Set([...(customKeywords || []), ...defaultKeywords]));
};

export const buildPageMetadata = (entry: PageSeoEntry): Metadata => {
  const metaImage = entry.image || DEFAULT_IMAGE;
  const absoluteImageUrl = toAbsoluteUrl(metaImage.url);
  const canonical = canonicalUrl(entry.path);
  const titleValue = entry.useAbsoluteTitle ? { absolute: entry.title } : entry.title;

  return {
    title: titleValue,
    description: entry.description,
    keywords: mergeKeywords(entry.keywords),
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: BRAND_SHORT,
      title: entry.useAbsoluteTitle ? entry.title : `${entry.title} | ${BRAND_SHORT}`,
      description: entry.description,
      locale: "es_UY",
      images: [
        {
          url: absoluteImageUrl,
          width: metaImage.width ?? DEFAULT_IMAGE.width,
          height: metaImage.height ?? DEFAULT_IMAGE.height,
          alt: metaImage.alt ?? BRAND_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [absoluteImageUrl],
      creator: "@olim_mat_uy",
      site: "@olim_mat_uy",
    },
  };
};

export const seoStaticPages: PageSeoEntry[] = [
  {
    path: "/",
    title: "Olimpiada Matemática Uruguay | Com-Partida de Matemática",
    description:
      "Material de estudio, calendario 2025 y noticias de la Com-Partida de Matemática del Uruguay. Entrena para IMO, Cono Sur, Iberoamericana y la Olimpiada Nacional.",
    keywords: ["calendario competencias matemáticas", "material estudio IMO"],
    priority: 1,
    changeFrequency: "weekly",
    useAbsoluteTitle: true,
  },
  {
    path: "/sobre-nosotros",
    title: "Sobre Nosotros",
    description:
      "Historia, misión y valores de la Com-Partida de Matemática del Uruguay. Conoce al equipo que impulsa las olimpiadas matemáticas en el país.",
    keywords: ["historia olimpiada matemática uruguay", "com-partida misión"],
    priority: 0.9,
    changeFrequency: "yearly",
  },
  {
    path: "/contacto",
    title: "Contacto",
    description:
      "Formas de contacto, redes sociales y correo oficial de la Com-Partida de Matemática del Uruguay para estudiantes, familias y docentes.",
    keywords: ["contacto com-partida", "consultas olimpiada matemática"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/calendario-2025",
    title: "Calendario 2025",
    description:
      "Calendario actualizado de competencias matemáticas 2025: instancias nacionales, selecciones y torneos internacionales con fechas clave.",
    keywords: ["calendario olimpiada matemática", "fechas competencias 2025"],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/proximas-competencias",
    title: "Próximas Competencias",
    description:
      "Equipos uruguayos confirmados para la IMO, Iberoamericana, Cono Sur y PAGMO 2025 con integrantes, sedes y fechas.",
    keywords: ["equipos uruguayos imo", "delegación matemática 2025"],
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/equipos-2025",
    title: "Equipos Uruguayos 2025",
    description:
      "Resultados y reconocimientos de los equipos uruguayos en olimpiadas matemáticas internacionales 2024-2025.",
    keywords: ["resultados IMO Uruguay", "medallas olimpiada matemática uruguay"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/equipo-imo-2025",
    title: "Equipo IMO 2025",
    description:
      "Integrantes, entrenamientos y objetivos del equipo uruguayo rumbo a la 66ª Olimpíada Internacional de Matemática.",
    keywords: ["imo 2025 uruguay", "equipo olimpíada internacional matemática"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/equipo-conosur-2025",
    title: "Equipo Cono Sur 2025",
    description:
      "Selección uruguaya para la 36ª Olimpíada de Matemática de Países del Cono Sur con biografías y logros.",
    keywords: ["conosur 2025", "equipo uruguay matemática"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/resultados-olimpiadas",
    title: "Resultados de Olimpiadas",
    description:
      "Historial de medallas y menciones de Uruguay en IMO, Iberoamericana, Rioplatense, PAGMO y Cono Sur.",
    keywords: ["medallas uruguay matematica", "historial olimpiadas uruguay"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/material-de-estudio",
    title: "Material de Estudio",
    description:
      "Colecciones de problemas, libros y videos para entrenar todos los niveles de la Olimpiada Nacional y competencias internacionales.",
    keywords: ["material IMO pdf", "problemas olimpiada uruguay"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/paginas-recomendadas",
    title: "Páginas Recomendadas",
    description:
      "Directorio de recursos en línea, repositorios y plataformas para practicar problemas de olimpiadas matemáticas.",
    keywords: ["recursos online olimpiadas", "páginas matemáticas uruguay"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/como-son-los-selectivos",
    title: "Cómo son los Selectivos",
    description:
      "Guía completa de las pruebas selectivas para IMO, Iberoamericana, Cono Sur y PAGMO con cronogramas y criterios.",
    keywords: ["selectivos imo uruguay", "pruebas iberoamericana uruguay"],
    priority: 0.75,
    changeFrequency: "yearly",
  },
  {
    path: "/libro-nacional-2018-2019",
    title: "Libro Nacional 2018-2019",
    description:
      "Descarga el libro oficial con problemas y soluciones de la Olimpiada Nacional de Matemática del Uruguay 2018-2019.",
    keywords: ["libro olimpiada nacional", "problemas 2019 matemática uruguay"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/mascota",
    title: "Mascota Gauchito",
    description:
      "Conoce a Gauchito, la mascota oficial de la Olimpiada Matemática Uruguay que representa la curiosidad, perseverancia y diversión de aprender matemáticas.",
    keywords: ["mascota olimpiada matemática", "gauchito matemática", "gauchito com-partida"],
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/seminarios-exolimpicos",
    title: "Seminarios Ex-Olímpicos",
    description:
      "Encuentros virtuales y presenciales dictados por ex-olímpicos uruguayos con clases temáticas y resolución guiada.",
    keywords: ["seminarios matemática uruguay", "entrenamiento exolímpicos"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/pruebas-anteriores",
    title: "Pruebas Anteriores",
    description:
      "Archivo de pruebas oficiales, simulacros y resoluciones de la Olimpiada Nacional para practicar por nivel.",
    keywords: ["pruebas olimpiada nacional pdf", "simulacros matemática uruguay"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/online",
    title: "Entrenamiento Online",
    description:
      "Sesiones virtuales, foros y tutorías organizadas por la comunidad Com-Partida para competir desde todo el país.",
    keywords: ["entrenamiento online matemática", "clases virtuales olimpiadas"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/nacional",
    title: "Olimpiada Nacional",
    description:
      "Información general de la Olimpiada Nacional de Matemática: niveles, instancias y recursos de preparación.",
    keywords: ["olimpiada nacional uruguay", "niveles olimpíada matemática"],
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/nacional/primera",
    title: "Primera Instancia",
    description:
      "Acceso a problemas y soluciones por nivel para la primera instancia de la Olimpiada Nacional de Matemática.",
    keywords: ["primera instancia olimpiada", "soluciones nivel primaria uruguay"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/nacional/final",
    title: "Final Nacional",
    description:
      "Material histórico y enlaces por nivel para la final de la Olimpiada Nacional de Matemática del Uruguay.",
    keywords: ["final olimpiada matemática", "material final nacional uruguay"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/nacional/PruebasSemanales",
    title: "Pruebas Semanales",
    description:
      "Colección de problemas y desafíos semanales para entrenar los distintos niveles de la Olimpiada Nacional.",
    keywords: ["pruebas semanales matemática", "desafíos olimpiada uruguay"],
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    title: "About Com-Partida",
    description:
      "Versión en inglés que explica los programas de entrenamiento, el equipo de trabajo y cómo participar en Com-Partida de Matemática.",
    keywords: ["math olympiad training uruguay", "about com-partida"],
    priority: 0.4,
    changeFrequency: "yearly",
  },
];

export const getStaticSeoEntry = (path: string) => seoStaticPages.find((entry) => entry.path === path);

export const buildStaticPageMetadata = (path: string): Metadata => {
  const entry = getStaticSeoEntry(path);
  if (!entry) {
    throw new Error(`No SEO config found for path: ${path}`);
  }
  return buildPageMetadata(entry);
};

export const NATIONAL_YEARS = ["2021", "2020", "2019", "anteriores"] as const;
export const NATIONAL_LEVELS = ["nivel-IA", "nivel-IB", "nivel-IC", "nivel-II", "nivel-III", "nivel-IV", "nivel-V"] as const;

type NationalStage = "primera" | "final" | "segunda";

const formatLevelLabel = (level: string) => {
  const [, suffix] = level.split("-");
  return `Nivel ${suffix?.toUpperCase() ?? level.toUpperCase()}`;
};

export const buildNationalYearMetadata = (year: string): Metadata => {
  const readableYear = year === "anteriores" ? "Años anteriores" : year;
  return buildPageMetadata({
    path: `/nacional/${year}`,
    title: `Material ${readableYear}`,
    description: `Resoluciones y recursos de la Olimpiada Nacional ${readableYear}: enlaces a primera y segunda instancia con PDFs y videos por nivel.`,
    keywords: [
      `olimpiada nacional ${year}`,
      `material ${readableYear}`,
    ],
    priority: 0.8,
    changeFrequency: "yearly",
  });
};

export const buildNationalYearStageMetadata = (year: string, stage: NationalStage): Metadata => {
  const readableYear = year === "anteriores" ? "Años anteriores" : year;
  const stageLabel = stage === "primera" ? "Primera Instancia" : stage === "segunda" ? "Segunda Instancia" : "Final";
  return buildPageMetadata({
    path: `/nacional/${year}/${stage}`,
    title: `${stageLabel} ${readableYear}`,
    description: `${stageLabel} ${readableYear} de la Olimpiada Nacional de Matemática con PDFs descargables y videos de resolución.`,
    keywords: [
      `${stageLabel.toLowerCase()} ${readableYear} olimpiada`,
      "resoluciones olimpiada nacional",
    ],
    priority: 0.75,
    changeFrequency: "yearly",
  });
};

export const buildNationalLevelMetadata = (stage: "primera" | "final", level: string): Metadata => {
  const levelLabel = formatLevelLabel(level);
  const stageLabel = stage === "primera" ? "Primera Instancia" : "Final";
  return buildPageMetadata({
    path: `/nacional/${stage}/${level}`,
    title: `${levelLabel} ${stageLabel}`,
    description: `${levelLabel} de la ${stageLabel} de la Olimpiada Nacional con problemas oficiales y soluciones explicadas paso a paso.`,
    keywords: [
      `${levelLabel.toLowerCase()} ${stageLabel.toLowerCase()}`,
      "problemas olimpiada nacional",
    ],
    priority: 0.7,
    changeFrequency: "yearly",
  });
};

export const buildSitemapEntries = (): MetadataRoute.Sitemap => {
  return seoStaticPages.map((entry) => ({
    url: canonicalUrl(entry.path),
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency ?? "monthly",
    priority: entry.priority ?? 0.6,
  }));
};

export type FaqItem = { question: string; answer: string };

export const createFaqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export type EventSchemaInput = {
  name: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
  description?: string;
};

export const createEventItemListJsonLd = (events: EventSchemaInput[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: events.map((event, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "EducationEvent",
      name: event.name,
      startDate: event.startDate,
      endDate: event.endDate ?? event.startDate,
      location: {
        "@type": "Place",
        name: event.location,
      },
      url: event.url ?? SITE_URL,
      description: event.description,
    },
  })),
});
