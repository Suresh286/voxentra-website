import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import type { CtaLink, PageSection } from "@/content/types/pages";
import {
  marketingElevatedSecondaryCtaClasses,
  marketingPrimaryCtaClasses,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type CtaBandSectionProps = {
  content: PageSection & {
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
  id?: string;
};

function CtaBandSection({ content, id = "cta" }: CtaBandSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      spacing={false}
      background="transparent"
      className="py-[var(--space-16)] md:py-[var(--space-20)]"
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

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-6)] text-center">
            <Heading
              id={`${id}-heading`}
              variant="section"
              eyebrow={content.eyebrow}
              title={content.headline}
              description={content.supportingCopy}
              align="center"
              className={cn(
                "gap-[var(--space-3)]",
                "[&_h2]:text-primary-foreground [&_p]:max-w-none [&_p]:text-primary-foreground/90",
                "[&_p:first-child]:border-primary-foreground/30 [&_p:first-child]:bg-primary-foreground/10 [&_p:first-child]:text-primary-foreground",
              )}
            />

            <div className="flex w-full flex-col gap-[var(--space-3)] sm:w-auto sm:flex-row sm:items-center">
              <Button
                voxentraVariant="outline"
                nativeButton={false}
                render={<Link href={content.primaryCta.href} />}
                className={cn(
                  marketingPrimaryCtaClasses,
                  "w-full border-primary-foreground/30 bg-primary-foreground text-brand-primary sm:w-auto",
                  "hover:bg-primary-foreground/90 hover:opacity-100",
                )}
              >
                {content.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Button>
              {content.secondaryCta ? (
                <Button
                  voxentraVariant="outline"
                  nativeButton={false}
                  render={<Link href={content.secondaryCta.href} />}
                  className={cn(
                    marketingElevatedSecondaryCtaClasses,
                    "w-full border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground sm:w-auto",
                    "hover:border-primary-foreground/50 hover:bg-primary-foreground/20 hover:text-primary-foreground",
                  )}
                >
                  {content.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { CtaBandSection };
