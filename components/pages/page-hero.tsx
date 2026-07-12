import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import type { PageHero } from "@/content/types/pages";
import {
  marketingPrimaryCtaClasses,
  marketingSecondaryCtaClasses,
  pageHeroGlowAccentClasses,
  pageHeroGlowPrimaryClasses,
  pageHeroMeshClasses,
} from "@/lib/marketing-styles";
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
        "relative overflow-hidden pt-[var(--space-12)] pb-[var(--space-10)] sm:pt-[var(--space-16)] sm:pb-[var(--space-12)] md:pt-[var(--space-20)] md:pb-[var(--space-16)]",
        className,
      )}
    >
      <div aria-hidden="true" className={pageHeroMeshClasses} />
      <div aria-hidden="true" className={pageHeroGlowPrimaryClasses} />
      <div aria-hidden="true" className={pageHeroGlowAccentClasses} />

      <Container className="relative">
        <div className="hero-enter mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-8)] text-center">
          <div className="hero-enter-item w-full">
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
          </div>

          {(content.primaryCta ?? content.secondaryCta) ? (
            <div className="hero-enter-item flex w-full flex-col gap-[var(--space-3)] sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              {content.primaryCta ? (
                <Button
                  voxentraVariant="gradient"
                  nativeButton={false}
                  render={<Link href={content.primaryCta.href} />}
                  className={cn(marketingPrimaryCtaClasses, "w-full sm:w-auto")}
                >
                  {content.primaryCta.label}
                  <span aria-hidden="true">→</span>
                </Button>
              ) : null}
              {content.secondaryCta ? (
                <Button
                  voxentraVariant="outline"
                  nativeButton={false}
                  render={<Link href={content.secondaryCta.href} />}
                  className={cn(marketingSecondaryCtaClasses, "w-full sm:w-auto")}
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
