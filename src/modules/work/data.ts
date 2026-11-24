import type { Project } from "./types";

// Facts from Tia's resume and specs/technical-decisions.md → "Projects". Kickoff #6: OC Pool shown, Sirwanica hidden.
export const projects: Project[] = [
  {
    slug: "millstone",
    name: "Millstone",
    kind: "FEATURED · BAKERY PICKUP & RECURRING ORDERS",
    description:
      "A three-branch ordering app with branch-scoped staff and owner access, Melbourne pickup cutoffs, recurring orders designed never to duplicate, and Stripe checkout.",
    layout: "featured",
    tone: "butter",
    liveUrl: "https://millstone-two.vercel.app",
    codeUrl: "https://github.com/tannaz97shr/millstone",
    stack: "Next.js · Firebase · Stripe · TypeScript",
    visible: true,
  },
  {
    slug: "nook",
    name: "Nook",
    kind: "CAFÉ · ORDERING + LOYALTY",
    description:
      "Customisable ordering, guest or account checkout, Google sign-in, order status tracking, loyalty points and admin tools for menu, orders and rewards.",
    layout: "colour",
    tone: "peach",
    liveUrl: "https://nook-full-stack-two.vercel.app",
    codeUrl: "https://github.com/tannaz97shr/nook-full-stack",
    visible: true,
  },
  {
    slug: "tulips",
    name: "Tulips",
    kind: "FLORIST · E-COMMERCE",
    description:
      "Filterable catalogue, customer and admin roles, Stripe checkout, and bouquet rules that take every flower in a bundle out of stock when it sells.",
    layout: "colour",
    tone: "lilac",
    liveUrl: "https://tulips-full-stack.vercel.app",
    codeUrl: "https://github.com/tannaz97shr/tulips-full-stack",
    visible: true,
  },
  {
    slug: "zeapard",
    name: "Zeapard Devs",
    kind: "MY STUDIO · BUSINESS WEBSITE",
    description:
      "Service packages, case studies, and an enquiry flow that carries the package you picked straight into the contact form.",
    layout: "colour",
    tone: "mint",
    liveUrl: "https://zeapard.com.au",
    liveLabel: "zeapard.com.au",
    visible: true,
  },
  {
    slug: "oc-pool",
    name: "OC Pool",
    kind: "CLIENT · POOL SERVICE WEBSITE",
    description:
      "An animated, mobile-first site for a local pool cleaning business: service areas, interactive service descriptions, FAQs and an enquiry form.",
    layout: "client",
    tone: "surface",
    liveUrl: "https://ocpool.com.au",
    liveLabel: "Visit site",
    badge: { text: "CLIENT · LIVE", tone: "mint" },
    visible: true,
  },
  {
    slug: "sirwanica",
    name: "Sirwanica",
    kind: "CLIENT · ONLINE PRINT SHOP",
    description: "Online print shop with a product customiser, rewards, live chat and a full admin.",
    layout: "client",
    tone: "surface",
    badge: { text: "CLIENT · IN THE OVEN", tone: "butter" },
    visible: false,
  },
];

export const visibleProjects = projects.filter((p) => p.visible);

/** Skill bands from the canvas. Every item appears in Tia's resume. */
export const skills = {
  core: ["React", "Next.js", "TypeScript", "Node.js", "Bun", "GraphQL", "Stripe", "Tailwind"],
  tooling: ["Jest", "Cypress", "Playwright", "Storybook", "Docker", "GitHub Actions", "Firebase", "NextAuth", "Claude Code"],
} as const;
