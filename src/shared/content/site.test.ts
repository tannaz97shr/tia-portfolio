import { describe, expect, test } from "bun:test";
import { mailto, site } from "./site";

describe("site facts", () => {
  test("never includes a phone number", () => {
    expect(Object.keys(site).some((k) => /phone|mobile|tel/i.test(k))).toBe(false);
    expect(JSON.stringify(site)).not.toMatch(/\+?61\s?4\d{2}|04\d{2}\s?\d{3}\s?\d{3}/);
  });

  test("links are https", () => {
    for (const url of Object.values(site.links)) expect(url.startsWith("https://")).toBe(true);
  });

  test("mailto encodes the subject", () => {
    expect(mailto()).toBe("mailto:tia.shr97@gmail.com");
    expect(mailto("New project")).toBe("mailto:tia.shr97@gmail.com?subject=New%20project");
  });
});
