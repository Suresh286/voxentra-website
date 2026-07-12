import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import type {
  IndustriesFieldLabels,
  IndustryItem,
} from "@/content/types/content";
import {
  bodyColorForTone,
  cardClassesForTone,
  marketingElevatedSecondaryCtaClasses,
  type MarketingTone,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type IndustryCardProps = {
  item: IndustryItem;
  fieldLabels: IndustriesFieldLabels;
  headingId: string;
  tone?: MarketingTone;
};

function WorkflowConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center py-[var(--space-2)]"
    >
      <div className="h-4 w-px bg-gradient-to-b from-brand-primary/30 to-brand-accent/40" />
    </div>
  );
}

function IndustryStep({
  label,
  children,
  variant = "default",
  tone = "elevated",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "employee" | "workflow" | "outcome";
  tone?: MarketingTone;
}) {
  const workflowPanel =
    tone === "elevated"
      ? "rounded-lg border border-section-elevated bg-[var(--color-section-elevated)] px-[var(--space-3)] py-[var(--space-3)]"
      : "rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-3)] py-[var(--space-3)]";

  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <p className={cn("text-label", bodyColorForTone(tone))}>{label}</p>
      <div
        className={cn(
          variant === "default" &&
            cn("text-body-sm leading-relaxed text-pretty", bodyColorForTone(tone)),
          variant === "employee" &&
            "rounded-lg border border-brand-primary/20 bg-brand-primary/5 px-[var(--space-3)] py-[var(--space-3)]",
          variant === "workflow" && workflowPanel,
          variant === "outcome" &&
            "rounded-lg border border-status-success/25 bg-status-success/5 px-[var(--space-3)] py-[var(--space-3)]",
        )}
      >
        {variant === "employee" ? (
          <Badge
            voxentraVariant="accent"
            className="h-auto w-fit whitespace-normal px-[var(--space-2)] py-[var(--space-1)] text-body-sm font-medium"
          >
            {children}
          </Badge>
        ) : (
          <p
            className={cn(
              "text-body-sm leading-relaxed text-pretty",
              variant === "outcome"
                ? cn("font-medium", titleColorForTone(tone))
                : variant === "workflow"
                  ? bodyColorForTone(tone)
                  : bodyColorForTone(tone),
            )}
          >
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

function IndustryCard({
  item,
  fieldLabels,
  headingId,
  tone = "elevated",
}: IndustryCardProps) {
  const divider =
    tone === "elevated" ? "border-section-elevated" : "border-neutral-divider/80";

  return (
    <Card className={cn("group/industry", cardClassesForTone(tone))}>
      <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <div className={cn("border-b pb-[var(--space-4)]", divider)}>
          <h3
            id={headingId}
            className={cn(
              "font-display text-heading-sm font-semibold",
              titleColorForTone(tone),
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-[var(--space-2)] text-body-sm leading-relaxed text-pretty",
              bodyColorForTone(tone),
            )}
          >
            {item.description}
          </p>
        </div>

        <ol
          className="flex flex-1 flex-col"
          aria-label={`${item.title} industry workflow`}
        >
          <li>
            <IndustryStep label={fieldLabels.challenge} variant="default" tone={tone}>
              {item.challenge}
            </IndustryStep>
          </li>

          <WorkflowConnector />

          <li>
            <IndustryStep label={fieldLabels.aiEmployee} variant="employee" tone={tone}>
              {item.aiEmployee}
            </IndustryStep>
          </li>

          <WorkflowConnector />

          <li>
            <IndustryStep
              label={fieldLabels.workflowExample}
              variant="workflow"
              tone={tone}
            >
              {item.workflowExample}
            </IndustryStep>
          </li>

          <WorkflowConnector />

          <li>
            <IndustryStep label={fieldLabels.outcome} variant="outcome" tone={tone}>
              {item.outcome}
            </IndustryStep>
          </li>
        </ol>

        <div className="mt-auto pt-[var(--space-2)]">
          <Button
            voxentraVariant="outline"
            nativeButton={false}
            render={<Link href={item.cta.href} />}
            className={cn(
              "h-10 w-full",
              tone === "elevated"
                ? marketingElevatedSecondaryCtaClasses
                : cn(
                    "border-neutral-border bg-neutral-surface/50 text-text-heading",
                    "hover:border-brand-primary/50 hover:bg-interactive-selected",
                    "focus-visible:border-brand-primary/50",
                  ),
            )}
          >
            {item.cta.label}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { IndustryCard };
