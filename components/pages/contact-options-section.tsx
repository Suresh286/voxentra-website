import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { CtaLink, PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type InquirySectionProps = {
  content: PageSection & { points: readonly string[]; cta: CtaLink };
  id: string;
};

function InquirySection({ content, id }: InquirySectionProps) {
  return (
    <div className="h-full">
      <Card
        className={cn(
          "h-full border-neutral-border/80 bg-[var(--surface-glass-panel)] backdrop-blur-sm",
          "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
          "hover:border-brand-primary/20 hover:shadow-[var(--shadow-glow-sm)]",
        )}
      >
        <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-6)] md:p-[var(--space-8)]">
          <Heading
            id={`${id}-heading`}
            variant="small"
            title={content.headline}
            description={content.supportingCopy}
            className="gap-[var(--space-2)] [&_h3]:text-heading-sm"
          />

          <ul className="flex flex-1 flex-col gap-[var(--space-2)]" aria-label={content.headline}>
            {content.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-[var(--space-2)] text-body-sm text-text-body"
              >
                <span aria-hidden="true" className="text-status-success">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Button
            voxentraVariant="outline"
            nativeButton={false}
            render={<Link href={content.cta.href} />}
            className={cn(
              "h-10 w-full border-neutral-border bg-neutral-surface/50",
              "hover:border-brand-primary/50 hover:bg-interactive-selected",
            )}
          >
            {content.cta.label}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

type ContactOptionsSectionProps = {
  options: PageSection & { items: readonly { title: string; description: string; cta: CtaLink }[] };
  demoRequest: PageSection & { points: readonly string[]; cta: CtaLink };
  businessInquiry: PageSection & { points: readonly string[]; cta: CtaLink };
};

function ContactOptionsSection({
  options,
  demoRequest,
  businessInquiry,
}: ContactOptionsSectionProps) {
  return (
    <>
      <Section
        id="contact-options"
        aria-labelledby="contact-options-heading"
        background="surface"
        className="border-y border-neutral-divider"
      >
        <Container>
          <div className="flex flex-col gap-[var(--space-10)]">
            <Heading
              id="contact-options-heading"
              variant="section"
              eyebrow={options.eyebrow}
              title={options.headline}
              description={options.supportingCopy}
              align="center"
              className="mx-auto max-w-3xl gap-[var(--space-3)] [&_h2]:text-balance"
            />

            <Grid columns={3} className="gap-[var(--space-4)]">
              {options.items.map((item) => (
                <Card
                  key={item.title}
                  className="h-full border-neutral-border/80 bg-neutral-card/70"
                >
                  <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-5)]">
                    <h3 className="font-display text-heading-sm font-semibold text-text-heading">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-body-sm text-text-secondary">{item.description}</p>
                    <Button
                      voxentraVariant="outline"
                      nativeButton={false}
                      render={<Link href={item.cta.href} />}
                      className="h-10 w-full"
                    >
                      {item.cta.label}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <Section id="inquiries" background="transparent">
        <Container>
          <Grid columns={2} className="gap-[var(--space-6)]">
            <InquirySection content={demoRequest} id="demo-request" />
            <InquirySection content={businessInquiry} id="business-inquiry" />
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export { ContactOptionsSection };
