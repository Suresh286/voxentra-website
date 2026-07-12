import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { IndustryCard } from "@/components/sections/industries/industry-card";
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
  return `industry-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function Industries() {
  const { industries } = homeContent;
  const tone = "elevated" as const;

  return (
    <Section
      id="industries"
      aria-labelledby="industries-heading"
      background="elevated"
      className={elevatedSectionBorderClasses}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-12)] md:gap-[var(--space-16)]">
          <ScrollReveal>
            <Heading
              id="industries-heading"
              variant="section"
              eyebrow={industries.eyebrow}
              title={industries.headline}
              description={industries.supportingCopy}
              align="center"
              tone={tone}
              className="mx-auto max-w-3xl gap-[var(--space-3)] md:gap-[var(--space-4)]"
            />
          </ScrollReveal>

          <ScrollRevealStagger
            className={cn(
              "grid w-full gap-[var(--space-4)] md:gap-[var(--space-5)]",
              gridColumnClasses[3],
            )}
            staggerMs={90}
          >
            {industries.items.map((item) => {
              const headingId = toHeadingId(item.title);

              return (
                <article
                  key={item.title}
                  aria-labelledby={headingId}
                  className="h-full"
                >
                  <IndustryCard
                    item={item}
                    fieldLabels={industries.fieldLabels}
                    headingId={headingId}
                    tone={tone}
                  />
                </article>
              );
            })}
          </ScrollRevealStagger>

          {industries.primaryCta ? (
            <ScrollReveal delay={120}>
              <div className="flex justify-center">
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={industries.primaryCta.href} />}
                  className={cn(marketingPrimaryCtaClasses, "w-full sm:w-auto")}
                >
                  {industries.primaryCta.label}
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

export { Industries };
