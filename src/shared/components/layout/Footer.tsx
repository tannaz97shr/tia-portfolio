import { site } from "@/shared/content/site";

const LINKS = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Upwork", href: site.links.upwork },
  { label: site.studio.name, href: site.studio.url },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-[1240px] px-5 pb-10 md:px-8 md:pb-[60px]">
      <div className="flex flex-col items-center gap-3.5 text-sm text-muted md:flex-row-reverse md:flex-wrap md:justify-between md:gap-5 md:text-[15px]">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-x-[18px] p-0 font-medium md:gap-x-6">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="inline-flex min-h-11 items-center">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="m-0">
          © {year} {site.name} · <span className="md:hidden">Melbourne</span>
          <span className="hidden md:inline">Melbourne, {site.country}</span>
        </p>
      </div>
    </footer>
  );
}
