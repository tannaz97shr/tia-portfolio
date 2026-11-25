# Known issues

Open problems, placeholders waiting on Tia, deferred work, and decisions Claude made without asking.

## Waiting on Tia

| Item | Where | What's needed |
| --- | --- | --- |
| Repo visibility | GitHub settings | Repo is private; kickoff #1 recommends public. Tia flips it (Settings → Danger zone). |
| Vercel project | Vercel dashboard | Import `tannaz97shr/tia-portfolio` (Hobby, defaults) and send Claude the production URL. Previews and production deploys depend on it. |
| CV PDF | `site.cvHref` → `public/tia-shirzadi-cv.pdf` | A CV **without the phone number**. Until then the "Download my CV" button shows `[PLACEHOLDER: CV PDF]`. |
| Web Analytics | Vercel dashboard | Turn on Web Analytics once the project exists (kickoff #12). |

## Placeholders on the site

| Placeholder | Where | Waiting on |
| --- | --- | --- |
| "Download my CV ↓ [PLACEHOLDER: CV PDF]" (dashed, not a link) | Hero, "I'm hiring" view | Phone-free CV PDF → set `site.cvHref` to `/tia-shirzadi-cv.pdf` |

## Open problems

_None._

## Deferred

_None._

## Decisions I made

| Date | Decision | Why |
| --- | --- | --- |
| 2026-11-25 | Pinned `typescript` 5.9.3 and `eslint` 9.39.5 instead of the newest majors (TS 7, ESLint 10). | Matches the Zeapard baseline; TS 7 and ESLint 10 are new majors with tooling risk and no benefit here. |
| 2026-11-25 | Next 16.4.6 / React 19.3.1 / Tailwind 4.3.5 / Bun 1.4.4 (newer patch/minor than the Oct baseline). | Latest stable at scaffold time. |
| 2026-11-25 | PRs are opened and merged with `gh api` (REST), not `gh pr create/merge`. | GitHub GraphQL is blocked in the cloud workspace. |
| 2026-11-25 | QA scripts read `QA_CHROME_PATH` (cloud: `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`). | Playwright can't download browsers through the workspace proxy. On Tia's Mac, `bunx playwright install chromium` then leave it unset. |
| 2026-11-25 | CSP without nonces (`'unsafe-inline'` for scripts). | Nonces force dynamic rendering; the site must stay fully static. Next.js docs' "Without nonces" recipe. |
| 2026-11-25 | Added `favicon.ico`, `icon.svg` and `apple-icon.png` from the small logo mark in stage 1. | Browsers request `/favicon.ico` and the 404 failed the console-error gate. Stage 2 refines the icons. |
| 2026-11-25 | Mobile menu drawer is my own design in the canvas style (lilac panel from the right, big Space Grotesk links, "Say hi", socials). | The phone artboard shows the menu button but not the open menu. |
| 2026-11-25 | Header is sticky on phones only (as in the phone artboard); static on desktop (as in the desktop artboard). Nav shows from 768px. | Follows each artboard. |
| 2026-11-25 | Footer is its own layout component under the contact section rather than inside it. | Same look; keeps the contact module about contact. |
| 2026-11-25 | Home link is named by its visible text ("tia shirzadi, home") instead of an aria-label. | axe `label-content-name-mismatch`. |
| 2026-11-25 | Stop the 3001 server with `pkill -f next-server` (my own servers only). | `lsof` can't see listening ports in the cloud workspace, so an old server kept serving a stale build. |
| 2026-11-25 | Hero text "rise" uses CSS keyframes (works before JS); the headline rises with transform only, and so does the portrait wrapper. `motion` is used for the switch (AnimatePresence + `layoutId` pill) and the underline (`pathLength`). | Opacity-0 starts hide the LCP until hydration; CSS keeps the hero painted at first paint. |
| 2026-11-25 | Portrait is the LCP on phones (320/390). From 768px the headline is the larger element and is the LCP; it is server-rendered, never transparent, and the portrait is still preloaded. QA checks this per width. | Can't honestly make a smaller image the LCP; both paint at first render. |
| 2026-11-25 | Hero switches to two columns at 1280px (single column with the portrait on top below that). | At 1024px the two-column headline broke into one-word lines. |
| 2026-11-25 | Badge ring text uses `textLength` to fit the circle exactly. | In the canvas the text was longer than the ring and overlapped itself. |
| 2026-11-25 | Portrait: 1254px PNG → 960×960 WebP (44 KB), `next/image` with `preload` + blur placeholder. | ≥2× the 402px slot. |
