import { describe, expect, test } from "bun:test";
import { getSiteUrl } from "./site-url";

describe("getSiteUrl", () => {
  test("prefers SITE_URL", () => {
    expect(getSiteUrl({ SITE_URL: "https://tia.example/", VERCEL_URL: "x.vercel.app" }).href).toBe(
      "https://tia.example/",
    );
  });

  test("falls back to the Vercel production URL, then the preview URL", () => {
    expect(
      getSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: "tia-portfolio.vercel.app", VERCEL_URL: "p.vercel.app" }).host,
    ).toBe("tia-portfolio.vercel.app");
    expect(getSiteUrl({ VERCEL_URL: "p.vercel.app" }).href).toBe("https://p.vercel.app/");
  });

  test("defaults to localhost", () => {
    expect(getSiteUrl({}).href).toBe("http://localhost:3000/");
  });
});
