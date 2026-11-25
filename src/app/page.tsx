import { Contact } from "@/modules/contact/components/Contact";
import { Experience } from "@/modules/experience/components/Experience";
import { Hero } from "@/modules/hero/components/Hero";
import { Services } from "@/modules/services/components/Services";
import { SkillBands } from "@/modules/work/components/SkillBands";
import { Work } from "@/modules/work/components/Work";
import { personJsonLd, serializeJsonLd } from "@/shared/lib/json-ld";
import { getSiteUrl } from "@/shared/lib/site-url";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd(getSiteUrl())) }} />
      <Hero />
      <SkillBands />
      <Work />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}
