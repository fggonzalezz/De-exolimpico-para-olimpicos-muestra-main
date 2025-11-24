import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://exolimpicos-lacompartida.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre-nosotros",
    "/mascota",
    "/calendario-2025",
    "/proximas-competencias",
    "/equipos-2025",
    "/equipo-imo-2025",
    "/equipo-conosur-2025",
    "/resultados-olimpiadas",
    "/como-son-los-selectivos",
    "/libro-nacional-2018-2019",
    "/material-de-estudio",
    "/nacional",
    "/nacional/2021",
    "/nacional/2020",
    "/nacional/2019",
    "/nacional/anteriores",
    "/nacional/primera",
    "/nacional/final",
    "/paginas-recomendadas",
    "/seminarios-exolimpicos",
    "/online",
    "/contacto"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? 'weekly' : 'monthly',
    priority: route === "" ? 1.0 : 0.8,
  }));
}
