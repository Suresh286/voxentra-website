import type { IndustryDetailPageContent } from "@/content/types/pages";

export const financeIndustryContent: IndustryDetailPageContent = {
  meta: {
    title: "Financial Services",
    description:
      "AI employees for financial services — secure client inquiry handling, appointment scheduling, and routine support with enterprise-grade security.",
  },
  hero: {
    eyebrow: "Financial Services",
    headline: "Client service at the speed they expect.",
    supportingCopy:
      "Deploy AI employees for routine client inquiries, appointment scheduling, and account FAQs — with security built for financial environments.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Industries", href: "/industries" },
  },
  challenges: {
    eyebrow: "Industry challenges",
    headline: "Clients expect instant, secure responses.",
    supportingCopy:
      "Financial services teams balance responsiveness with compliance — and phone volume keeps growing.",
    points: [
      "Clients call for appointment changes and account questions outside business hours.",
      "Advisors spend time on routine inquiries instead of client relationships.",
      "Call hold times damage client trust and satisfaction scores.",
      "Compliance requirements make ad-hoc automation risky without proper infrastructure.",
    ],
  },
  recommendedEmployees: {
    eyebrow: "Recommended AI employees",
    headline: "Roles that fit financial services operations.",
    roles: [
      {
        title: "Customer Support AI Employee",
        description:
          "Handles routine client inquiries about accounts, appointments, and office policies.",
      },
      {
        title: "Appointment Booking AI Employee",
        description:
          "Schedules advisor meetings, confirms details, and sends reminders.",
      },
      {
        title: "Reception AI Employee",
        description:
          "Routes calls to the right advisor or department with caller verification.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "How financial services teams use Voxentra.",
    items: [
      {
        title: "Advisor appointment booking",
        description:
          "Client calls to schedule a review → AI verifies identity → meeting booked with the right advisor.",
      },
      {
        title: "Account FAQ resolution",
        description:
          "Client asks about office hours or document requirements → AI answers instantly.",
      },
      {
        title: "After-hours inquiry handling",
        description:
          "Calls answered and logged after hours → advisor receives summary next morning.",
      },
      {
        title: "Secure call routing",
        description:
          "Caller verified and routed to the correct department without hold times.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    headline: "Better client experience, stronger compliance posture.",
    items: [
      {
        title: "Faster client response",
        description:
          "Routine inquiries resolved instantly — not queued until the next business day.",
      },
      {
        title: "Advisor time protected",
        description:
          "Your team focuses on advisory work instead of scheduling and FAQs.",
      },
      {
        title: "Audit-ready records",
        description:
          "Every conversation logged with timestamps for operational review.",
      },
      {
        title: "Enterprise security",
        description:
          "Encryption and access controls standard for regulated environments.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions from financial services teams.",
    items: [
      {
        question: "How is client data protected?",
        answer:
          "Data is encrypted in transit and at rest. Role-based access controls limit who can view conversation records.",
      },
      {
        question: "Can it handle identity verification?",
        answer:
          "Yes. Verification workflows are configured during onboarding to match your compliance requirements.",
      },
      {
        question: "Does it replace financial advisors?",
        answer:
          "No. It handles routine inquiries and scheduling so advisors focus on client relationships and complex advice.",
      },
      {
        question: "Can we review conversation records?",
        answer:
          "Yes. Full conversation logs are available for operational review and quality assurance.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Modernize client service with AI employees.",
    supportingCopy:
      "Book a demo to see financial services workflows tailored to your firm.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
