# Handoff

Last updated: 2026-11-25 (release chat).

## Where things are

- **v1.0.0 is live** at https://tia-portfolio-fawn.vercel.app (Vercel project `tia-portfolio`, production deploys from `main`).
- Stages 1–6 merged as PRs #1–#6 (squash). Every preview was QA'd in Chrome before merging: console clean, keyboard/skip link, hero switch + `aria-live`, all project/social links open the right pages, copy-email announces, 404 page, OG image, Person JSON-LD, Vercel Analytics sending views.
- Production Lighthouse (PageSpeed Insights, mobile): Performance 100, Accessibility 100, Best Practices 100, SEO 100.
- The build plan is complete. **Claude stops here** until Tia asks for something from "Later" in build-plan.md.

## Tia's to-do

See `specs/known-issues.md` → "Waiting on Tia": phone-free CV PDF, repo visibility (public), optional cleanup of merged `feat/*` branches, custom domain when she wants one.

## How to resume in a new chat

1. Attach `tannaz97shr/tia-portfolio` with push access, clone to `/home/claude/tia-portfolio`.
2. Read `specs/known-issues.md`.
3. Cloud QA: `export QA_CHROME_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`; QA scripts `qa:shots`, `qa:a11y`, `qa:menu`, `qa:hero`, `qa:links`, `qa:contact`. Previews: `https://tia-portfolio-git-<branch>-tannaz.vercel.app`.
4. PRs via `gh api` (REST); branch deletion via the API is blocked by the session's permission check, so leave merged branches for Tia.
