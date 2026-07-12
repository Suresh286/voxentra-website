import type { SecurityPageContent } from "@/content/types/pages";

export const securityPageContent: SecurityPageContent = {
  meta: {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security for Voxentra AI employees — encryption, access controls, auditability, and privacy commitments built in from day one.",
  },
  hero: {
    eyebrow: "Security & Compliance",
    headline: "Your data stays protected.",
    supportingCopy:
      "Enterprise security is not an add-on. It is how Voxentra is built — for every conversation, on every channel.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
  overview: {
    eyebrow: "Security overview",
    headline: "Built for teams that cannot compromise on trust.",
    supportingCopy:
      "Every AI employee deployment runs on infrastructure designed for regulated and high-volume environments.",
    pillars: [
      {
        title: "Encryption by default",
        description:
          "Data encrypted in transit and at rest across voice and chat operations.",
      },
      {
        title: "Role-based access",
        description:
          "Only authorized team members can configure, manage, or review AI employees.",
      },
      {
        title: "Compliance-ready",
        description:
          "Infrastructure designed for healthcare, finance, and operationally sensitive industries.",
      },
      {
        title: "Consistent policies",
        description:
          "The same security standards apply whether your employee is on a call or in a chat.",
      },
    ],
  },
  dataProtection: {
    eyebrow: "Data protection",
    headline: "Protection at every layer.",
    items: [
      {
        title: "Encryption in transit",
        description:
          "TLS encryption for all voice, chat, and API communications.",
      },
      {
        title: "Encryption at rest",
        description:
          "Conversation records and configuration data encrypted in storage.",
      },
      {
        title: "Data isolation",
        description:
          "Your deployment data is logically separated from other customers.",
      },
      {
        title: "Secure infrastructure",
        description:
          "Cloud infrastructure with enterprise-grade uptime and monitoring.",
      },
    ],
  },
  accessControls: {
    eyebrow: "Access controls",
    headline: "The right people see the right data.",
    items: [
      {
        title: "Role-based permissions",
        description:
          "Define who can deploy, configure, monitor, and review AI employees.",
      },
      {
        title: "Authentication standards",
        description:
          "Secure login and session management for platform access.",
      },
      {
        title: "Audit logging",
        description:
          "Administrative actions logged for operational review.",
      },
      {
        title: "Handoff controls",
        description:
          "Configure when and how conversations transfer to human team members.",
      },
    ],
  },
  auditability: {
    eyebrow: "Auditability",
    headline: "Full visibility into every conversation.",
    items: [
      {
        title: "Conversation records",
        description:
          "Complete transcripts and metadata for voice and chat interactions.",
      },
      {
        title: "Workflow logs",
        description:
          "Track what actions AI employees took — CRM updates, bookings, escalations.",
      },
      {
        title: "Operational reporting",
        description:
          "Performance metrics and outcome tracking across your AI workforce.",
      },
      {
        title: "Review workflows",
        description:
          "Support quality assurance and compliance review processes.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy commitments",
    headline: "Your data belongs to you.",
    supportingCopy:
      "Voxentra is committed to responsible data handling across every deployment.",
    points: [
      "Customer data is used solely to operate your AI employee deployment.",
      "We do not sell customer conversation data to third parties.",
      "Data retention policies are configurable to match your operational requirements.",
      "Privacy and data handling practices are documented and available on request.",
    ],
  },
  faq: {
    eyebrow: "Security FAQ",
    headline: "Common security questions.",
    items: [
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
      {
        question: "How is voice data handled?",
        answer:
          "Voice conversations are processed securely with the same encryption and access controls as chat data.",
      },
      {
        question: "Do you support compliance requirements?",
        answer:
          "Voxentra is built with compliance-ready infrastructure. Specific requirements are addressed during deployment planning.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Enterprise ready",
    headline: "Deploy AI employees with confidence.",
    supportingCopy:
      "Book a demo to discuss security requirements for your deployment.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
