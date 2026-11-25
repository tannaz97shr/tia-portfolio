import type { CSSProperties } from "react";
import { SECTIONS } from "@/shared/routes";
import { experienceContent } from "../content";
import { education, jobs } from "../data";

// Resting tilt per card: [phone rotate, desktop rotate, desktop drop]. Uses the
// individual `rotate`/`translate` properties so the hover transform still works.
const TILTS: Array<[number, number, number]> = [
  [-0.8, -1.5, 0],
  [0.8, 1.2, 18],
  [-0.8, -1, 0],
  [0.8, 1.5, 18],
  [-1, -1.2, 0],
];

export function Experience() {
  return (
    <section
      id={SECTIONS.experience}
      aria-labelledby="experience-title"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[70px] pb-5 md:px-8 md:pt-[130px] md:pb-10"
    >
      <p className="m-0 font-mono text-xs text-muted md:text-[13px]">{experienceContent.kicker}</p>
      <h2 id="experience-title" className="m-0 mt-2 mb-6 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] md:mt-2.5 md:mb-[18px] md:text-[clamp(36px,4.6vw,62px)]">
        {experienceContent.title}
      </h2>
      <p className="m-0 mb-6 max-w-[640px] text-base leading-relaxed text-ink-soft md:mb-[52px] md:text-lg">{experienceContent.intro}</p>

      <ol className="m-0 flex list-none flex-col-reverse gap-3.5 p-0 lg:grid lg:grid-cols-5 lg:items-start lg:gap-[18px]">
        {jobs.map((job, i) => {
          const [r, rMd, drop] = TILTS[i] ?? [0, 0, 0];
          const dark = job.current;
          return (
            <li
              key={job.slug}
              className={`card rotate-(--r) rounded-card-sm p-5 lg:translate-y-(--drop) lg:rotate-(--r-md) lg:rounded-card lg:p-[26px] ${dark ? "bg-ink text-bg" : "bg-surface"}`}
              style={{ "--r": `${r}deg`, "--r-md": `${rMd}deg`, "--drop": `${drop}px` } as CSSProperties}
            >
              <p className={`m-0 font-mono text-[11px] lg:text-xs ${dark ? "text-mint" : "text-muted"}`}>
                <span className="sr-only">{job.dates}: </span>
                <span aria-hidden="true">{job.years}</span>
              </p>
              <h3 className="m-0 mt-1.5 mb-0.5 font-display text-[19px] font-bold lg:mt-2.5 lg:mb-1 lg:text-xl">
                {job.company}
                {job.roleShort && (
                  <span aria-hidden="true" className={`text-[15px] font-medium lg:hidden ${dark ? "text-gold" : "text-violet-ink"}`}>
                    {" "}
                    · {job.roleShort}
                  </span>
                )}
              </h3>
              <p className={`m-0 mb-3 hidden text-sm font-semibold lg:block ${dark ? "text-gold" : "text-violet-ink"}`}>{job.role}</p>
              <span className="sr-only lg:hidden">{job.role}. </span>
              <p className={`m-0 mt-1.5 text-[15px] leading-normal lg:mt-0 ${dark ? "text-on-ink-soft" : "text-ink-soft"}`}>
                <span className="lg:hidden">{job.summaryShort}</span>
                <span className="hidden lg:inline">{job.summary}</span>
              </p>
            </li>
          );
        })}
      </ol>

      <p className="m-0 mt-6 text-sm leading-relaxed text-ink-soft lg:mt-16 lg:text-base">
        <strong className="text-ink">{education.studying.label}:</strong>{" "}
        <span className="lg:hidden">{education.studying.short}</span>
        <span className="hidden lg:inline">{education.studying.text}</span> · <strong className="text-ink">{education.degree.label}:</strong>{" "}
        <span className="lg:hidden">{education.degree.short}</span>
        <span className="hidden lg:inline">{education.degree.text}</span>
      </p>
    </section>
  );
}
