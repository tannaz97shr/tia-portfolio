import type { AnchorHTMLAttributes } from "react";

type Variant = "ink" | "violet" | "coral" | "mint" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  ink: "bg-ink text-white",
  violet: "bg-violet text-white",
  coral: "bg-coral text-ink",
  mint: "bg-mint text-ink",
  outline: "bg-surface text-ink border-2 border-ink",
  "outline-light": "bg-transparent text-ink border-2 border-ink",
};

const SIZES: Record<Size, string> = {
  sm: "min-h-11 px-[22px] py-[11px] text-[15px]",
  md: "min-h-12 px-[22px] py-[12px] text-[15px]",
  lg: "min-h-[52px] px-[26px] py-[15px] text-base",
};

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  block?: boolean;
};

/** A pill-shaped link that looks like a button (every CTA on the site is a link). */
export function ButtonLink({ variant = "ink", size = "md", block, className, children, ...rest }: ButtonLinkProps) {
  return (
    <a
      className={`btn-bounce inline-flex items-center justify-center gap-2 rounded-pill font-semibold no-underline ${VARIANTS[variant]} ${SIZES[size]} ${block ? "w-full" : ""} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </a>
  );
}

/** External links open in the same tab by default; this adds rel for safety when a new tab is wanted. */
export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
