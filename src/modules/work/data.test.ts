import { describe, expect, test } from "bun:test";
import { projects, skills, visibleProjects } from "./data";

describe("project data", () => {
  test("every project has a name, a kind and a description", () => {
    for (const p of projects) {
      expect(p.name.length).toBeGreaterThan(0);
      expect(p.kind.length).toBeGreaterThan(0);
      expect(p.description.length).toBeGreaterThan(20);
    }
  });

  test("every visible project has a live or code link, all https", () => {
    for (const p of visibleProjects) {
      expect(Boolean(p.liveUrl || p.codeUrl)).toBe(true);
      for (const url of [p.liveUrl, p.codeUrl].filter(Boolean)) expect(url).toMatch(/^https:\/\//);
    }
  });

  test("slugs are unique and there is exactly one featured project", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    expect(visibleProjects.filter((p) => p.layout === "featured")).toHaveLength(1);
  });

  test("client work follows the kickoff answers: OC Pool shown, Sirwanica hidden", () => {
    expect(projects.find((p) => p.slug === "oc-pool")?.visible).toBe(true);
    expect(projects.find((p) => p.slug === "sirwanica")?.visible).toBe(false);
  });

  test("client entries never link to code", () => {
    for (const p of projects.filter((p) => p.layout === "client")) expect(p.codeUrl).toBeUndefined();
  });

  test("skill bands are non-empty", () => {
    expect(skills.core.length).toBeGreaterThan(3);
    expect(skills.tooling.length).toBeGreaterThan(3);
  });
});
