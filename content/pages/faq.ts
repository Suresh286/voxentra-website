import type { FaqPageContent } from "@/content/types/pages";

export const faqPageContent: FaqPageContent = {
  meta: {
    title: "FAQ",
    description:
      "Frequently asked questions about Voxentra AI employees — deployment, pricing, security, integrations, and how AI employees work.",
  },
  hero: {
    eyebrow: "FAQ",
    headline: "Questions before you hire.",
    supportingCopy:
      "Straight answers for business leaders evaluating AI employees for their operations.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  categories: [
    {
      id: "ai-employees",
      title: "AI Employees",
      items: [
        {
          question: "What is an AI employee?",
          answer:
            "An AI employee is a role-based AI agent deployed on voice, chat, or both. It handles conversations and completes business tasks — like booking meetings, updating CRM, and routing cases — the way a trained team member would.",
        },
        {
          question: "Do AI employees replace my team?",
          answer:
            "No. They take on repetitive, high-volume conversations so your people can focus on work that needs a human. Handoff is built in.",
        },
        {
          question: "What languages are supported?",
          answer:
            "Voxentra supports multilingual voice and chat. We confirm language coverage for your specific deployment during onboarding.",
        },
        {
          question: "How does human handoff work?",
          answer:
            "When a conversation needs your team, the AI employee transfers it with full context. Your customer never repeats themselves.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing",
      items: [
        {
          question: "How is pricing structured?",
          answer:
            "Pricing depends on your scope — channels, volume, and workflows. We provide a tailored proposal after a short discovery call.",
        },
        {
          question: "Do you publish fixed prices?",
          answer:
            "No. Every deployment is scoped individually. You receive a clear written proposal after a discovery conversation.",
        },
        {
          question: "Can we start with one use case?",
          answer:
            "Yes. Most businesses start with one high-impact job — inbound calls, lead follow-up, or appointment booking — then hire more AI employees over time.",
        },
      ],
    },
    {
      id: "security",
      title: "Security",
      items: [
        {
          question: "Is my data secure?",
          answer:
            "Yes. Encryption, access controls, and compliance-ready infrastructure are standard. See our Security page for details.",
        },
        {
          question: "Where is data stored?",
          answer:
            "Deployment infrastructure and data residency options are discussed during onboarding based on your requirements.",
        },
        {
          question: "Can we review security documentation?",
          answer:
            "Yes. Enterprise customers receive security documentation and can schedule a review with our team.",
        },
      ],
    },
    {
      id: "integrations",
      title: "Integrations",
      items: [
        {
          question: "What integrations are available?",
          answer:
            "CRMs, telephony, calendars, helpdesks, and operational tools. See the Integrations page for the current list.",
        },
        {
          question: "Can you integrate with custom tools?",
          answer:
            "Yes. APIs, webhooks, and custom integrations are available for enterprise deployments.",
        },
        {
          question: "Does it work with our phone system?",
          answer:
            "Yes. Voxentra connects to major telephony providers and PBX systems for inbound and outbound call handling.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      items: [
        {
          question: "How quickly can we go live?",
          answer:
            "Most teams deploy their first AI employee within days. Timeline depends on your use case and integrations — not a multi-month build.",
        },
        {
          question: "Do we need engineers to deploy?",
          answer:
            "No. Voxentra handles deployment and configuration. Your team defines the job; we run the platform.",
        },
        {
          question: "Can we deploy on voice and chat together?",
          answer:
            "Yes. Many businesses start with one channel and expand. Both run from the same management dashboard.",
        },
      ],
    },
  ],
  finalCta: {
    eyebrow: "Still have questions?",
    headline: "Talk to our team directly.",
    supportingCopy:
      "Book a demo or contact us for answers specific to your business.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
};
