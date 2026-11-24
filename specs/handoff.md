# Handoff

Last updated: 2026-11-25 (kickoff chat).

## Where things are

- Kickoff done; answers in `specs/technical-decisions.md` → "Decisions log".
- **All six stages are built and QA'd locally**, each as its own PR, stacked:
  #1 `feat/scaffold` → main · #2 `feat/layout` → feat/scaffold · #3 `feat/hero` → feat/layout · #4 `feat/work` → feat/hero · #5 `feat/about-contact` → feat/work · #6 `feat/release` → feat/about-contact.
- CI is green on every branch. **Nothing is merged**: Vercel isn't connected yet (no previews), and merging needs a QA'd preview.
- Local Lighthouse mobile (production build): 94 / 100 / 100 / 100.

## When Vercel is connected (next steps, in order)

1. Check PR #1 for the Vercel preview; QA it in Chrome (Claude in Chrome, new tab; 320/390 via Playwright locally). Merge: `gh api -X PUT repos/tannaz97shr/tia-portfolio/pulls/1/merge -f merge_method=squash`, then delete `feat/scaffold` (`gh api -X DELETE repos/tannaz97shr/tia-portfolio/git/refs/heads/feat/scaffold`). Note: deleting the base branch auto-closes a stacked PR, so **retarget #2 to `main` first** (`gh api -X PATCH repos/…/pulls/2 -f base=main`).
2. For each next PR: `git fetch --depth=50 origin main`, then `git merge origin/main` into that feature branch (never rebase or force-push: the rules forbid rewriting pushed history), push, wait for CI + preview, QA in Chrome, squash-merge, retarget the next PR to `main`, repeat. Fixes made low in the stack are merged forward branch by branch, the same way.
3. After #6 merges: production QA in Chrome, Lighthouse on the production URL, `git tag v1.0.0` + GitHub release (`gh api repos/…/releases -f tag_name=v1.0.0 …`), final summary to Tia.

## Inputs Tia gave (kickoff chat)

- Resume (master, contains the phone number: never publish it). Facts used are in technical-decisions.md → "Experience"; numbers keep the resume wording ("about", "estimate").
- Portrait → `public/images/tia-portrait.webp` (done).

## How to resume in a new chat

1. Attach `tannaz97shr/tia-portfolio` with push access, clone to `/home/claude/tia-portfolio` (shallow clones have no `origin/*` refs for other branches: `git fetch --depth=50 origin <branch>`).
2. `gh api repos/tannaz97shr/tia-portfolio/pulls` for open PRs and their bases.
3. Read `specs/known-issues.md` (waiting-on-Tia list, open problems, decisions made).
4. Cloud QA: `export QA_CHROME_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`; restart the 3001 server with `pkill -f next-server` after each build. QA scripts: `qa:shots`, `qa:a11y` (`--path=/nope --expect=404` for the 404 page), `qa:menu`, `qa:hero`, `qa:links`, `qa:contact`.
