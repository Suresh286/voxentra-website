import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { PagePricingTier, PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type PricingTiersSectionProps = {
  content: PageSection & { items: readonly PagePricingTier[] };
  id?: string;
};

function PricingTiersSection({ content, id = "pricing-tiers" }: PricingTiersSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background="transparent"
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="mx-auto max-w-3xl gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
          />

          <Grid columns={3} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  "flex h-full flex-col border-neutral-border/80 bg-[var(--surface-glass-panel)] backdrop-blur-sm",
                  "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)]",
                  "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
                )}
              >
                <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-6)]">
                  <div>
                    <h3 className="font-display text-heading-sm font-semibold text-text-heading">
                      {tier.name}
                    </h3>
                    <p className="mt-[var(--space-2)] text-body-sm text-pretty text-text-secondary">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="flex flex-1 flex-col gap-[var(--space-2)]" aria-label={`${tier.name} includes`}>
                    {tier.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-[var(--space-2)] text-body-sm text-text-body"
                      >
                        <span aria-hidden="true" className="text-status-success">
                          ✓
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Button
                    voxentraVariant="outline"
                    nativeButton={false}
                    render={<Link href={tier.cta.href} />}
                    className={cn(
                      "h-10 w-full border-neutral-border bg-neutral-surface/50",
                      "hover:border-brand-primary/50 hover:bg-interactive-selected",
                    )}
                  >
                    {tier.cta.label}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export { PricingTiersSection };
