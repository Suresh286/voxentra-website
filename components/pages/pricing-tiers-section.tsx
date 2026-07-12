import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { PagePricingTier, PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  marketingElevatedSecondaryCtaClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type PricingTiersSectionProps = {
  content: PageSection & { items: readonly PagePricingTier[] };
  id?: string;
};

function PricingTiersSection({ content, id = "pricing-tiers" }: PricingTiersSectionProps) {
  const tone = "elevated" as const;

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background="elevated"
      className={elevatedSectionBorderClasses}
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
            tone={tone}
            className="mx-auto max-w-3xl gap-[var(--space-3)]"
          />

          <Grid columns={3} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((tier) => (
              <Card key={tier.name} className={cn("flex h-full flex-col", cardClassesForTone(tone))}>
                <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-6)]">
                  <div>
                    <h3
                      className={cn(
                        "font-display text-heading-sm font-semibold",
                        titleColorForTone(tone),
                      )}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-[var(--space-2)] text-body-sm text-pretty",
                        bodyColorForTone(tone),
                      )}
                    >
                      {tier.description}
                    </p>
                  </div>

                  <ul
                    className="flex flex-1 flex-col gap-[var(--space-2)]"
                    aria-label={`${tier.name} includes`}
                  >
                    {tier.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={cn(
                          "flex items-start gap-[var(--space-2)] text-body-sm",
                          bodyColorForTone(tone),
                        )}
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
                    className={cn("h-10 w-full", marketingElevatedSecondaryCtaClasses)}
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
