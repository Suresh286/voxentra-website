import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navCtaClasses } from "@/components/layout/nav-styles";
import { Section } from "@/components/layout/section";
import { IndustryCard } from "@/components/sections/industries/industry-card";
import { Button } from "@/components/shared/button";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function toHeadingId(title: string) {
  return `industry-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function Industries() {
  const { industries } = homeContent;

  return (
    <Section
      id="industries"
      aria-labelledby="industries-heading"
      background="transparent"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-glow)] opacity-50"
      />

      <Container className="relative">
        <div className="flex flex-col gap-[var(--space-12)] md:gap-[var(--space-16)]">
          <Heading
            id="industries-heading"
            variant="section"
            eyebrow={industries.eyebrow}
            title={industries.headline}
            description={industries.supportingCopy}
            align="center"
            className={cn(
              "mx-auto max-w-3xl gap-[var(--space-3)] md:gap-[var(--space-4)]",
              "[&_h2]:text-balance [&_p]:text-pretty",
            )}
          />

          <Grid
            columns={3}
            className="gap-[var(--space-4)] md:gap-[var(--space-5)]"
          >
            {industries.items.map((item) => {
              const headingId = toHeadingId(item.title);

              return (
                <article
                  key={item.title}
                  aria-labelledby={headingId}
                  className="h-full"
                >
                  <IndustryCard
                    item={item}
                    fieldLabels={industries.fieldLabels}
                    headingId={headingId}
                  />
                </article>
              );
            })}
          </Grid>

          {industries.primaryCta ? (
            <div className="flex justify-center">
              <Button
                voxentraVariant="gradient"
                nativeButton={false}
                render={<Link href={industries.primaryCta.href} />}
                className={cn(navCtaClasses, "h-11 w-full px-6 sm:w-auto")}
              >
                {industries.primaryCta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-[var(--duration-fast)] group-hover/cta:translate-x-0.5"
                >
                  →
                </span>
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

export { Industries };
