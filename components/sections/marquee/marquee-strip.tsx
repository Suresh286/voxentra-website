import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: readonly string[];
  className?: string;
};

function MarqueeStrip({ items, className }: MarqueeStripProps) {
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-neutral-divider bg-neutral-surface/80 py-[var(--space-4)] backdrop-blur-sm",
        className,
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-surface to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-[var(--space-8)] px-[var(--space-4)]">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center gap-[var(--space-3)] whitespace-nowrap text-body-sm font-medium text-text-secondary"
          >
            <span className="text-brand-accent" aria-hidden="true">
              ★
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export { MarqueeStrip };
