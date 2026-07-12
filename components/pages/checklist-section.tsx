import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";

type ChecklistSectionProps = {
  content: PageSection & { features: readonly string[] };
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function ChecklistSection({
  content,
  id,
  background = "surface",
}: ChecklistSectionProps) {
  return (
    <Section
      id={id}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-[var(--space-8)]">
          <Heading
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="gap-[var(--space-3)] [&_h2]:text-balance"
          />
          <ul className="grid gap-[var(--space-3)] sm:grid-cols-2" aria-label={content.headline}>
            {content.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-[var(--space-2)] rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-4)] py-[var(--space-3)] text-body-sm text-text-body"
              >
                <span aria-hidden="true" className="text-status-success">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { ChecklistSection };
