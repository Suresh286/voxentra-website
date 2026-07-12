import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SolutionCard } from "@/components/sections/solutions/solution-card";
import { Grid } from "@/components/shared/grid";
import { Heading } from "@/components/shared/heading";
import type {
  SolutionHubFieldLabels,
  SolutionHubItem,
  PageSection,
} from "@/content/types/pages";
import { cn } from "@/lib/utils";

function toHeadingId(title: string) {
  return `solution-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

type SolutionsGridSectionProps = {
  content: PageSection & {
    items: readonly SolutionHubItem[];
    fieldLabels: SolutionHubFieldLabels;
  };
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function SolutionsGridSection({
  content,
  id = "solutions-grid",
  background = "surface",
}: SolutionsGridSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
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
            className={cn(
              "mx-auto max-w-3xl gap-[var(--space-3)]",
              "[&_h2]:text-balance [&_p]:text-pretty",
            )}
          />

          <Grid columns={3} className="gap-[var(--space-4)] md:gap-[var(--space-5)]">
            {content.items.map((item) => {
              const headingId = toHeadingId(item.title);

              return (
                <article key={item.title} aria-labelledby={headingId} className="h-full">
                  <SolutionCard
                    item={item}
                    fieldLabels={content.fieldLabels}
                    headingId={headingId}
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
