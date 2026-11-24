// Full-page screenshots at 320/390/768/1280 (+ reduced-motion at 390).
// Usage: bun run qa:shots -- --stage=scaffold [--path=/]
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { arg, BASE_URL, launch, WIDTHS } from "./browser";

const stage = arg("stage", "adhoc");
const path = arg("path", "/");
const out = join("design-reference", "qa", stage);
mkdirSync(out, { recursive: true });

const browser = await launch();
try {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE_URL + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(2500); // let entrance animations settle
    await page.screenshot({ path: join(out, `home-${width}.png`), fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(`${width}px → ${join(out, `home-${width}.png`)}${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ""}`);
    await page.close();
  }
  const rm = await browser.newPage({ viewport: { width: 390, height: 900 }, reducedMotion: "reduce" });
  await rm.goto(BASE_URL + path, { waitUntil: "networkidle" });
  await rm.screenshot({ path: join(out, "home-390-reduced-motion.png"), fullPage: true });
  console.log(`390px reduced motion → ${join(out, "home-390-reduced-motion.png")}`);
  await rm.close();
} finally {
  await browser.close();
}
