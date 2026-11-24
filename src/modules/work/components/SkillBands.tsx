import { Marquee } from "@/shared/brand/Marquee";
import { workContent } from "../content";
import { skills } from "../data";

const STAR_COLOURS = ["text-coral", "text-mint", "text-lilac", "text-gold"] as const;

/** Two tilted, endless skill bands between the hero and the work section. */
export function SkillBands() {
  const core = skills.core.map((s, i) => (
    <span key={s} className="inline-flex items-center gap-7 md:gap-11">
      {s}
      <span aria-hidden="true" className={STAR_COLOURS[i % STAR_COLOURS.length]}>
        ✦
      </span>
    </span>
  ));
  const tooling = skills.tooling.map((s) => (
    <span key={s} className="inline-flex items-center gap-[22px] md:gap-10">
      {s}
      <span aria-hidden="true">·</span>
    </span>
  ));
  return (
    <div className="relative -mx-5">
      <Marquee
        label={workContent.skillsLabel}
        items={core}
        seconds={30}
        tilt={-1.5}
        className="bg-ink py-3.5 text-bg [--gap:28px] md:py-5 md:[--gap:44px]"
        itemClassName="font-display text-xl font-semibold md:text-[26px]"
      />
      <Marquee
        label={workContent.toolingLabel}
        items={tooling}
        seconds={34}
        reverse
        tilt={1}
        className="-mt-1 bg-coral py-[11px] text-ink [--gap:22px] md:-mt-1.5 md:py-4 md:[--gap:40px]"
        itemClassName="font-mono text-sm md:text-[17px]"
      />
    </div>
  );
}
