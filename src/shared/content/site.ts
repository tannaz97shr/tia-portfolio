/**
 * Every business fact the site shows. Pages read from here, never type facts in.
 * Source: Tia's resume + specs/technical-decisions.md "Site facts".
 * There is deliberately no phone field: the phone number is never published.
 */
export const site = {
  name: "Tia Shirzadi",
  /** Primary production domain (apex tiashirzadi.com.au redirects here in Vercel). */
  url: "https://www.tiashirzadi.com.au",
  shortName: "tia shirzadi",
  legalName: "Tannaz Shirzadi",
  role: "Full-Stack Software Engineer",
  roleLine: "Full-Stack Software Engineer · React · Next.js · TypeScript · Node.js",
  location: "Melbourne, VIC",
  country: "Australia",
  timeZone: "Australia/Melbourne",
  email: "tia.shr97@gmail.com",
  availability: "Available now",
  workModes: "On-site, hybrid or remote",
  links: {
    linkedin: "https://www.linkedin.com/in/tannaz-shirzadi",
    github: "https://github.com/tannaz97shr",
    upwork: "https://www.upwork.com/freelancers/~01f9976a91136fea48",
    studio: "https://zeapard.com.au",
  },
  studio: { name: "Zeapard Devs", url: "https://zeapard.com.au" },
  /** Phone-free CV in public/. Never publish the master resume with the phone number. */
  cvHref: "/tia-shirzadi-cv.pdf" as string,
  description:
    "Tia Shirzadi is a full-stack software engineer in Melbourne building React, Next.js and TypeScript web apps that look lovely and actually work.",
} as const;

export type Site = typeof site;

export const mailto = (subject?: string) =>
  subject ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : `mailto:${site.email}`;
