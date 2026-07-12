import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type VoxentraBadgeVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "success"
  | "warning"
  | "error"
  | "info";

const shadcnVariantMap = {
  primary: "default",
  secondary: "secondary",
  accent: "outline",
  outline: "outline",
  success: "outline",
  warning: "outline",
  error: "destructive",
  info: "outline",
} as const;

const voxentraVariantClasses: Record<VoxentraBadgeVariant, string> = {
  primary: "",
  secondary: "",
  accent:
    "border-brand-accent/30 bg-brand-accent/10 text-brand-accent [a]:hover:bg-brand-accent/20",
  outline: "",
  success:
    "border-status-success/30 bg-status-success/10 text-status-success [a]:hover:bg-status-success/20",
  warning:
    "border-status-warning/30 bg-status-warning/10 text-status-warning [a]:hover:bg-status-warning/20",
  error: "",
  info: "border-status-info/30 bg-status-info/10 text-status-info [a]:hover:bg-status-info/20",
};

type BadgeProps = React.ComponentProps<typeof ShadcnBadge> & {
  voxentraVariant?: VoxentraBadgeVariant;
};

function Badge({
  voxentraVariant = "primary",
  className,
  variant,
  ...props
}: BadgeProps) {
  const resolvedVariant = variant ?? shadcnVariantMap[voxentraVariant];

  return (
    <ShadcnBadge
      variant={resolvedVariant}
      className={cn(voxentraVariantClasses[voxentraVariant], className)}
      {...props}
    />
  );
}

export { Badge };
