import { cn } from "@/lib/utils";

export type SectionBackground = "default" | "surface" | "transparent";

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-neutral-background",
  surface: "bg-neutral-surface",
  transparent: "bg-transparent",
};

type SectionProps = React.ComponentProps<"section"> & {
  background?: SectionBackground;
  spacing?: boolean;
};

function Section({
  className,
  background = "transparent",
  spacing = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        backgroundClasses[background],
        spacing &&
          "py-[var(--space-16)] md:py-[var(--space-20)] lg:py-[var(--space-24)]",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
