import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import type { LegalPageContent } from "@/content/types/pages";
import {
  bodyColorForTone,
  elevatedSectionBorderClasses,
  marketingElevatedSecondaryCtaClasses,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type LegalPageProps = {
  content: LegalPageContent;
};

function LegalPage({ content }: LegalPageProps) {
  const tone = "elevated" as const;

  return (
    <>
      <Section
        spacing={false}
        background="transparent"
        className="pt-[var(--space-16)] pb-[var(--space-8)] md:pt-[var(--space-20)]"
      >
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-6)] text-center">
            {content.hero.eyebrow ? (
              <Badge voxentraVariant="accent" className="mx-auto w-fit">
                {content.hero.eyebrow}
              </Badge>
            ) : null}
            <h1 className="font-display text-heading-lg font-semibold text-balance text-text-heading md:text-heading-xl">
              {content.hero.headline}
            </h1>
            <p className="text-body-md leading-relaxed text-pretty text-text-secondary">
              {content.hero.supportingCopy}
            </p>
          </div>
        </Container>
      </Section>

      <Section
        id="legal-content"
        aria-labelledby="legal-document-heading"
        background="elevated"
        className={elevatedSectionBorderClasses}
      >
        <Container>
          <article className="mx-auto max-w-3xl">
            <h2 id="legal-document-heading" className="sr-only">
              {content.hero.headline}
            </h2>

            <div className="flex flex-col gap-[var(--space-10)] md:gap-[var(--space-12)]">
              {content.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="flex flex-col gap-[var(--space-4)]"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className={cn(
                      "font-display text-heading-sm font-semibold",
                      titleColorForTone(tone),
                    )}
                  >
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={cn(
                        "text-body-sm leading-relaxed text-pretty",
                        bodyColorForTone(tone),
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems ? (
                    <ul className="flex flex-col gap-[var(--space-2)] pl-[var(--space-1)]">
                      {section.listItems.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "flex items-start gap-[var(--space-2)] text-body-sm leading-relaxed",
                            bodyColorForTone(tone),
                          )}
                        >
                          <span aria-hidden="true" className="mt-1.5 text-brand-accent">
                            ●
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <footer className="flex flex-col gap-[var(--space-6)] border-t border-section-elevated pt-[var(--space-8)]">
                <div className="flex flex-col gap-[var(--space-2)]">
                  <p className={cn("text-label", bodyColorForTone(tone))}>
                    {content.lastUpdated.label}
                  </p>
                  <p className={cn("text-body-sm", bodyColorForTone(tone))}>
                    {content.lastUpdated.date}
                  </p>
                </div>

                <div className="flex flex-col gap-[var(--space-3)]">
                  <h2
                    className={cn(
                      "font-display text-heading-sm font-semibold",
                      titleColorForTone(tone),
                    )}
                  >
                    {content.contact.headline}
                  </h2>
                  {content.contact.supportingCopy ? (
                    <p
                      className={cn(
                        "text-body-sm leading-relaxed text-pretty",
                        bodyColorForTone(tone),
                      )}
                    >
                      {content.contact.supportingCopy}
                    </p>
                  ) : null}
                  <Button
                    voxentraVariant="outline"
                    nativeButton={false}
                    render={<Link href={`mailto:${content.contact.email}`} />}
                    className={cn("h-10 w-fit px-6", marketingElevatedSecondaryCtaClasses)}
                  >
                    {content.contact.emailLabel}
                  </Button>
                </div>
              </footer>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}

export { LegalPage };
