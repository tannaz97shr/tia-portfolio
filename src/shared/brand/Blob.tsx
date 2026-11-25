import type { CSSProperties } from "react";

type BlobColor = "lilac" | "peach" | "mint" | "butter" | "portrait";

type BlobProps = {
  color: BlobColor;
  className?: string;
  /** Morph period in seconds. */
  morph?: number;
  /** Optional float loop on top of the morph. */
  float?: "a" | "b";
  floatSeconds?: number;
  reverse?: boolean;
  style?: CSSProperties;
  children?: React.ReactNode;
};

const FILL: Record<BlobColor, string> = {
  lilac: "var(--lilac)",
  peach: "var(--peach)",
  mint: "var(--mint)",
  butter: "var(--butter)",
  portrait: "var(--portrait-bg)",
};

/** A soft organic shape that slowly morphs (border-radius) and optionally floats. Decorative unless it holds children. */
export function Blob({ color, className, morph = 12, float, floatSeconds = 14, reverse, style, children }: BlobProps) {
  const animations = [`morph ${morph}s ease-in-out infinite${reverse ? " reverse" : ""}`];
  if (float) animations.push(`float-${float} ${floatSeconds}s ease-in-out infinite`);
  return (
    <div
      aria-hidden={children ? undefined : true}
      className={`blob ${className ?? ""}`}
      style={{ background: FILL[color], animation: animations.join(", "), ...style }}
    >
      {children}
    </div>
  );
}
