// Copy-email button: copies the address, shows "Copied", announces it. Usage: bun scripts/qa/contact.ts
import { BASE_URL, launch } from "./browser";

let failures = 0;
const check = (ok: boolean, msg: string) => {
  if (!ok) failures += 1;
  console.log(`${ok ? "✓" : "✗"} ${msg}`);
};
const browser = await launch();
try {
  for (const width of [390, 1280]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, permissions: ["clipboard-read", "clipboard-write"] });
    const page = await ctx.newPage();
    await page.goto(BASE_URL + "/#contact", { waitUntil: "networkidle" });
    const button = page.locator("#contact button");
    await button.focus();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(200);
    const clip = await page.evaluate(() => navigator.clipboard.readText());
    check(clip === "tia.shr97@gmail.com", `${width}px clipboard holds the email (${clip})`);
    check((await button.textContent())?.includes("Copied") ?? false, `${width}px button says "Copied"`);
    check((await page.locator("#contact [role=status]").textContent()) === "Email address copied", `${width}px live region announces it`);
    await page.waitForTimeout(2800);
    check((await button.textContent())?.includes("Copy email") ?? false, `${width}px button resets`);
    const mail = page.getByRole("link", { name: /Email tia\.shr97@gmail\.com/ });
    check((await mail.getAttribute("href")) === "mailto:tia.shr97@gmail.com", `${width}px mailto link`);
    await ctx.close();
  }
} finally {
  await browser.close();
}
if (failures) process.exit(1);
