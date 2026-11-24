import type { Job } from "./types";

// From Tia's resume. Numbers keep the resume's own hedges ("about", "estimate").
// Oldest first; the phone layout shows newest first.
export const jobs: Job[] = [
  {
    slug: "srico",
    company: "SRIco",
    role: "Frontend Developer",
    years: "2020 – 21",
    dates: "March 2020 to March 2021",
    summary: "Smart-farming dashboards. Moved 20+ pages to React and cut page load times by about 30%.",
    summaryShort: "20+ pages moved to React; pages load about 30% faster.",
  },
  {
    slug: "isc",
    company: "Informatics Services Corp.",
    role: "Frontend Developer",
    years: "2021 – 23",
    dates: "June 2021 to February 2023",
    summary: "Blockchain banking platform: KYC, tokens, dashboards. Storybook, Jest and Cypress testing.",
    summaryShort: "Blockchain banking platform: KYC, tokens, dashboards.",
  },
  {
    slug: "windranger",
    company: "Windranger Labs",
    role: "Frontend Engineer (Contract)",
    roleShort: "Contract",
    years: "2023",
    dates: "February to September 2023",
    summary: "Web3 products in the Mantle ecosystem. A headless CMS cut content update time by about 50% (estimate).",
    summaryShort: "Web3 in the Mantle ecosystem; content updates about 50% faster (estimate).",
  },
  {
    slug: "ako",
    company: "Ako Barsam Maham",
    role: "Frontend Engineer",
    roleShort: "Frontend lead",
    years: "2023 – 25",
    dates: "October 2023 to December 2025",
    summary: "Led frontend across 10+ client projects and sped the team up by about 30% (team estimate).",
    summaryShort: "Led frontend on 10+ client projects; team about 30% faster (team estimate).",
  },
  {
    slug: "zeapard",
    company: "Zeapard Devs",
    role: "Freelance Full-Stack",
    roleShort: "Freelance",
    years: "2026 – NOW",
    dates: "July 2026 to now",
    summary: "Five products built end to end in Melbourne, from demo apps to a live client site.",
    summaryShort: "Five products built end to end in Melbourne.",
    current: true,
  },
];

export const education = {
  studying: { label: "Studying", text: "Master of Data Science, Deakin University (2026 – now)", short: "Master of Data Science, Deakin" },
  degree: { label: "Degree", text: "B. Computer Engineering, Kermanshah University of Technology", short: "B. Computer Engineering" },
} as const;
