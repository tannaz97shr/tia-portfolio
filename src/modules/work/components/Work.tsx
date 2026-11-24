import { SECTIONS } from "@/shared/routes";
import { workContent } from "../content";
import { visibleProjects } from "../data";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  const main = visibleProjects.filter((p) => p.layout !== "client");
  const clients = visibleProjects.filter((p) => p.layout === "client");
  return (
    <section
      id={SECTIONS.work}
      aria-labelledby="work-title"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 pt-20 pb-5 md:px-8 md:pt-[130px] md:pb-10"
    >
      <p className="m-0 font-mono text-xs text-muted md:text-[13px]">{workContent.kicker}</p>
      <h2 id="work-title" className="m-0 mt-2 mb-1.5 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] md:mt-2.5 md:mb-2.5 md:text-[clamp(36px,4.6vw,62px)]">
        <span className="md:hidden">{workContent.title.phone}</span>
        <span className="hidden md:inline">{workContent.title.desktop}</span>
      </h2>
      <p className="m-0 mb-7 font-hand text-[21px] font-semibold text-violet-ink md:mb-[52px] md:text-[26px]">{workContent.note}</p>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-[26px] lg:grid-cols-3">
        {main.map((project, i) => (
          <ProjectCard key={project.slug} project={project} tilt={i % 2 === 1} />
        ))}
      </div>

      {clients.length > 0 && (
        <div className="mt-[18px] grid grid-cols-1 gap-[18px] md:mt-[26px] md:grid-cols-2 md:gap-[26px]">
          {clients.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
