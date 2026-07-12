import {
  Button as ShadcnButton,
  type buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export type VoxentraButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "gradient"
  | "outline";

const shadcnVariantMap: Record<
  VoxentraButtonVariant,
  NonNullable<VariantProps<typeof buttonVariants>["variant"]>
> = {
  primary: "default",
  secondary: "secondary",
  ghost: "ghost",
  gradient: "default",
  outline: "outline",
};

const voxentraVariantClasses: Record<VoxentraButtonVariant, string> = {
  primary: "",
  secondary: "",
  ghost: "",
  outline: "",
  gradient:
    "border-0 bg-[image:var(--gradient-cta)] text-primary-foreground hover:opacity-95 hover:shadow-[var(--shadow-glow-sm)]",
};

type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  voxentraVariant?: VoxentraButtonVariant;
};

function Button({
  voxentraVariant = "primary",
  className,
  variant,
  ...props
}: ButtonProps) {
  const resolvedVariant = variant ?? shadcnVariantMap[voxentraVariant];

  return (
    <ShadcnButton
      variant={resolvedVariant}
      className={cn(voxentraVariantClasses[voxentraVariant], className)}
      {...props}
    />
  );
}

export { Button };
