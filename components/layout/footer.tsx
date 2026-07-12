import Link from "next/link";

import { navCtaClasses } from "@/components/layout/nav-styles";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/layout/container";
import { Divider } from "@/components/shared/divider";
import { Logo } from "@/components/layout/logo";
import {
  footerColumns,
  footerLegalLinks,
  primaryCta,
} from "@/content/navigation";
import { site, socialLinks } from "@/content/site";
import { cn } from "@/lib/utils";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-border bg-neutral-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
      />

      <Container className="py-[var(--space-20)] md:py-[var(--space-24)]">
        <div className="flex flex-col gap-[var(--space-16)] lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs lg:max-w-sm">
            <Logo variant="full" />
            <p className="mt-[var(--logo-footer-section-gap)] text-body-sm leading-relaxed text-text-muted">
              {site.description}
            </p>

            <ul className="mt-[var(--space-6)] flex items-center gap-[var(--space-3)]">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.ariaLabel}
                    className={cn(
                      "inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg",
                      "border border-neutral-border/80 bg-neutral-card/50 text-body-sm font-medium text-text-secondary",
                      "transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-fast)]",
                      "hover:border-neutral-border hover:bg-neutral-card hover:text-text-heading hover:shadow-[var(--shadow-glow-sm)]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              voxentraVariant="gradient"
              nativeButton={false}
              render={<Link href={primaryCta.href} />}
              className={cn(navCtaClasses, "mt-[var(--space-8)]")}
            >
              {primaryCta.label}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-[var(--space-10)] gap-y-[var(--space-10)] sm:grid-cols-4 lg:gap-x-[var(--space-12)]">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-label text-text-muted">{column.title}</h2>
                <ul className="mt-[var(--space-5)] flex flex-col gap-[var(--space-3)]">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-body-sm text-text-secondary",
                          "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                          "hover:text-text-heading",
                          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider spacing={false} className="my-[var(--space-12)]" />

        <div className="flex flex-col gap-[var(--space-4)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-text-muted">
            © {year} {site.company}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-[var(--space-4)] sm:gap-[var(--space-6)]">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-body-sm text-text-muted",
                    "transition-colors duration-[var(--duration-fast)]",
                    "hover:text-text-secondary",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
