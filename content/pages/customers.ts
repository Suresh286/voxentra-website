import type { CustomersPageContent } from "@/content/types/pages";

export const customersPageContent: CustomersPageContent = {
  meta: {
    title: "Customer Stories",
    description:
      "Explore how businesses use Voxentra AI employees — example workflows, industry applications, and a framework for measuring outcomes.",
  },
  hero: {
    eyebrow: "Customer Stories",
    headline: "What businesses automate with AI employees.",
    supportingCopy:
      "These are the workflows and outcomes Voxentra AI employees are built for. When you are ready, we will walk through examples relevant to your industry and operations.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View Solutions", href: "/solutions" },
  },
  outcomes: {
    eyebrow: "Customer outcomes",
    headline: "Results businesses pursue with AI employees.",
    supportingCopy:
      "These outcome categories represent what teams measure after deploying AI employees. Your results depend on scope, volume, and workflow.",
    items: [
      {
        title: "Faster response times",
        description:
          "Every inquiry answered in seconds instead of hours — across voice and chat channels.",
      },
      {
        title: "Higher conversion rates",
        description:
          "Leads contacted while intent is high, with consistent follow-up on every opportunity.",
      },
      {
        title: "Reduced operational cost",
        description:
          "More conversation volume handled without proportional headcount increases.",
      },
      {
        title: "Improved customer satisfaction",
        description:
          "No hold times, no repeated questions, and seamless escalation when humans are needed.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "What businesses deploy first.",
    items: [
      {
        title: "Inbound call handling",
        description:
          "Answer every call, resolve common requests, and route the rest with full context.",
      },
      {
        title: "Lead follow-up",
        description:
          "Call or message prospects after a form fill, demo request, or missed connection.",
      },
      {
        title: "Appointment scheduling",
        description:
          "Book, confirm, and remind — across phone and messaging channels.",
      },
      {
        title: "Customer support triage",
        description:
          "Resolve FAQs instantly and escalate issues your team should own.",
      },
      {
        title: "After-hours coverage",
        description:
          "Keep sales and support running when your office is closed.",
      },
      {
        title: "Operational coordination",
        description:
          "Status updates, reminders, and routine tasks that consume team hours.",
      },
    ],
  },
  industryExamples: {
    eyebrow: "Industry examples",
    headline: "How different sectors apply AI employees.",
    items: [
      {
        title: "Healthcare",
        description:
          "Patient scheduling, intake calls, and after-hours inquiry handling.",
      },
      {
        title: "Real estate",
        description:
          "Instant lead response, showing coordination, and prospect follow-up.",
      },
      {
        title: "Financial services",
        description:
          "Client inquiry handling, appointment booking, and secure call routing.",
      },
      {
        title: "Education",
        description:
          "Enrollment support, campus tour scheduling, and parent communication.",
      },
      {
        title: "Hospitality",
        description:
          "Reservation management, guest requests, and service coordination.",
      },
      {
        title: "Professional services",
        description:
          "Client intake, consultation booking, and follow-up coordination.",
      },
    ],
  },
  resultsFramework: {
    eyebrow: "Results framework",
    headline: "How to measure AI employee impact.",
    supportingCopy:
      "A practical framework for evaluating outcomes after deployment — tailored to your workflow during onboarding.",
    steps: [
      {
        step: "01",
        title: "Define baseline",
        description:
          "Document current response times, conversion rates, and operational costs for the workflow you are automating.",
      },
      {
        step: "02",
        title: "Deploy and measure",
        description:
          "Track conversation volume, resolution rates, and business actions completed by your AI employee.",
      },
      {
        step: "03",
        title: "Compare and scale",
        description:
          "Compare post-deployment metrics to baseline and expand to additional roles based on proven results.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Your turn",
    headline: "See examples relevant to your business.",
    supportingCopy:
      "Book a demo and we will walk through workflows and outcomes for your industry and use case.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
