import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Card, CardContent } from "@/components/shared/card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type { PageSection, PreviewCard } from "@/content/types/pages";
import {
  bodyColorForTone,
  cardClassesForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type PreviewCardsSectionProps = {
  content: PageSection & { items: readonly PreviewCard[] };
  id?: string;
  columns?: 2 | 3;
  background?: SectionBackground;
};

function PreviewCardsSection({
  content,
  id,
  columns = 3,
  background = "elevated",
}: PreviewCardsSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
          <Heading
            id={id ? `${id}-heading` : undefined}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="mx-auto max-w-3xl gap-[var(--space-3)]"
          />

          <Grid columns={columns} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((item) => (
              <Card key={item.title} className={cardClassesForTone(tone)}>
                <CardContent className="flex h-full flex-col gap-[var(--space-4)] p-[var(--space-5)] md:p-[var(--space-6)]">
                  <div className="flex flex-wrap items-center gap-[var(--space-2)]">
                    <Badge voxentraVariant="outline" className="text-label">
                      {item.category}
                    </Badge>
                    <Badge voxentraVariant="accent" className="text-label">
                      {item.status}
                    </Badge>
                  </div>
                  <h3
                    className={cn(
                      "font-display text-heading-sm font-semibold",
                      titleColorForTone(tone),
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "flex-1 text-body-sm leading-relaxed text-pretty",
                      bodyColorForTone(tone),
                    )}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export { PreviewCardsSection };
