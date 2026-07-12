import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const secondaryCtaClasses = cn(
  "h-11 w-full border-neutral-border bg-neutral-surface/50 px-6 sm:w-auto",
  "text-text-heading",
  "hover:border-brand-primary/50 hover:bg-interactive-selected hover:text-text-heading",
  "focus-visible:border-brand-primary/50",
);

function HeroCapabilityIndicators() {
  const { capabilityIndicators } = homeContent.hero;

  return (
    <ul
      className="grid max-w-md grid-cols-2 gap-[var(--space-2)] sm:gap-[var(--space-3)]"
      aria-label="Platform capabilities"
    >
      {capabilityIndicators.map((item) => (
        <li key={item.label}>
          <span
            className={cn(
              "inline-flex w-full items-center justify-center rounded-full border border-neutral-border/80",
              "bg-neutral-card/50 px-3 py-2 text-center text-body-sm font-medium text-text-secondary backdrop-blur-sm",
              "sm:justify-start sm:px-3.5 sm:text-left",
            )}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  const { hero } = homeContent;

  return (
    <Section
      spacing={false}
      background="transparent"
      className="relative overflow-hidden pt-[var(--space-16)] pb-[var(--space-20)] md:pt-[var(--space-20)] md:pb-[var(--space-24)] lg:pt-[var(--space-24)] lg:pb-[var(--space-32)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-0 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-[var(--space-12)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-[var(--space-16)] xl:gap-[var(--space-20)]">
          <div className="flex max-w-xl flex-col gap-[var(--space-8)] lg:max-w-none lg:gap-[var(--space-10)]">
            <Heading
              variant="hero"
              eyebrow={site.category}
              title={hero.headline}
              description={site.heroSubheadline}
              className={cn(
                "gap-[var(--space-4)] md:gap-[var(--space-5)]",
                "[&_h1]:max-w-[11ch] [&_h1]:text-balance [&_h1]:leading-[1.08]",
                "[&_p]:max-w-[38ch] [&_p]:text-pretty",
              )}
            />

            <div className="flex flex-col gap-[var(--space-5)]">
              <div className="flex flex-col gap-[var(--space-3)] sm:flex-row sm:items-stretch">
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={hero.primaryCta.href} />}
                  className={cn(navCtaClasses, "h-11 w-full px-6 sm:w-auto")}
                >
                  {hero.primaryCta.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-[var(--duration-fast)] group-hover/cta:translate-x-0.5"
                  >
                    →
                  </span>
                </Button>

                {hero.secondaryCta ? (
                  <Button
                    voxentraVariant="outline"
                    nativeButton={false}
                    render={<Link href={hero.secondaryCta.href} />}
                    className={secondaryCtaClasses}
                  >
                    {hero.secondaryCta.label}
                  </Button>
                ) : null}
              </div>

              <p className="text-body-sm font-medium text-text-secondary">
                {hero.trustReassurance}
              </p>

              <HeroCapabilityIndicators />
            </div>
          </div>

          <div className="w-full lg:justify-self-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { Hero };
