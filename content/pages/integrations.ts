import type { IntegrationsPageContent } from "@/content/types/pages";

export const integrationsPageContent: IntegrationsPageContent = {
  meta: {
    title: "Integrations",
    description:
      "Voxentra integrates with CRM, calendar, telephony, helpdesk, and operational tools — so AI employees take action inside your existing stack.",
  },
  hero: {
    eyebrow: "Integrations",
    headline: "Plugs into your existing stack.",
    supportingCopy:
      "Your AI employees work inside the CRM, phone system, and calendar your team already uses — so they take action, not just notes.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View Platform", href: "/platform" },
  },
  categories: {
    eyebrow: "Categories",
    headline: "Connect the tools your business runs on.",
    supportingCopy:
      "Voxentra supports integrations across the systems where conversations turn into business outcomes.",
    items: [
      "CRM",
      "Telephony",
      "Calendar",
      "Helpdesk",
      "Messaging",
      "ERP & Operations",
    ],
  },
  crm: {
    eyebrow: "CRM",
    headline: "Keep your pipeline current automatically.",
    supportingCopy:
      "AI employees log leads, update deal stages, and attach conversation notes — so your CRM reflects reality, not memory.",
    platforms: [
      "Salesforce",
      "HubSpot",
      "Pipedrive",
      "Zoho CRM",
      "Microsoft Dynamics",
    ],
  },
  calendar: {
    eyebrow: "Calendar",
    headline: "Book meetings without manual coordination.",
    supportingCopy:
      "Real-time availability checks, confirmed bookings, and automated reminders across your scheduling tools.",
    platforms: [
      "Google Calendar",
      "Microsoft Outlook",
      "Calendly",
      "Cal.com",
    ],
  },
  communication: {
    eyebrow: "Communication",
    headline: "Reach customers on the channels they use.",
    supportingCopy:
      "Voice, chat, and messaging integrations so AI employees meet customers where they are.",
    platforms: [
      "Twilio",
      "RingCentral",
      "Zendesk",
      "Intercom",
      "Slack",
      "Microsoft Teams",
    ],
  },
  apiWebhooks: {
    eyebrow: "API & webhooks",
    headline: "Extend workflows to any system.",
    supportingCopy:
      "When a native integration is not available, connect custom tools through APIs and webhooks.",
    features: [
      {
        title: "REST API access",
        description:
          "Programmatically manage AI employees, workflows, and conversation data.",
      },
      {
        title: "Webhook events",
        description:
          "Trigger actions in your systems when conversations start, complete, or require handoff.",
      },
      {
        title: "Custom integrations",
        description:
          "Dedicated integration planning for enterprise deployments with proprietary tools.",
      },
      {
        title: "Zapier & automation",
        description:
          "Connect Voxentra to thousands of apps through automation platforms.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "See how Voxentra fits your stack.",
    supportingCopy:
      "Book a demo and we will map your integrations during discovery.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
