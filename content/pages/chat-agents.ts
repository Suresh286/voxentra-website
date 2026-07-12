import type { ChatAgentsPageContent } from "@/content/types/pages";

export const chatAgentsPageContent: ChatAgentsPageContent = {
  meta: {
    title: "Chat AI Employees",
    description:
      "Deploy Chat AI Employees on messaging channels to resolve requests, qualify leads, and keep conversations moving — with seamless human handoff.",
  },
  hero: {
    eyebrow: "Chat AI Employees",
    headline: "AI employees for every messaging channel.",
    supportingCopy:
      "Respond instantly on live chat, SMS, and messaging platforms — resolve requests, qualify leads, and hand off with full context.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
  },
  overview: {
    eyebrow: "Chat AI overview",
    headline: "Messaging that completes business tasks.",
    supportingCopy:
      "Chat AI Employees are not FAQ bots. They understand context, follow workflows, and take action in your systems.",
    pillars: [
      {
        title: "Instant response",
        description:
          "Every message answered in seconds — no queue, no wait time.",
      },
      {
        title: "Context-aware",
        description:
          "Remembers conversation history and customer details across the session.",
      },
      {
        title: "Multi-channel",
        description:
          "Deploy on live chat, SMS, WhatsApp, and other messaging platforms.",
      },
      {
        title: "Seamless handoff",
        description:
          "Transfers to your team with full conversation context when needed.",
      },
    ],
  },
  customerJourney: {
    eyebrow: "Customer journey",
    headline: "From first message to resolution.",
    supportingCopy:
      "A typical chat conversation handled end-to-end by your AI employee.",
    steps: [
      {
        step: "01",
        title: "Customer reaches out",
        description:
          "Visitor starts a chat on your website, app, or messaging channel with a question or request.",
      },
      {
        step: "02",
        title: "AI employee responds",
        description:
          "Identifies intent, asks clarifying questions, and works through your defined workflow.",
      },
      {
        step: "03",
        title: "Outcome delivered",
        description:
          "Issue resolved, lead qualified, appointment booked, or case escalated with full context.",
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    headline: "Jobs chat AI employees handle today.",
    items: [
      {
        title: "Website live chat",
        description:
          "Answer visitor questions, qualify leads, and book demos from your website.",
      },
      {
        title: "Customer support",
        description:
          "Resolve FAQs, check order status, and escalate complex tickets instantly.",
      },
      {
        title: "Lead qualification",
        description:
          "Ask qualifying questions and route hot leads to sales with CRM updates.",
      },
      {
        title: "Appointment scheduling",
        description:
          "Check availability and confirm bookings through chat — no phone call needed.",
      },
      {
        title: "After-hours messaging",
        description:
          "Keep conversations moving when your team is offline.",
      },
      {
        title: "Proactive outreach",
        description:
          "Follow up with prospects and customers via messaging after key events.",
      },
    ],
  },
  integrations: {
    eyebrow: "Integrations",
    headline: "Connect to your messaging stack.",
    supportingCopy:
      "Chat AI Employees work inside the helpdesk, CRM, and messaging tools your team already uses.",
    items: [
      "Intercom",
      "Zendesk",
      "HubSpot",
      "Slack",
      "WhatsApp Business",
      "Custom chat widgets",
    ],
  },
  outcomes: {
    eyebrow: "Outcomes",
    headline: "What changes when chat never waits.",
    items: [
      {
        title: "Higher conversion rates",
        description:
          "Instant responses keep visitors engaged and moving toward a decision.",
      },
      {
        title: "Lower support volume",
        description:
          "Common requests resolved in chat before they become tickets.",
      },
      {
        title: "Better lead capture",
        description:
          "Every website visitor gets a response — not an abandoned chat window.",
      },
      {
        title: "Consistent brand voice",
        description:
          "Every conversation handled to your standards, on every channel.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "See Chat AI Employees on your channels.",
    supportingCopy:
      "Book a demo to explore chat deployment for your website and messaging platforms.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View Integrations", href: "/integrations" },
  },
};
