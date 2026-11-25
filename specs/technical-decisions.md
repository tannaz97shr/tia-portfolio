# Tia Shirzadi Portfolio — Technical Decisions

25 Nov 2026 · @Tia · Personal portfolio · Adapted from the Zeapard Devs client template (v1, 28 Oct 2026)

## About this file

This file holds every technical rule for the portfolio. It is both the Claude Project's knowledge and `specs/technical-decisions.md` in the repo. `CLAUDE.md` only points here and lists commands and pinned versions.

**How it differs from the client template:** this is my own site, so Claude works independently. It runs git itself (branch, commit, push, PR, squash-merge), QAs continuously, and asks me only about the "Must stop and ask" list in the project instructions. There is no Firebase, Stripe, auth or admin area: the site is static content.

## Site facts

Business facts in code come from `src/shared/content/site.ts`, never typed into pages.

| Fact | Value |
| --- | --- |
| Name on the site | Tia Shirzadi (legal name Tannaz Shirzadi; GitHub and LinkedIn handles use it) |
| Role line | Full-Stack Software Engineer · React · Next.js · TypeScript · Node.js |
| Location | Melbourne, VIC |
| Email | tia.shr97@gmail.com |
| Phone | **Never on the site** |
| LinkedIn | https://www.linkedin.com/in/tannaz-shirzadi |
| GitHub | https://github.com/tannaz97shr |
| Upwork | https://www.upwork.com/freelancers/~01f9976a91136fea48 |
| Studio | Zeapard Devs — https://zeapard.com.au |
| Availability | Available now; on-site, hybrid or remote; open to freelance |
| Time zone | Australia/Melbourne |
| Domain | https://www.tiashirzadi.com.au (primary; apex redirects to `www`). Owned by Tia, DNS at VentraIP |

### Projects (typed data in `src/modules/work/data.ts`)

| Slug | Name | Kind | Live | Code |
| --- | --- | --- | --- | --- |
| millstone | Millstone | Bakery pickup & recurring orders (featured) | https://millstone-two.vercel.app | https://github.com/tannaz97shr/millstone |
| nook | Nook | Café ordering + loyalty | https://nook-full-stack-two.vercel.app | https://github.com/tannaz97shr/nook-full-stack |
| tulips | Tulips | Florist e-commerce | https://tulips-full-stack.vercel.app | https://github.com/tannaz97shr/tulips-full-stack |
| zeapard | Zeapard Devs | My studio website | https://zeapard.com.au | — (private repo) |
| oc-pool | OC Pool | Client site | https://ocpool.com.au | — (client) |
| sirwanica | Sirwanica | Client site, in progress | — | — (client, hidden) |

Client entries render only if the kickoff answers clear them (`visible: boolean` in the data).

### Experience (typed data in `src/modules/experience/data.ts`)

From the resume: SRIco (Mar 2020 – Mar 2021), Informatics Services Corporation (Jun 2021 – Feb 2023), Windranger Labs (Feb – Sep 2023), Ako Barsam Maham (Oct 2023 – Dec 2025), Zeapard Devs (Jul 2026 – now). Education: Master of Data Science, Deakin (2026–now); B. Computer Engineering, Kermanshah University of Technology (2015–2019). Use the resume's numbers exactly, including the "about" and "estimate" wording.

## Kickoff questions (ask all at once in the first chat)

Each has a recommended answer. Record the answers in "Decisions log".

1. **Repo:** name and visibility? Recommended: `tannaz97shr/tia-portfolio`, public, so the code is part of the portfolio.
2. **Domain:** Recommended: launch on the `*.vercel.app` URL. Buying a domain (e.g. `tiashirzadi.com`) is a later decision for Tia.
3. **Contact:** Recommended: `mailto:` links plus a "copy email" button. No contact form, so no backend, secrets or spam handling. A form can come later.
4. **CV download:** Recommended: Tia adds a PDF without the phone number as `public/tia-shirzadi-cv.pdf`. Until then the button stays a visible placeholder.
5. **Client work:** show OC Pool? show Sirwanica? Recommended: OC Pool yes if the client agreed to the case study; Sirwanica hidden until the client says yes.
6. **Missing links:** the Millstone repo URL and the OC Pool live URL.
7. **Portrait:** Recommended: Tia attaches the portrait in the first chat. Claude adds it as `public/images/tia-portrait.webp` (compressed, at least 2× the slot).
8. **Project screenshots:** Recommended: v1 uses the illustrated cards from the design, with no screenshots. Real screenshots come in stage 6.
9. **Analytics:** Recommended: Vercel Web Analytics. It's free on Hobby and sets no cookies, so no banner is needed. Tia enables it in the Vercel dashboard.
10. **Auto-merge to `main`** (which deploys production): Recommended: yes, after every gate in the stage passes.
11. **Case study pages** (`/work/[slug]`): Recommended: stage 6, after the stable release.

## Decisions log

Asked as 15 numbered questions in the kickoff chat (25 Nov 2026). Tia answered: "1: repo local address and GitHub; 7: ocpool.com.au; rest: recommended".

