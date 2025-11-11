import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://de-exolimpicos-para-olimpicos.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/todo"
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
