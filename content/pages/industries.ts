import type { IndustriesHubPageContent } from "@/content/types/pages";

export const industriesHubContent: IndustriesHubPageContent = {
  meta: {
    title: "Industries",
    description:
      "Voxentra AI employees for healthcare, real estate, financial services, education, and hospitality — built for regulated and high-volume environments.",
  },
  hero: {
    eyebrow: "Industries",
    headline: "Where missed calls cost real money.",
    supportingCopy:
      "Voxentra AI employees serve teams that need reliable, consistent conversations — in regulated and high-volume environments alike.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "View Solutions",
      href: "/solutions",
    },
  },
  overview: {
    eyebrow: "Industry overview",
    headline: "AI employees built for your operational reality.",
    supportingCopy:
      "Every industry has different conversation patterns, compliance requirements, and peak volumes. Voxentra deploys AI employees configured for yours.",
    pillars: [
      {
        title: "Industry-specific workflows",
        description:
          "Pre-built patterns for scheduling, intake, lead response, and guest services — customized to your business.",
      },
      {
        title: "Compliance-aware design",
        description:
          "Security and data handling built for healthcare, finance, and other sensitive environments.",
      },
      {
        title: "Peak volume handling",
        description:
          "Scale conversation capacity during enrollment seasons, market surges, and holiday rushes without hiring.",
      },
      {
        title: "Multilingual support",
        description:
          "Serve diverse customer bases with AI employees that converse in multiple languages.",
      },
    ],
  },
  industries: {
    eyebrow: "All industries",
    headline: "Find your industry.",
    supportingCopy:
      "See how AI employees solve the conversation challenges specific to your sector.",
    fieldLabels: {
      challenge: "Challenge",
      aiEmployee: "Recommended AI Employee",
      workflowExample: "Example Workflow",
      outcome: "Business Outcome",
    },
    items: [
      {
        title: "Healthcare",
        description:
          "Patient intake, scheduling, and follow-up with workflows built for sensitive data.",
        challenge:
          "Patients call after hours and staff cannot keep up with intake and scheduling requests.",
        aiEmployee: "Appointment Booking AI Employee",
        workflowExample:
          "Patient calls to schedule a visit → AI checks availability → appointment confirmed and logged.",
        outcome: "Answer patient inquiries 24/7 without adding front-desk headcount.",
        cta: { label: "Learn More", href: "/industries/healthcare" },
      },
      {
        title: "Real Estate",
        description:
          "Instant lead response, showing coordination, and prospect follow-up at any hour.",
        challenge:
          "Property inquiries arrive around the clock, but agents cannot respond to every lead immediately.",
        aiEmployee: "Sales AI Employee",
        workflowExample:
          "Buyer inquires about a listing → AI qualifies intent → showing scheduled with your agent.",
        outcome: "Qualify property leads instantly and book showings without delay.",
        cta: { label: "Learn More", href: "/industries/real-estate" },
      },
      {
        title: "Financial Services",
        description:
          "Routine client inquiries and appointment-driven workflows handled with care.",
        challenge:
          "Clients expect fast answers on accounts, appointments, and common requests.",
        aiEmployee: "Customer Support AI Employee",
        workflowExample:
          "Client asks about an appointment → AI verifies details → meeting confirmed in calendar.",
        outcome: "Handle routine client inquiries securely while your team focuses on complex cases.",
        cta: { label: "Learn More", href: "/industries/finance" },
      },
      {
        title: "Education",
        description:
          "Enrollment questions, admin requests, and parent communication at scale.",
        challenge:
          "Enrollment seasons flood your office with repeat questions from students and parents.",
        aiEmployee: "Reception AI Employee",
        workflowExample:
          "Parent calls about enrollment → AI answers FAQs → complex cases routed to admissions.",
        outcome: "Scale enrollment support without overwhelming your admin team.",
        cta: { label: "Learn More", href: "/industries/education" },
      },
      {
        title: "Hospitality",
        description:
          "Reservations, guest requests, and service coordination without hold times.",
        challenge:
          "Guests expect instant answers on reservations, changes, and service requests.",
        aiEmployee: "Reception AI Employee",
        workflowExample:
          "Guest calls to modify a reservation → AI checks availability → booking updated and confirmed.",
        outcome: "Manage reservations and guest requests without hold times.",
        cta: { label: "Learn More", href: "/industries/hospitality" },
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why industries choose Voxentra",
    headline: "Built for environments where conversations matter.",
    reasons: [
      {
        title: "Regulatory readiness",
        description:
          "Encryption, access controls, and auditability standard — not optional add-ons.",
      },
      {
        title: "Operational reliability",
        description:
          "24/7 availability with enterprise-grade uptime for high-volume environments.",
      },
      {
        title: "Fast deployment",
        description:
          "Industry workflow patterns accelerate onboarding — most teams live within days.",
      },
      {
        title: "Human handoff built in",
        description:
          "Complex cases reach your team with full context. Customers never repeat themselves.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "See how AI employees fit your industry.",
    supportingCopy:
      "Book a demo tailored to your sector, workflows, and compliance requirements.",
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
