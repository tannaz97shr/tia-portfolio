import { site } from "@/shared/content/site";

// Stage 1 placeholder: proves fonts and tokens. Replaced section by section from stage 2.
export default function Home() {
  return (
    <main id="top" className="mx-auto flex min-h-dvh max-w-[1240px] flex-col justify-center gap-6 px-5 py-16 sm:px-8">
      <p className="inline-flex w-fit items-center gap-2.5 rounded-pill bg-surface px-4 py-2 font-mono text-[13px]">
        <span aria-hidden="true" className="size-[9px] rounded-pill bg-success" />
        {site.availability} · {site.location}
      </p>
      <h1 className="font-display text-[clamp(44px,6.2vw,88px)] leading-none font-bold tracking-[-0.035em]">
        Hi, I’m Tia.
        <br />
        Something <span className="rounded-[0.2em] bg-peach px-[0.14em]">lovely</span> is on its way.
      </h1>
      <p className="font-hand text-[26px] font-semibold text-violet-ink">(the full site is being built right now)</p>
      <p className="max-w-[580px] text-[19px] leading-relaxed text-ink-soft">
        {site.roleLine}. In the meantime, say hi at{" "}
        <a className="font-semibold" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </main>
  );
}
