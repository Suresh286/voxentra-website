import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { HeroSpecialtyRotator } from "@/components/sections/hero/hero-specialty-rotator";
import { Button } from "@/components/shared/button";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const secondaryCtaClasses = cn(
  "h-12 w-full rounded-full border-neutral-border/80 bg-transparent px-8 sm:w-auto",
  "text-text-heading",
  "hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:text-text-heading",
  "focus-visible:border-brand-primary/50",
);

function HeroStats() {
  const { heroStats } = homeContent.hero;

  return (
    <ul
      className="grid w-full max-w-3xl grid-cols-2 gap-[var(--space-4)] sm:gap-[var(--space-6)] sm:grid-cols-4 md:gap-[var(--space-8)]"
      aria-label="Platform capabilities"
    >
      {heroStats.map((stat) => (
        <li key={stat.label} className="text-center">
          <p className="font-display text-heading-md font-bold text-gradient-brand sm:text-display-md">
            {stat.value}
          </p>
          <p className="mt-[var(--space-2)] text-label text-text-muted">
            {stat.label}
          </p>
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
      className="relative min-h-[calc(100dvh-var(--layout-navbar-height))] overflow-hidden pb-[var(--space-8)] sm:pb-[var(--space-12)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero-mesh)]"
      />
      <div
        aria-hidden="true"
        className="hero-mesh-drift-a pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-mesh-drift-b pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <Container className="relative flex min-h-[calc(100dvh-var(--layout-navbar-height)-var(--space-8))] flex-col items-center justify-center pt-[var(--space-8)] sm:min-h-[calc(100dvh-var(--layout-navbar-height)-var(--space-12))] sm:pt-[var(--space-12)]">
        <div className="hero-enter flex w-full max-w-4xl flex-col items-center gap-[var(--space-6)] text-center sm:gap-[var(--space-8)] md:gap-[var(--space-10)]">
          {hero.eyebrow ? (
            <p className="hero-enter-item inline-flex max-w-full items-center gap-[var(--space-2)] rounded-full border border-brand-primary/30 bg-brand-primary/10 px-[var(--space-3)] py-[var(--space-2)] text-center text-label text-brand-primary sm:px-[var(--space-4)]">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-status-success shadow-[0_0_8px_rgb(52_211_153_/_0.8)]"
              />
              {hero.eyebrow}
            </p>
          ) : null}

          <div className="hero-enter-item flex w-full flex-col gap-[var(--space-2)] px-[var(--space-1)] sm:gap-[var(--space-3)]">
            <h1 className="text-display-xl text-balance font-bold leading-[1.05] tracking-tight text-text-heading">
              <span className="block">{hero.headlineLine1}</span>
              <span className="block text-gradient-brand">{hero.headlineLine2}</span>
            </h1>
            <HeroSpecialtyRotator />
          </div>

          <p className="hero-enter-item max-w-2xl px-[var(--space-1)] text-body-md text-pretty text-text-secondary sm:text-body-lg">
            {site.description}
          </p>

          <div className="hero-enter-item flex w-full flex-col items-center justify-center gap-[var(--space-3)] sm:flex-row">
            {hero.primaryCta ? (
              <Button
                voxentraVariant="gradient"
                nativeButton={false}
                render={<Link href={hero.primaryCta.href} />}
                className={cn(
                  navCtaClasses,
                  "h-12 w-full rounded-full px-8 shadow-[var(--shadow-glow-md)] sm:w-auto",
                )}
              >
                {hero.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Button>
            ) : null}

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

          <div className="hero-enter-item w-full">
            <HeroStats />
          </div>
        </div>

        <a
          href="#stats-banner"
          className={cn(
            "mt-[var(--space-12)] inline-flex flex-col items-center gap-[var(--space-3)] text-body-sm text-text-muted",
            "transition-colors duration-[var(--duration-fast)] hover:text-text-secondary",
            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-interactive-focus",
          )}
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-6 items-start justify-center rounded-full border border-neutral-border/80 pt-1.5"
          >
            <span className="block h-2 w-1 rounded-full bg-brand-primary/80" />
          </span>
          Scroll Down
        </a>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-background to-transparent"
      />
    </Section>
  );
}

export { Hero };
