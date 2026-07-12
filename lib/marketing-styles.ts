import { cn } from "@/lib/utils";

import { navCtaClasses } from "@/components/layout/nav-styles";

export type MarketingTone = "dark" | "elevated";

export const marketingPrimaryCtaClasses = cn(
  navCtaClasses,
  "h-11 rounded-full px-8 shadow-[var(--shadow-glow-sm)]",
);

export const marketingSecondaryCtaClasses = cn(
  "h-11 rounded-full border-neutral-border/80 bg-transparent px-8",
  "text-text-heading hover:border-brand-primary/50 hover:bg-brand-primary/5",
  "focus-visible:border-brand-primary/50",
);

export const marketingElevatedSecondaryCtaClasses = cn(
  "h-11 rounded-full border-section-elevated bg-transparent px-8",
  "text-section-elevated-heading hover:border-brand-primary/40 hover:bg-brand-primary/5",
  "focus-visible:border-brand-primary/50",
);

export const matsElevatedCardClasses = cn(
  "h-full border-section-elevated bg-section-elevated-card shadow-[0_8px_30px_rgb(15_18_25_/_0.06)]",
  "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-[0_16px_40px_rgb(15_18_25_/_0.1)]",
);

export const matsDarkCardClasses = cn(
  "h-full border-neutral-border/80 bg-[var(--surface-glass-panel)] backdrop-blur-sm shadow-[var(--shadow-inner-highlight)]",
  "transition-[border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
  "hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-[var(--shadow-glow-sm)]",
);

export const elevatedSectionBorderClasses = "border-y border-section-elevated";

export const elevatedHeadingClasses = cn(
  "[&_h2]:text-section-elevated-heading [&_h2]:text-balance",
  "[&_p]:max-w-none [&_p]:text-section-elevated-muted [&_p]:text-pretty",
  "[&_p:first-child]:border-brand-primary/20 [&_p:first-child]:bg-brand-primary/10 [&_p:first-child]:text-brand-primary",
);

export const darkHeadingClasses = cn(
  "[&_h2]:text-balance [&_p]:text-pretty",
);

export const pageHeroMeshClasses =
  "pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero-mesh)]";

export const pageHeroGlowPrimaryClasses = cn(
  "pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl",
  "hero-mesh-drift-a",
);

export const pageHeroGlowAccentClasses = cn(
  "pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl",
  "hero-mesh-drift-b",
);

export function cardClassesForTone(tone: MarketingTone) {
  return tone === "elevated" ? matsElevatedCardClasses : matsDarkCardClasses;
}

export function headingClassesForTone(tone: MarketingTone) {
  return tone === "elevated" ? elevatedHeadingClasses : darkHeadingClasses;
}

export function sectionToneFromBackground(
  background: "default" | "surface" | "transparent" | "elevated",
): MarketingTone {
  return background === "elevated" ? "elevated" : "dark";
}

export function titleColorForTone(tone: MarketingTone) {
  return tone === "elevated"
    ? "text-section-elevated-heading"
    : "text-text-heading";
}

export function bodyColorForTone(tone: MarketingTone) {
  return tone === "elevated"
    ? "text-section-elevated-muted"
    : "text-text-secondary";
}

export function tagPillClassesForTone(tone: MarketingTone) {
  return tone === "elevated"
    ? "inline-flex rounded-full border border-section-elevated bg-[var(--color-section-elevated)] px-3 py-1 text-body-sm text-section-elevated-muted"
    : "inline-flex rounded-full border border-neutral-border/80 bg-neutral-card/50 px-3 py-1 text-body-sm text-text-muted";
}

export function elevatedPanelClassesForTone(tone: MarketingTone) {
  return tone === "elevated"
    ? cn(
        "rounded-xl border border-section-elevated bg-section-elevated-card p-[var(--space-5)]",
        "shadow-[0_8px_30px_rgb(15_18_25_/_0.06)]",
        "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
        "hover:border-brand-primary/20 hover:shadow-[0_12px_32px_rgb(15_18_25_/_0.08)]",
      )
    : cn(
        "rounded-xl border border-neutral-border/80 bg-[var(--surface-glass-panel)] p-[var(--space-5)] backdrop-blur-sm",
        "transition-[border-color,box-shadow] duration-[var(--duration-normal)]",
        "hover:border-brand-primary/20 hover:shadow-[var(--shadow-glow-sm)]",
      );
}
