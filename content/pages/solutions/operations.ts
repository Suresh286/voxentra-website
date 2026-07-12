import type { SolutionDetailPageContent } from "@/content/types/pages";

export const operationsSolutionContent: SolutionDetailPageContent = {
  meta: {
    title: "Internal Operations",
    description:
      "Deploy an Internal Operations AI Employee to coordinate schedules, send reminders, update task status, and automate routine team handoffs.",
  },
  hero: {
    eyebrow: "Internal Operations",
    headline: "Stop losing hours to routine coordination.",
    supportingCopy:
      "Your Internal Operations AI Employee runs scheduling, reminders, status updates, and handoffs across your team — so people focus on work that matters.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Solutions", href: "/solutions" },
  },
  challenge: {
    eyebrow: "Business challenge",
    headline: "Coordination work hides in plain sight.",
    supportingCopy:
      "Schedules, reminders, and status updates consume hours your team should spend on higher-value work.",
    points: [
      "Team members chase each other for status updates on routine tasks.",
      "Handoffs between departments lose context and delay completion.",
      "Reminder messages and follow-ups are inconsistent or forgotten.",
      "Operational tools stay out of sync because updates happen manually.",
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "Operations that run in the background.",
    steps: [
      {
        title: "Monitors workflows",
        description:
          "Tracks task status, deadlines, and handoff points across your operational tools.",
      },
      {
        title: "Sends proactive reminders",
        description:
          "Notifies team members via Slack, Teams, or messaging when action is needed.",
      },
      {
        title: "Coordinates schedules",
        description:
          "Manages internal meeting scheduling, shift coordination, and resource allocation.",
      },
      {
        title: "Updates systems",
        description:
          "Keeps task boards, CRMs, and operational tools in sync automatically.",
      },
    ],
  },
  workflow: {
    eyebrow: "Example workflow",
    headline: "From task assignment to completion.",
    steps: [
      {
        label: "Trigger",
        description: "Project task assigned to a team member with a Friday deadline.",
      },
      {
        label: "AI Employee",
        description: "Internal Operations AI Employee",
      },
      {
        label: "Process",
        description:
          "Sends reminder on Wednesday → checks status on Thursday → notifies manager if incomplete → marks complete when done.",
      },
      {
        label: "Outcome",
        description:
          "Task completed on time. Status updated in project tool. Team notified automatically.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Expected outcomes",
    headline: "Operations your team does not have to manage.",
    items: [
      {
        title: "Fewer dropped tasks",
        description:
          "Proactive reminders ensure nothing falls through the cracks.",
      },
      {
        title: "Cleaner handoffs",
        description:
          "Context travels with every transfer between teams and tools.",
      },
      {
        title: "More productive hours",
        description:
          "Your team stops coordinating and starts executing.",
      },
      {
        title: "Real-time visibility",
        description:
          "Managers see task status without chasing updates from individual team members.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about Internal Operations.",
    items: [
      {
        question: "Which tools does it integrate with?",
        answer:
          "Slack, Microsoft Teams, Zapier, project management tools, and CRMs. We scope integrations during onboarding.",
      },
      {
        question: "Is this for customer-facing work?",
        answer:
          "This solution focuses on internal coordination. For customer conversations, see our Sales, Support, or Reception solutions.",
      },
      {
        question: "Can we define custom workflows?",
        answer:
          "Yes. Handoff rules, reminder schedules, and escalation paths are configured to match your operations.",
      },
      {
        question: "How does it notify team members?",
        answer:
          "Through the channels your team already uses — Slack, Teams, email, or SMS — based on your preferences.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to hire",
    headline: "Automate the coordination work holding your team back.",
    supportingCopy:
      "Book a demo to see internal operations automation tailored to your workflows.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
