import { ButtonLink } from "@/shared/components/atoms/Button";
import { SECTIONS } from "@/shared/routes";
import { servicesContent } from "../content";

const { hiring, business } = servicesContent;

const Arrow = () => (
  <span aria-hidden="true" className="ml-1">
    ↗
  </span>
);

export function Services() {
  return (
    <section
      id={SECTIONS.services}
      aria-labelledby="services-title"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[70px] pb-5 md:px-8 md:pt-[120px] md:pb-10"
    >
      <h2 id="services-title" className="m-0 font-mono text-xs font-medium text-muted md:text-[13px]">
        {servicesContent.kicker}
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-7 lg:grid-cols-2 lg:gap-[26px]">
        <article className="card rounded-card-lg bg-ink px-[22px] py-[26px] text-bg md:rounded-card-xl md:p-[46px]">
          <p className="m-0 font-mono text-[11px] text-mint md:text-[13px]">{hiring.kicker}</p>
          <h3 className="m-0 mt-2.5 mb-2.5 font-display text-[26px] leading-[1.15] font-bold tracking-[-0.02em] md:mt-3.5 md:mb-[18px] md:text-4xl">
            {hiring.title}
          </h3>
          <p className="m-0 mb-[18px] text-[15px] leading-relaxed text-on-ink-soft md:mb-7 md:text-[17px]">
            <span className="md:hidden">{hiring.bodyShort}</span>
            <span className="hidden md:inline">{hiring.body}</span>
          </p>
          <ButtonLink href={hiring.cta.href} variant="mint" className="w-full md:w-auto">
            {hiring.cta.label}
            <Arrow />
          </ButtonLink>
        </article>

        <article className="card card-tilt rounded-card-lg bg-surface px-[22px] py-[26px] md:rounded-card-xl md:p-[46px]">
          <p className="m-0 font-mono text-[11px] text-muted md:text-[13px]">{business.kicker}</p>
          <h3 className="m-0 mt-2.5 mb-3.5 font-display text-[26px] leading-[1.15] font-bold tracking-[-0.02em] md:mt-3.5 md:mb-[18px] md:text-4xl">
            {business.title}
          </h3>
          <ul className="m-0 mb-[18px] flex list-none flex-col gap-[9px] p-0 text-[15px] md:mb-7 md:gap-3 md:text-[17px]">
            {business.items.map((item) => (
              <li key={item.text}>
                <span aria-hidden="true" className={item.star}>
                  ✦
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            {business.ctas.map((cta) => (
              <ButtonLink key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
                <Arrow />
              </ButtonLink>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
