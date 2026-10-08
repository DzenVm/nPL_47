import type { MetadataRoute } from "next";

const BASE_URL = "https://zervuqanil.click";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/o-mechanice", "/zasady", "/polityka-prywatnosci", "/kontakt"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
