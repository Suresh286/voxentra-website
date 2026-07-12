import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type ChecklistSectionProps = {
  content: PageSection & { features: readonly string[] };
  id?: string;
  background?: SectionBackground;
};

function ChecklistSection({
  content,
  id,
  background = "elevated",
}: ChecklistSectionProps) {
  const tone = sectionToneFromBackground(background);
  const itemPanel =
    tone === "elevated"
      ? "rounded-lg border border-section-elevated bg-section-elevated-card px-[var(--space-4)] py-[var(--space-3)] shadow-[0_4px_16px_rgb(15_18_25_/_0.04)]"
      : "rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-4)] py-[var(--space-3)]";

  return (
    <Section
      id={id}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-[var(--space-8)]">
          <Heading
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="gap-[var(--space-3)]"
          />
          <ul
            className="grid gap-[var(--space-3)] sm:grid-cols-2"
            aria-label={content.headline}
          >
            {content.features.map((feature) => (
              <li
                key={feature}
                className={cn(
                  "flex items-start gap-[var(--space-2)] text-body-sm",
                  itemPanel,
                  bodyColorForTone(tone),
                )}
              >
                <span aria-hidden="true" className={titleColorForTone(tone)}>
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { ChecklistSection };
