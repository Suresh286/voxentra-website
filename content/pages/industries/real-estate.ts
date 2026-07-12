import type { IndustryDetailPageContent } from "@/content/types/pages";

export const realEstateIndustryContent: IndustryDetailPageContent = {
  meta: {
    title: "Real Estate",
    description:
      "AI employees for real estate — instant lead response, showing coordination, and prospect follow-up so no inquiry goes unanswered.",
  },
  hero: {
    eyebrow: "Real Estate",
    headline: "Respond to every lead before they call the next agent.",
    supportingCopy:
      "Deploy AI employees for lead qualification, showing coordination, and follow-up — so your agents close deals instead of chasing voicemails.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Industries", href: "/industries" },
  },
  challenges: {
    eyebrow: "Industry challenges",
    headline: "Speed wins in real estate.",
    supportingCopy:
      "Buyers and renters contact multiple agents. The first professional response often wins the relationship.",
    points: [
      "Property inquiries arrive at all hours — evenings, weekends, and holidays.",
      "Agents miss calls while showing properties or in meetings.",
      "Lead follow-up is inconsistent across a busy agent roster.",
      "Showing coordination requires multiple calls and calendar checks per prospect.",
    ],
  },
  recommendedEmployees: {
    eyebrow: "Recommended AI employees",
    headline: "Roles that fit real estate operations.",
    roles: [
      {
        title: "Sales AI Employee",
        description:
          "Qualifies buyer and renter intent, answers listing questions, and books showings.",
      },
      {
        title: "Appointment Booking AI Employee",
        description:
          "Coordinates showing schedules across agents, properties, and prospect availability.",
      },
      {
        title: "Reception AI Employee",
        description:
          "Answers your brokerage line, routes calls, and captures caller details.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "How real estate teams use Voxentra.",
    items: [
      {
        title: "Instant lead response",
        description:
          "Buyer inquires about a listing at 9 PM → AI qualifies budget and timeline → showing booked.",
      },
      {
        title: "Showing coordination",
        description:
          "AI checks agent and property availability → confirms showing → sends calendar invite.",
      },
      {
        title: "Open house follow-up",
        description:
          "Automated follow-up calls to open house attendees within 24 hours.",
      },
      {
        title: "Rental inquiries",
        description:
          "AI answers availability questions and schedules property viewings.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    headline: "More closings from faster response.",
    items: [
      {
        title: "Higher lead conversion",
        description:
          "Every inquiry answered instantly — before the prospect moves to a competitor.",
      },
      {
        title: "More showings booked",
        description:
          "Automated scheduling removes back-and-forth and fills agent calendars.",
      },
      {
        title: "Consistent follow-up",
        description:
          "Every lead receives timely follow-up regardless of agent availability.",
      },
      {
        title: "CRM always updated",
        description:
          "Lead details, scores, and showing history logged automatically.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions from real estate teams.",
    items: [
      {
        question: "Can it answer questions about specific listings?",
        answer:
          "Yes. Your AI employee is trained on your active listings, pricing, and property details.",
      },
      {
        question: "Does it work for brokerages with multiple agents?",
        answer:
          "Yes. Route leads and showings to the right agent based on territory, listing, or availability.",
      },
      {
        question: "Can it integrate with our CRM?",
        answer:
          "Yes. Voxentra connects to major real estate CRMs to log leads and activity automatically.",
      },
      {
        question: "Does it handle both buyers and renters?",
        answer:
          "Yes. Configure separate workflows for sales, rentals, and commercial inquiries.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Win more leads with AI employees.",
    supportingCopy:
      "Book a demo to see real estate workflows tailored to your brokerage or team.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
