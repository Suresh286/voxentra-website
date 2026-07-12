import { Container } from "@/components/layout/container";
import { Section, type SectionBackground } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageFaqItem, PageSection } from "@/content/types/pages";
import {
  bodyColorForTone,
  elevatedPanelClassesForTone,
  elevatedSectionBorderClasses,
  sectionToneFromBackground,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  content: PageSection & { items: readonly PageFaqItem[] };
  id?: string;
  background?: SectionBackground;
};

function FaqSection({
  content,
  id = "faq",
  background = "elevated",
}: FaqSectionProps) {
  const tone = sectionToneFromBackground(background);

  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "elevated" ? elevatedSectionBorderClasses : undefined}
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
            tone={tone}
            className="gap-[var(--space-3)]"
          />

          <dl className="flex flex-col gap-[var(--space-4)]">
            {content.items.map((item) => (
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
        </div>
      </Container>
    </Section>
  );
}

export { FaqSection };
