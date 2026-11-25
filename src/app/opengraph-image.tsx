import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/shared/content/site";

export const alt = `${site.name}, ${site.role} in Melbourne`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't read CSS variables, so the canvas tokens are spelled out here (OG image only).
const C = { ink: "#1E2340", inkSoft: "#4A4560", lilac: "#DCD3FF", peach: "#FFD6C4", mint: "#C9F0DE", coral: "#F08A80", gold: "#F2C14E", white: "#FFFFFF", violetInk: "#4B32C3" };

const font = (pkg: string, file: string) => readFile(join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

export default async function OpengraphImage() {
  const [grotesk, inter] = await Promise.all([
    font("space-grotesk", "space-grotesk-latin-700-normal.woff"),
    font("inter", "inter-latin-500-normal.woff"),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: C.lilac, position: "relative", fontFamily: "Inter", color: C.ink }}>
        <div style={{ position: "absolute", right: -90, bottom: -120, width: 420, height: 420, background: C.peach, borderRadius: "42% 58% 63% 37% / 45% 40% 60% 55%" }} />
        <div style={{ position: "absolute", right: 210, top: -80, width: 240, height: 240, background: C.mint, borderRadius: "60% 40% 35% 65% / 55% 62% 38% 45%" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <div style={{ width: 132, height: 132, borderRadius: 999, background: C.ink, display: "flex", position: "relative", overflow: "hidden" }}>
              <svg width="132" height="132" viewBox="0 0 100 100" style={{ position: "absolute", left: 0, top: 0 }}>
                <path d="M14 47 C22 17 62 5 89 30 C66 21 40 26 22 53 Z" fill={C.coral} />
                <circle cx="47.5" cy="54" r="4.5" fill={C.gold} />
              </svg>
              <div style={{ position: "absolute", left: 0, right: 0, top: 58, display: "flex", justifyContent: "center", fontFamily: "Space Grotesk", fontSize: 48, color: C.white, letterSpacing: -1.5 }}>
                tıa
              </div>
            </div>
            <div style={{ fontFamily: "Space Grotesk", fontSize: 54, letterSpacing: -1.5 }}>{site.shortName}</div>
          </div>
          <div style={{ fontFamily: "Space Grotesk", fontSize: 84, lineHeight: 1.02, letterSpacing: -3, maxWidth: 900, display: "flex", flexWrap: "wrap" }}>
            I build web apps that look lovely and actually work.
          </div>
          <div style={{ fontSize: 30, color: C.inkSoft }}>{`${site.roleLine.replace(" · Node.js", "")} · Melbourne`}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    },
  );
}
