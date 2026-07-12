import { cn } from "@/lib/utils";

type WorkflowProgressProps = {
  className?: string;
};

function WorkflowProgress({ className }: WorkflowProgressProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto hidden h-px max-w-4xl lg:block",
        className,
      )}
    >
      <div className="absolute inset-0 bg-section-elevated-border" />
      <div className="workflow-progress-line absolute inset-y-0 left-[8%] right-[8%]" />
    </div>
  );
}

export { WorkflowProgress };
