import { site } from "@/shared/content/site";

export const servicesContent = {
  kicker: "03 — HOW I CAN HELP",
  hiring: {
    kicker: "FOR TEAMS HIRING",
    title: "A frontend specialist who ships the whole thing.",
    body: "Architecture, design systems, auth, APIs, testing and performance. On-site, hybrid or remote, and I can start right away.",
    bodyShort: "On-site, hybrid or remote. I can start right away.",
    cta: { label: "Connect on LinkedIn", href: site.links.linkedin },
  },
  business: {
    kicker: "FOR BUSINESSES",
    title: "Websites that win you customers.",
    items: [
      { text: "Online ordering & Stripe payments", star: "text-coral" },
      { text: "Online stores with stock tracking", star: "text-violet" },
      { text: "Admin dashboards & loyalty programs", star: "text-success" },
      { text: "Fast, animated business websites", star: "text-gold" },
    ],
    ctas: [
      { label: "zeapard.com.au", href: site.studio.url, variant: "violet" },
      { label: "Upwork", href: site.links.upwork, variant: "outline" },
    ],
  },
} as const;
