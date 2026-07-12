import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function TrustBar() {
  const { trustBar } = homeContent;
  const lastItemIndex = trustBar.items.length - 1;

  return (
    <Section
      id="platform-fundamentals"
      aria-labelledby="trust-bar-heading"
      background="surface"
      spacing={false}
      className="border-y border-neutral-divider py-[var(--space-16)] md:py-[var(--space-20)]"
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
          <Heading
            id="trust-bar-heading"
            variant="section"
            eyebrow={trustBar.eyebrow}
            title={trustBar.headline}
            description={trustBar.supportingCopy}
            className="max-w-3xl gap-[var(--space-3)] md:gap-[var(--space-4)] [&_p]:text-pretty"
          />

          <Grid
            columns={3}
            role="list"
            aria-label="Platform reliability standards"
            className="grid-cols-1 gap-[var(--space-3)] sm:grid-cols-2 md:gap-[var(--space-4)] lg:grid-cols-5"
          >
            {trustBar.items.map((item, index) => (
              <div
                key={item.label}
                role="listitem"
                className={cn(
                  "h-full",
                  index === lastItemIndex &&
                    "sm:col-span-2 sm:max-w-sm sm:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-stretch",
                )}
              >
                <Card
                  className={cn(
                    "h-full border-neutral-border/80 bg-neutral-card/60 backdrop-blur-sm",
                    "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                    "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
                  )}
                >
                  <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-4)] md:p-[var(--space-5)]">
                    <span
                      aria-hidden="true"
                      className="h-0.5 w-8 rounded-full bg-[image:var(--gradient-cta)]"
                    />
                    <Badge
                      voxentraVariant="outline"
                      className="h-auto w-fit max-w-full whitespace-normal px-3 py-1.5 text-body-sm font-medium leading-snug text-text-heading"
                    >
                      {item.label}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export { TrustBar };
