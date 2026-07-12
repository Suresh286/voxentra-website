import { cn } from "@/lib/utils";

export type ContainerSize =
  | "marketing"
  | "content"
  | "docs"
  | "dashboard"
  | "full";

const sizeClasses: Record<ContainerSize, string> = {
  marketing: "max-w-[var(--layout-max-marketing)]",
  content: "max-w-[var(--layout-max-content)]",
  docs: "max-w-[var(--layout-max-docs)]",
  dashboard: "max-w-[var(--layout-max-dashboard)]",
  full: "max-w-none",
};

type ContainerProps = React.ComponentProps<"div"> & {
  size?: ContainerSize;
  padding?: boolean;
};

function Container({
  className,
  size = "marketing",
  padding = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        padding &&
          "px-[var(--layout-gutter-mobile)] md:px-[var(--layout-gutter-tablet)] lg:px-[var(--layout-gutter-desktop)]",
        className,
      )}
      {...props}
    />
  );
}

export { Container };
