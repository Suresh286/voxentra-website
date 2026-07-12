import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

type FlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

function FlowCard({ children, className }: FlowCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-border/80 bg-[var(--surface-glass-panel)] p-[var(--space-4)]",
        "shadow-[var(--shadow-inner-highlight)] backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function FlowConnector({ active = false }: { active?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center py-[var(--space-2)]"
    >
      <div
        className={cn(
          "h-7 w-px bg-gradient-to-b",
          active
            ? "from-brand-accent/60 to-status-success/60"
            : "from-brand-primary/40 to-brand-accent/40",
        )}
      />
    </div>
  );
}

function ProcessingStep({
  label,
  state,
}: {
  label: string;
  state: "complete" | "active" | "pending";
}) {
  return (
    <li
      className={cn(
        "flex items-center gap-[var(--space-2)] rounded-lg border px-3 py-2 text-body-sm",
        state === "complete" &&
          "border-status-success/25 bg-status-success/5 text-text-body",
        state === "active" &&
          "border-brand-accent/40 bg-brand-accent/10 font-medium text-text-heading shadow-[var(--shadow-glow-accent)]",
        state === "pending" &&
          "border-neutral-border/50 bg-neutral-background/30 text-text-muted",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full text-[10px]",
          state === "complete" && "bg-status-success/20 text-status-success",
          state === "active" && "bg-brand-accent/25 text-brand-accent",
          state === "pending" && "bg-neutral-border/80",
        )}
      >
        {state === "complete" ? "✓" : state === "active" ? "●" : ""}
      </span>
      <span>{label}</span>
    </li>
  );
}

function HeroVisual() {
  const visual = homeContent.heroVisual;

  return (
    <figure className="relative w-full">
      <figcaption className="sr-only">
        Workflow demonstration: a customer requests an appointment, a sales AI
        employee listens, thinks, responds, then updates CRM, calendar, and
        sends confirmation.
      </figcaption>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[var(--space-4)] rounded-2xl bg-[image:var(--gradient-hero)] opacity-80"
      />

      <div className="relative flex flex-col rounded-2xl border border-neutral-border/60 bg-neutral-card/30 p-[var(--space-4)] backdrop-blur-sm md:p-[var(--space-5)]">
        <FlowCard className="hover:border-brand-primary/30 hover:shadow-[var(--shadow-glow-sm)]">
          <p className="text-label text-text-muted">{visual.incomingLabel}</p>
          <blockquote className="mt-[var(--space-3)] border-l-2 border-brand-primary/40 pl-[var(--space-3)]">
            <p className="text-body-sm font-medium text-text-heading">
              Customer:
            </p>
            <p className="mt-1 text-body-sm text-text-secondary italic">
              &ldquo;{visual.customerQuote}&rdquo;
            </p>
          </blockquote>
          <p className="mt-[var(--space-3)] text-body-sm text-text-muted">
            {visual.channelLabel}
          </p>
        </FlowCard>

        <FlowConnector />

        <FlowCard className="border-brand-primary/30 hover:shadow-[var(--shadow-glow-md)]">
          <div className="flex items-start justify-between gap-[var(--space-3)]">
            <div>
              <p className="text-label text-brand-accent">AI Employee</p>
              <p className="mt-1 font-display text-body-md font-semibold text-text-heading">
                {visual.aiEmployeeTitle}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-status-success/30 bg-status-success/10 px-2.5 py-1 text-body-sm font-medium text-status-success">
              <span
                className="size-1.5 animate-pulse rounded-full bg-status-success"
                aria-hidden="true"
              />
              {visual.statusLabel}
            </span>
          </div>

          <p className="mt-[var(--space-3)] text-body-sm text-text-muted">
            Task: {visual.taskLabel}
          </p>

          <ol
            className="mt-[var(--space-4)] space-y-[var(--space-2)]"
            aria-label="AI employee processing progress"
          >
            {visual.processingSteps.map((step, index) => {
              const state =
                index === 0
                  ? "complete"
                  : index === 1
                    ? "active"
                    : "pending";

              return (
                <ProcessingStep key={step} label={step} state={state} />
              );
            })}
          </ol>
        </FlowCard>

        <FlowConnector active />

        <ul className="space-y-[var(--space-2)]" aria-label="Completed actions">
          {visual.outcomes.map((outcome) => (
            <li key={outcome.label}>
              <div
                className={cn(
                  "flex items-center gap-[var(--space-3)] rounded-lg border border-neutral-border/80",
                  "bg-neutral-card/60 px-[var(--space-3)] py-2.5 backdrop-blur-sm",
                  "transition-[border-color,box-shadow] duration-[var(--duration-fast)]",
                  "hover:border-status-success/30 hover:shadow-[var(--shadow-glow-accent)]",
                )}
              >
                <span
                  aria-hidden="true"
                  className="flex size-6 shrink-0 items-center justify-center rounded-md bg-status-success/15 text-body-sm font-semibold text-status-success"
                >
                  ✓
                </span>
                <span className="text-body-sm font-medium text-text-heading">
                  {outcome.label}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[var(--space-5)] border-t border-neutral-divider pt-[var(--space-4)]">
          <p className="text-label text-text-muted">{visual.integrationsLabel}</p>
          <ul className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-2)]">
            {visual.integrations.map((name) => (
              <li key={name}>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border border-neutral-border/80",
                    "bg-neutral-background/50 px-3 py-1.5 text-body-sm text-text-muted backdrop-blur-sm",
                    "transition-[color,border-color,background-color] duration-[var(--duration-fast)]",
                    "hover:border-brand-primary/25 hover:bg-interactive-selected hover:text-text-secondary",
                  )}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}

export { HeroVisual };
