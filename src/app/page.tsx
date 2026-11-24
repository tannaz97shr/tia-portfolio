import { Contact } from "@/modules/contact/components/Contact";
import { Experience } from "@/modules/experience/components/Experience";
import { Hero } from "@/modules/hero/components/Hero";
import { Services } from "@/modules/services/components/Services";
import { SkillBands } from "@/modules/work/components/SkillBands";
import { Work } from "@/modules/work/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillBands />
      <Work />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}
