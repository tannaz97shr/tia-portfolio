import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/shared/lib/site-url";
import { ROUTES } from "@/shared/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    {
      url: new URL(ROUTES.home, base).href,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
