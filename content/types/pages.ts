import type { CtaLink } from "@/content/types/content";

export type { CtaLink };

export type PageHero = {
  eyebrow?: string;
  headline: string;
  supportingCopy: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type PageFeature = {
  title: string;
  description: string;
};

export type PageStep = {
  step: string;
  title: string;
  description: string;
};

export type PageFaqItem = {
  question: string;
  answer: string;
};

export type PageSection = {
  eyebrow?: string;
  headline: string;
  supportingCopy?: string;
};

export type PagePricingTier = {
  name: string;
  description: string;
  highlights: readonly string[];
  cta: CtaLink;
};

export type PageContactOption = {
  title: string;
  description: string;
  cta: CtaLink;
};

export type DemoPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  whyBook: PageSection & { reasons: readonly PageFeature[] };
  whatHappens: PageSection & { steps: readonly PageStep[] };
  workflows: PageSection & { items: readonly PageFeature[] };
  faq: PageSection & { items: readonly PageFaqItem[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type PlatformPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  architecture: PageSection & { layers: readonly PageFeature[] };
  aiEmployees: PageSection & { roles: readonly PageFeature[] };
  integrations: PageSection & { categories: readonly string[] };
  security: PageSection & { pillars: readonly PageFeature[] };
  dashboard: PageSection & { capabilities: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type PricingPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  whyCustom: PageSection & { reasons: readonly PageFeature[] };
  pricingFactors: PageSection & { factors: readonly PageFeature[] };
  included: PageSection & { features: readonly string[] };
  tiers: PageSection & { items: readonly PagePricingTier[] };
  faq: PageSection & { items: readonly PageFaqItem[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type ContactPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  options: PageSection & { items: readonly PageContactOption[] };
  demoRequest: PageSection & { points: readonly string[]; cta: CtaLink };
  businessInquiry: PageSection & { points: readonly string[]; cta: CtaLink };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type PageWorkflowStep = {
  label: string;
  description: string;
};

export type SolutionHubItem = {
  title: string;
  description: string;
  problem: string;
  aiEmployee: string;
  outcome: string;
  cta: CtaLink;
};

export type SolutionHubFieldLabels = {
  problem: string;
  aiEmployee: string;
  outcome: string;
};

export type SolutionsHubPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  solutions: PageSection & {
    items: readonly SolutionHubItem[];
    fieldLabels: SolutionHubFieldLabels;
  };
  benefits: PageSection & { items: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type SolutionDetailPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  challenge: PageSection & { points: readonly string[] };
  howItWorks: PageSection & { steps: readonly PageFeature[] };
  workflow: PageSection & { steps: readonly PageWorkflowStep[] };
  outcomes: PageSection & { items: readonly PageFeature[] };
  faq: PageSection & { items: readonly PageFaqItem[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type IndustryHubItem = {
  title: string;
  description: string;
  challenge: string;
  aiEmployee: string;
  workflowExample: string;
  outcome: string;
  cta: CtaLink;
};

export type IndustryHubFieldLabels = {
  challenge: string;
  aiEmployee: string;
  workflowExample: string;
  outcome: string;
};

export type IndustriesHubPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  industries: PageSection & {
    items: readonly IndustryHubItem[];
    fieldLabels: IndustryHubFieldLabels;
  };
  whyChoose: PageSection & { reasons: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type IndustryDetailPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  challenges: PageSection & { points: readonly string[] };
  recommendedEmployees: PageSection & { roles: readonly PageFeature[] };
  workflows: PageSection & { items: readonly PageFeature[] };
  outcomes: PageSection & { items: readonly PageFeature[] };
  faq: PageSection & { items: readonly PageFaqItem[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type IntegrationCategory = PageSection & {
  platforms: readonly string[];
};

export type IntegrationsPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  categories: PageSection & { items: readonly string[] };
  crm: IntegrationCategory;
  calendar: IntegrationCategory;
  communication: IntegrationCategory;
  apiWebhooks: PageSection & { features: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type SecurityPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  dataProtection: PageSection & { items: readonly PageFeature[] };
  accessControls: PageSection & { items: readonly PageFeature[] };
  auditability: PageSection & { items: readonly PageFeature[] };
  privacy: PageSection & { points: readonly string[] };
  faq: PageSection & { items: readonly PageFaqItem[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type VoiceAgentsPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  callHandling: PageSection & { steps: readonly PageStep[] };
  languages: PageSection & { items: readonly string[] };
  useCases: PageSection & { items: readonly PageFeature[] };
  outcomes: PageSection & { items: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type ChatAgentsPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  overview: PageSection & { pillars: readonly PageFeature[] };
  customerJourney: PageSection & { steps: readonly PageStep[] };
  useCases: PageSection & { items: readonly PageFeature[] };
  integrations: PageSection & { items: readonly string[] };
  outcomes: PageSection & { items: readonly PageFeature[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type AboutPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  story: PageSection;
  mission: PageSection;
  vision: PageSection;
  principles: PageSection & { items: readonly PageFeature[] };
  whyExists: PageSection;
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type CareersPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  workingAt: PageSection & { points: readonly string[] };
  values: PageSection & { items: readonly PageFeature[] };
  hiringPhilosophy: PageSection;
  futureOpportunities: PageSection & { points: readonly string[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type FaqCategory = {
  id: string;
  title: string;
  items: readonly PageFaqItem[];
};

export type FaqPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  categories: readonly FaqCategory[];
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type CustomersPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  outcomes: PageSection & { items: readonly PageFeature[] };
  workflows: PageSection & { items: readonly PageFeature[] };
  industryExamples: PageSection & { items: readonly PageFeature[] };
  resultsFramework: PageSection & { steps: readonly PageStep[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type PreviewCard = {
  title: string;
  description: string;
  category: string;
  status: string;
};

export type ResourcesPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  categories: PageSection & { items: readonly PageFeature[] };
  guides: PageSection & { items: readonly PreviewCard[] };
  playbooks: PageSection & { items: readonly PreviewCard[] };
  documentation: PageSection & { items: readonly PreviewCard[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type BlogPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  featured: PageSection;
  categories: PageSection & { items: readonly string[] };
  contentStrategy: PageSection & { points: readonly string[] };
  finalCta: PageSection & { primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  listItems?: readonly string[];
};

export type LegalPageContent = {
  meta: { title: string; description: string };
  hero: PageHero;
  sections: readonly LegalSection[];
  lastUpdated: {
    label: string;
    date: string;
  };
  contact: PageSection & {
    email: string;
    emailLabel: string;
  };
};
