import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { gridColumnClasses } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import { ScrollReveal, ScrollRevealStagger } from "@/components/shared/scroll-reveal";
import { WorkflowProgress } from "@/components/shared/workflow-progress";
import { homeContent } from "@/content/home";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  marketingPrimaryCtaClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

function HowItWorks() {
  const { howItWorks } = homeContent;
  const tone = "elevated" as const;

  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      background="elevated"
      className={elevatedSectionBorderClasses}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-12)] md:gap-[var(--space-16)]">
          <ScrollReveal>
            <Heading
              id="how-it-works-heading"
              variant="section"
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.headline}
              description={howItWorks.supportingCopy}
              align="center"
              tone={tone}
              className="mx-auto max-w-3xl gap-[var(--space-3)] md:gap-[var(--space-4)]"
            />
          </ScrollReveal>

          <WorkflowProgress />

          <ScrollRevealStagger
            className={cn(
              "grid w-full gap-[var(--space-4)] md:gap-[var(--space-5)]",
              gridColumnClasses[3],
            )}
          >
            {howItWorks.steps.map((step) => (
              <Card key={step.step} className={cardClassesForTone(tone)}>
                <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-6)]">
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
            ))}
          </ScrollRevealStagger>

          <ScrollReveal delay={80}>
            <p
              className={cn(
                "mx-auto max-w-2xl text-center text-body-md text-pretty",
                bodyColorForTone(tone),
              )}
            >
              {howItWorks.supportingLine}
            </p>
          </ScrollReveal>

          {howItWorks.primaryCta ? (
            <ScrollReveal delay={120}>
              <div className="flex justify-center">
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={howItWorks.primaryCta.href} />}
                  className={cn(marketingPrimaryCtaClasses, "w-full sm:w-auto")}
                >
                  {howItWorks.primaryCta.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-[var(--duration-fast)] group-hover/cta:translate-x-0.5"
                  >
                    →
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

export { HowItWorks };
