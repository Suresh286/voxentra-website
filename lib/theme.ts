export type Theme = "dark" | "light";

export const THEME_ATTRIBUTE = "data-theme";

/** Dark is the default product experience. */
export const DEFAULT_THEME: Theme = "dark";

/**
 * Apply on <html>: dark mode uses the `dark` class (shadcn); light uses data-theme.
 */
export function getThemeHtmlProps(theme: Theme = DEFAULT_THEME) {
  return {
    className: theme === "dark" ? "dark" : "",
    [THEME_ATTRIBUTE]: theme === "light" ? "light" : undefined,
  } as const;
}

export function isLightTheme(theme: Theme): boolean {
  return theme === "light";
}
