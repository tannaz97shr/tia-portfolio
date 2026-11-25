import { describe, expect, test } from "bun:test";
import { site } from "@/shared/content/site";
import { getSiteUrl } from "./site-url";

describe("getSiteUrl", () => {
  test("prefers SITE_URL", () => {
    expect(getSiteUrl({ SITE_URL: "https://tia.example/", VERCEL: "1" }).href).toBe("https://tia.example/");
  });

  test("uses the custom domain on Vercel, never a vercel.app URL", () => {
    const url = getSiteUrl({ VERCEL: "1", VERCEL_URL: "p.vercel.app", VERCEL_PROJECT_PRODUCTION_URL: "x.vercel.app" });
    expect(url.href).toBe("https://www.tiashirzadi.com.au/");
    expect(url.origin).toBe(site.url);
  });

  test("defaults to localhost", () => {
    expect(getSiteUrl({}).href).toBe("http://localhost:3000/");
  });
});
