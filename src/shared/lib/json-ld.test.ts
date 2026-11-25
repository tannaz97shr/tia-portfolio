import { describe, expect, test } from "bun:test";
import { personJsonLd, serializeJsonLd } from "./json-ld";

describe("Person JSON-LD", () => {
  const data = personJsonLd(new URL("https://tia.example"));

  test("has the required fields and profile links", () => {
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Tia Shirzadi");
    expect(data.url).toBe("https://tia.example");
    expect(data.sameAs).toEqual([
      "https://www.linkedin.com/in/tannaz-shirzadi",
      "https://github.com/tannaz97shr",
      "https://www.upwork.com/freelancers/~01f9976a91136fea48",
    ]);
  });

  test("never includes a phone number", () => {
    expect(JSON.stringify(data)).not.toMatch(/telephone|phone|04\d{2}/i);
  });

  test("escapes < so the script tag can't be closed early", () => {
    expect(serializeJsonLd({ a: "</script>" })).toBe('{"a":"\\u003c/script>"}');
  });
});
