import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import {
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
} from "@/lib/marketing-styles";

type BadgeListSectionProps = {
  content: PageSection & { items: readonly string[] };
  id?: string;
  background?: SectionBackground;
  ariaLabel: string;
};

function BadgeListSection({
  content,
  id,
  background = "elevated",
  ariaLabel,
}: BadgeListSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-8)] text-center">
          <Heading
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
            aria-label={ariaLabel}
          >
            {content.items.map((item) => (
              <li key={item}>
                <Badge
                  voxentraVariant="outline"
                  className="px-[var(--space-3)] py-[var(--space-2)] text-body-sm"
                >
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { BadgeListSection };
