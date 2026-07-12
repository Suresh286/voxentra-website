"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

function enableDocumentMotion() {
  document.documentElement.dataset.motion = "on";
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

function ScrollReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (prefersReducedMotion()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    enableDocumentMotion();

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref as never}
      className={cn("scroll-reveal", visible && "is-visible", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

type ScrollRevealStaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  staggerMs?: number;
  as?: ElementType;
  /** Apply reveal classes directly on children (for ul/ol lists). */
  inlineItems?: boolean;
};

function ScrollRevealStagger({
  children,
  className,
  itemClassName,
  staggerMs = 80,
  as: Tag = "div",
  inlineItems = false,
}: ScrollRevealStaggerProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (prefersReducedMotion()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    enableDocumentMotion();

    return () => observer.disconnect();
  }, []);

  if (inlineItems) {
    return (
      <Tag ref={ref as never} className={className}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return child;
          }

          const element = child as ReactElement<{
            className?: string;
            style?: CSSProperties;
          }>;

          const delayStyle: CSSProperties = {
            ...element.props.style,
            transitionDelay: `${index * staggerMs}ms`,
          };

          return cloneElement(element, {
            className: cn(
              "scroll-reveal",
              visible && "is-visible",
              itemClassName,
              element.props.className,
            ),
            style: delayStyle,
          });
        })}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as never} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const element = child as ReactElement<{ className?: string }>;

        return (
          <div
            key={element.key ?? index}
            className={cn(
              "scroll-reveal h-full",
              visible && "is-visible",
              itemClassName,
            )}
            style={{ transitionDelay: `${index * staggerMs}ms` }}
          >
            {child}
          </div>
        );
      })}
    </Tag>
  );
}

export { ScrollReveal, ScrollRevealStagger };
