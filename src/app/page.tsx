import { site } from "@/shared/content/site";
import { NAV_ITEMS, SECTIONS } from "@/shared/routes";

// Placeholder sections so the nav anchors resolve. Each build stage replaces its section.
export default function Home() {
  return (
    <>
      <section id={SECTIONS.top} className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 pt-5 pb-16 md:px-8 md:pt-14">
        <p className="inline-flex w-fit items-center gap-2.5 rounded-pill bg-surface px-4 py-2 font-mono text-[13px]">
          <span aria-hidden="true" className="size-[9px] rounded-pill bg-success" />
          {site.availability} · {site.location}
        </p>
        <h1 className="m-0 font-display text-[clamp(44px,6.2vw,88px)] leading-none font-bold tracking-[-0.035em]">
          Hi, I’m Tia.
          <br />
          Something <span className="rounded-[0.2em] bg-peach px-[0.14em]">lovely</span> is on its way.
        </h1>
        <p className="m-0 font-hand text-[26px] font-semibold text-violet-ink">(the full site is being built right now)</p>
      </section>
      {NAV_ITEMS.map((item) => (
        <section key={item.id} id={item.id} aria-label={item.label} className="mx-auto max-w-[1240px] px-5 py-16 md:px-8">
          <p className="m-0 font-mono text-[13px] text-muted">{item.label.toUpperCase()} · COMING SOON</p>
        </section>
      ))}
    </>
  );
}
