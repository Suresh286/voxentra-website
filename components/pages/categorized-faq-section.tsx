import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { FaqCategory, PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  elevatedPanelClassesForTone,
  elevatedSectionBorderClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
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
  const tone = "elevated" as const;

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background="elevated"
      className={elevatedSectionBorderClasses}
    >
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
              tone={tone}
              className="gap-[var(--space-3)]"
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
                className={cn(
                  "font-display text-heading-sm font-semibold",
                  titleColorForTone(tone),
                )}
              >
                {category.title}
              </h2>

              <dl className="flex flex-col gap-[var(--space-4)]">
                {category.items.map((item) => (
                  <div key={item.question} className={elevatedPanelClassesForTone(tone)}>
                    <dt
                      className={cn(
                        "font-display text-body-md font-semibold",
                        titleColorForTone(tone),
                      )}
                    >
                      {item.question}
                    </dt>
                    <dd
                      className={cn(
                        "mt-[var(--space-3)] text-body-sm leading-relaxed text-pretty",
                        bodyColorForTone(tone),
                      )}
                    >
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
