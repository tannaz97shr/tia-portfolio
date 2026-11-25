import { Blob } from "@/shared/brand/Blob";
import { mailto, site } from "@/shared/content/site";
import { SECTIONS } from "@/shared/routes";
import { contactContent } from "../content";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact() {
  return (
    <section
      id={SECTIONS.contact}
      aria-labelledby="contact-title"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-[70px] pb-7 md:px-8 md:pt-[120px] md:pb-11"
    >
      <div className="relative overflow-hidden rounded-card-xl bg-lilac px-[22px] py-12 text-center md:rounded-panel md:px-[clamp(24px,5vw,60px)] md:py-[clamp(44px,7vw,100px)]">
        <Blob color="peach" morph={12} float="a" floatSeconds={15} className="absolute -bottom-[50px] -left-10 size-[140px] md:-bottom-[70px] md:-left-[50px] md:size-[230px]" />
        <Blob color="mint" morph={10} reverse float="b" floatSeconds={12} className="absolute -top-9 -right-[30px] size-[120px] md:-top-[50px] md:-right-10 md:size-[190px]" />

        <p className="relative m-0 mb-1.5 font-hand text-2xl font-semibold text-violet-ink md:mb-2 md:text-[30px]">{contactContent.note}</p>
        <h2 id="contact-title" className="relative m-0 mx-auto max-w-[800px] font-display text-[44px] leading-none font-bold tracking-[-0.035em] md:text-[clamp(42px,6.4vw,84px)]">
          {contactContent.title}
        </h2>
        <div className="relative mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-10">
          <a
            href={mailto()}
            className="btn-bounce inline-flex min-h-[52px] items-center justify-center rounded-pill bg-ink px-6 text-base font-semibold break-all text-white no-underline md:min-h-[60px] md:px-[34px] md:text-[clamp(16px,2vw,20px)]"
          >
            <span className="sr-only">Email </span>
            {site.email}
          </a>
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
}
