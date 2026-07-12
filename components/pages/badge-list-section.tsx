import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";

type BadgeListSectionProps = {
  content: PageSection & { items: readonly string[] };
  id?: string;
  background?: "default" | "surface" | "transparent";
  ariaLabel: string;
};

function BadgeListSection({
  content,
  id,
  background = "transparent",
  ariaLabel,
}: BadgeListSectionProps) {
  return (
    <Section id={id} background={background}>
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-8)] text-center">
          <Heading
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="gap-[var(--space-3)] [&_h2]:text-balance"
          />
          <ul className="flex flex-wrap justify-center gap-[var(--space-2)]" aria-label={ariaLabel}>
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
