"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/shared/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { navCtaClasses, navLinkClasses } from "@/components/layout/nav-styles";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation, primaryCta } from "@/content/navigation";
import type { NavItem } from "@/content/types/content";
import { cn } from "@/lib/utils";

function NavCtaButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      voxentraVariant="gradient"
      nativeButton={false}
      render={<Link href={primaryCta.href} />}
      className={cn(navCtaClasses, className)}
      onClick={onClick}
    >
      {primaryCta.label}
      <span
        aria-hidden="true"
        className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover/cta:translate-x-0.5"
      >
        →
      </span>
    </Button>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (item.type === "link") {
    return (
      <Link href={item.href} className={navLinkClasses}>
        {item.label}
      </Link>
    );
  }

  return (
    <NavDropdown
      label={item.label}
      items={item.items}
      href={item.href}
    />
  );
}

function MobileNavSection({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        className={cn(
          "block min-h-11 rounded-lg px-3 py-2.5 text-body-md font-medium text-text-body",
          "hover:bg-interactive-selected hover:text-text-heading",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
        )}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-[var(--space-1)]">
      <p className="px-3 py-2 text-label text-text-muted">{item.label}</p>
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "block min-h-11 rounded-lg px-3 py-2.5 text-body-sm font-medium text-brand-primary",
            "hover:bg-interactive-selected",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
          )}
          onClick={onNavigate}
        >
          Overview
        </Link>
      ) : null}
      {item.items.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "block min-h-11 rounded-lg px-3 py-2.5 text-body-sm text-text-body",
            "hover:bg-interactive-selected hover:text-text-heading",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
          )}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        scrolled
          ? "border-neutral-border/80 bg-[var(--surface-glass-scrolled)] shadow-[var(--shadow-inner-highlight)] backdrop-blur-md"
          : "border-neutral-border/40 bg-[var(--surface-glass)] backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="flex h-[var(--layout-navbar-height)] items-center justify-between gap-[var(--space-6)] lg:h-20">
          <Logo
            variant="compact"
            className="shrink-0 pl-[var(--logo-nav-inset)]"
          />

          <nav
            className="hidden items-center gap-[var(--space-1)] xl:gap-[var(--space-2)] lg:flex"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-[var(--space-3)]">
            <NavCtaButton className="hidden sm:inline-flex" />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className={cn(
                  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg lg:hidden",
                  "border border-transparent text-text-body",
                  "hover:border-neutral-border hover:bg-interactive-selected hover:text-text-heading",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                )}
                aria-label="Open navigation menu"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ☰
                </span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={cn(
                  "w-full border-neutral-border/80 sm:max-w-sm",
                  "bg-[var(--surface-glass-panel)] backdrop-blur-md",
                )}
                aria-describedby={undefined}
              >
                <SheetHeader className="border-b border-neutral-divider pb-[var(--space-4)]">
                  <SheetTitle className="text-left">
                    <Logo variant="compact" />
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-1 flex-col gap-[var(--space-4)] overflow-y-auto px-[var(--space-2)] py-[var(--space-4)]"
                  aria-label="Mobile navigation"
                >
                  {mainNavigation.map((item) => (
                    <MobileNavSection
                      key={item.label}
                      item={item}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>
                <div className="border-t border-neutral-divider p-[var(--space-4)]">
                  <NavCtaButton
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

export { Navbar };
