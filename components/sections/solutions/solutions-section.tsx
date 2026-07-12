import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SolutionCard } from "@/components/sections/solutions/solution-card";
import { Button } from "@/components/shared/button";
import { gridColumnClasses } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import { ScrollReveal, ScrollRevealStagger } from "@/components/shared/scroll-reveal";
import { homeContent } from "@/content/home";
import {
  elevatedSectionBorderClasses,
  marketingPrimaryCtaClasses,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

function toHeadingId(title: string) {
  return `solution-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function Solutions() {
  const { solutions } = homeContent;

  return (
    <Section
      id="solutions"
      aria-labelledby="solutions-heading"
      background="elevated"
      className={cn(elevatedSectionBorderClasses, "pb-[var(--space-20)] md:pb-[var(--space-24)]")}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-12)] md:gap-[var(--space-16)]">
          <ScrollReveal>
            <Heading
              id="solutions-heading"
              variant="section"
              eyebrow={solutions.eyebrow}
              titleParts={solutions.headlineParts}
              description={solutions.supportingCopy}
              align="center"
              tone="elevated"
              className="mx-auto max-w-3xl gap-[var(--space-3)] md:gap-[var(--space-4)]"
            />
          </ScrollReveal>

          <ScrollRevealStagger
            className={cn(
              "grid w-full gap-[var(--space-5)] md:gap-[var(--space-6)]",
              gridColumnClasses[3],
            )}
          >
            {solutions.items.map((item, index) => {
              const headingId = toHeadingId(item.title);

              return (
                <article
                  key={item.title}
                  aria-labelledby={headingId}
                  className="h-full"
                >
                  <SolutionCard
                    item={item}
                    fieldLabels={solutions.fieldLabels}
                    headingId={headingId}
                    variant="showcase"
                    iconIndex={index}
                  />
                </article>
              );
            })}
          </ScrollRevealStagger>

          {solutions.primaryCta ? (
            <ScrollReveal delay={120}>
              <div className="flex justify-center">
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={solutions.primaryCta.href} />}
                  className={cn(marketingPrimaryCtaClasses, "h-12 w-full sm:w-auto")}
                >
                  {solutions.primaryCta.label}
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

export { Solutions };
