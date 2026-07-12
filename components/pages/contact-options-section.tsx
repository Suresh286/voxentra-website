import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { CtaLink, PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  marketingElevatedSecondaryCtaClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type InquirySectionProps = {
  content: PageSection & { points: readonly string[]; cta: CtaLink };
  id: string;
  tone: "elevated";
};

function InquirySection({ content, id, tone }: InquirySectionProps) {
  return (
    <div className="h-full">
      <Card className={cardClassesForTone(tone)}>
        <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-6)] md:p-[var(--space-8)]">
          <Heading
            id={`${id}-heading`}
            variant="small"
            title={content.headline}
            description={content.supportingCopy}
            tone={tone}
            className="gap-[var(--space-2)] [&_h3]:text-heading-sm"
          />

          <ul className="flex flex-1 flex-col gap-[var(--space-2)]" aria-label={content.headline}>
            {content.points.map((point) => (
              <li
                key={point}
                className={cn(
                  "flex items-start gap-[var(--space-2)] text-body-sm",
                  bodyColorForTone(tone),
                )}
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
            className={cn("h-10 w-full", marketingElevatedSecondaryCtaClasses)}
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
  const tone = "elevated" as const;

  return (
    <>
      <Section
        id="contact-options"
        aria-labelledby="contact-options-heading"
        background="elevated"
        className={elevatedSectionBorderClasses}
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
              tone={tone}
              className="mx-auto max-w-3xl gap-[var(--space-3)]"
            />

            <Grid columns={3} className="gap-[var(--space-4)]">
              {options.items.map((item) => (
                <Card key={item.title} className={cardClassesForTone(tone)}>
                  <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-5)]">
                    <h3
                      className={cn(
                        "font-display text-heading-sm font-semibold",
                        titleColorForTone(tone),
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className={cn("flex-1 text-body-sm", bodyColorForTone(tone))}>
                      {item.description}
                    </p>
                    <Button
                      voxentraVariant="outline"
                      nativeButton={false}
                      render={<Link href={item.cta.href} />}
                      className={cn("h-10 w-full", marketingElevatedSecondaryCtaClasses)}
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

      <Section
        id="inquiries"
        background="elevated"
        className={elevatedSectionBorderClasses}
      >
        <Container>
          <Grid columns={2} className="gap-[var(--space-6)]">
            <InquirySection content={demoRequest} id="demo-request" tone={tone} />
            <InquirySection content={businessInquiry} id="business-inquiry" tone={tone} />
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export { ContactOptionsSection };
