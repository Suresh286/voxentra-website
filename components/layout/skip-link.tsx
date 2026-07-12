import Link from "next/link";

import { cn } from "@/lib/utils";

type SkipLinkProps = {
  className?: string;
};

function SkipLink({ className }: SkipLinkProps) {
  return (
    <Link
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:fixed focus:top-[var(--space-4)] focus:left-[var(--space-4)] focus:z-[100]",
        "focus:rounded-md focus:bg-neutral-card focus:px-4 focus:py-2",
        "focus:text-body-sm focus:font-medium focus:text-text-heading",
        "focus:outline-2 focus:outline-offset-2 focus:outline-interactive-focus",
        className,
      )}
    >
      Skip to main content
    </Link>
  );
}

export { SkipLink };
