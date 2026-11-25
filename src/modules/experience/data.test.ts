import { describe, expect, test } from "bun:test";
import { jobs } from "./data";

describe("experience data", () => {
  test("five roles, oldest first, one current", () => {
    expect(jobs.map((j) => j.slug)).toEqual(["srico", "isc", "windranger", "ako", "zeapard"]);
    expect(jobs.filter((j) => j.current)).toHaveLength(1);
  });

  test("resume numbers keep the resume's hedges", () => {
    const text = (slug: string) => {
      const j = jobs.find((x) => x.slug === slug);
      return `${j?.summary} ${j?.summaryShort}`;
    };
    expect(text("srico")).toContain("20+ pages");
    expect(text("srico")).toContain("about 30%");
    expect(text("windranger")).toContain("about 50% (estimate)");
    expect(text("ako")).toContain("10+ client projects");
    expect(text("ako")).toContain("about 30% (team estimate)");
  });
});
