import { cn } from "@/lib/utils";

export type GridColumns = 2 | 3 | 4;

const columnClasses: Record<GridColumns, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export { columnClasses as gridColumnClasses };

type GridProps = React.ComponentProps<"div"> & {
  columns?: GridColumns;
};

function Grid({ className, columns = 3, ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid w-full gap-[var(--space-6)] md:gap-[var(--space-8)]",
        columnClasses[columns],
        className,
      )}
      {...props}
    />
  );
}

export { Grid };
