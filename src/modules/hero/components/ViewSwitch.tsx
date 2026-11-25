"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ButtonLink } from "@/shared/components/atoms/Button";
import { heroContent, type HeroView } from "../content";

const ORDER: HeroView[] = ["hire", "client"];

/** "So, what brings you here?" — a real button group that swaps the pitch and CTAs. */
export function ViewSwitch() {
  const [view, setView] = useState<HeroView>("hire");
  const promptId = useId();
  const current = heroContent.views[view];

  return (
    <div className="rise mt-8 xl:mt-10" style={{ animationDelay: "0.25s" }}>
      <p id={promptId} className="m-0 mb-2.5 font-hand text-2xl font-semibold text-violet-ink xl:mb-3 xl:text-[26px]">
        {heroContent.switchPrompt}
      </p>
      <div
        role="group"
        aria-label={heroContent.switchLabel}
        className="flex gap-1 rounded-pill bg-surface p-[5px] shadow-[0_8px_24px_-16px_rgb(30_35_64/0.4)] sm:inline-flex sm:gap-1.5 sm:p-1.5"
      >
        {ORDER.map((key) => {
          const active = key === view;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setView(key)}
              className={`relative min-h-[46px] flex-1 cursor-pointer rounded-pill border-0 bg-transparent px-2 py-2.5 text-sm font-semibold transition-colors duration-300 sm:flex-none sm:px-5 sm:py-3 sm:text-[15px] ${active ? "text-white" : "text-ink"}`}
            >
              {active && (
                <motion.span
                  layoutId="hero-view-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-pill bg-ink"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{heroContent.views[key].tab}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-5 xl:mt-[26px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <p className="m-0 max-w-[580px] text-[17px] leading-relaxed text-ink-soft xl:text-[19px]">{current.body}</p>
            <div className="mt-[22px] flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3.5 xl:mt-[30px]">
              {current.ctas.map((cta) =>
                "placeholder" in cta && cta.placeholder ? (
                  <span
                    key={cta.label}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-pill border-2 border-dashed border-violet-ink px-[26px] py-[13px] text-base font-semibold text-violet-ink"
                  >
                    {cta.label} <span className="font-mono text-xs">{cta.href}</span>
                  </span>
                ) : (
                  <ButtonLink
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant}
                    size="lg"
                    download={"download" in cta ? cta.download : undefined}
                  >
                    {cta.label}
                  </ButtonLink>
                ),
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
