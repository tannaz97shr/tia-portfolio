"use client";

import { useCallback, useId, useRef, useState } from "react";
import { Logo } from "@/shared/brand/Logo";
import { mailto, site } from "@/shared/content/site";
import { anchor, NAV_ITEMS } from "@/shared/routes";
import { Drawer } from "./Drawer";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const drawerId = useId();
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={drawerId}
        onClick={() => setOpen(true)}
        className="btn-bounce flex size-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-pill border-0 bg-ink md:hidden"
      >
        <span aria-hidden="true" className="h-0.5 w-[18px] rounded-sm bg-white" />
        <span aria-hidden="true" className="h-0.5 w-3 rounded-sm bg-coral" />
      </button>

      <Drawer open={open} onClose={onClose} labelledBy={titleId} id={drawerId} returnFocusTo={trigger}>
        <div className="flex h-full flex-col gap-8 overflow-y-auto px-6 pt-5 pb-8">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5">
              <Logo size={40} />
              <h2 id={titleId} className="m-0 font-display text-lg font-bold tracking-[-0.02em]">
                Menu
              </h2>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="btn-bounce relative size-[46px] cursor-pointer rounded-pill border-0 bg-ink"
            >
              <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-0.5 w-[18px] -translate-1/2 rotate-45 rounded-sm bg-white" />
              <span aria-hidden="true" className="absolute top-1/2 left-1/2 h-0.5 w-[18px] -translate-1/2 -rotate-45 rounded-sm bg-coral" />
            </button>
          </div>

          <nav aria-label="Main">
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={anchor(item.id)}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-baseline gap-3 font-display text-[40px] leading-none font-bold tracking-[-0.03em] text-ink no-underline"
                  >
                    <span aria-hidden="true" className="font-mono text-xs font-medium tracking-normal text-muted">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <p className="m-0 font-hand text-2xl font-semibold text-violet-ink">psst… I reply within a day</p>
            <a
              href={mailto()}
              className="btn-bounce flex min-h-[52px] items-center justify-center rounded-pill bg-ink px-6 text-base font-semibold text-white no-underline"
            >
              Say hi
            </a>
            <ul className="m-0 flex list-none flex-wrap gap-x-5 p-0 text-[15px] font-medium">
              <li><a className="inline-flex min-h-11 items-center" href={site.links.github}>GitHub</a></li>
              <li><a className="inline-flex min-h-11 items-center" href={site.links.linkedin}>LinkedIn</a></li>
              <li><a className="inline-flex min-h-11 items-center" href={site.links.upwork}>Upwork</a></li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
