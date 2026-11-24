import type { CSSProperties } from "react";

type StickerProps = {
  tone?: "mint" | "butter" | "surface" | "peach" | "lilac";
  /** Resting tilt in degrees. */
  rotate?: number;
  /** Bob period and delay in seconds. */
  seconds?: number;
  delay?: number;
  mono?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};

const TONES = {
  mint: "bg-mint",
  butter: "bg-butter",
  surface: "bg-surface",
  peach: "bg-peach",
  lilac: "bg-lilac",
} as const;

/** A tilted label that bobs gently, like a sticker stuck on the portrait. */
export function Sticker({ tone = "surface", rotate = 0, seconds = 4, delay = 0, mono, className, style, children }: StickerProps) {
  return (
    <span
      className={`absolute rounded-md px-3 py-2 text-[13px] text-ink shadow-[0_10px_20px_-12px_rgb(30_35_64/0.5)] sm:px-4 sm:py-2.5 sm:text-[15px] ${mono ? "font-mono" : "font-semibold"} ${TONES[tone]} ${className ?? ""}`}
      style={
        {
          "--r": `${rotate}deg`,
          transform: `rotate(${rotate}deg)`,
          animation: `bob ${seconds}s ${delay}s ease-in-out infinite`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
}
