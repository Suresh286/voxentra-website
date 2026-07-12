import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { SolutionCard } from "@/components/sections/solutions/solution-card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type {
  SolutionHubFieldLabels,
  SolutionHubItem,
  PageSection,
} from "@/content/types/pages";
import {
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
} from "@/lib/marketing-styles";

function toHeadingId(title: string) {
  return `solution-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

type SolutionsGridSectionProps = {
  content: PageSection & {
    items: readonly SolutionHubItem[];
    fieldLabels: SolutionHubFieldLabels;
  };
  id?: string;
  background?: SectionBackground;
};

function SolutionsGridSection({
  content,
  id = "solutions-grid",
  background = "elevated",
}: SolutionsGridSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="mx-auto max-w-3xl gap-[var(--space-3)]"
          />

          <Grid columns={3} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((item, index) => {
              const headingId = toHeadingId(item.title);

              return (
                <article key={item.title} aria-labelledby={headingId} className="h-full">
                  <SolutionCard
                    item={item}
                    fieldLabels={content.fieldLabels}
                    headingId={headingId}
                    variant={tone === "elevated" ? "showcase" : "workflow"}
                    iconIndex={index}
                  />
                </article>
              );
            })}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export { SolutionsGridSection };
