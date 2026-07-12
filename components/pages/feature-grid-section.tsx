import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { PageFeature, PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type FeatureGridSectionProps = {
  content: PageSection & { items: readonly PageFeature[] };
  id?: string;
  columns?: 2 | 3;
  background?: "default" | "surface" | "transparent";
};

function FeatureGridSection({
  content,
  id,
  columns = 3,
  background = "transparent",
}: FeatureGridSectionProps) {
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

          <Grid columns={columns} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((item) => (
              <Card
                key={item.title}
                className={cn(
                  "h-full border-neutral-border/80 bg-[var(--surface-glass-panel)] backdrop-blur-sm",
                  "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)]",
                  "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
                )}
              >
                <CardContent className="flex h-full flex-col gap-[var(--space-3)] p-[var(--space-5)] md:p-[var(--space-6)]">
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-8 rounded-full bg-[image:var(--gradient-cta)]"
                  />
                  <h3 className="font-display text-heading-sm font-semibold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-pretty text-text-secondary">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export { FeatureGridSection };
