import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "compact" | "full";
  linked?: boolean;
};

function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={42}
      height={42}
      className={cn(
        "block size-[var(--logo-mark-size)] shrink-0 sm:size-[var(--logo-mark-size-md)]",
        className,
      )}
      priority
    />
  );
}

function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-lg font-semibold tracking-tight text-text-heading sm:text-xl",
        className,
      )}
    >
      Voxentra{" "}
      <span className="bg-[image:var(--gradient-brand-wordmark)] bg-clip-text font-semibold text-transparent">
        AI
      </span>
    </span>
  );
}

function LogoFull({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full bg-neutral-surface py-[var(--logo-footer-padding-block)] pr-[var(--logo-footer-padding-inline-end)]",
        className,
      )}
    >
      <Image
        src="/logo-full.png"
        alt={`${site.name} — ${site.slogan}`}
        width={1092}
        height={726}
        sizes="(max-width: 639px) 272px, 304px"
        className="block h-auto w-full max-w-[var(--logo-footer-max-width)] bg-neutral-surface object-contain object-left sm:max-w-[var(--logo-footer-max-width-md)]"
      />
    </span>
  );
}

function Logo({
  className,
  variant = "compact",
  linked = true,
}: LogoProps) {
  const content =
    variant === "full" ? (
      <LogoFull className={className} />
    ) : (
      <span
        className={cn(
          "inline-flex items-center gap-[var(--logo-lockup-gap)]",
          className,
        )}
      >
        <LogoMark />
        <LogoWordmark />
      </span>
    );

  if (!linked) {
    return content;
  }

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 transition-opacity duration-[var(--duration-fast)]",
        "hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-interactive-focus",
        variant === "compact" && "items-center self-center",
        variant === "full" && "max-w-full items-start pl-[var(--logo-footer-inset)]",
      )}
      aria-label={`${site.name} home`}
    >
      {content}
    </Link>
  );
}

export { Logo, LogoFull, LogoMark, LogoWordmark };
