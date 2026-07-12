import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Heading } from "@/components/shared/heading";
import type { IntegrationCategory } from "@/content/types/pages";

type IntegrationCategorySectionProps = {
  content: IntegrationCategory;
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function IntegrationCategorySection({
  content,
  id,
  background = "transparent",
}: IntegrationCategorySectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
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
            className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
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
