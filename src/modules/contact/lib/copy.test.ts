import { describe, expect, test } from "bun:test";
import { copyText } from "./copy";

describe("copyText", () => {
  test("writes to the clipboard and reports success", async () => {
    let written = "";
    const ok = await copyText("tia.shr97@gmail.com", { writeText: async (t) => void (written = t) });
    expect(ok).toBe(true);
    expect(written).toBe("tia.shr97@gmail.com");
  });

  test("reports failure instead of throwing", async () => {
    expect(await copyText("x", { writeText: async () => Promise.reject(new Error("denied")) })).toBe(false);
    expect(await copyText("x", undefined)).toBe(false);
  });
});
