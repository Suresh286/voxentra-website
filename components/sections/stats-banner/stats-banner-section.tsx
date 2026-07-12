import { Clock, Globe, Plug, ShieldCheck, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ScrollRevealStagger } from "@/components/shared/scroll-reveal";
import { homeContent } from "@/content/home";
import type { HeroStat } from "@/content/types/content";
import { cn } from "@/lib/utils";

const iconMap: Record<NonNullable<HeroStat["icon"]>, LucideIcon> = {
  clock: Clock,
  globe: Globe,
  plug: Plug,
  shield: ShieldCheck,
};

function StatsBanner() {
  const { heroStats } = homeContent.hero;

  return (
    <Section
      id="stats-banner"
      spacing={false}
      background="elevated"
      className="border-y border-section-elevated py-[var(--space-16)] md:py-[var(--space-20)]"
    >
      <Container>
        <ScrollRevealStagger
          as="ul"
          inlineItems
          aria-label="Platform capabilities"
          className="grid grid-cols-2 gap-[var(--space-6)] sm:gap-[var(--space-8)] md:grid-cols-4 md:gap-[var(--space-6)]"
          staggerMs={70}
        >
          {heroStats.map((stat) => {
            const Icon = stat.icon ? iconMap[stat.icon] : Clock;

            return (
              <li
                key={stat.label}
                className="flex flex-col items-center gap-[var(--space-4)] text-center"
              >
                <span
                  className={cn(
                    "inline-flex size-14 items-center justify-center rounded-xl",
                    "bg-[image:var(--gradient-cta)] text-primary-foreground shadow-[var(--shadow-glow-sm)]",
                  )}
                >
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-heading-md font-bold text-section-elevated-heading sm:text-heading-lg">
                    {stat.value}
                  </p>
                  <p className="mt-[var(--space-1)] text-body-sm text-section-elevated-muted">
                    {stat.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ScrollRevealStagger>
      </Container>
    </Section>
  );
}

export { StatsBanner };