| Date | # | Decision |
| --- | --- | --- |
| 2026-11-25 | 1 | Use the existing repo `tannaz97shr/tia-portfolio` (Tia's local clone: `/Users/tia.shr/Projects/tia-portfolio`). Public is recommended; it is currently private and Tia flips visibility herself. |
| 2026-11-25 | 2 | Stage 1 replaces the Next 14 Create Next App starter with the Next 16 / Tailwind 4 / Bun scaffold in a normal PR. No history rewrite. |
| 2026-11-25 | 3 | Launch on the `*.vercel.app` URL. Domain is a later decision for Tia. |
| 2026-11-25 | 4 | Contact = `mailto:` link + copy-email button. No form. |
| 2026-11-25 | 5 | CV button is a visible `[PLACEHOLDER]` until Tia adds a phone-free PDF at `public/tia-shirzadi-cv.pdf`. The master resume contains the phone number and is never published. |
| 2026-11-25 | 6 | OC Pool shown (`visible: true`, live link, illustrated card, no screenshots; Tia's resume already lists it as delivered). Sirwanica hidden (`visible: false`). |
| 2026-11-25 | 7 | Millstone code: https://github.com/tannaz97shr/millstone. OC Pool live: https://ocpool.com.au. OC Pool has no code link (private client repo). |
| 2026-11-25 | 8 | Zeapard Devs card shows the live link only (repo is private). |
| 2026-11-25 | 9 | Resume attached in the kickoff chat; facts only, phone never published. |
| 2026-11-25 | 10 | Portrait attached in the kickoff chat → `public/images/tia-portrait.webp`. |
| 2026-11-25 | 11 | v1 uses the illustrated cards from the canvas; no screenshots. |
| 2026-11-25 | 12 | Vercel Web Analytics: yes. Tia enables it in the dashboard; Claude adds `@vercel/analytics` in stage 6. |
| 2026-11-25 | 13 | Auto-merge to `main` after every gate in the stage passes. |
| 2026-11-25 | 14 | `/work/[slug]` case studies only after the stable release, when Tia asks (build-plan "Later" wins over the old "stage 6" note). |
| 2026-11-25 | 15 | Vercel previews QA'd in Tia's Chrome via Claude in Chrome (new tab). If Chrome isn't reachable, QA locally and log the preview check as deferred. |

## Working mode

**Recommended: Claude works in its own cloud workspace on the GitHub repo.** The repo is attached to the chat with push access, so Claude can commit, push, open PRs and merge without my Mac being on. This also avoids the Mac VM limits from Zeapard: Bun not on PATH, no `build` in my folder, and native binaries. I `git pull` to my Mac whenever I want to look locally.

- Claude's production server runs on port 3001 in the cloud workspace; Playwright screenshots come from there.
- Vercel previews and production are QA'd in Chrome (the cloud shell can't reach `*.vercel.app`).
- Phone widths (320/390) are checked with Playwright viewports locally and in the browser pane on the preview. Chrome windows can't go below 500px.
- In the cloud workspace GitHub GraphQL is blocked, so `gh pr create` / `gh pr merge` don't work. Use the REST API: `gh api repos/tannaz97shr/tia-portfolio/pulls -f title=… -f head=… -f base=main -f body=…` to open, `gh api -X PUT repos/…/pulls/<n>/merge -f merge_method=squash` to merge, then delete the branch with `gh api -X DELETE repos/…/git/refs/heads/<branch>`.
- If the cloud workspace isn't available, fall back to the connected local folder. Follow the "Working environment notes" from the Zeapard template, and still do git yourself if `gh auth status` passes there; otherwise give me the commands.

## Git and deploy (Claude runs all of it)

- One branch per stage or fix: `feat/<name>`, `fix/<name>`, `docs/<name>`. Squash-merge PRs into `main` and delete the branch.
- Merge only when: CI is green, the Vercel preview built, preview QA passed and the stage's "Done when" list is ticked.
- Commit with two `-m` flags; the second is the Co-Authored-By line. Conventional, readable messages.
- `git add <paths>` only; check `git status` and `git diff --staged` before committing. Never `git add -A` or `-f`.
- Never force-push `main`, never rewrite pushed history, never delete branches you didn't create.
- Check ground truth before acting: `git branch -vv`, `git log origin/main -5`, open PRs via `gh api repos/…/pulls`.
- After merging: `git switch main && git pull` before the next branch.
- `main` deploys to Vercel production automatically. Previews come from PRs.

## Stack

| Area | Choice | Note |
| --- | --- | --- |
| Framework | Next.js (App Router), React, TypeScript `strict` | No `any`. Static rendering for every page |
| Styling | Tailwind CSS v4, tokens as CSS variables | Theme in `globals.css` under `@theme inline`; default palette switched off |
| Animation | `motion` (Framer Motion) + CSS keyframes | See "Animation" |
| Runtime | Bun | `bun run dev` |
| Fonts | `@fontsource-variable/space-grotesk`, `inter`, `jetbrains-mono`, `caveat` via `next/font/local` | Self-hosted, all OFL |
| Hosting | Vercel Hobby | Personal portfolio |
| Analytics | `@vercel/analytics` | Kickoff #12: yes |
| Checks | ESLint (flat config), `bun test`, Playwright (QA scripts in `scripts/qa/`), GitHub Actions CI | CI runs lint, typecheck, test, build on every PR |

Baseline versions (Zeapard, Oct 2026): next 16.3.7, react 19.3.0, tailwindcss 4.3.3, typescript 5.9.3, eslint 9.39.4, bun 1.4.2. Pin the versions actually installed in `CLAUDE.md`. Next 16 names: `proxy.ts`, `next/image` `preload`, `eslint .`, async request APIs. Check `node_modules/next/dist/docs/` before relying on memory.

## Folder structure

```
src/app/                  routes only: layout, page, not-found, opengraph-image, sitemap, robots
src/modules/<feature>/    hero, work, experience, services, contact
  components/  content.ts  data.ts  types.ts  lib/ (+ tests)
src/shared/
  components/             atoms (Button, Pill, Sticker), molecules (BrowserCard), layout (Header, MobileMenu, Footer)
  brand/                  Logo (animated SVG), Blob, Marquee
  content/site.ts         facts table above
  routes.ts               section anchors and ROUTES
  styles/                 globals.css (@theme tokens)
public/images/            portrait, OG fallback
scripts/qa/               Playwright screenshot and a11y scripts
specs/                    technical-decisions.md, build-plan.md, known-issues.md, handoff.md
```

- One drawer primitive for the mobile menu (Escape, focus trap, focus return, scroll lock).
- All copy lives in each module's `content.ts`. Projects and jobs are typed data rendered by one template.

## Design tokens (from the canvas)

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | #1E2340 | Text, dark cards, primary buttons |
| `--color-ink-soft` | #4A4560 | Body text on light |
| `--color-muted` | #5E5873 | Labels, footer |
| `--color-bg` | #F6F3FC | Page background |
| `--color-surface` | #FFFFFF | Cards |
| `--color-violet` | #7C5CFF | Primary CTA fill (white text, large) |
| `--color-violet-ink` | #4B32C3 | Links, handwritten notes |
| `--color-coral` | #F08A80 | Logo fringe, client CTA (ink text) |
| `--color-gold` | #F2C14E | Logo dot |
| `--color-lilac` / `peach` / `mint` / `butter` | #DCD3FF / #FFD6C4 / #C9F0DE / #FFEFA8 | Card and blob fills |
| `--color-success` | #1F9D6B | Availability dot |

Fonts: Space Grotesk 500–700 (display), Inter 400–600 (body), JetBrains Mono 500 (labels), Caveat 600 (handwritten notes). Radius: pills 999px, cards 22–32px.

- The canvas is the layout reference; the code uses tokens only, never pasted hex values.
- Fix contrast at the token level. Body text 4.5:1, display text 3:1. Run an automated AA scan on every page.

## Animation

| Element | How |
| --- | --- |
| Blobs (portrait, background, contact) | CSS `border-radius` morph plus float keyframes |
| Marquees | CSS translate loop, duplicated content `aria-hidden` |
| Spinning badge, logo fringe sway and dot bounce | CSS keyframes on SVG (`transform-box: fill-box`) |
| Hero text rise, scroll reveals | `motion` `whileInView`, once |
| Hiring / website switch | `motion` `AnimatePresence` crossfade plus a `layoutId` pill |
| Underline draw | `motion` `pathLength` |
| Card hover/tap tilt, stickers bob | CSS transitions; springs only where CSS can't |

- `MotionConfig reducedMotion="user"` plus a `prefers-reduced-motion` CSS block that stops every loop.
- Animate only `transform` and `opacity`. No layout thrash; no animation on LCP text before paint.
- The switch is a real `role="group"` of `<button aria-pressed>`; content changes are announced with `aria-live="polite"`.

## Accessibility, SEO, performance

- Real buttons and links, 44px touch targets, visible focus, skip link, logical headings.
- Metadata: title template, description, canonical, `metadataBase` (`SITE_URL` → Vercel production URL → preview → localhost).
- Open Graph image generated with `opengraph-image.tsx` (logo plus name on lilac). Favicon from the logo mark.
- `sitemap.ts`, `robots.ts`, and Person JSON-LD (name, jobTitle, url, sameAs: LinkedIn, GitHub, Upwork).
- Portrait via `next/image` with `preload` (the LCP), WebP, at least 2× the slot.
- Lighthouse mobile targets: Performance 90+, Accessibility 100, Best Practices 100, SEO 100.
- Security headers plus a CSP from the first deploy (allow Vercel Analytics if used).

## QA

- Every stage: lint, typecheck, `bun test`, `bun run build`, then Playwright screenshots at 320/390/768/1280px (saved under `design-reference/qa/<stage>/`, gitignored), an axe scan, keyboard-only pass, console errors, link check, and a reduced-motion pass.
- Preview QA in Chrome on the PR's Vercel URL before merging; production check after merging.
- Unit tests for logic: data shape (every project has a name, kind and a live or code link), `site.ts` (no phone field), metadata helpers.
