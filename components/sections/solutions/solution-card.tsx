import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import type {
  SolutionItem,
  SolutionsFieldLabels,
} from "@/content/types/content";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  item: SolutionItem;
  fieldLabels: SolutionsFieldLabels;
  headingId: string;
};

function WorkflowConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center py-[var(--space-2)]"
    >
      <div className="h-5 w-px bg-gradient-to-b from-brand-primary/30 to-brand-accent/40" />
    </div>
  );
}

function WorkflowStep({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "employee" | "outcome";
}) {
  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <p className="text-label text-text-muted">{label}</p>
      <div
        className={cn(
          variant === "default" && "text-body-sm text-pretty text-text-secondary",
          variant === "employee" &&
            "rounded-lg border border-brand-primary/20 bg-brand-primary/5 px-[var(--space-3)] py-[var(--space-3)]",
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
                ? "font-medium text-text-heading"
                : "text-text-secondary",
            )}
          >
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

function SolutionCard({ item, fieldLabels, headingId }: SolutionCardProps) {
  return (
    <Card
      className={cn(
        "group/solution h-full border-neutral-border/80 bg-[var(--surface-glass-panel)] shadow-[var(--shadow-inner-highlight)] backdrop-blur-sm",
        "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        "hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[var(--shadow-glow-md)]",
      )}
    >
      <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <div className="border-b border-neutral-divider/80 pb-[var(--space-4)]">
          <h3
            id={headingId}
            className="font-display text-heading-sm font-semibold text-text-heading"
          >
            {item.title}
          </h3>
          <p className="mt-[var(--space-2)] text-body-sm leading-relaxed text-pretty text-text-secondary">
            {item.description}
          </p>
        </div>

        <ol
          className="flex flex-1 flex-col"
          aria-label={`${item.title} workflow`}
        >
          <li>
            <WorkflowStep label={fieldLabels.problem} variant="default">
              {item.problem}
            </WorkflowStep>
          </li>

          <WorkflowConnector />

          <li>
            <WorkflowStep label={fieldLabels.aiEmployee} variant="employee">
              {item.aiEmployee}
            </WorkflowStep>
          </li>

          <WorkflowConnector />

          <li>
            <WorkflowStep label={fieldLabels.outcome} variant="outcome">
              {item.outcome}
            </WorkflowStep>
          </li>
        </ol>

        <div className="mt-auto pt-[var(--space-2)]">
          <Button
            voxentraVariant="outline"
            nativeButton={false}
            render={<Link href={item.cta.href} />}
            className={cn(
              "h-10 w-full border-neutral-border bg-neutral-surface/50 text-text-heading",
              "hover:border-brand-primary/50 hover:bg-interactive-selected",
              "focus-visible:border-brand-primary/50",
            )}
          >
            {item.cta.label}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { SolutionCard };
