type MarqueeProps = {
  /** Accessible label for the list, e.g. "Core skills". */
  label: string;
  items: ReadonlyArray<React.ReactNode>;
  /** Seconds per loop. */
  seconds?: number;
  reverse?: boolean;
  /** Gap between items in px (also used as trailing space so the loop is seamless). */
  gap?: number;
  className?: string;
  /** Typography for the items. */
  itemClassName?: string;
  /** Rotation of the band in degrees. */
  tilt?: number;
};

/**
 * An endless band of items. The list is real content once; the second copy that
 * makes the loop seamless is aria-hidden. Under reduced motion it simply stops.
 */
export function Marquee({ label, items, seconds = 30, reverse, gap = 44, className, itemClassName, tilt = 0 }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : label}
      className={`m-0 flex shrink-0 list-none items-center p-0 ${itemClassName ?? ""}`}
      style={{ gap, paddingRight: gap }}
    >
      {items.map((item, i) => (
        <li key={i} className="shrink-0 whitespace-nowrap">
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="flex w-max" style={{ animation: `marquee ${seconds}s linear infinite${reverse ? " reverse" : ""}` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
