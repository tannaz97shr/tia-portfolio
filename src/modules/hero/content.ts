import { mailto, site } from "@/shared/content/site";
import { anchor, SECTIONS } from "@/shared/routes";

export type HeroView = "hire" | "client";

type Cta = { label: string; href: string; variant: "violet" | "coral" | "outline"; placeholder?: boolean; download?: string };

export const heroContent = {
  availability: { long: `${site.availability} · ${site.location}`, short: `${site.availability} · Melbourne` },
  headline: { greeting: "Hi, I’m Tia.", lead: "I build web apps that", highlight: "look lovely", join: "and", underline: "actually work." },
  switchPrompt: "So, what brings you here?",
  switchLabel: "Choose your view",
  views: {
    hire: {
      tab: "I’m hiring",
      body: "About 6 years of commercial React, Next.js and TypeScript across fintech, banking, Web3, IoT and AI. These days I build complete products end to end with Node.js, Bun, Firebase and Stripe.",
      ctas: [
        { label: "Download my CV ↓", href: site.cvHref, variant: "violet", placeholder: site.cvHref.startsWith("["), download: "Tia-Shirzadi-CV.pdf" },
        { label: "See experience", href: anchor(SECTIONS.experience), variant: "outline" },
      ],
    },
    client: {
      tab: "I need a website",
      body: "Through my studio, Zeapard Devs, I design and build websites, online ordering and stores for Melbourne businesses, from first sketch to launch day.",
      ctas: [
        { label: "Start a project →", href: mailto("New project"), variant: "coral" },
        { label: "zeapard.com.au ↗", href: site.studio.url, variant: "outline" },
      ],
    },
  } satisfies Record<HeroView, { tab: string; body: string; ctas: Cta[] }>,
  portraitAlt: "Portrait of Tia Shirzadi",
  badge: "OPEN TO WORK · FREELANCE · MELBOURNE ·",
  stickers: [
    { text: "6 yrs of React", tone: "mint", rotate: 6, seconds: 4, delay: 0, mono: false, position: "top-[30px] -right-3 xl:top-11 xl:-right-6" },
    { text: "10+ client projects", tone: "butter", rotate: -7, seconds: 5, delay: 0.6, mono: false, position: "bottom-[26px] -left-3.5 xl:bottom-[58px] xl:-left-9" },
    { text: "<Next.js />", tone: "surface", rotate: 4, seconds: 4.4, delay: 1.1, mono: true, position: "-bottom-2.5 right-[18px] xl:-bottom-2 xl:right-10" },
  ],
} as const;
