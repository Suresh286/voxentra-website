import type { PlatformPageContent } from "@/content/types/pages";

export const platformPageContent: PlatformPageContent = {
  meta: {
    title: "Platform",
    description:
      "The Voxentra enterprise AI workforce platform — deploy, manage, and scale AI employees across voice, chat, and business workflows.",
  },
  hero: {
    eyebrow: "Enterprise AI Workforce Platform",
    headline: "One platform. An entire AI workforce.",
    supportingCopy:
      "Deploy AI employees that answer customers, qualify leads, book appointments, and run operations — all managed from a single platform built for enterprise teams.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "View Pricing",
      href: "/pricing",
    },
  },
  overview: {
    eyebrow: "Platform overview",
    headline: "Built for businesses that run on conversations.",
    supportingCopy:
      "Voxentra is not a chatbot builder. It is the infrastructure layer for hiring, deploying, and scaling AI employees.",
    pillars: [
      {
        title: "AI Employees, not bots",
        description:
          "Each deployment is a role with responsibilities, integrations, and outcomes — not a generic script.",
      },
      {
        title: "Voice and chat native",
        description:
          "Hire employees that work on phone lines and messaging channels with the same operational standards.",
      },
      {
        title: "Workflow completion",
        description:
          "AI employees update CRMs, book calendars, route cases, and finish tasks — not just collect messages.",
      },
      {
        title: "Enterprise operations",
        description:
          "Security, access controls, and auditability are built in from day one — not bolted on later.",
      },
    ],
  },
  architecture: {
    eyebrow: "Architecture",
    headline: "How the platform works.",
    supportingCopy:
      "From customer conversation to completed business action — in one connected stack.",
    layers: [
      {
        title: "Conversation layer",
        description:
          "Voice and chat channels where AI employees meet your customers — inbound, outbound, and always available.",
      },
      {
        title: "AI employee layer",
        description:
          "Role-based agents trained for specific jobs: sales, support, reception, booking, and operations.",
      },
      {
        title: "Integration layer",
        description:
          "Connections to CRM, telephony, calendars, helpdesks, and operational tools your team already uses.",
      },
      {
        title: "Management layer",
        description:
          "One dashboard to monitor performance, adjust workflows, and scale your AI workforce over time.",
      },
    ],
  },
  aiEmployees: {
    eyebrow: "AI Employees",
    headline: "Hire for the role. Scale the team.",
    supportingCopy:
      "Start with one high-impact role and expand across your operations as results prove out.",
    roles: [
      {
        title: "Voice AI Employees",
        description:
          "Answer calls, make outbound follow-ups, and handle complex phone conversations naturally.",
      },
      {
        title: "Chat AI Employees",
        description:
          "Respond on messaging channels, resolve requests, and keep leads warm after hours.",
      },
      {
        title: "Sales AI Employees",
        description:
          "Qualify inbound leads, book meetings, and follow up so your pipeline stays active.",
      },
      {
        title: "Operations AI Employees",
        description:
          "Run scheduling, reminders, handoffs, and routine coordination across your team.",
      },
    ],
  },
  integrations: {
    eyebrow: "Integrations",
    headline: "Plugs into your existing stack.",
    supportingCopy:
      "Your AI employees work inside the tools your team already relies on.",
    categories: [
      "CRM",
      "Telephony",
      "Calendar",
      "Helpdesk",
      "Messaging",
      "ERP & Operations",
    ],
  },
  security: {
    eyebrow: "Security",
    headline: "Enterprise-grade by default.",
    supportingCopy:
      "Every conversation and workflow runs on infrastructure designed for regulated and high-volume environments.",
    pillars: [
      {
        title: "Encryption",
        description:
          "Data encrypted in transit and at rest across voice and chat operations.",
      },
      {
        title: "Access controls",
        description:
          "Role-based permissions so only authorized team members manage your AI workforce.",
      },
      {
        title: "Compliance-ready",
        description:
          "Built for teams in healthcare, finance, and other operationally sensitive industries.",
      },
      {
        title: "Auditability",
        description:
          "Conversation logs and workflow records for operational visibility and review.",
      },
    ],
  },
  dashboard: {
    eyebrow: "Management",
    headline: "One dashboard for your entire AI workforce.",
    supportingCopy:
      "Monitor, configure, and scale — without engineering overhead.",
    capabilities: [
      {
        title: "Workforce overview",
        description:
          "See every AI employee, their role, status, and current workload at a glance.",
      },
      {
        title: "Workflow configuration",
        description:
          "Adjust conversation flows, handoff rules, and business logic without code.",
      },
      {
        title: "Performance insights",
        description:
          "Track conversation volume, resolution rates, and outcomes across channels.",
      },
      {
        title: "Scale on demand",
        description:
          "Add employees, languages, and channels as your business grows.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "Deploy your first AI employee this week.",
    supportingCopy:
      "See the platform in action with a demo tailored to your workflows and industry.",
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
