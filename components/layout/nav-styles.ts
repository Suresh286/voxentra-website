import { cn } from "@/lib/utils";

export const navLinkClasses = cn(
  "inline-flex min-h-11 items-center rounded-lg px-4 text-body-sm font-medium text-text-secondary",
  "transition-[color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "hover:bg-interactive-selected hover:text-text-heading",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
);

export const navTriggerClasses = cn(
  "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-4 text-body-sm font-medium text-text-secondary",
  "transition-[color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
  "hover:bg-interactive-selected hover:text-text-heading",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
);

export const navCtaClasses = cn(
  "group/cta h-10 max-w-full gap-2 rounded-full px-4 text-body-sm font-semibold sm:px-6",
  "border-0 bg-[image:var(--gradient-cta)] text-primary-foreground",
  "shadow-[var(--shadow-glow-sm)]",
  "hover:opacity-95 hover:shadow-[var(--shadow-glow-md)]",
  "active:opacity-90",
);
