import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import type { PageSection, PageWorkflowStep } from "@/content/types/pages";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type WorkflowExampleSectionProps = {
  content: PageSection & { steps: readonly PageWorkflowStep[] };
  id?: string;
  background?: SectionBackground;
};

function WorkflowConnector() {
  return (
    <div aria-hidden="true" className="flex justify-center py-[var(--space-2)]">
      <div className="h-5 w-px bg-gradient-to-b from-brand-primary/30 to-brand-accent/40" />
    </div>
  );
}

function WorkflowExampleSection({
  content,
  id = "workflow",
  background = "elevated",
}: WorkflowExampleSectionProps) {
  const tone = sectionToneFromBackground(background);
  const workflowPanel =
    tone === "elevated"
      ? "rounded-lg border border-section-elevated bg-[var(--color-section-elevated)] px-[var(--space-4)] py-[var(--space-3)]"
      : "rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-4)] py-[var(--space-3)]";

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-[var(--space-10)]">
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

          <Card className={cardClassesForTone(tone)}>
            <CardContent className="p-[var(--space-6)] md:p-[var(--space-8)]">
              <ol className="flex flex-col" aria-label={content.headline}>
                {content.steps.map((step, index) => (
                  <li key={step.label}>
                    <div className="flex flex-col gap-[var(--space-2)]">
                      <p className={cn("text-label", bodyColorForTone(tone))}>
                        {step.label}
                      </p>
                      <div
                        className={cn(
                          index === 1
                            ? "rounded-lg border border-brand-primary/20 bg-brand-primary/5 px-[var(--space-4)] py-[var(--space-3)]"
                            : index === content.steps.length - 1
                              ? "rounded-lg border border-status-success/25 bg-status-success/5 px-[var(--space-4)] py-[var(--space-3)]"
                              : workflowPanel,
                        )}
                      >
                        {index === 1 ? (
                          <Badge
                            voxentraVariant="accent"
                            className="h-auto w-fit whitespace-normal px-[var(--space-2)] py-[var(--space-1)] text-body-sm font-medium"
                          >
                            {step.description}
                          </Badge>
                        ) : (
                          <p
                            className={cn(
                              "text-body-sm leading-relaxed text-pretty",
                              index === content.steps.length - 1
                                ? cn("font-medium", titleColorForTone(tone))
                                : bodyColorForTone(tone),
                            )}
                          >
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {index < content.steps.length - 1 ? <WorkflowConnector /> : null}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export { WorkflowExampleSection };
