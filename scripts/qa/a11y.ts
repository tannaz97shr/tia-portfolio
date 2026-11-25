// axe (WCAG 2.1 AA) at every QA width, console errors, in-page anchor check,
// keyboard tab order and a reduced-motion check for running animations.
// Usage: bun run qa:a11y [-- --path=/]
import AxeBuilder from "@axe-core/playwright";
import { arg, BASE_URL, launch, WIDTHS } from "./browser";

const path = arg("path", "/");
let failures = 0;
const fail = (msg: string) => {
  failures += 1;
  console.error(`✗ ${msg}`);
};

const browser = await launch();
try {
  for (const width of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error" && !m.text().startsWith("Failed to load resource")) errors.push(m.text());
    });
    page.on("response", (r) => {
      if (r.status() >= 400) errors.push(`HTTP ${r.status()} ${r.url()}`);
    });
    page.on("pageerror", (e) => errors.push(e.message));
    const res = await page.goto(BASE_URL + path, { waitUntil: "networkidle" });
    if (!res?.ok()) fail(`${width}px: HTTP ${res?.status()}`);
    await page.waitForTimeout(1500);

    const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    for (const v of axe.violations) {
      fail(`${width}px axe ${v.id} (${v.impact}): ${v.help} — ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
    }
    for (const e of errors) fail(`${width}px console: ${e}`);

    const brokenAnchors = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
        .map((a) => a.getAttribute("href") ?? "")
        .filter((h) => h.length > 1 && !document.getElementById(h.slice(1))),
    );
    for (const h of brokenAnchors) fail(`${width}px anchor target missing: ${h}`);

    const placeholders = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>("a[href]")]
        .map((a) => a.getAttribute("href") ?? "")
        .filter((h) => h.includes("PLACEHOLDER") || h.includes("[")),
    );
    if (placeholders.length) console.log(`• ${width}px placeholder links (expected, listed in known-issues): ${placeholders.join(", ")}`);

    // Keyboard: tab through and make sure focus is visible and lands on real controls.
    const stops: string[] = [];
    for (let i = 0; i < 40; i += 1) {
      await page.keyboard.press("Tab");
      const info = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el || el === document.body) return null;
        const style = getComputedStyle(el);
        const visible = style.outlineStyle !== "none" || style.boxShadow !== "none";
        return { tag: el.tagName.toLowerCase(), name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40), visible };
      });
      if (!info) break;
      if (!["a", "button", "input", "select", "textarea", "summary"].includes(info.tag)) fail(`${width}px focus on non-control <${info.tag}>`);
      if (!info.visible) fail(`${width}px focus not visible on <${info.tag}> "${info.name}"`);
      const key = `${info.tag}:${info.name}`;
      if (stops.includes(key) && stops[0] === key) break;
      stops.push(key);
    }
    console.log(`${width}px: axe ${axe.violations.length} violations, ${errors.length} console errors, ${stops.length} tab stops`);
    await ctx.close();
  }

  const rmCtx = await browser.newContext({ viewport: { width: 390, height: 900 }, reducedMotion: "reduce" });
  const rm = await rmCtx.newPage();
  await rm.goto(BASE_URL + path, { waitUntil: "networkidle" });
  await rm.waitForTimeout(500);
  const running = await rm.evaluate(() =>
    document.getAnimations().filter((a) => {
      const t = a.effect?.getComputedTiming();
      return a.playState === "running" && t && (t.iterations === Infinity || Number(t.duration) > 50);
    }).length,
  );
  if (running > 0) fail(`reduced motion: ${running} animations still running`);
  else console.log("reduced motion: no running loops");
  await rmCtx.close();
} finally {
  await browser.close();
}

if (failures) {
  console.error(`\n${failures} problem(s)`);
  process.exit(1);
}
console.log("\nall a11y checks passed");
