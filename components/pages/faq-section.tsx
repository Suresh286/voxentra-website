import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageFaqItem, PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  content: PageSection & { items: readonly PageFaqItem[] };
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function FaqSection({
  content,
  id = "faq",
  background = "transparent",
}: FaqSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-10)]">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
          />

          <dl className="flex flex-col gap-[var(--space-4)]">
            {content.items.map((item) => (
              <div
                key={item.question}
                className={cn(
                  "rounded-xl border border-neutral-border/80 bg-[var(--surface-glass-panel)] p-[var(--space-5)] backdrop-blur-sm",
                  "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
                  "hover:border-brand-primary/20 hover:shadow-[var(--shadow-glow-sm)]",
                )}
              >
                <dt className="font-display text-body-md font-semibold text-text-heading">
                  {item.question}
                </dt>
                <dd className="mt-[var(--space-3)] text-body-sm leading-relaxed text-pretty text-text-secondary">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

export { FaqSection };
