type MarqueeProps = {
  /** Accessible label for the list, e.g. "Core skills". */
  label: string;
  items: ReadonlyArray<React.ReactNode>;
  /** Seconds per loop. */
  seconds?: number;
  reverse?: boolean;
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
export function Marquee({ label, items, seconds = 30, reverse, className, itemClassName, tilt = 0 }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : label}
      // --gap is also trailing space, so the two copies loop seamlessly. Set it on className, e.g. "[--gap:28px]".
      className={`m-0 flex shrink-0 list-none items-center gap-(--gap) p-0 pr-(--gap) ${itemClassName ?? ""}`}
    >
      {items.map((item, i) => (
        <li key={i} className="shrink-0 whitespace-nowrap">
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`relative overflow-hidden [--gap:44px] ${className ?? ""}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="flex w-max" style={{ animation: `marquee ${seconds}s linear infinite${reverse ? " reverse" : ""}` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
