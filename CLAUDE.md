# Tia Shirzadi — portfolio

Read `specs/technical-decisions.md` first: it holds every rule for this repo. Then `specs/build-plan.md` and `specs/handoff.md`. This file only lists commands and pinned versions.

Claude runs git itself in this repo (branch, commit, push, open PR, squash-merge, delete branch), following the rules in technical-decisions.md. In the cloud workspace GitHub GraphQL is blocked: use `gh api` REST calls (see "Working mode" in technical-decisions.md).

## Commands (Bun)

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Dev server (Tia's, port 3000) | `bun run dev` |
| Lint | `bun run lint` |
| Type check (generates Next types first) | `bun run typecheck` |
| Unit tests | `bun test` (CI: `bun test src`) |
| Production build | `bun run build` |
| Claude's production server (port 3001) | `bun run start -- -p 3001` |
| QA screenshots (320/390/768/1280) | `bun run qa:shots -- --stage=<name>` |
| Accessibility scan | `bun run qa:a11y` |

QA scripts hit `QA_BASE_URL` (default `http://localhost:3001`) and use `QA_CHROME_PATH` if set (cloud workspace: `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`). Screenshots land in `design-reference/qa/<stage>/` (gitignored).

Never run `build` while a dev server is running in the same folder. Find what's on a port with `lsof -nP -iTCP:3001 -sTCP:LISTEN`; stop only your own servers, by PID. In the cloud workspace `lsof` sees nothing: use `pkill -f next-server` (only Claude's servers run there). Restart the 3001 server after every build.

## Pinned versions (from package.json)

| Package | Version | Version-specific names |
| --- | --- | --- |
| next | 16.4.6 | `proxy.ts`, `next/image` `preload`, `eslint .`, async request APIs |
| react / react-dom | 19.3.1 | |
| tailwindcss / @tailwindcss/postcss | 4.3.5 | Theme in `src/shared/styles/globals.css` under `@theme inline`; no `tailwind.config.ts` |
| motion | 14.14.0 | Import from `motion/react` |
| typescript | 5.9.3 | `strict`, `noUncheckedIndexedAccess`, no `any` |
| eslint / eslint-config-next | 9.39.5 / 16.4.6 | Flat config `eslint.config.mjs` |
| bun | 1.4.4 | `packageManager` in package.json |

Next.js docs for this exact version: `node_modules/next/dist/docs/`.

## Design

- Canvas: "Tia Shirzadi — Portfolio" (https://claude.ai/artifact/9FQsRcc9yQ77Xd7SLv7kYJ), with desktop, phone and logo artboards.
- Tokens live in `globals.css` and come from the token table in technical-decisions.md. Use tokens only; no raw hex values in components.
- Tailwind's default palette, radii and fonts are switched off.
