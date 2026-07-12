import { cn } from "@/lib/utils";
import type { HeadlinePart } from "@/content/types/content";
import { headingClassesForTone } from "@/lib/marketing-styles";

export type HeadingVariant = "hero" | "section" | "small";

const titleClasses: Record<HeadingVariant, string> = {
  hero: "text-display-xl text-balance",
  section: "text-heading-lg text-balance sm:text-[length:var(--text-heading-lg)]",
  small: "text-heading-sm text-balance",
};

const subtitleClasses: Record<HeadingVariant, string> = {
  hero: "text-body-md sm:text-body-lg text-text-secondary max-w-[var(--layout-max-content)] text-pretty",
  section: "text-body-md text-text-secondary max-w-[var(--layout-max-content)] text-pretty",
  small: "text-body-sm text-text-secondary text-pretty",
};

const descriptionClasses: Record<HeadingVariant, string> = {
  hero: "text-body-md sm:text-body-lg text-text-muted max-w-[var(--layout-max-content)] text-pretty",
  section: "text-body-md text-text-muted max-w-[var(--layout-max-content)] text-pretty",
  small: "text-body-sm text-text-muted text-pretty",
};

const defaultTitleTag: Record<HeadingVariant, "h1" | "h2" | "h3"> = {
  hero: "h1",
  section: "h2",
  small: "h3",
};

type HeadingProps = {
  variant?: HeadingVariant;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  titleParts?: readonly HeadlinePart[];
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "elevated";
  titleAs?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
};

function renderTitle(title: React.ReactNode, titleParts?: readonly HeadlinePart[]) {
  if (titleParts?.length) {
    return titleParts.map((part, index) =>
      "accent" in part && part.accent ? (
        <span key={index} className="text-gradient-brand">
          {part.text}
        </span>
      ) : (
        <span key={index}>{part.text}</span>
      ),
    );
  }

  return title;
}

function Heading({
  variant = "section",
  eyebrow,
  title,
  titleParts,
  subtitle,
  description,
  align = "left",
  tone = "dark",
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
        headingClassesForTone(tone),
        className,
      )}
    >
      {eyebrow ? (
        <p className="inline-flex w-fit items-center rounded-full border border-brand-primary/30 bg-brand-primary/10 px-[var(--space-3)] py-[var(--space-1)] text-label text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className={titleClasses[variant]}>
        {renderTitle(title, titleParts)}
      </TitleTag>
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
