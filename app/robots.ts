import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://przyklad-domeny-zostanie-podmieniona.pl/sitemap.xml",
  };
}
