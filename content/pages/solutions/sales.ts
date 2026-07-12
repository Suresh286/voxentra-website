import type { SolutionDetailPageContent } from "@/content/types/pages";

export const salesSolutionContent: SolutionDetailPageContent = {
  meta: {
    title: "Sales & Lead Qualification",
    description:
      "Deploy a Sales AI Employee to qualify inbound leads, follow up after demos, and keep your pipeline active — 24/7 on voice and chat.",
  },
  hero: {
    eyebrow: "Sales & Lead Qualification",
    headline: "Never let a lead go cold again.",
    supportingCopy:
      "Your Sales AI Employee answers inbound inquiries, asks qualifying questions, scores intent, and books meetings — while updating your CRM in real time.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Solutions", href: "/solutions" },
  },
  challenge: {
    eyebrow: "Business challenge",
    headline: "Revenue leaks when response times slip.",
    supportingCopy:
      "Most businesses lose deals not because of product fit — but because leads wait too long for a response.",
    points: [
      "Inbound leads arrive after hours when no one is available to respond.",
      "Sales reps spend time on unqualified inquiries instead of closing deals.",
      "Follow-up after demos and form fills is inconsistent across the team.",
      "CRM records are incomplete because conversation details never get logged.",
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "Your Sales AI Employee in action.",
    supportingCopy:
      "A dedicated role trained for your sales process, tone, and qualification criteria.",
    steps: [
      {
        title: "Answers every inquiry",
        description:
          "Responds instantly on voice and chat — inbound calls, website chats, and messaging channels.",
      },
      {
        title: "Qualifies with your criteria",
        description:
          "Asks the questions your team would ask, scores intent, and identifies ready-to-close opportunities.",
      },
      {
        title: "Books and follows up",
        description:
          "Schedules meetings on your calendar and follows up on demos, proposals, and missed connections.",
      },
      {
        title: "Updates your CRM",
        description:
          "Logs every conversation, lead score, and next step in HubSpot, Salesforce, or your pipeline tool.",
      },
    ],
  },
  workflow: {
    eyebrow: "Example workflow",
    headline: "From inbound call to booked meeting.",
    supportingCopy:
      "A typical sales conversation handled end-to-end by your AI employee.",
    steps: [
      {
        label: "Trigger",
        description: "Prospect calls after viewing your website pricing page.",
      },
      {
        label: "AI Employee",
        description: "Sales AI Employee",
      },
      {
        label: "Process",
        description:
          "Qualifies budget, timeline, and decision-maker → checks calendar availability → books a demo slot.",
      },
      {
        label: "Outcome",
        description:
          "Meeting confirmed, CRM updated, and confirmation sent to the prospect and sales rep.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Expected outcomes",
    headline: "What changes when sales runs 24/7.",
    items: [
      {
        title: "Higher lead conversion",
        description:
          "Every inbound inquiry receives an immediate, professional response — day or night.",
      },
      {
        title: "Cleaner pipeline data",
        description:
          "Lead scores and conversation notes logged automatically, not after the fact.",
      },
      {
        title: "More rep time on closing",
        description:
          "Your team focuses on qualified opportunities instead of initial screening.",
      },
      {
        title: "Consistent follow-up",
        description:
          "No prospect goes quiet after a demo, form fill, or missed call.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about Sales AI Employees.",
    items: [
      {
        question: "Can it integrate with our CRM?",
        answer:
          "Yes. Voxentra connects to HubSpot, Salesforce, Pipedrive, and other CRMs to log leads, scores, and meeting details automatically.",
      },
      {
        question: "Does it replace our sales team?",
        answer:
          "No. It handles initial qualification and follow-up so your reps spend time on conversations that need a human.",
      },
      {
        question: "Can we customize qualification questions?",
        answer:
          "Yes. Qualification criteria, tone, and handoff rules are configured during onboarding to match your sales process.",
      },
      {
        question: "How quickly can we deploy?",
        answer:
          "Most sales deployments go live within days, depending on CRM integration and workflow complexity.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to hire",
    headline: "Put a Sales AI Employee on your front line.",
    supportingCopy:
      "Book a demo to see lead qualification and follow-up tailored to your sales process.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
