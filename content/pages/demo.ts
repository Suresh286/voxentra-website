import type { DemoPageContent } from "@/content/types/pages";

export const demoPageContent: DemoPageContent = {
  meta: {
    title: "Book a Demo",
    description:
      "See how Voxentra AI employees handle real business conversations — voice, chat, and workflow automation tailored to your operations.",
  },
  hero: {
    eyebrow: "Book a Demo",
    headline: "See your AI workforce in action.",
    supportingCopy:
      "Walk through a live demonstration of AI employees handling calls, qualifying leads, and completing workflows inside your existing tools.",
    primaryCta: {
      label: "Schedule Your Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore the Platform",
      href: "/platform",
    },
  },
  whyBook: {
    eyebrow: "Why book a demo",
    headline: "Know exactly what you are hiring before you commit.",
    supportingCopy:
      "A demo is not a sales pitch. It is a working session to map your highest-impact workflow to an AI employee.",
    reasons: [
      {
        title: "See real conversations",
        description:
          "Watch AI employees handle inbound calls, chat messages, and follow-ups using scenarios relevant to your business.",
      },
      {
        title: "Map your workflow",
        description:
          "Identify which job — sales, support, booking, or operations — delivers the fastest return for your team.",
      },
      {
        title: "Review integrations",
        description:
          "Confirm how Voxentra connects to your CRM, calendar, telephony, and helpdesk before deployment.",
      },
      {
        title: "Get a clear timeline",
        description:
          "Most teams deploy their first AI employee within days. We outline exactly what yours looks like.",
      },
    ],
  },
  whatHappens: {
    eyebrow: "What to expect",
    headline: "Your demo in three steps.",
    supportingCopy:
      "Plan for 30 minutes. You will leave with a concrete picture of your first AI employee.",
    steps: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We learn how your team handles conversations today — volume, channels, tools, and pain points.",
      },
      {
        step: "02",
        title: "Live walkthrough",
        description:
          "See AI employees in action on voice and chat, including handoff, CRM updates, and scheduling.",
      },
      {
        step: "03",
        title: "Deployment plan",
        description:
          "Receive a scoped recommendation: which role to hire first, integrations needed, and go-live timeline.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "What you will see during the demo.",
    supportingCopy:
      "Every demonstration is tailored to your industry and operational priorities.",
    items: [
      {
        title: "Inbound sales call",
        description:
          "AI employee answers, qualifies the lead, books a meeting, and updates your CRM — in one conversation.",
      },
      {
        title: "Customer support request",
        description:
          "AI employee resolves a common inquiry or routes a complex case to your team with full context.",
      },
      {
        title: "Appointment booking",
        description:
          "AI employee checks availability, confirms the slot, sends reminders, and creates the calendar event.",
      },
      {
        title: "After-hours coverage",
        description:
          "See how AI employees keep conversations moving when your team is offline — without missed opportunities.",
      },
    ],
  },
  faq: {
    eyebrow: "Demo FAQ",
    headline: "Common questions before you book.",
    items: [
      {
        question: "How long is the demo?",
        answer:
          "Most sessions run 30 minutes. We can extend if you want to explore multiple workflows or integrations.",
      },
      {
        question: "Who should attend?",
        answer:
          "Business owners, operations leaders, and anyone responsible for customer conversations or team capacity.",
      },
      {
        question: "Do I need technical staff present?",
        answer:
          "No. We focus on business outcomes. Your technical team can join integration discussions separately if needed.",
      },
      {
        question: "Is there any commitment after the demo?",
        answer:
          "None. You receive a clear recommendation and pricing scope. You decide when — or if — to hire your first AI employee.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Hire your first AI employee with confidence.",
    supportingCopy:
      "Book a demo and see how Voxentra fits your operations — not a generic product tour.",
    primaryCta: {
      label: "Schedule Your Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Pricing Approach",
      href: "/pricing",
    },
  },
};
