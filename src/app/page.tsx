import { Hero } from "@/modules/hero/components/Hero";
import { SkillBands } from "@/modules/work/components/SkillBands";
import { Work } from "@/modules/work/components/Work";
import { NAV_ITEMS, SECTIONS } from "@/shared/routes";

// Sections after Work are stubs until their stage lands (experience, services, contact).
export default function Home() {
  return (
    <>
      <Hero />
      <SkillBands />
      <Work />
      {NAV_ITEMS.filter((item) => item.id !== SECTIONS.work).map((item) => (
        <section key={item.id} id={item.id} aria-label={item.label} className="mx-auto max-w-[1240px] px-5 py-16 md:px-8">
          <p className="m-0 font-mono text-[13px] text-muted">{item.label.toUpperCase()} · COMING SOON</p>
        </section>
      ))}
    </>
  );
}
