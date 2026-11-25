import { site } from "@/shared/content/site";

type Env = Record<string, string | undefined>;

const withProtocol = (host: string) => (host.startsWith("http") ? host : `https://${host}`);

/**
 * Base URL for metadata, sitemap, robots and JSON-LD.
 * Order: SITE_URL → the custom domain on any Vercel build (production and previews,
 * so canonicals always point at the real site) → localhost.
 */
export function getSiteUrl(env: Env = process.env): URL {
  const candidate = env.SITE_URL || (env.VERCEL ? site.url : "http://localhost:3000");
  return new URL(withProtocol(candidate.replace(/\/+$/, "")));
}
