import type { Metadata } from "next";
import { Blob } from "@/shared/brand/Blob";
import { ButtonLink } from "@/shared/components/atoms/Button";
import { mailto } from "@/shared/content/site";
import { ROUTES } from "@/shared/routes";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative mx-auto max-w-[1240px] px-5 pt-10 pb-24 md:px-8 md:pt-16">
      <div className="relative overflow-hidden rounded-card-xl bg-lilac px-[22px] py-16 text-center md:rounded-panel md:py-24">
        <Blob color="peach" morph={12} float="a" className="absolute -bottom-[60px] -left-10 size-[160px] md:size-[220px]" />
        <Blob color="mint" morph={10} reverse className="absolute -top-10 -right-8 size-[130px] md:size-[180px]" />
        <p className="relative m-0 font-mono text-[13px] text-ink-soft">404 · PAGE NOT FOUND</p>
        <h1 id="nf-title" className="relative m-0 mx-auto mt-3 max-w-[760px] font-display text-[44px] leading-none font-bold tracking-[-0.035em] md:text-[72px]">
          Oops, this page wandered off.
        </h1>
        <p className="relative m-0 mt-4 font-hand text-2xl font-semibold text-violet-ink md:text-[28px]">(probably went to get cake)</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={ROUTES.home} variant="ink" size="lg">
            Take me home
          </ButtonLink>
          <ButtonLink href={mailto("Broken link on your site")} variant="outline" size="lg">
            Tell me what broke
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
