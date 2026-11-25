# Handoff

Last updated: 2026-11-25 (kickoff chat).

## Where things are

- Kickoff done; answers in `specs/technical-decisions.md` → "Decisions log".
- Stage 1 (`feat/scaffold`) built and QA'd locally; PR open. Waiting on CI and the Vercel preview before merging.
- Next: stage 2 `feat/layout`.

## Inputs Tia gave (kickoff chat)

- Resume (master, contains the phone number: never publish it). Facts used are summarised in technical-decisions.md → "Experience"; use the resume wording exactly for numbers ("about", "approximately", "estimate").
- Portrait (1254×1254 PNG). Stage 3 adds it as `public/images/tia-portrait.webp`. If a new chat doesn't have the attachment, ask Tia to re-attach it, or pull it from the design canvas upload.

## How to resume in a new chat

1. Attach `tannaz97shr/tia-portfolio` with push access, clone to `/home/claude/tia-portfolio`.
2. `git switch main && git pull`; check `gh api repos/tannaz97shr/tia-portfolio/pulls` for open PRs.
3. Read `specs/known-issues.md` (waiting-on-Tia list, decisions made) and carry on with the next stage in `specs/build-plan.md`.
4. Cloud QA: `export QA_CHROME_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`.
