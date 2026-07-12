import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type NarrativeSectionProps = {
  content: PageSection;
  id?: string;
  background?: "default" | "surface" | "transparent";
  align?: "center" | "left";
};

function NarrativeSection({
  content,
  id,
  background = "transparent",
  align = "center",
}: NarrativeSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
    >
      <Container>
        <div
          className={cn(
            "mx-auto flex max-w-3xl flex-col gap-[var(--space-4)]",
            align === "center" ? "text-center" : "text-left",
          )}
        >
          <Heading
            id={id ? `${id}-heading` : undefined}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align={align}
            className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty [&_p]:leading-relaxed"
          />
        </div>
      </Container>
    </Section>
  );
}

export { NarrativeSection };
