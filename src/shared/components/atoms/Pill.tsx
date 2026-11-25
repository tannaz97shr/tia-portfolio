type PillProps = {
  tone?: "surface" | "mint" | "butter" | "lilac" | "peach";
  className?: string;
  children: React.ReactNode;
};

const TONES = {
  surface: "bg-surface",
  mint: "bg-mint",
  butter: "bg-butter",
  lilac: "bg-lilac",
  peach: "bg-peach",
} as const;

/** Small mono label in a rounded capsule (availability, "CLIENT · LIVE"). */
export function Pill({ tone = "surface", className, children }: PillProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2.5 rounded-pill px-3 py-1.5 font-mono text-xs text-ink ${TONES[tone]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
