import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import { homeContent } from "@/content/home";
import type { HomeComparison } from "@/content/types/content";
import { cn } from "@/lib/utils";

function BenefitCard({ point }: { point: string }) {
  return (
    <Card
      className={cn(
        "h-full border-neutral-border/80 bg-neutral-card/70 backdrop-blur-sm",
        "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
      )}
    >
      <CardContent className="flex h-full gap-[var(--space-4)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <Badge
          voxentraVariant="success"
          className="size-9 shrink-0 justify-center rounded-lg p-0 text-body-sm font-semibold"
          aria-hidden="true"
        >
          ✓
        </Badge>
        <p className="text-body-md font-medium leading-snug text-pretty text-text-heading">
          {point}
        </p>
      </CardContent>
    </Card>
  );
}

function ComparisonCard({ comparison }: { comparison: HomeComparison }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-neutral-border/80 bg-neutral-card/60 shadow-[var(--shadow-inner-highlight)] backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        "hover:border-brand-primary/20 hover:shadow-[var(--shadow-glow-sm)]",
      )}
    >
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Comparison between {comparison.traditionalLabel} and{" "}
          {comparison.aiEmployeeLabel}
        </caption>
        <thead>
          <tr className="border-b border-neutral-divider bg-neutral-surface/50">
            <th
              scope="col"
              className="px-[var(--space-4)] py-[var(--space-3)] text-label font-medium text-text-muted md:px-[var(--space-5)] md:py-[var(--space-4)]"
            >
              {comparison.traditionalLabel}
            </th>
            <th
              scope="col"
              className="border-l border-neutral-divider px-[var(--space-4)] py-[var(--space-3)] text-label font-medium text-brand-accent md:px-[var(--space-5)] md:py-[var(--space-4)]"
            >
              {comparison.aiEmployeeLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr
              key={row.traditional}
              className="border-b border-neutral-divider/80 last:border-b-0"
            >
              <td className="px-[var(--space-4)] py-[var(--space-3)] text-body-sm text-text-secondary md:px-[var(--space-5)] md:py-[var(--space-4)]">
                {row.traditional}
              </td>
              <td className="border-l border-neutral-divider/80 px-[var(--space-4)] py-[var(--space-3)] text-body-sm font-medium text-text-heading md:px-[var(--space-5)] md:py-[var(--space-4)]">
                {row.aiEmployee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AiEmployee() {
  const { aiEmployee } = homeContent;

  return (
    <Section
      id="what-is-an-ai-employee"
      aria-labelledby="ai-employee-heading"
      background="surface"
      className="border-y border-neutral-divider"
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-12)] lg:gap-[var(--space-16)]">
          <div className="grid items-start gap-[var(--space-12)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-[var(--space-16)] xl:gap-[var(--space-20)]">
            <div className="flex flex-col gap-[var(--space-8)] lg:sticky lg:top-28 lg:gap-[var(--space-10)]">
              <Heading
                id="ai-employee-heading"
                variant="section"
                eyebrow={aiEmployee.eyebrow}
                title={aiEmployee.headline}
                description={aiEmployee.supportingCopy}
                className={cn(
                  "gap-[var(--space-3)] md:gap-[var(--space-4)]",
                  "[&_h2]:max-w-[18ch] [&_h2]:text-balance",
                  "[&_p]:max-w-[42ch] [&_p]:text-pretty",
                )}
              />

              <figure
                className={cn(
                  "rounded-xl border border-brand-accent/25 bg-brand-accent/5 shadow-[var(--shadow-inner-highlight)]",
                  "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                  "hover:border-brand-accent/35 hover:shadow-[var(--shadow-glow-accent)]",
                )}
              >
                <blockquote className="border-l-2 border-brand-accent/60 p-[var(--space-5)] pl-[var(--space-6)] md:p-[var(--space-6)] md:pl-[var(--space-7)]">
                  <p className="text-body-md font-medium leading-relaxed text-pretty text-text-heading md:text-body-lg">
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
                    className={cn(navCtaClasses, "h-11 w-full px-6 sm:w-auto")}
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

            <Grid
              columns={2}
              role="list"
              aria-label="Benefits of hiring AI employees"
              className="gap-[var(--space-3)] md:gap-[var(--space-4)]"
            >
              {aiEmployee.points.map((point) => (
                <div key={point} role="listitem" className="h-full">
                  <BenefitCard point={point} />
                </div>
              ))}
            </Grid>
          </div>

          <ComparisonCard comparison={aiEmployee.comparison} />
        </div>
      </Container>
    </Section>
  );
}

export { AiEmployee };
