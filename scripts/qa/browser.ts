import { chromium, type Browser } from "playwright";

export const BASE_URL = process.env.QA_BASE_URL ?? "http://localhost:3001";
export const WIDTHS = [320, 390, 768, 1280] as const;

/** Uses QA_CHROME_PATH when set (cloud workspace), otherwise Playwright's own Chromium. */
export function launch(): Promise<Browser> {
  const executablePath = process.env.QA_CHROME_PATH || undefined;
  return chromium.launch({ executablePath });
}

export function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
}
