import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import type {
  AiEmployeeProfile,
  AiWorkforceFieldLabels,
} from "@/content/types/content";
import { cn } from "@/lib/utils";

type EmployeeProfileCardProps = {
  employee: AiEmployeeProfile;
  fieldLabels: AiWorkforceFieldLabels;
  headingId: string;
};

function ProfileField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <p className="text-label text-text-muted">{label}</p>
      {children}
    </div>
  );
}

function MetricValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-1)]">
      <p className="text-label text-text-muted">{label}</p>
      <p className="text-body-sm font-semibold text-text-heading">{value}</p>
    </div>
  );
}

function EmployeeProfileCard({
  employee,
  fieldLabels,
  headingId,
}: EmployeeProfileCardProps) {
  return (
    <Card
      className={cn(
        "group/profile h-full border-neutral-border/80 bg-[var(--surface-glass-panel)] shadow-[var(--shadow-inner-highlight)] backdrop-blur-sm",
        "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        "hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[var(--shadow-glow-md)]",
      )}
    >
      <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <div className="flex items-start justify-between gap-[var(--space-3)] border-b border-neutral-divider/80 pb-[var(--space-4)]">
          <div className="min-w-0">
            <h3
              id={headingId}
              className="font-display text-heading-sm font-semibold text-text-heading"
            >
              {employee.title}
            </h3>
            <p className="mt-[var(--space-2)] text-body-sm leading-relaxed text-pretty text-text-secondary">
              {employee.description}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="h-0.5 w-8 shrink-0 rounded-full bg-[image:var(--gradient-cta)] opacity-80 transition-opacity duration-[var(--duration-normal)] group-hover/profile:opacity-100"
          />
        </div>

        <div
          aria-label={fieldLabels.livePreview}
          className={cn(
            "flex flex-col gap-[var(--space-4)] rounded-lg border border-brand-accent/20 bg-brand-accent/5 p-[var(--space-4)]",
            "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
            "group-hover/profile:border-brand-accent/35 group-hover/profile:shadow-[var(--shadow-glow-accent)]",
          )}
        >
          <ProfileField label={fieldLabels.status}>
            <Badge
              voxentraVariant="success"
              className={cn(
                "w-fit gap-[var(--space-2)] px-[var(--space-3)] py-[var(--space-2)] text-body-sm font-medium",
                "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
              )}
            >
              <span
                aria-hidden="true"
                className="size-[6px] animate-pulse rounded-full bg-status-success"
              />
              {employee.statusLabel}
            </Badge>
          </ProfileField>

          <ProfileField label={fieldLabels.currentTask}>
            <p className="text-body-sm font-medium text-text-heading">
              {employee.currentTask}
            </p>
          </ProfileField>
        </div>

        <div className="grid grid-cols-1 gap-[var(--space-4)] border-y border-neutral-divider/80 py-[var(--space-4)] sm:grid-cols-3">
          <MetricValue
            label={fieldLabels.completedToday}
            value={employee.completedToday}
          />
          <MetricValue
            label={fieldLabels.responseTime}
            value={employee.responseTime}
          />
          <MetricValue
            label={fieldLabels.availability}
            value={employee.availability}
          />
        </div>

        <ProfileField label={fieldLabels.works}>
          <ul className="space-y-[var(--space-2)]" aria-label={fieldLabels.works}>
            {employee.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[var(--space-2)] text-body-sm text-text-body"
              >
                <span
                  aria-hidden="true"
                  className="mt-[var(--space-1)] text-status-success"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </ProfileField>

        <ProfileField label={fieldLabels.languages}>
          <ul
            className="flex flex-wrap gap-[var(--space-2)]"
            aria-label={fieldLabels.languages}
          >
            {employee.languages.map((language) => (
              <li key={language}>
                <Badge
                  voxentraVariant="outline"
                  className="px-[var(--space-3)] py-[var(--space-2)] text-body-sm font-normal text-text-secondary"
                >
                  {language}
                </Badge>
              </li>
            ))}
          </ul>
        </ProfileField>

        <ProfileField label={fieldLabels.integrations}>
          <ul
            className="flex flex-wrap gap-[var(--space-2)]"
            aria-label={fieldLabels.integrations}
          >
            {employee.integrations.map((integration) => (
              <li key={integration}>
                <Badge
                  voxentraVariant="outline"
                  className="px-[var(--space-2)] py-[var(--space-1)] text-body-sm font-normal text-text-muted"
                >
                  {integration}
                </Badge>
              </li>
            ))}
          </ul>
        </ProfileField>

        <ProfileField label={fieldLabels.outcome}>
          <p className="rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-3)] py-[var(--space-3)] text-body-sm leading-relaxed text-pretty text-text-body">
            {employee.outcome}
          </p>
        </ProfileField>

        <div className="mt-auto pt-[var(--space-2)]">
          <Button
            voxentraVariant="outline"
            nativeButton={false}
            render={<Link href={employee.cta.href} />}
            className={cn(
              "h-10 w-full border-neutral-border bg-neutral-surface/50 text-text-heading",
              "hover:border-brand-primary/50 hover:bg-interactive-selected",
              "focus-visible:border-brand-primary/50",
            )}
          >
            {employee.cta.label}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { EmployeeProfileCard };
