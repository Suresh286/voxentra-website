import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { Heading } from "@/components/shared/heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homeContent } from "@/content/home";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

function TrustedBy() {
  const { trustedBy } = homeContent;
  const tone = "elevated" as const;

  return (
    <Section
      id="designed-for-growing-teams"
      aria-labelledby="trusted-by-heading"
      background="elevated"
      className={elevatedSectionBorderClasses}
    >
      <Container>
        <div className="grid items-center gap-[var(--space-10)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[var(--space-16)]">
          <ScrollReveal>
            <Heading
              id="trusted-by-heading"
              variant="section"
              eyebrow={trustedBy.eyebrow}
              title={trustedBy.headline}
              tone={tone}
              className="gap-[var(--space-3)] md:gap-[var(--space-4)] [&_h2]:max-w-none [&_h2]:text-balance lg:[&_h2]:max-w-[16ch]"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className={cardClassesForTone(tone)}>
              <CardContent className="p-[var(--space-6)] md:p-[var(--space-8)] lg:p-[var(--space-10)]">
                <blockquote
                  className="border-l-2 border-brand-accent/50 pl-[var(--space-5)]"
                  cite="#designed-for-growing-teams"
                >
                  <p
                    className={cn(
                      "text-body-lg leading-relaxed text-pretty md:text-[1.125rem] md:leading-[1.7]",
                      bodyColorForTone(tone),
                    )}
                  >
                    {trustedBy.supportingCopy}
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}

export { TrustedBy };
