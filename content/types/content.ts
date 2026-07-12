export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavDropdown = {
  type: "dropdown";
  label: string;
  href?: string;
  items: NavLink[];
};

export type NavLinkItem = {
  type: "link";
  label: string;
  href: string;
};

export type NavItem = NavLinkItem | NavDropdown;

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type CtaLink = {
  label: string;
  href: string;
};

export type HomeSection = {
  eyebrow?: string;
  headline: string;
  supportingCopy: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type TrustBarItem = {
  label: string;
};

export type HomeCard = {
  title: string;
  description: string;
  href: string;
};

export type SolutionItem = {
  title: string;
  description: string;
  problem: string;
  aiEmployee: string;
  outcome: string;
  cta: CtaLink;
};

export type SolutionsFieldLabels = {
  problem: string;
  aiEmployee: string;
  outcome: string;
};

export type IndustryItem = {
  title: string;
  description: string;
  challenge: string;
  aiEmployee: string;
  workflowExample: string;
  outcome: string;
  cta: CtaLink;
};

export type IndustriesFieldLabels = {
  challenge: string;
  aiEmployee: string;
  workflowExample: string;
  outcome: string;
};

export type HomeStep = {
  step: string;
  title: string;
  description: string;
};

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export type HomePricingTier = {
  name: string;
  description: string;
  highlights: readonly string[];
  cta: CtaLink;
};

export type HomeAutomation = {
  title: string;
  description: string;
};

export type ComparisonRow = {
  traditional: string;
  aiEmployee: string;
};

export type HomeComparison = {
  traditionalLabel: string;
  aiEmployeeLabel: string;
  rows: readonly ComparisonRow[];
};

export type AiEmployeeProfile = {
  title: string;
  description: string;
  statusLabel: string;
  currentTask: string;
  completedToday: string;
  responseTime: string;
  responsibilities: readonly string[];
  languages: readonly string[];
  availability: string;
  integrations: readonly string[];
  outcome: string;
  cta: CtaLink;
};

export type AiWorkforceFieldLabels = {
  status: string;
  currentTask: string;
  completedToday: string;
  responseTime: string;
  works: string;
  languages: string;
  availability: string;
  integrations: string;
  outcome: string;
  livePreview: string;
};

export type HeroVisualOutcome = {
  label: string;
};

export type HeroVisualContent = {
  incomingLabel: string;
  customerQuote: string;
  channelLabel: string;
  aiEmployeeTitle: string;
  statusLabel: string;
  taskLabel: string;
  processingSteps: readonly string[];
  outcomes: readonly HeroVisualOutcome[];
  integrationsLabel: string;
  integrations: readonly string[];
};

export type HomeContent = {
  hero: HomeSection & {
    capabilityIndicators: readonly TrustBarItem[];
    trustReassurance: string;
  };
  heroVisual: HeroVisualContent;
  trustBar: HomeSection & { items: readonly TrustBarItem[] };
  trustedBy: HomeSection;
  aiEmployee: HomeSection & {
    points: readonly string[];
    contrastLine: string;
    comparison: HomeComparison;
  };
  aiWorkforce: HomeSection & {
    employees: readonly AiEmployeeProfile[];
    fieldLabels: AiWorkforceFieldLabels;
  };
  solutions: HomeSection & {
    items: readonly SolutionItem[];
    fieldLabels: SolutionsFieldLabels;
  };
  industries: HomeSection & {
    items: readonly IndustryItem[];
    fieldLabels: IndustriesFieldLabels;
  };
  howItWorks: HomeSection & {
    steps: readonly HomeStep[];
    supportingLine: string;
  };
  integrations: HomeSection & { categories: readonly string[] };
  security: HomeSection & { pillars: readonly HomeCard[] };
  customerStories: HomeSection & { automations: readonly HomeAutomation[] };
  pricingPreview: HomeSection & { tiers: readonly HomePricingTier[] };
  faq: HomeSection & { items: readonly HomeFaqItem[] };
  finalCta: HomeSection;
};
