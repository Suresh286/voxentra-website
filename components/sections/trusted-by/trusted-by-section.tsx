import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function TrustedBy() {
  const { trustedBy } = homeContent;

  return (
    <Section
      id="designed-for-growing-teams"
      aria-labelledby="trusted-by-heading"
      background="transparent"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-glow)] opacity-60"
      />

      <Container className="relative">
        <div className="grid items-center gap-[var(--space-10)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[var(--space-16)]">
          <Heading
            id="trusted-by-heading"
            variant="section"
            eyebrow={trustedBy.eyebrow}
            title={trustedBy.headline}
            className={cn(
              "gap-[var(--space-3)] md:gap-[var(--space-4)]",
              "[&_h2]:max-w-[16ch] [&_h2]:text-balance",
            )}
          />

          <Card
            className={cn(
              "border-neutral-border/80 bg-[var(--surface-glass-panel)] shadow-[var(--shadow-inner-highlight)] backdrop-blur-sm",
              "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
              "hover:border-brand-primary/20 hover:shadow-[var(--shadow-glow-sm)]",
            )}
          >
            <CardContent className="p-[var(--space-6)] md:p-[var(--space-8)] lg:p-[var(--space-10)]">
              <blockquote
                className="border-l-2 border-brand-accent/50 pl-[var(--space-5)]"
                cite="#designed-for-growing-teams"
              >
                <p className="text-body-lg leading-relaxed text-pretty text-text-body md:text-[1.125rem] md:leading-[1.7]">
                  {trustedBy.supportingCopy}
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

export { TrustedBy };
