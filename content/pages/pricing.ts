import type { PricingPageContent } from "@/content/types/pages";

export const pricingPageContent: PricingPageContent = {
  meta: {
    title: "Pricing",
    description:
      "Flexible, scope-based pricing for Voxentra AI employees. Every deployment is tailored to your channels, volume, and operational needs.",
  },
  hero: {
    eyebrow: "Pricing",
    headline: "Pricing built around your operations.",
    supportingCopy:
      "Every business is different. We scope pricing around your channels, conversation volume, and workflows — then provide a clear proposal. No guesswork.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Contact Sales",
      href: "/contact",
    },
  },
  whyCustom: {
    eyebrow: "Why custom pricing",
    headline: "One size does not fit every AI workforce.",
    supportingCopy:
      "A reception AI employee handling 50 calls a day has different requirements than a multi-channel sales team across three regions.",
    reasons: [
      {
        title: "Scope varies by role",
        description:
          "Sales, support, booking, and operations each involve different conversation complexity and integration depth.",
      },
      {
        title: "Volume drives infrastructure",
        description:
          "Pricing reflects your expected conversation volume — not arbitrary seat counts.",
      },
      {
        title: "Integrations add value",
        description:
          "CRM, telephony, calendar, and helpdesk connections are scoped to what your deployment actually needs.",
      },
      {
        title: "Transparency first",
        description:
          "You receive a written proposal after a short discovery call. No hidden fees on the website.",
      },
    ],
  },
  pricingFactors: {
    eyebrow: "What impacts pricing",
    headline: "Four factors we scope together.",
    factors: [
      {
        title: "Channels",
        description:
          "Voice, chat, or both — each channel has distinct operational requirements.",
      },
      {
        title: "AI employees deployed",
        description:
          "Number of roles and workflows your AI workforce covers at launch and as you scale.",
      },
      {
        title: "Conversation volume",
        description:
          "Expected monthly call and message volume across your deployment.",
      },
      {
        title: "Integration complexity",
        description:
          "CRM, calendar, telephony, helpdesk, and custom workflow connections.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    headline: "Every Voxentra deployment includes.",
    supportingCopy:
      "Core platform capabilities are standard — not upsold as add-ons.",
    features: [
      "Dedicated onboarding and role configuration",
      "Voice and/or chat deployment",
      "Core CRM and calendar integrations",
      "Management dashboard access",
      "Human handoff workflows",
      "Security and encryption by default",
      "Ongoing platform updates",
      "Support during deployment",
    ],
  },
  tiers: {
    eyebrow: "Engagement tiers",
    headline: "Find the right starting point.",
    supportingCopy:
      "These tiers describe typical deployment scopes. Your proposal is tailored after discovery.",
    items: [
      {
        name: "Growing teams",
        description: "For businesses hiring their first AI employees.",
        highlights: [
          "Voice or chat deployment",
          "Core integrations",
          "Dedicated onboarding",
        ],
        cta: {
          label: "Book a Demo",
          href: "/demo",
        },
      },
      {
        name: "Multi-channel operations",
        description: "For teams running AI employees across voice and chat.",
        highlights: [
          "Multiple AI employees",
          "Advanced workflows",
          "Priority support",
        ],
        cta: {
          label: "Book a Demo",
          href: "/demo",
        },
      },
      {
        name: "Enterprise",
        description:
          "For organizations with complex compliance and scale requirements.",
        highlights: [
          "Custom deployment options",
          "Dedicated integrations",
          "SLA & account support",
        ],
        cta: {
          label: "Contact Sales",
          href: "/contact",
        },
      },
    ],
  },
  faq: {
    eyebrow: "Pricing FAQ",
    headline: "Common pricing questions.",
    items: [
      {
        question: "Do you publish fixed prices?",
        answer:
          "No. Every deployment is scoped individually. You receive a clear written proposal after a discovery conversation.",
      },
      {
        question: "Can we start with one AI employee?",
        answer:
          "Yes. Most businesses start with one high-impact role and expand as results prove out.",
      },
      {
        question: "Are there setup fees?",
        answer:
          "Onboarding and configuration are part of your scoped proposal. There are no surprise charges.",
      },
      {
        question: "How does billing work?",
        answer:
          "Billing structure is outlined in your proposal — typically aligned to deployment scope and conversation volume.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Next step",
    headline: "Get a proposal tailored to your business.",
    supportingCopy:
      "Book a demo or contact sales. We will scope pricing around your actual operational needs.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Contact Sales",
      href: "/contact",
    },
  },
};
