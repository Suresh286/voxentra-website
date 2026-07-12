import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  elevatedPanelClassesForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type ChallengeSectionProps = {
  content: PageSection & { points: readonly string[] };
  id?: string;
  background?: SectionBackground;
};

function ChallengeSection({
  content,
  id = "challenge",
  background = "elevated",
}: ChallengeSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-8)]">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="gap-[var(--space-3)]"
          />

          <ul
            className="flex flex-col gap-[var(--space-3)]"
            aria-label={content.headline}
          >
            {content.points.map((point) => (
              <li
                key={point}
                className={cn(
                  "flex items-start gap-[var(--space-3)]",
                  elevatedPanelClassesForTone(tone),
                )}
              >
                <span aria-hidden="true" className="mt-0.5 text-brand-accent">
                  ●
                </span>
                <span
                  className={cn(
                    "text-body-sm leading-relaxed text-pretty",
                    bodyColorForTone(tone),
                  )}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { ChallengeSection };
