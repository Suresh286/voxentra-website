import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Heading } from "@/components/shared/heading";
import type { IntegrationCategory } from "@/content/types/pages";
import {
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
} from "@/lib/marketing-styles";

type IntegrationCategorySectionProps = {
  content: IntegrationCategory;
  id?: string;
  background?: SectionBackground;
};

function IntegrationCategorySection({
  content,
  id,
  background = "elevated",
}: IntegrationCategorySectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-8)]">
          <Heading
            id={id ? `${id}-heading` : undefined}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            tone={tone}
            className="gap-[var(--space-3)]"
          />

          <ul
            className="flex flex-wrap justify-center gap-[var(--space-2)]"
            aria-label={`${content.headline} platforms`}
          >
            {content.platforms.map((platform) => (
              <li key={platform}>
                <Badge
                  voxentraVariant="outline"
                  className="px-[var(--space-3)] py-[var(--space-2)] text-body-sm"
                >
                  {platform}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { IntegrationCategorySection };
