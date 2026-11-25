import { ButtonLink } from "@/shared/components/atoms/Button";
import { Pill } from "@/shared/components/atoms/Pill";
import { BrowserBar } from "@/shared/components/molecules/BrowserCard";
import { workContent } from "../content";
import type { Project } from "../types";

const CARD_BG = { butter: "bg-butter", peach: "bg-peach", lilac: "bg-lilac", mint: "bg-mint", surface: "bg-surface" } as const;
const BAR_BG = { butter: "bg-butter-deep", peach: "bg-peach-deep", lilac: "bg-lilac-deep", mint: "bg-mint-deep", surface: "bg-surface" } as const;

/** Link text stays short on screen; the hidden part makes each name unique for screen readers. */
function LinkText({ label, of }: { label: string; of?: string }) {
  return (
    <>
      {label}
      {of && <span className="sr-only"> {of}</span>}
      <span aria-hidden="true" className="ml-1">↗</span>
    </>
  );
}

const host = (url: string) => new URL(url).host;

export function ProjectCard({ project, tilt = false }: { project: Project; tilt?: boolean }) {
  const { name, kind, description, liveUrl, codeUrl, liveLabel, stack, badge, layout, tone } = project;

  if (layout === "featured") {
    return (
      <article className={`card col-span-full overflow-hidden rounded-card-lg md:rounded-card-xl ${CARD_BG[tone]}`}>
        <BrowserBar tone={BAR_BG[tone]} address={liveUrl ? host(liveUrl) : undefined} colourful />
        <div className="flex flex-col gap-[18px] px-[22px] pt-6 pb-[26px] md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-9 md:px-12 md:py-11">
          <div className="md:flex-[1_1_440px]">
            <p className="m-0 mb-2 font-mono text-[11px] md:mb-3 md:text-[13px]">{kind}</p>
            <h3 className="m-0 mb-2.5 font-display text-[38px] leading-none font-bold tracking-[-0.03em] md:mb-3.5 md:text-[58px]">{name}</h3>
            <p className="m-0 max-w-[600px] text-base leading-relaxed md:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3">
            {stack && <p className="m-0 text-sm font-semibold">{stack}</p>}
            <div className="flex gap-2.5 md:gap-3">
              {liveUrl && (
                <ButtonLink href={liveUrl} variant="ink" className="flex-1 md:flex-none">
                  <LinkText label={workContent.liveDemo} of={`of ${name}`} />
                </ButtonLink>
              )}
              {codeUrl && (
                <ButtonLink href={codeUrl} variant="outline-light" className="flex-1 md:flex-none">
                  <LinkText label={workContent.code} of={`for ${name}`} />
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (layout === "client") {
    return (
      <article className={`card flex flex-col gap-2.5 rounded-card p-[22px] md:rounded-[28px] md:px-[38px] md:py-[34px] ${CARD_BG[tone]}`}>
        {badge && (
          <Pill tone={badge.tone} className="text-[11px] md:text-xs">
            {badge.text}
          </Pill>
        )}
        <h3 className="m-0 mt-1 font-display text-2xl font-bold md:text-[28px]">{name}</h3>
        <p className="m-0 text-[15px] leading-relaxed text-ink-soft md:text-base">{description}</p>
        {liveUrl && (
          <a href={liveUrl} className="inline-flex min-h-11 w-fit items-center font-semibold">
            <LinkText label={liveLabel ?? workContent.liveDemo} of={`of ${name}`} />
          </a>
        )}
      </article>
    );
  }

  return (
    <article className={`card ${tilt ? "card-tilt" : ""} overflow-hidden rounded-card-lg md:rounded-card-xl ${CARD_BG[tone]}`}>
      <BrowserBar tone={BAR_BG[tone]} className="hidden md:flex" />
      <div className="flex flex-col gap-2 px-[22px] py-6 md:gap-3 md:px-[38px] md:pt-[34px] md:pb-[38px]">
        <p className="m-0 font-mono text-[11px] md:text-[13px]">{kind}</p>
        <h3 className="m-0 font-display text-[32px] leading-tight font-bold tracking-[-0.03em] md:text-[42px]">{name}</h3>
        <p className="m-0 text-base leading-relaxed md:text-[17px]">{description}</p>
        <div className="mt-1 flex gap-5 font-semibold md:mt-2 md:gap-[18px]">
          {liveUrl && (
            <a href={liveUrl} className="inline-flex min-h-11 items-center text-ink">
              <LinkText label={liveLabel ?? workContent.liveDemo} of={liveLabel ? undefined : `of ${name}`} />
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} className="inline-flex min-h-11 items-center text-ink">
              <LinkText label={workContent.code} of={`for ${name}`} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
