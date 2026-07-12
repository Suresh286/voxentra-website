export type ThemeMode = "dark" | "light";

export type PlatformZone = "product" | "developers" | "enterprise" | "company";

export type ColorToken =
  | `brand.${keyof typeof import("@/constants/design-tokens").colors.brand}`
  | `neutral.${keyof typeof import("@/constants/design-tokens").colors.neutral}`
  | `text.${keyof typeof import("@/constants/design-tokens").colors.text}`
  | `status.${keyof typeof import("@/constants/design-tokens").colors.status}`;

export type SpacingToken = keyof typeof import("@/constants/design-tokens").spacing;

export type RadiusToken = keyof typeof import("@/constants/design-tokens").radius;
