type LogoProps = {
  /** Rendered size in px. */
  size?: number;
  /** "navy" = navy disc with white letters (default); "light" = light disc with navy letters, for dark grounds. */
  tone?: "navy" | "light";
  /** Fringe sway + dot bounce. Stopped under reduced motion by the global CSS. */
  animated?: boolean;
  /** Accessible name. Omit when the logo sits next to visible text (decorative). */
  title?: string;
  className?: string;
};

const DISC = { navy: "var(--ink)", light: "var(--bg)" } as const;
const LETTERS = { navy: "var(--surface)", light: "var(--ink)" } as const;

/**
 * The "tıa" monogram from the logo artboard: the coral swoosh is the fringe,
 * the gold dot is the polo button, the navy disc is the shirt.
 */
export function Logo({ size = 48, tone = "navy", animated = true, title, className }: LogoProps) {
  const a11y = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} {...a11y}>
      <circle cx="50" cy="50" r="50" fill={DISC[tone]} />
      <path
        className={animated ? "logo-swoosh" : undefined}
        d="M14 47 C22 17 62 5 89 30 C66 21 40 26 22 53 Z"
        fill="var(--coral)"
      />
      <text
        x="50"
        y="81"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight={700}
        fontSize={36}
        fill={LETTERS[tone]}
        letterSpacing={-1}
      >
        tıa
      </text>
      <circle className={animated ? "logo-dot" : undefined} cx="47.5" cy="54" r="4.5" fill="var(--gold)" />
    </svg>
  );
}
