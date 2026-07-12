"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { navTriggerClasses } from "@/components/layout/nav-styles";
import type { NavLink } from "@/content/types/content";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  label: string;
  items: NavLink[];
  href?: string;
};

function NavDropdown({ label, items, href }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className={cn(
          navTriggerClasses,
          open && "bg-interactive-selected text-text-heading",
        )}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {label}
        <span
          aria-hidden="true"
          className={cn(
            "text-text-muted transition-transform duration-[var(--duration-fast)]",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-label={label}
          className={cn(
            "absolute top-full left-0 z-50 mt-[var(--space-2)] min-w-60",
            "rounded-xl border border-neutral-border/80 p-[var(--space-2)]",
            "bg-[var(--surface-glass-panel)] shadow-[var(--shadow-glow-md)] backdrop-blur-md",
          )}
        >
          {href ? (
            <li role="none">
              <Link
                role="menuitem"
                href={href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-body-sm font-medium text-brand-primary",
                  "hover:bg-interactive-selected",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                )}
                onClick={() => setOpen(false)}
              >
                Overview
              </Link>
            </li>
          ) : null}
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-body-sm text-text-body",
                  "transition-colors duration-[var(--duration-fast)]",
                  "hover:bg-interactive-selected hover:text-text-heading",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive-focus",
                )}
                onClick={() => setOpen(false)}
              >
                <span className="font-medium">{item.label}</span>
                {item.description ? (
                  <span className="mt-0.5 block text-body-sm text-text-muted">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export { NavDropdown };
