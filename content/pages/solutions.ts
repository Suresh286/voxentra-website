import type { SolutionsHubPageContent } from "@/content/types/pages";

export const solutionsHubContent: SolutionsHubPageContent = {
  meta: {
    title: "Solutions",
    description:
      "AI employee solutions for sales, customer support, appointment booking, call center automation, and internal operations.",
  },
  hero: {
    eyebrow: "Solutions",
    headline: "Six jobs your AI employees can own.",
    supportingCopy:
      "Pick the workflow costing you time today. Voxentra deploys an AI employee trained for that exact job — on voice, chat, or both.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Explore the Platform",
      href: "/platform",
    },
  },
  overview: {
    eyebrow: "AI employee solutions",
    headline: "Every solution is a role, not a feature.",
    supportingCopy:
      "You do not configure a bot. You hire an AI employee with a defined job, integrations, and measurable outcomes.",
    pillars: [
      {
        title: "Job-specific deployment",
        description:
          "Each solution maps to a real operational role your team would otherwise hire for.",
      },
      {
        title: "Voice and chat ready",
        description:
          "Deploy on phone lines, messaging channels, or both — with the same workflow logic.",
      },
      {
        title: "Integration-first",
        description:
          "AI employees update your CRM, calendar, and helpdesk — not just conversation logs.",
      },
      {
        title: "Scale without headcount",
        description:
          "Handle more volume, longer hours, and peak seasons without adding shifts.",
      },
    ],
  },
  solutions: {
    eyebrow: "All solutions",
    headline: "Find the workflow to automate first.",
    supportingCopy:
      "Start with your highest-impact job. Expand your AI workforce as results prove out.",
    fieldLabels: {
      problem: "Problem",
      aiEmployee: "AI Employee",
      outcome: "Business Outcome",
    },
    items: [
      {
        title: "Sales & Lead Qualification",
        description:
          "Qualify inbound leads, follow up after demos, and keep your pipeline active around the clock.",
        problem:
          "Leads arrive outside business hours or pile up faster than your team can respond.",
        aiEmployee: "Sales AI Employee",
        outcome:
          "Qualified leads are scored, logged in your CRM, and routed to sales with full context.",
        cta: { label: "Learn More", href: "/solutions/sales" },
      },
      {
        title: "Customer Support",
        description:
          "Resolve common requests on the spot and route complex cases with full context.",
        problem:
          "Support queues grow while customers wait for answers your team repeats daily.",
        aiEmployee: "Customer Support AI Employee",
        outcome:
          "Common requests are resolved instantly; complex cases reach your team with full history.",
        cta: { label: "Learn More", href: "/solutions/customer-support" },
      },
      {
        title: "Appointment Booking",
        description:
          "Check availability, confirm meetings, and send reminders — no back-and-forth.",
        problem:
          "Booking appointments takes multiple calls, emails, and calendar checks.",
        aiEmployee: "Appointment Booking AI Employee",
        outcome:
          "Meetings are confirmed, calendars updated, and reminders sent automatically.",
        cta: { label: "Learn More", href: "/solutions/appointments" },
      },
      {
        title: "Call Center Automation",
        description:
          "Answer every call, capture caller details, and route inquiries to the right team.",
        problem:
          "Calls go unanswered or sit on hold when your front desk is overwhelmed.",
        aiEmployee: "Reception AI Employee",
        outcome:
          "Every caller is greeted, routed correctly, and logged for follow-up.",
        cta: { label: "Learn More", href: "/solutions/call-center" },
      },
      {
        title: "Internal Operations",
        description:
          "Handle scheduling, status updates, and routine coordination across your team.",
        problem:
          "Routine coordination pulls your team away from higher-value work.",
        aiEmployee: "Internal Operations AI Employee",
        outcome:
          "Schedules, reminders, and handoffs run automatically across your tools.",
        cta: { label: "Learn More", href: "/solutions/operations" },
      },
    ],
  },
  benefits: {
    eyebrow: "Why businesses choose Voxentra",
    headline: "Outcomes you can measure from week one.",
    items: [
      {
        title: "Faster response times",
        description:
          "Every inquiry answered in seconds — not hours or the next business day.",
      },
      {
        title: "Higher conversion rates",
        description:
          "Leads contacted while intent is high, with consistent follow-up on every opportunity.",
      },
      {
        title: "Lower operational cost",
        description:
          "Scale conversation volume without proportional hiring for every shift.",
      },
      {
        title: "Better customer experience",
        description:
          "No hold times, no repeated questions, and seamless handoff when a human is needed.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "Hire your first AI employee for the job that matters most.",
    supportingCopy:
      "Book a demo and we will map your highest-impact workflow to a deployed AI employee.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "View Pricing",
      href: "/pricing",
    },
  },
};
