import type { IndustryDetailPageContent } from "@/content/types/pages";

export const healthcareIndustryContent: IndustryDetailPageContent = {
  meta: {
    title: "Healthcare",
    description:
      "AI employees for healthcare — patient intake, appointment scheduling, and follow-up with workflows built for sensitive data and high call volumes.",
  },
  hero: {
    eyebrow: "Healthcare",
    headline: "Patient conversations handled with care.",
    supportingCopy:
      "Deploy AI employees for patient intake, scheduling, and follow-up — so your staff focuses on in-person care, not phone queues.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Industries", href: "/industries" },
  },
  challenges: {
    eyebrow: "Industry challenges",
    headline: "Phone volume exceeds front-desk capacity.",
    supportingCopy:
      "Healthcare teams face unique pressure — patients need timely responses, and staff cannot scale with call volume alone.",
    points: [
      "Patients call after hours for scheduling and intake when staff are unavailable.",
      "Front-desk teams are overwhelmed during flu season and appointment surges.",
      "Missed calls lead to delayed care and patient frustration.",
      "Staff time spent on scheduling reduces time available for in-person patient care.",
    ],
  },
  recommendedEmployees: {
    eyebrow: "Recommended AI employees",
    headline: "Roles that fit healthcare operations.",
    roles: [
      {
        title: "Appointment Booking AI Employee",
        description:
          "Handles scheduling, rescheduling, and reminder calls for patient visits.",
      },
      {
        title: "Reception AI Employee",
        description:
          "Answers inbound calls, routes to departments, and captures patient details.",
      },
      {
        title: "Customer Support AI Employee",
        description:
          "Resolves common patient inquiries about hours, directions, and billing FAQs.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "How healthcare teams use Voxentra.",
    items: [
      {
        title: "After-hours scheduling",
        description:
          "Patient calls at 8 PM → AI checks provider availability → appointment booked → confirmation sent.",
      },
      {
        title: "Appointment reminders",
        description:
          "Automated outbound calls reduce no-shows and keep schedules full.",
      },
      {
        title: "Intake pre-screening",
        description:
          "AI captures reason for visit and insurance details before the appointment.",
      },
      {
        title: "FAQ resolution",
        description:
          "Common questions about hours, locations, and policies answered instantly.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    headline: "Better patient access without more headcount.",
    items: [
      {
        title: "24/7 patient access",
        description:
          "Scheduling and inquiries handled around the clock, not just business hours.",
      },
      {
        title: "Reduced no-shows",
        description:
          "Automated reminders keep patients informed and appointments confirmed.",
      },
      {
        title: "Staff capacity reclaimed",
        description:
          "Front-desk teams focus on in-person patient needs instead of phone queues.",
      },
      {
        title: "Compliance-ready operations",
        description:
          "Encryption and access controls built for sensitive healthcare environments.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions from healthcare teams.",
    items: [
      {
        question: "Is Voxentra HIPAA-ready?",
        answer:
          "Voxentra is built with enterprise security and compliance-ready infrastructure. We discuss specific compliance requirements during onboarding.",
      },
      {
        question: "Can it integrate with our EHR or scheduling system?",
        answer:
          "Yes. We connect to major scheduling platforms and discuss EHR integration during deployment planning.",
      },
      {
        question: "Can patients still reach a human?",
        answer:
          "Yes. The AI employee transfers to your staff with full context whenever clinical judgment is needed.",
      },
      {
        question: "How quickly can we deploy?",
        answer:
          "Most healthcare scheduling deployments go live within days, depending on integration complexity.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Improve patient access with AI employees.",
    supportingCopy:
      "Book a demo to see healthcare workflows tailored to your practice or facility.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
