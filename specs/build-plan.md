# Tia Shirzadi Portfolio — Build Plan

25 Nov 2026 · Claude works through the stages in order, without waiting for approval between them (see project instructions). Each stage is one PR, merged when its "Done when" list passes.

Every stage also has to meet the **standard gates**: lint, typecheck, tests and build pass; screenshots at 320/390/768/1280px match the canvas; no console errors; axe shows no violations; keyboard and reduced-motion passes OK; Vercel preview QA'd in Chrome; known-issues.md and handoff.md updated.

## Stage 0 — Kickoff (chat only, no PR)

- Ask the kickoff questions in one message and log the answers.
- **Tia's one-time setup** (Claude lists the exact steps):
  1. Create the empty GitHub repo.
  2. Import it in Vercel (Hobby).
  3. Attach the repo to the chat with push access.
  4. Attach the portrait.
  5. Turn on Web Analytics if chosen.

## Stage 1 — Scaffold `feat/scaffold`

- Next.js app with Bun, TypeScript strict, Tailwind v4 tokens from the token table, the four self-hosted fonts, ESLint flat config.
- Folder structure, `site.ts`, `routes.ts`, the empty modules.
- GitHub Actions CI: lint, typecheck, test, build.
- `specs/` files copied in; `known-issues.md` and `handoff.md` created. `CLAUDE.md` filled with pinned versions.
- Metadata base, security headers and CSP, `robots.ts`, `sitemap.ts`.

**Done when:** CI is green on the PR, the Vercel preview shows a placeholder home page in the right fonts and colours, and `main` deploys.

## Stage 2 — Brand and layout `feat/layout`

- Animated `Logo` SVG (sway and bounce, static under reduced motion), favicon and app icons from the mark.
- Header (logo, nav anchors, "Say hi") and footer (links, ©).
- Mobile menu drawer (focus trap, Escape, scroll lock), tested at 320px.
- `Blob`, `Marquee`, `Pill`/`Button`, `Sticker` primitives.

**Done when:** the header, menu and footer match both artboards, the menu works by keyboard and touch, and the logo matches the logo artboard.

## Stage 3 — Hero `feat/hero`

- Availability pill, headline with the highlight and the underline draw.
- "So, what brings you here?" switch with the hiring and website views (AnimatePresence, `aria-live`).
- Portrait in a morphing blob, three bobbing stickers, spinning "open to work" badge.
- Phone layout follows the phone artboard (portrait above the headline).

**Done when:** both switch states match the canvas at every width, the portrait is the LCP with `preload`, the hero has no layout shift (CLS 0), and everything is still under reduced motion.

## Stage 4 — Work `feat/work`

- Both skill marquees.
- Typed project data and one card template: featured browser card, three colour cards, client cards (only those with `visible: true`).
- "Live demo ↗" and "Code ↗" links with item-specific accessible names.
- Unit test for the project data.

**Done when:** every link opens the right URL, placeholders are visible and listed in known-issues.md, and hover and tap tilt work.

## Stage 5 — Experience, services, contact `feat/about-contact`

- Tilted experience cards from typed data, plus the education line.
- The two service cards.
- Contact block with a `mailto:` link, a copy-email button with a confirmation, and the footer.

**Done when:** all resume numbers match the resume wording, and the copy button works and announces "Copied".

## Stage 6 — Stable release `feat/release`

- Generated Open Graph image, Person JSON-LD, 404 page, Vercel Analytics (if chosen).
- Full Lighthouse mobile run against the targets; fix until they're met.
- Full-site QA on production after merging.
- Tag `v1.0.0` and create a GitHub release with notes.

**Done when:** the Lighthouse targets are met on production, nothing is left in known-issues.md except deferred items and placeholders that wait on Tia, and Tia gets a final summary with the production URL and her to-do list (placeholders, domain).

**Claude stops here.**

## Later (only when Tia asks)

- `/work/[slug]` case study pages with real screenshots.
- Custom domain.
- Contact form (Resend, rate limit, honeypot).
- Dark mode.
