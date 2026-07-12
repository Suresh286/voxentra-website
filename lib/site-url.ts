const DEFAULT_SITE_URL = "https://voxentra.ai";

function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim();

  if (!trimmed) {
    return DEFAULT_SITE_URL;
  }

  return trimmed.replace(/\/+$/, "");
}

/**
 * Canonical site origin for metadata, sitemap, and absolute URL resolution.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://voxentra.ai).
 */
export function getSiteUrl(): string {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  );
}

export function getSiteOrigin(): URL {
  return new URL(getSiteUrl());
}
