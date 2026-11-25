"use client";

import { motion } from "motion/react";

/** Hand-drawn violet underline that draws itself once (pathLength). */
export function Underline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-2.5 left-0 h-3.5 w-full xl:-bottom-3.5 xl:h-5"
    >
      <motion.path
        d="M4 16 C60 4 110 22 160 12 S250 6 296 14"
        fill="none"
        stroke="var(--violet)"
        strokeWidth={6}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}
