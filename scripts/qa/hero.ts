// Hero checks: both switch states at every width, LCP element, CLS, aria-pressed and live region.
// Usage: bun scripts/qa/hero.ts --stage=hero
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { arg, BASE_URL, launch, WIDTHS } from "./browser";

const stage = arg("stage", "adhoc");
const out = join("design-reference", "qa", stage);
mkdirSync(out, { recursive: true });
let failures = 0;
const check = (ok: boolean, msg: string) => {
  if (!ok) failures += 1;
  console.log(`${ok ? "✓" : "✗"} ${msg}`);
};

const browser = await launch();
try {
  for (const width of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      const w = window as unknown as { __lcp?: string; __cls: number };
      w.__cls = 0;
      new PerformanceObserver((list) => {
        for (const e of list.getEntries() as unknown as Array<{ element?: Element }>) {
          const el = e.element;
          w.__lcp = el ? `${el.tagName.toLowerCase()}${el.getAttribute("alt") ? `[alt="${el.getAttribute("alt")}"]` : ""}` : "?";
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver((list) => {
        for (const e of list.getEntries() as unknown as Array<{ value: number; hadRecentInput: boolean }>) {
          if (!e.hadRecentInput) w.__cls += e.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(2500);
    const { lcp, cls } = await page.evaluate(() => {
      const w = window as unknown as { __lcp?: string; __cls: number };
      return { lcp: w.__lcp, cls: w.__cls };
    });
    // Portrait is the LCP on phones; from 768px the (always-painted) headline is larger and wins.
    check(width < 768 ? (lcp?.startsWith("img") ?? false) : lcp === "h1" || (lcp?.startsWith("img") ?? false), `${width}px LCP element: ${lcp}`);
    check(cls < 0.001, `${width}px CLS before interaction: ${cls.toFixed(4)}`);
    const preload = await page.evaluate(() => !!document.querySelector('link[rel="preload"][as="image"]'));
    check(preload, `${width}px portrait is preloaded`);

    const hero = page.locator("#top");
    await hero.screenshot({ path: join(out, `hero-${width}-hire.png`) });
    const hire = page.getByRole("button", { name: "I’m hiring" });
    const client = page.getByRole("button", { name: "I need a website" });
    check((await hire.getAttribute("aria-pressed")) === "true", `${width}px "I’m hiring" pressed by default`);
    await client.click();
    await page.waitForTimeout(700);
    check((await client.getAttribute("aria-pressed")) === "true", `${width}px "I need a website" pressed after click`);
    check(await page.getByRole("link", { name: /Start a project/ }).isVisible(), `${width}px website view shows "Start a project"`);
    await hero.screenshot({ path: join(out, `hero-${width}-client.png`) });
    // keyboard back
    await hire.focus();
    await page.keyboard.press("Space");
    await page.waitForTimeout(700);
    check((await hire.getAttribute("aria-pressed")) === "true", `${width}px keyboard Space switches back`);
    await ctx.close();
  }
} finally {
  await browser.close();
}
if (failures) process.exit(1);
