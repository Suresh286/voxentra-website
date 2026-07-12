import {
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof ShadcnCard>;

function Card({ className, ...props }: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        "border border-neutral-border bg-neutral-card shadow-[var(--shadow-inner-highlight)] ring-0",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardHeader>) {
  return <ShadcnCardHeader className={className} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardTitle>) {
  return <ShadcnCardTitle className={className} {...props} />;
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardDescription>) {
  return <ShadcnCardDescription className={className} {...props} />;
}

function CardAction({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardAction>) {
  return <ShadcnCardAction className={className} {...props} />;
}

function CardContent({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardContent>) {
  return <ShadcnCardContent className={className} {...props} />;
}

function CardFooter({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnCardFooter>) {
  return <ShadcnCardFooter className={className} {...props} />;
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
