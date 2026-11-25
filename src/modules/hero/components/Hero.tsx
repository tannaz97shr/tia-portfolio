import { Blob } from "@/shared/brand/Blob";
import { SECTIONS } from "@/shared/routes";
import { heroContent } from "../content";
import { Portrait } from "./Portrait";
import { Underline } from "./Underline";
import { ViewSwitch } from "./ViewSwitch";

const { headline, availability } = heroContent;

export function Hero() {
  return (
    <section id={SECTIONS.top} aria-labelledby="hero-title" className="relative">
      <Blob color="mint" morph={16} float="b" floatSeconds={20} className="absolute top-60 -left-[110px] hidden size-[260px] xl:block" />
      <div aria-hidden="true" className="absolute top-[120px] left-[46%] hidden size-[70px] rounded-pill bg-butter xl:block" style={{ animation: "float-a 9s ease-in-out infinite" }} />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 px-5 pt-5 pb-16 [grid-template-areas:'pill''art''text'] md:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,470px)] xl:gap-x-12 xl:pt-14 xl:pb-[110px] xl:[grid-template-areas:'pill_art''text_art']">
        <p className="rise m-0 mb-5 inline-flex w-fit items-center gap-2 self-end rounded-pill bg-surface px-3.5 py-[7px] font-mono text-xs [grid-area:pill] xl:mb-[26px] xl:gap-2.5 xl:px-4 xl:py-2 xl:text-[13px]">
          <span aria-hidden="true" className="size-2 shrink-0 rounded-pill bg-success xl:size-[9px]" style={{ animation: "pulse-ring 2s infinite" }} />
          <span className="xl:hidden">{availability.short}</span>
          <span className="hidden xl:inline">{availability.long}</span>
        </p>

        <div className="rise-y mt-1.5 mb-[34px] [grid-area:art] xl:m-0 xl:self-center">
          <Portrait />
        </div>

        <div className="min-w-0 [grid-area:text]">
          <h1 id="hero-title" className="rise-y m-0 font-display text-[clamp(40px,11.3vw,48px)] leading-[1.02] font-bold tracking-[-0.035em] sm:text-[56px] xl:text-[clamp(64px,5.6vw,88px)] xl:leading-none">
            {headline.greeting}
            <br />
            {headline.lead}{" "}
            <span className="rounded-[0.2em] bg-peach px-[0.12em] box-decoration-clone xl:px-[0.14em]">{headline.highlight}</span>{" "}
            {headline.join}{" "}
            <span className="relative inline-block">
              {headline.underline}
              <Underline />
            </span>
          </h1>
          <ViewSwitch />
        </div>
      </div>
    </section>
  );
}
