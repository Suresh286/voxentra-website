import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import type { PageHero } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type PageHeroSectionProps = {
  content: PageHero;
  id?: string;
  className?: string;
};

function PageHeroSection({ content, id, className }: PageHeroSectionProps) {
  return (
    <Section
      id={id}
      spacing={false}
      background="transparent"
      className={cn(
        "relative overflow-hidden pt-[var(--space-16)] pb-[var(--space-12)] md:pt-[var(--space-20)] md:pb-[var(--space-16)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-8)] text-center">
          <Heading
            variant="hero"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className={cn(
              "gap-[var(--space-4)]",
              "[&_h1]:text-balance [&_p]:text-pretty",
            )}
          />

          {(content.primaryCta ?? content.secondaryCta) ? (
            <div className="flex w-full flex-col gap-[var(--space-3)] sm:w-auto sm:flex-row sm:items-center">
              {content.primaryCta ? (
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={content.primaryCta.href} />}
                  className={cn(navCtaClasses, "h-11 w-full px-6 sm:w-auto")}
                >
                  {content.primaryCta.label}
                </Button>
              ) : null}
              {content.secondaryCta ? (
                <Button
                  voxentraVariant="outline"
                  nativeButton={false}
                  render={<Link href={content.secondaryCta.href} />}
                  className={cn(
                    "h-11 w-full border-neutral-border bg-neutral-surface/50 px-6 sm:w-auto",
                    "text-text-heading hover:border-brand-primary/50 hover:bg-interactive-selected",
                  )}
                >
                  {content.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

export { PageHeroSection };
