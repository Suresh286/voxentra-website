import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import { ScrollReveal, ScrollRevealStagger } from "@/components/shared/scroll-reveal";
import { homeContent } from "@/content/home";
import type { HomeComparison } from "@/content/types/content";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  marketingPrimaryCtaClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

function BenefitCard({ point, tone }: { point: string; tone: "elevated" }) {
  return (
    <Card className={cardClassesForTone(tone)}>
      <CardContent className="flex h-full gap-[var(--space-4)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <Badge
          voxentraVariant="success"
          className="size-9 shrink-0 justify-center rounded-lg p-0 text-body-sm font-semibold"
          aria-hidden="true"
        >
          ✓
        </Badge>
        <p
          className={cn(
            "text-body-md font-medium leading-snug text-pretty",
            titleColorForTone(tone),
          )}
        >
          {point}
        </p>
      </CardContent>
    </Card>
  );
}

function ComparisonCard({
  comparison,
  tone,
}: {
  comparison: HomeComparison;
  tone: "elevated";
}) {
  const divider =
    tone === "elevated" ? "border-section-elevated" : "border-neutral-divider";

  return (
    <div
      className={cn(
        cardClassesForTone(tone),
        "overflow-hidden rounded-xl",
      )}
    >
      <div className="-mx-[var(--layout-gutter-mobile)] overflow-x-auto px-[var(--layout-gutter-mobile)] sm:mx-0 sm:overflow-visible sm:px-0">
        <table className="w-full min-w-[280px] border-collapse text-left">
        <caption className="sr-only">
          Comparison between {comparison.traditionalLabel} and{" "}
          {comparison.aiEmployeeLabel}
        </caption>
        <thead>
          <tr className={cn("border-b bg-[var(--color-section-elevated)]", divider)}>
            <th
              scope="col"
              className={cn(
                "px-[var(--space-4)] py-[var(--space-3)] text-label font-medium md:px-[var(--space-5)] md:py-[var(--space-4)]",
                bodyColorForTone(tone),
              )}
            >
              {comparison.traditionalLabel}
            </th>
            <th
              scope="col"
              className={cn(
                "border-l px-[var(--space-4)] py-[var(--space-3)] text-label font-medium text-brand-accent md:px-[var(--space-5)] md:py-[var(--space-4)]",
                divider,
              )}
            >
              {comparison.aiEmployeeLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr
              key={row.traditional}
              className={cn("border-b last:border-b-0", divider)}
            >
              <td
                className={cn(
                  "px-[var(--space-4)] py-[var(--space-3)] text-body-sm md:px-[var(--space-5)] md:py-[var(--space-4)]",
                  bodyColorForTone(tone),
                )}
              >
                {row.traditional}
              </td>
              <td
                className={cn(
                  "border-l px-[var(--space-4)] py-[var(--space-3)] text-body-sm font-medium md:px-[var(--space-5)] md:py-[var(--space-4)]",
                  divider,
                  titleColorForTone(tone),
                )}
              >
                {row.aiEmployee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

function AiEmployee() {
  const { aiEmployee } = homeContent;
  const tone = "elevated" as const;

  return (
    <Section
      id="what-is-an-ai-employee"
      aria-labelledby="ai-employee-heading"
      background="elevated"
      className={elevatedSectionBorderClasses}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-12)] lg:gap-[var(--space-16)]">
          <div className="grid items-start gap-[var(--space-12)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-[var(--space-16)] xl:gap-[var(--space-20)]">
            <ScrollReveal>
              <div className="flex flex-col gap-[var(--space-8)] lg:sticky lg:top-28 lg:gap-[var(--space-10)]">
                <Heading
                id="ai-employee-heading"
                variant="section"
                eyebrow={aiEmployee.eyebrow}
                title={aiEmployee.headline}
                description={aiEmployee.supportingCopy}
                tone={tone}
                className="gap-[var(--space-3)] md:gap-[var(--space-4)] [&_h2]:max-w-none [&_h2]:text-balance lg:[&_h2]:max-w-[18ch] [&_p]:max-w-none [&_p]:text-pretty xl:[&_p]:max-w-[42ch]"
              />

              <figure
                className={cn(
                  "rounded-xl border border-brand-accent/25 bg-brand-accent/5 shadow-[0_8px_30px_rgb(15_18_25_/_0.06)]",
                  "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                  "hover:border-brand-accent/35 hover:shadow-[var(--shadow-glow-accent)]",
                )}
              >
                <blockquote className="border-l-2 border-brand-accent/60 p-[var(--space-5)] pl-[var(--space-6)] md:p-[var(--space-6)] md:pl-[var(--space-7)]">
                  <p
                    className={cn(
                      "text-body-md font-medium leading-relaxed text-pretty md:text-body-lg",
                      titleColorForTone(tone),
                    )}
                  >
                    {aiEmployee.contrastLine}
                  </p>
                </blockquote>
              </figure>

              {aiEmployee.primaryCta ? (
                <div>
                  <Button
                    voxentraVariant="gradient"
                    nativeButton={false}
                    render={<Link href={aiEmployee.primaryCta.href} />}
                    className={cn(marketingPrimaryCtaClasses, "w-full sm:w-auto")}
                  >
                    {aiEmployee.primaryCta.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-[var(--duration-fast)] group-hover/cta:translate-x-0.5"
                    >
                      →
                    </span>
                  </Button>
                </div>
              ) : null}
              </div>
            </ScrollReveal>

            <ScrollRevealStagger
              className="grid grid-cols-1 gap-[var(--space-3)] md:grid-cols-2 md:gap-[var(--space-4)]"
              staggerMs={60}
            >
              {aiEmployee.points.map((point) => (
                <div key={point} role="listitem" className="h-full">
                  <BenefitCard point={point} tone={tone} />
                </div>
              ))}
            </ScrollRevealStagger>
          </div>

          <ScrollReveal delay={100}>
            <ComparisonCard comparison={aiEmployee.comparison} tone={tone} />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}

export { AiEmployee };
