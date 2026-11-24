import { Hero } from "@/modules/hero/components/Hero";
import { NAV_ITEMS } from "@/shared/routes";

// Sections after the hero are stubs until their stages land (work, experience, services, contact).
export default function Home() {
  return (
    <>
      <Hero />
      {NAV_ITEMS.map((item) => (
        <section key={item.id} id={item.id} aria-label={item.label} className="mx-auto max-w-[1240px] px-5 py-16 md:px-8">
          <p className="m-0 font-mono text-[13px] text-muted">{item.label.toUpperCase()} · COMING SOON</p>
        </section>
      ))}
    </>
  );
}
