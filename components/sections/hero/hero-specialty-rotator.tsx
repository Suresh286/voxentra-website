"use client";

import { useEffect, useState } from "react";

import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function HeroSpecialtyRotator() {
  const { specialtyPrefix, specialtyTerms } = homeContent.hero;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % specialtyTerms.length);
        setVisible(true);
      }, 220);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [specialtyTerms.length]);

  return (
    <p className="text-body-md text-pretty text-text-secondary sm:text-body-lg">
      {specialtyPrefix}{" "}
      <span
        className={cn(
          "font-semibold text-gradient-brand transition-opacity duration-[var(--duration-fast)]",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {specialtyTerms[index]}
      </span>
      <span aria-hidden="true" className="ml-0.5 text-brand-accent">
        |
      </span>
    </p>
  );
}

export { HeroSpecialtyRotator };
