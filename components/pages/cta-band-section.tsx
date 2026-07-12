import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Heading } from "@/components/shared/heading";
import type { CtaLink, PageSection } from "@/content/types/pages";
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
      background="surface"
      className="border-t border-neutral-divider"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-6)] text-center">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
          />

          <div className="flex w-full flex-col gap-[var(--space-3)] sm:w-auto sm:flex-row sm:items-center">
            <Button
              voxentraVariant="gradient"
              nativeButton={false}
              render={<Link href={content.primaryCta.href} />}
              className={cn(navCtaClasses, "h-11 w-full px-6 sm:w-auto")}
            >
              {content.primaryCta.label}
            </Button>
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
        </div>
      </Container>
    </Section>
  );
}

export { CtaBandSection };
