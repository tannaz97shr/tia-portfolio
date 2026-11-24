"use client";

import { useCallback, useEffect, useRef } from "react";

type DrawerProps = {
  open: boolean;
  /** Called on Escape, backdrop click or a close button. `returnFocus=false` when a link inside navigated away. */
  onClose: (returnFocus: boolean) => void;
  labelledBy: string;
  id?: string;
  /** Element to send focus back to when the drawer closes. */
  returnFocusTo?: React.RefObject<HTMLElement | null>;
  className?: string;
  children: React.ReactNode;
};

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * The one drawer primitive: a modal <dialog> (background is inert), with Escape,
 * a focus trap, focus return and scroll lock.
 */
export function Drawer({ open, onClose, labelledBy, id, returnFocusTo, className, children }: DrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const shouldReturnFocus = useRef(true);

  const close = useCallback(
    (returnFocus: boolean) => {
      shouldReturnFocus.current = returnFocus;
      onClose(returnFocus);
    },
    [onClose],
  );

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const root = document.documentElement;
    if (open && !dialog.open) {
      shouldReturnFocus.current = true;
      dialog.showModal();
      root.style.overflow = "hidden";
      dialog.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onDialogClose = () => {
      document.documentElement.style.overflow = "";
      if (shouldReturnFocus.current) returnFocusTo?.current?.focus();
    };
    dialog.addEventListener("close", onDialogClose);
    return () => {
      dialog.removeEventListener("close", onDialogClose);
      document.documentElement.style.overflow = "";
    };
  }, [returnFocusTo]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const items = [...(ref.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])];
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <dialog
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      className={`drawer ${className ?? ""}`}
      onCancel={(e) => {
        e.preventDefault();
        close(true);
      }}
      onClick={(e) => {
        if (e.target === ref.current) close(true); // backdrop
      }}
      onKeyDown={onKeyDown}
    >
      {children}
    </dialog>
  );
}
