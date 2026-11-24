type BrowserBarProps = {
  /** Tailwind background class for the strip. */
  tone: string;
  /** Shown in the little address pill (featured card). */
  address?: string;
  /** Traffic-light dots in coral/gold/green instead of white. */
  colourful?: boolean;
  className?: string;
};

/** The pretend browser window strip on top of project cards. Purely decorative. */
export function BrowserBar({ tone, address, colourful, className }: BrowserBarProps) {
  const dots = colourful ? ["bg-coral", "bg-gold", "bg-success"] : ["bg-surface", "bg-surface", "bg-surface"];
  return (
    <div aria-hidden="true" className={`flex items-center gap-1.5 px-4 py-2.5 md:gap-2 md:px-[22px] md:py-3.5 ${tone} ${className ?? ""}`}>
      {dots.map((d, i) => (
        <span key={i} className={`size-[9px] rounded-pill md:size-3 ${d}`} />
      ))}
      {address && (
        <span className="ml-2 rounded-pill bg-surface px-2.5 py-[3px] font-mono text-[11px] md:ml-3 md:px-3.5 md:py-1 md:text-xs">{address}</span>
      )}
    </div>
  );
}
