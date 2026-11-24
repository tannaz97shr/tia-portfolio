import { Logo } from "@/shared/brand/Logo";
import { ButtonLink } from "@/shared/components/atoms/Button";
import { mailto, site } from "@/shared/content/site";
import { anchor, NAV_ITEMS, SECTIONS } from "@/shared/routes";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-bg md:static md:bg-transparent">
      <div className="relative mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-[26px]">
        <a
          href={anchor(SECTIONS.top)}
          className="flex items-center gap-2.5 text-ink no-underline md:gap-3"
        >
          <Logo size={48} className="size-10 md:size-12" />
          <span className="font-display text-lg font-bold tracking-[-0.02em] md:text-[21px]">{site.shortName}</span>
          <span className="sr-only">, home</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="m-0 flex list-none gap-5 p-0 text-[15px] font-medium lg:gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={anchor(item.id)} className="inline-flex min-h-11 items-center text-ink no-underline hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={mailto()} variant="ink" size="sm">
            Say hi
          </ButtonLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
