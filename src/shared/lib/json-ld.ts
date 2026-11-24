import { site } from "@/shared/content/site";

/** Person structured data (no phone, no address beyond the city). */
export function personJsonLd(baseUrl: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.legalName,
    jobTitle: site.role,
    url: baseUrl.origin,
    email: `mailto:${site.email}`,
    image: new URL("/opengraph-image", baseUrl).href,
    address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
    sameAs: [site.links.linkedin, site.links.github, site.links.upwork],
    worksFor: { "@type": "Organization", name: site.studio.name, url: site.studio.url },
  };
}

/** JSON for a <script type="application/ld+json">, with "<" escaped (Next.js JSON-LD guide). */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
