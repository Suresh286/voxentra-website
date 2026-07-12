import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import type { PageSection, PageStep } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type StepsSectionProps = {
  content: PageSection & { steps: readonly PageStep[] };
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function StepsSection({
  content,
  id,
  background = "surface",
}: StepsSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
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
            className="mx-auto max-w-3xl gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
          />

          <ol
            className="grid gap-[var(--space-4)] md:grid-cols-3 md:gap-[var(--space-5)]"
            aria-label={content.headline}
          >
            {content.steps.map((step) => (
              <li key={step.step}>
                <Card
                  className={cn(
                    "h-full border-neutral-border/80 bg-neutral-card/70 backdrop-blur-sm",
                    "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)]",
                    "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
                  )}
                >
                  <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-5)] md:p-[var(--space-6)]">
                    <span className="font-mono text-label font-semibold text-brand-accent">
                      {step.step}
                    </span>
                    <h3 className="font-display text-heading-sm font-semibold text-text-heading">
                      {step.title}
                    </h3>
                    <p className="text-body-sm leading-relaxed text-pretty text-text-secondary">
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
