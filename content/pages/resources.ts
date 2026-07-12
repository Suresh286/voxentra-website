import type { ResourcesPageContent } from "@/content/types/pages";

export const resourcesPageContent: ResourcesPageContent = {
  meta: {
    title: "Guides & Playbooks",
    description:
      "Voxentra guides, playbooks, and documentation — resources for deploying and scaling AI employees across your business.",
  },
  hero: {
    eyebrow: "Resources",
    headline: "Guides for hiring your AI workforce.",
    supportingCopy:
      "Practical resources for business leaders deploying AI employees — from first deployment to scaling across your operations.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  categories: {
    eyebrow: "Resource categories",
    headline: "What you will find here.",
    items: [
      {
        title: "Deployment guides",
        description:
          "Step-by-step guidance for launching your first AI employee.",
      },
      {
        title: "Industry playbooks",
        description:
          "Workflow patterns and best practices by sector.",
      },
      {
        title: "Integration docs",
        description:
          "Technical documentation for connecting Voxentra to your stack.",
      },
      {
        title: "Operations guides",
        description:
          "Managing, monitoring, and scaling your AI workforce over time.",
      },
    ],
  },
  guides: {
    eyebrow: "Guides",
    headline: "Deployment guides.",
    supportingCopy:
      "In-depth guides for business leaders planning their first AI employee deployment.",
    items: [
      {
        title: "Deploying Your First AI Employee",
        description:
          "A complete guide to scoping, configuring, and launching your first AI employee — from role definition to go-live.",
        category: "Guide",
        status: "In development",
      },
      {
        title: "Choosing the Right Channel: Voice vs. Chat",
        description:
          "How to decide whether to deploy on phone lines, messaging, or both based on your customer behavior.",
        category: "Guide",
        status: "In development",
      },
      {
        title: "Integration Planning Checklist",
        description:
          "A checklist for mapping CRM, calendar, telephony, and helpdesk connections before deployment.",
        category: "Guide",
        status: "In development",
      },
    ],
  },
  playbooks: {
    eyebrow: "Playbooks",
    headline: "Industry playbooks.",
    supportingCopy:
      "Workflow patterns and deployment strategies organized by industry and use case.",
    items: [
      {
        title: "Healthcare: Patient Scheduling Playbook",
        description:
          "Workflow patterns for appointment booking, reminders, and after-hours patient inquiries.",
        category: "Playbook",
        status: "In development",
      },
      {
        title: "Sales: Lead Qualification Playbook",
        description:
          "Qualification criteria, CRM integration patterns, and follow-up workflows for sales teams.",
        category: "Playbook",
        status: "In development",
      },
      {
        title: "Support: Ticket Triage Playbook",
        description:
          "FAQ resolution, escalation rules, and helpdesk integration for customer support teams.",
        category: "Playbook",
        status: "In development",
      },
    ],
  },
  documentation: {
    eyebrow: "Documentation",
    headline: "Platform documentation.",
    supportingCopy:
      "Technical documentation for integrations, APIs, and platform management.",
    items: [
      {
        title: "Platform Overview",
        description:
          "Architecture, management dashboard, and core platform capabilities.",
        category: "Documentation",
        status: "Available on request",
      },
      {
        title: "API Reference",
        description:
          "REST API endpoints for managing AI employees, workflows, and conversation data.",
        category: "Documentation",
        status: "Available on request",
      },
      {
        title: "Webhook Events",
        description:
          "Event types, payloads, and configuration for webhook-based integrations.",
        category: "Documentation",
        status: "Available on request",
      },
    ],
  },
  finalCta: {
    eyebrow: "Need help now?",
    headline: "Get personalized guidance from our team.",
    supportingCopy:
      "Book a demo for hands-on deployment planning, or contact us to request early access to resources.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
};
