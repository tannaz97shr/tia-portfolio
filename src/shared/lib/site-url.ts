type Env = Record<string, string | undefined>;

const withProtocol = (host: string) => (host.startsWith("http") ? host : `https://${host}`);

/**
 * Base URL for metadata, sitemap and robots.
 * Order: SITE_URL → Vercel production URL → Vercel preview URL → localhost.
 */
export function getSiteUrl(env: Env = process.env): URL {
  const candidate =
    env.SITE_URL ||
    env.VERCEL_PROJECT_PRODUCTION_URL ||
    env.VERCEL_URL ||
    "http://localhost:3000";
  return new URL(withProtocol(candidate.replace(/\/+$/, "")));
}
