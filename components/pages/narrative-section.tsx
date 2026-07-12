import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import {
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type NarrativeSectionProps = {
  content: PageSection;
  id?: string;
  background?: SectionBackground;
  align?: "center" | "left";
};

function NarrativeSection({
  content,
  id,
  background = "elevated",
  align = "center",
}: NarrativeSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
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
            tone={tone}
            className="gap-[var(--space-3)] [&_p]:leading-relaxed"
          />
        </div>
      </Container>
    </Section>
  );
}

export { NarrativeSection };
