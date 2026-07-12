import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import type { PageSection, PageStep } from "@/content/types/pages";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type StepsSectionProps = {
  content: PageSection & { steps: readonly PageStep[] };
  id?: string;
  background?: SectionBackground;
};

function StepsSection({
  content,
  id,
  background = "elevated",
}: StepsSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
          <Heading
            id={id ? `${id}-heading` : undefined}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="mx-auto max-w-3xl gap-[var(--space-3)]"
          />

          <ol
            className="grid gap-[var(--space-4)] sm:grid-cols-2 md:grid-cols-3 md:gap-[var(--space-5)]"
            aria-label={content.headline}
          >
            {content.steps.map((step) => (
              <li key={step.step}>
                <Card className={cardClassesForTone(tone)}>
                  <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-5)] md:p-[var(--space-6)]">
                    <span
                      aria-hidden="true"
                      className="font-display text-display-md font-bold text-gradient-brand"
                    >
                      {step.step}
                    </span>
                    <h3
                      className={cn(
                        "font-display text-heading-sm font-semibold",
                        titleColorForTone(tone),
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-body-sm leading-relaxed text-pretty",
                        bodyColorForTone(tone),
                      )}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

export { StepsSection };
