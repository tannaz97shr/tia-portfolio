// Link check: every link has a unique name per destination, external links match the data,
// and (where the network allows) external URLs answer. Usage: bun scripts/qa/links.ts
import { projects } from "../../src/modules/work/data";
import { site } from "../../src/shared/content/site";
import { BASE_URL, launch } from "./browser";

let failures = 0;
const check = (ok: boolean, msg: string) => {
  if (!ok) failures += 1;
  if (!ok || process.argv.includes("--verbose")) console.log(`${ok ? "✓" : "✗"} ${msg}`);
};

const browser = await launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
await page.goto(BASE_URL, { waitUntil: "networkidle" });
const links = await page.evaluate(() =>
  [...document.querySelectorAll<HTMLAnchorElement>("a[href]")].map((a) => ({
    name: (a.getAttribute("aria-label") || a.textContent || "").replace(/\s+/g, " ").trim(),
    href: a.getAttribute("href") ?? "",
  })),
);
await browser.close();

// Same accessible name must not lead to different places.
const byName = new Map<string, Set<string>>();
for (const l of links) byName.set(l.name, (byName.get(l.name) ?? new Set()).add(l.href));
for (const [name, hrefs] of byName) check(hrefs.size === 1, `link name "${name}" → ${[...hrefs].join(", ")}`);

// Every visible project link is on the page; hidden projects are not.
const hrefs = new Set(links.map((l) => l.href));
for (const p of projects) {
  for (const url of [p.liveUrl, p.codeUrl].filter((u): u is string => Boolean(u))) {
    if (p.visible) check(hrefs.has(url), `${p.name}: ${url} is linked`);
    else check(!links.some((l) => l.name.includes(p.name)), `${p.name} (hidden) is not shown`);
  }
  if (!p.visible) check(!links.some((l) => l.name.includes(p.name)), `${p.name} (hidden) has no links`);
}
for (const url of Object.values(site.links)) check(hrefs.has(url), `site link ${url} is on the page`);
check(![...hrefs].some((h) => /tel:|\b04\d{2}\b/.test(h)), "no phone links");

// Reachability (skipped quietly where the sandbox blocks outbound requests).
const external = [...hrefs].filter((h) => h.startsWith("https://"));
let reached = 0;
let blocked = 0;
for (const url of external) {
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(8000) });
    // The cloud proxy answers 403 for hosts it blocks or bot-walls (GitHub): verify those in Chrome instead.
    if (res.status === 403) {
      blocked += 1;
      continue;
    }
    reached += 1;
    check(res.status < 400 || res.status === 999 /* LinkedIn bot wall */, `${url} → ${res.status}`);
  } catch {
    blocked += 1;
  }
}
console.log(`${links.length} links, ${external.length} external: ${reached} reached, ${blocked} not reachable from here (check those in Chrome)`);
if (failures) {
  console.error(`${failures} link problem(s)`);
  process.exit(1);
}
console.log("links OK");
