import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function FinalCta() {
  const { finalCta } = homeContent;

  return (
    <Section
      id="book-demo"
      aria-labelledby="final-cta-heading"
      spacing={false}
      background="transparent"
      className="py-[var(--space-20)] md:py-[var(--space-24)]"
    >
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-brand-primary/25 px-[var(--space-6)] py-[var(--space-12)] md:px-[var(--space-12)] md:py-[var(--space-16)]",
            "bg-[image:var(--gradient-cta)] shadow-[var(--shadow-glow-md)]",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255_/_0.12),transparent_50%)]"
          />

          <ScrollReveal>
            <Heading
              id="final-cta-heading"
              variant="section"
              eyebrow={finalCta.eyebrow}
              title={finalCta.headline}
              description={finalCta.supportingCopy}
              align="center"
              className={cn(
                "relative mx-auto max-w-2xl gap-[var(--space-4)]",
                "[&_h2]:text-primary-foreground [&_p]:max-w-none [&_p]:text-primary-foreground/90",
                "[&_p:first-child]:border-primary-foreground/30 [&_p:first-child]:bg-primary-foreground/10 [&_p:first-child]:text-primary-foreground",
              )}
            />
          </ScrollReveal>

          {finalCta.primaryCta ? (
            <ScrollReveal delay={100}>
              <div className="relative mt-[var(--space-8)] flex justify-center">
              <Button
                voxentraVariant="outline"
                nativeButton={false}
                render={<Link href={finalCta.primaryCta.href} />}
                className={cn(
                  navCtaClasses,
                  "h-11 w-full max-w-sm border-primary-foreground/30 bg-primary-foreground/10 px-6 text-primary-foreground sm:w-auto",
                  "hover:border-primary-foreground/50 hover:bg-primary-foreground/20 hover:text-primary-foreground",
                )}
              >
                {finalCta.primaryCta.label}
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

export { FinalCta };
