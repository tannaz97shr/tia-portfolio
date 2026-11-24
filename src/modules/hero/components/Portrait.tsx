import Image from "next/image";
import { Blob } from "@/shared/brand/Blob";
import { Sticker } from "@/shared/components/atoms/Sticker";
import portrait from "../../../../public/images/tia-portrait.webp";
import { heroContent } from "../content";

/** Portrait in a morphing blob, with stickers and the spinning "open to work" badge. The portrait is the LCP. */
export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-[min(100%,300px)] sm:w-[360px] xl:w-[min(100%,470px)]">
      <Blob color="lilac" morph={10} reverse float="a" floatSeconds={14} className="absolute inset-0" style={{ "--float-x": "12px", "--float-y": "-14px" } as React.CSSProperties} />
      <Blob color="peach" morph={9} float="b" floatSeconds={11} className="absolute right-[-6px] bottom-1.5 size-[46%] xl:right-[-10px] xl:bottom-2.5" />
      <Blob color="portrait" morph={12} className="absolute inset-[22px] overflow-hidden xl:inset-[34px]">
        <Image
          src={portrait}
          alt={heroContent.portraitAlt}
          preload
          placeholder="blur"
          sizes="(min-width: 1280px) 402px, (min-width: 640px) 316px, 256px"
          className="block size-full scale-[1.06] object-cover"
        />
      </Blob>

      <div
        aria-hidden="true"
        className="absolute -top-3.5 -left-4 flex size-[92px] items-center justify-center rounded-pill bg-ink xl:-top-[18px] xl:-left-[22px] xl:size-32"
      >
        <svg viewBox="0 0 120 120" className="absolute inset-0.5 size-[88px] xl:inset-1 xl:size-[120px]" style={{ animation: "spin 16s linear infinite" }}>
          <defs>
            <path id="badge-ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
          </defs>
          <text fontFamily="var(--font-mono)" fontSize="11" fill="var(--surface)" textLength={272} lengthAdjust="spacing">
            <textPath href="#badge-ring">{heroContent.badge}</textPath>
          </text>
        </svg>
        <span className="size-3.5 rounded-pill bg-gold xl:size-5" style={{ animation: "bob 1.6s ease-in-out infinite", "--bob": "-6px" } as React.CSSProperties} />
      </div>

      {heroContent.stickers.map((s) => (
        <Sticker key={s.text} tone={s.tone} rotate={s.rotate} seconds={s.seconds} delay={s.delay} mono={s.mono} className={`z-10 ${s.position}`}>
          {s.text}
        </Sticker>
      ))}
    </div>
  );
}
