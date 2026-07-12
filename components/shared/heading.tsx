import { cn } from "@/lib/utils";

export type HeadingVariant = "hero" | "section" | "small";

const titleClasses: Record<HeadingVariant, string> = {
  hero: "text-display-xl md:text-display-lg",
  section: "text-heading-lg",
  small: "text-heading-sm",
};

const subtitleClasses: Record<HeadingVariant, string> = {
  hero: "text-body-lg text-text-secondary max-w-[var(--layout-max-content)]",
  section: "text-body-md text-text-secondary max-w-[var(--layout-max-content)]",
  small: "text-body-sm text-text-secondary",
};

const descriptionClasses: Record<HeadingVariant, string> = {
  hero: "text-body-lg text-text-muted max-w-[var(--layout-max-content)]",
  section: "text-body-md text-text-muted max-w-[var(--layout-max-content)]",
  small: "text-body-sm text-text-muted",
};

const defaultTitleTag: Record<HeadingVariant, "h1" | "h2" | "h3"> = {
  hero: "h1",
  section: "h2",
  small: "h3",
};

type HeadingProps = {
  variant?: HeadingVariant;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
};

function Heading({
  variant = "section",
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  titleAs,
  className,
  id,
}: HeadingProps) {
  const TitleTag = titleAs ?? defaultTitleTag[variant];

  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-[var(--space-3)]",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <p className="text-label">{eyebrow}</p> : null}
      <TitleTag className={titleClasses[variant]}>{title}</TitleTag>
      {subtitle ? (
        <p className={subtitleClasses[variant]}>{subtitle}</p>
      ) : null}
      {description ? (
        <p className={descriptionClasses[variant]}>{description}</p>
      ) : null}
    </div>
  );
}

export { Heading };
