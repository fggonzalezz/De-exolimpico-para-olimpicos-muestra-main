import type { MetadataRoute } from "next";
import {
  NATIONAL_LEVELS,
  NATIONAL_YEARS,
  buildSitemapEntries,
  canonicalUrl,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = buildSitemapEntries();

  const yearEntries: MetadataRoute.Sitemap = NATIONAL_YEARS.flatMap((year) => {
    const baseDate = new Date();
    return [
      {
        url: canonicalUrl(`/nacional/${year}`),
        lastModified: baseDate,
        changeFrequency: "yearly" as const,
        priority: 0.75,
      },
      {
        url: canonicalUrl(`/nacional/${year}/primera`),
        lastModified: baseDate,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      },
      {
        url: canonicalUrl(`/nacional/${year}/segunda`),
        lastModified: baseDate,
        changeFrequency: "yearly" as const,
        priority: 0.65,
      },
    ];
  });

  const levelEntries: MetadataRoute.Sitemap = ["primera", "final"].flatMap((stage) =>
    NATIONAL_LEVELS.map((level) => ({
      url: canonicalUrl(`/nacional/${stage}/${level}`),
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  const combined = [...staticEntries, ...yearEntries, ...levelEntries];
  const uniqueMap = new Map<string, MetadataRoute.Sitemap[number]>();

  combined.forEach((entry) => {
    uniqueMap.set(entry.url, entry);
  });

  return Array.from(uniqueMap.values());
}
