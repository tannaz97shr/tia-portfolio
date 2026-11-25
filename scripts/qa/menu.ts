// Mobile menu behaviour at 320px: open by keyboard and tap, focus trap, Escape,
// focus return, scroll lock, link closes the menu. Usage: bun scripts/qa/menu.ts [--stage=layout]
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { arg, BASE_URL, launch } from "./browser";

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
  const ctx = await browser.newContext({ viewport: { width: 320, height: 640 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  const trigger = page.getByRole("button", { name: "Open menu" });
  const dialog = page.getByRole("dialog", { name: "Menu" });

  // Keyboard open
  await trigger.focus();
  await page.keyboard.press("Enter");
  await page.waitForTimeout(450);
  check(await dialog.isVisible(), "Enter opens the menu");
  check((await trigger.getAttribute("aria-expanded")) === "true", "trigger has aria-expanded=true");
  check(await page.evaluate(() => getComputedStyle(document.documentElement).overflow === "hidden"), "page scroll is locked");
  await page.screenshot({ path: join(out, "menu-320-open.png") });

  // Focus trap: tab many times, focus must stay inside the dialog
  let escaped = false;
  for (let i = 0; i < 20; i += 1) {
    await page.keyboard.press(i % 7 === 6 ? "Shift+Tab" : "Tab");
    const inside = await page.evaluate(() => !!document.activeElement?.closest("dialog"));
    if (!inside) escaped = true;
  }
  check(!escaped, "focus stays inside the menu (Tab / Shift+Tab)");

  // Escape closes and returns focus
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  check(!(await dialog.isVisible()), "Escape closes the menu");
  check(await page.evaluate(() => document.activeElement?.getAttribute("aria-label") === "Open menu"), "focus returns to the menu button");
  check(await page.evaluate(() => getComputedStyle(document.documentElement).overflow !== "hidden"), "scroll lock released");

  // Tap open, tap a link → closes and navigates
  await trigger.tap();
  await page.waitForTimeout(450);
  await dialog.getByRole("link", { name: /Experience/ }).tap();
  await page.waitForTimeout(800);
  check(!(await dialog.isVisible()), "tapping a link closes the menu");
  check(page.url().endsWith("#experience"), "tapping a link navigates to its section");

  // Backdrop tap closes
  await trigger.tap();
  await page.waitForTimeout(450);
  await page.mouse.click(10, 300);
  await page.waitForTimeout(200);
  check(!(await dialog.isVisible()), "tapping the backdrop closes the menu");

  // Close button
  await trigger.tap();
  await page.waitForTimeout(450);
  await page.getByRole("button", { name: "Close menu" }).tap();
  await page.waitForTimeout(200);
  check(!(await dialog.isVisible()), "close button closes the menu");
  await ctx.close();
} finally {
  await browser.close();
}
if (failures) process.exit(1);
