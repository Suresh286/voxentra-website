/**
 * Voxentra AI Design Tokens v1.0
 *
 * TypeScript source of truth for the design system.
 * Mirrors styles/tokens.css — use these values in JS/TS when CSS vars are insufficient.
 *
 * Built for a 5–10 year platform vision: marketing, marketplace, API docs,
 * developer portal, integrations, customer dashboard, enterprise portal.
 */

export const colors = {
  brand: {
    primary: "#5E6AD2",
    secondary: "#8B92A8",
    accent: "#2EC4B6",
    highlight: "#E8ECF4",
  },
  neutral: {
    background: "#090B10",
    surface: "#12151C",
    card: "#181C26",
    border: "#252A38",
    divider: "#1E2330",
  },
  text: {
    heading: "#F4F6FA",
    body: "#C8CED9",
    secondary: "#9AA3B5",
    muted: "#6B7489",
    disabled: "#4A5163",
  },
  status: {
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#60A5FA",
  },
  interactive: {
    hover: "#6E79DB",
    active: "#4E59BD",
    focus: "#5E6AD2",
    selected: "rgba(94, 106, 210, 0.12)",
    selectedBorder: "rgba(94, 106, 210, 0.4)",
    focusRing: "rgba(94, 106, 210, 0.4)",
  },
} as const;

export const colorsLight = {
  neutral: {
    background: "#FAFBFD",
    surface: "#F3F5F8",
    card: "#FFFFFF",
    border: "#E2E6ED",
    divider: "#E8EBF0",
  },
  text: {
    heading: "#0F1219",
    body: "#3D4557",
    secondary: "#6B7489",
    muted: "#9AA3B5",
    disabled: "#C8CED9",
  },
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #5E6AD2 0%, #4E59BD 100%)",
  hero: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(94, 106, 210, 0.15) 0%, transparent 70%)",
  cta: "linear-gradient(135deg, #5E6AD2 0%, #2EC4B6 100%)",
  glow: `radial-gradient(ellipse 50% 40% at 80% 50%, rgba(46, 196, 182, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 20% 80%, rgba(94, 106, 210, 0.08) 0%, transparent 60%)`,
} as const;

export const radius = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  full: "9999px",
} as const;

export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

export const layout = {
  maxMarketing: "1280px",
  maxContent: "720px",
  maxDocs: "1440px",
  maxDashboard: "1600px",
  gutter: {
    mobile: "24px",
    tablet: "32px",
    desktop: "40px",
  },
} as const;

export const typography = {
  fontFamily: {
    display: "var(--font-display)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
  scale: {
    displayXl: { size: "4.5rem", lineHeight: "1.05", weight: 700, tracking: "-0.03em" },
    displayLg: { size: "3.5rem", lineHeight: "1.08", weight: 700, tracking: "-0.025em" },
    displayMd: { size: "2.5rem", lineHeight: "1.1", weight: 600, tracking: "-0.02em" },
    headingLg: { size: "2rem", lineHeight: "1.2", weight: 600, tracking: "-0.015em" },
    headingMd: { size: "1.5rem", lineHeight: "1.3", weight: 600, tracking: "-0.01em" },
    headingSm: { size: "1.25rem", lineHeight: "1.4", weight: 600, tracking: "-0.005em" },
    bodyLg: { size: "1.125rem", lineHeight: "1.6", weight: 400, tracking: "0" },
    bodyMd: { size: "1rem", lineHeight: "1.6", weight: 400, tracking: "0" },
    bodySm: { size: "0.875rem", lineHeight: "1.5", weight: 400, tracking: "0" },
    label: { size: "0.75rem", lineHeight: "1.4", weight: 500, tracking: "0.04em" },
  },
} as const;

export const motion = {
  duration: {
    instant: "100ms",
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
    entrance: "600ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

/**
 * Platform navigation zones — scales to full product suite without redesign.
 * Use for header nav, footer sitemaps, and portal switchers.
 */
export const platformZones = {
  product: {
    label: "Product",
    futureRoutes: [
      "/platform",
      "/agents",
      "/marketplace",
      "/integrations",
    ],
  },
  developers: {
    label: "Developers",
    futureRoutes: ["/docs", "/api", "/developers", "/changelog"],
  },
  enterprise: {
    label: "Enterprise",
    futureRoutes: ["/enterprise", "/security", "/contact"],
  },
  company: {
    label: "Company",
    futureRoutes: ["/about", "/careers", "/blog", "/press"],
  },
} as const;

export const designTokens = {
  colors,
  colorsLight,
  gradients,
  radius,
  spacing,
  layout,
  typography,
  motion,
  platformZones,
} as const;

export type DesignTokens = typeof designTokens;
