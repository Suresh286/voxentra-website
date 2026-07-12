import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { Card, CardContent } from "@/components/shared/card";
import type {
  AiEmployeeProfile,
  AiWorkforceFieldLabels,
} from "@/content/types/content";
import {
  bodyColorForTone,
  cardClassesForTone,
  marketingElevatedSecondaryCtaClasses,
  type MarketingTone,
  titleColorForTone,
} from "@/lib/marketing-styles";
import { cn } from "@/lib/utils";

type EmployeeProfileCardProps = {
  employee: AiEmployeeProfile;
  fieldLabels: AiWorkforceFieldLabels;
  headingId: string;
  tone?: MarketingTone;
};

function ProfileField({
  label,
  children,
  tone = "elevated",
}: {
  label: string;
  children: React.ReactNode;
  tone?: MarketingTone;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <p className={cn("text-label", bodyColorForTone(tone))}>{label}</p>
      {children}
    </div>
  );
}

function MetricValue({
  label,
  value,
  tone = "elevated",
}: {
  label: string;
  value: string;
  tone?: MarketingTone;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-1)]">
      <p className={cn("text-label", bodyColorForTone(tone))}>{label}</p>
      <p className={cn("text-body-sm font-semibold", titleColorForTone(tone))}>
        {value}
      </p>
    </div>
  );
}

function EmployeeProfileCard({
  employee,
  fieldLabels,
  headingId,
  tone = "elevated",
}: EmployeeProfileCardProps) {
  const divider =
    tone === "elevated" ? "border-section-elevated" : "border-neutral-divider/80";
  const outcomePanel =
    tone === "elevated"
      ? "rounded-lg border border-section-elevated bg-[var(--color-section-elevated)] px-[var(--space-3)] py-[var(--space-3)]"
      : "rounded-lg border border-neutral-border/80 bg-neutral-card/50 px-[var(--space-3)] py-[var(--space-3)]";

  return (
    <Card className={cn("group/profile", cardClassesForTone(tone))}>
      <CardContent className="flex h-full flex-col gap-[var(--space-5)] p-[var(--space-5)] md:p-[var(--space-6)]">
        <div
          className={cn(
            "flex items-start justify-between gap-[var(--space-3)] border-b pb-[var(--space-4)]",
            divider,
          )}
        >
          <div className="min-w-0">
            <h3
              id={headingId}
              className={cn(
                "font-display text-heading-sm font-semibold",
                titleColorForTone(tone),
              )}
            >
              {employee.title}
            </h3>
            <p
              className={cn(
                "mt-[var(--space-2)] text-body-sm leading-relaxed text-pretty",
                bodyColorForTone(tone),
              )}
            >
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
          <ProfileField label={fieldLabels.status} tone={tone}>
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

          <ProfileField label={fieldLabels.currentTask} tone={tone}>
            <p className={cn("text-body-sm font-medium", titleColorForTone(tone))}>
              {employee.currentTask}
            </p>
          </ProfileField>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-[var(--space-4)] border-y py-[var(--space-4)] sm:grid-cols-3",
            divider,
          )}
        >
          <MetricValue
            label={fieldLabels.completedToday}
            value={employee.completedToday}
            tone={tone}
          />
          <MetricValue
            label={fieldLabels.responseTime}
            value={employee.responseTime}
            tone={tone}
          />
          <MetricValue
            label={fieldLabels.availability}
            value={employee.availability}
            tone={tone}
          />
        </div>

        <ProfileField label={fieldLabels.works} tone={tone}>
          <ul className="space-y-[var(--space-2)]" aria-label={fieldLabels.works}>
            {employee.responsibilities.map((item) => (
              <li
                key={item}
                className={cn(
                  "flex items-start gap-[var(--space-2)] text-body-sm",
                  bodyColorForTone(tone),
                )}
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

        <ProfileField label={fieldLabels.languages} tone={tone}>
          <ul
            className="flex flex-wrap gap-[var(--space-2)]"
            aria-label={fieldLabels.languages}
          >
            {employee.languages.map((language) => (
              <li key={language}>
                <Badge
                  voxentraVariant="outline"
                  className={cn(
                    "px-[var(--space-3)] py-[var(--space-2)] text-body-sm font-normal",
                    bodyColorForTone(tone),
                  )}
                >
                  {language}
                </Badge>
              </li>
            ))}
          </ul>
        </ProfileField>

        <ProfileField label={fieldLabels.integrations} tone={tone}>
          <ul
            className="flex flex-wrap gap-[var(--space-2)]"
            aria-label={fieldLabels.integrations}
          >
            {employee.integrations.map((integration) => (
              <li key={integration}>
                <Badge
                  voxentraVariant="outline"
                  className={cn(
                    "px-[var(--space-2)] py-[var(--space-1)] text-body-sm font-normal",
                    bodyColorForTone(tone),
                  )}
                >
                  {integration}
                </Badge>
              </li>
            ))}
          </ul>
        </ProfileField>

        <ProfileField label={fieldLabels.outcome} tone={tone}>
          <p
            className={cn(
              outcomePanel,
              "text-body-sm leading-relaxed text-pretty",
              bodyColorForTone(tone),
            )}
          >
            {employee.outcome}
          </p>
        </ProfileField>

        <div className="mt-auto pt-[var(--space-2)]">
          <Button
            voxentraVariant="outline"
            nativeButton={false}
            render={<Link href={employee.cta.href} />}
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
            {employee.cta.label}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { EmployeeProfileCard };
