"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/shared/content/site";
import { contactContent } from "../content";
import { copyText } from "../lib/copy";

type Status = "idle" | "copied" | "failed";

/** Copies the email address and announces the result politely. */
export function CopyEmailButton() {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onClick = async () => {
    const ok = await copyText(site.email);
    setStatus(ok ? "copied" : "failed");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="btn-bounce inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-pill border-2 border-ink bg-surface px-6 text-base font-semibold text-ink md:min-h-[60px] md:px-8 md:text-lg"
      >
        <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>
        {status === "copied" ? contactContent.copied : contactContent.copy}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? contactContent.copiedAnnouncement : status === "failed" ? contactContent.copyFailed : ""}
      </span>
      {status === "failed" && <span className="basis-full text-sm text-ink-soft">{contactContent.copyFailed}</span>}
    </>
  );
}
