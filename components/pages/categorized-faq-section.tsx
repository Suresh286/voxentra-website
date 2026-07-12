import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { FaqCategory, PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type CategorizedFaqSectionProps = {
  intro?: PageSection;
  categories: readonly FaqCategory[];
  id?: string;
};

function CategorizedFaqSection({
  intro,
  categories,
  id = "faq",
}: CategorizedFaqSectionProps) {
  return (
    <Section id={id} aria-labelledby={`${id}-heading`} background="transparent">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-12)]">
          {intro ? (
            <Heading
              id={`${id}-heading`}
              variant="section"
              eyebrow={intro.eyebrow}
              title={intro.headline}
              description={intro.supportingCopy}
              align="center"
              className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
            />
          ) : null}

          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="flex flex-col gap-[var(--space-5)]"
            >
              <h2
                id={`${category.id}-heading`}
                className="font-display text-heading-sm font-semibold text-text-heading"
              >
                {category.title}
              </h2>

              <dl className="flex flex-col gap-[var(--space-4)]">
                {category.items.map((item) => (
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
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { CategorizedFaqSection };
