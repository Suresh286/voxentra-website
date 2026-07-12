import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/shared/heading";
import type { PageSection } from "@/content/types/pages";
import { cn } from "@/lib/utils";

type ChallengeSectionProps = {
  content: PageSection & { points: readonly string[] };
  id?: string;
  background?: "default" | "surface" | "transparent";
};

function ChallengeSection({
  content,
  id = "challenge",
  background = "surface",
}: ChallengeSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      background={background}
      className={background === "surface" ? "border-y border-neutral-divider" : undefined}
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-[var(--space-8)]">
          <Heading
            id={`${id}-heading`}
            variant="section"
            eyebrow={content.eyebrow}
            title={content.headline}
            description={content.supportingCopy}
            align="center"
            className="gap-[var(--space-3)] [&_h2]:text-balance [&_p]:text-pretty"
          />

          <ul
            className="flex flex-col gap-[var(--space-3)]"
            aria-label={content.headline}
          >
            {content.points.map((point) => (
              <li
                key={point}
                className={cn(
                  "flex items-start gap-[var(--space-3)] rounded-xl border border-neutral-border/80",
                  "bg-[var(--surface-glass-panel)] px-[var(--space-5)] py-[var(--space-4)] backdrop-blur-sm",
                )}
              >
                <span aria-hidden="true" className="mt-0.5 text-brand-accent">
                  ●
                </span>
                <span className="text-body-sm leading-relaxed text-pretty text-text-body">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export { ChallengeSection };
