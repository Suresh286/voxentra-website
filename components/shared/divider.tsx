import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type DividerProps = React.ComponentProps<typeof Separator> & {
  spacing?: boolean;
};

function Divider({
  className,
  spacing = true,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        "w-full",
        spacing && "py-[var(--space-8)]",
        orientation === "vertical" && "flex h-full items-stretch py-0",
        className,
      )}
      role="presentation"
    >
      <Separator
        orientation={orientation}
        className="bg-neutral-divider"
        {...props}
      />
    </div>
  );
}

export { Divider };
