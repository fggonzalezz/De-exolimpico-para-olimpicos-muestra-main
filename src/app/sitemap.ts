import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://de-exolimpicos-para-olimpicos.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre-nosotros",
    "/calendario-2025",
    "/equipos-2025",
    "/equipo-imo-2025",
    "/resultados-olimpiadas",
    "/libro-nacional-2018-2019",
    "/material-de-estudio",
    "/nacional",
    "/contacto"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
