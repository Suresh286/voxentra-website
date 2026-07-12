import type { SolutionDetailPageContent } from "@/content/types/pages";

export const customerSupportSolutionContent: SolutionDetailPageContent = {
  meta: {
    title: "Customer Support",
    description:
      "Deploy a Customer Support AI Employee to resolve common requests instantly, triage complex cases, and keep your helpdesk queue manageable.",
  },
  hero: {
    eyebrow: "Customer Support",
    headline: "Resolve requests before they become tickets.",
    supportingCopy:
      "Your Customer Support AI Employee handles FAQs, billing inquiries, and product questions — escalating to your team with full context when needed.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Solutions", href: "/solutions" },
  },
  challenge: {
    eyebrow: "Business challenge",
    headline: "Support volume outpaces your team.",
    supportingCopy:
      "Customers expect instant answers. Your team repeats the same responses while complex cases wait in queue.",
    points: [
      "Support queues grow during peak hours and seasonal spikes.",
      "Agents answer the same FAQs hundreds of times per week.",
      "Customers repeat their issue when escalated because context is lost.",
      "After-hours requests sit unanswered until the next business day.",
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "Support that scales without adding agents.",
    steps: [
      {
        title: "Triages incoming requests",
        description:
          "Identifies request type on voice and chat — billing, product, account, or escalation.",
      },
      {
        title: "Resolves common issues",
        description:
          "Answers FAQs, checks order status, and handles routine requests using your knowledge base.",
      },
      {
        title: "Escalates with context",
        description:
          "Routes complex cases to the right agent with full conversation history — no repeated questions.",
      },
      {
        title: "Logs every interaction",
        description:
          "Creates and updates tickets in Zendesk, Intercom, or your helpdesk automatically.",
      },
    ],
  },
  workflow: {
    eyebrow: "Example workflow",
    headline: "From billing inquiry to resolution.",
    steps: [
      {
        label: "Trigger",
        description: "Customer messages about a charge on their account.",
      },
      {
        label: "AI Employee",
        description: "Customer Support AI Employee",
      },
      {
        label: "Process",
        description:
          "Verifies account details → identifies the charge → explains the billing cycle → confirms satisfaction.",
      },
      {
        label: "Outcome",
        description:
          "Issue resolved in one conversation. Ticket closed with full transcript logged.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Expected outcomes",
    headline: "Support your customers expect.",
    items: [
      {
        title: "Faster resolution times",
        description:
          "Common requests handled in seconds instead of waiting in queue.",
      },
      {
        title: "Lower ticket volume",
        description:
          "Fewer tickets created because issues are resolved on first contact.",
      },
      {
        title: "Happier customers",
        description:
          "Instant answers and seamless escalation without repeating themselves.",
      },
      {
        title: "Team focus on complex cases",
        description:
          "Your agents handle work that genuinely needs human judgment.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about Support AI Employees.",
    items: [
      {
        question: "Can it access our knowledge base?",
        answer:
          "Yes. Your AI employee is trained on your FAQs, product docs, and support policies to answer accurately.",
      },
      {
        question: "What happens when it cannot resolve an issue?",
        answer:
          "It escalates to your team with full conversation context. The customer never repeats their issue.",
      },
      {
        question: "Does it work with our helpdesk?",
        answer:
          "Yes. Voxentra integrates with Zendesk, Intercom, Freshdesk, and other helpdesk platforms.",
      },
      {
        question: "Can it handle voice and chat?",
        answer:
          "Yes. Deploy on phone support lines, live chat, and messaging channels from one platform.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to hire",
    headline: "Give your support team an AI employee.",
    supportingCopy:
      "Book a demo to see customer support automation tailored to your products and policies.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
