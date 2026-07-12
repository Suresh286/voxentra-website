import type { IndustryDetailPageContent } from "@/content/types/pages";

export const hospitalityIndustryContent: IndustryDetailPageContent = {
  meta: {
    title: "Hospitality",
    description:
      "AI employees for hospitality — reservation management, guest requests, and service coordination without hold times.",
  },
  hero: {
    eyebrow: "Hospitality",
    headline: "Guest service without hold times.",
    supportingCopy:
      "Deploy AI employees for reservations, guest requests, and service coordination — so your team delivers in-person hospitality, not phone tag.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Industries", href: "/industries" },
  },
  challenges: {
    eyebrow: "Industry challenges",
    headline: "Guests expect instant service at every touchpoint.",
    supportingCopy:
      "Hotels, restaurants, and venues face constant calls for reservations, changes, and service requests.",
    points: [
      "Front-desk staff juggle in-person guests and phone calls simultaneously.",
      "Reservation changes and cancellations require multiple interactions.",
      "Peak check-in times create phone queues that frustrate guests.",
      "After-hours calls for reservations go unanswered until morning.",
    ],
  },
  recommendedEmployees: {
    eyebrow: "Recommended AI employees",
    headline: "Roles that fit hospitality operations.",
    roles: [
      {
        title: "Reception AI Employee",
        description:
          "Answers guest calls, handles reservation inquiries, and routes service requests.",
      },
      {
        title: "Appointment Booking AI Employee",
        description:
          "Manages reservations, table bookings, and event scheduling.",
      },
      {
        title: "Customer Support AI Employee",
        description:
          "Resolves guest FAQs about amenities, policies, and directions.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "How hospitality teams use Voxentra.",
    items: [
      {
        title: "Reservation modification",
        description:
          "Guest calls to change dates → AI checks availability → booking updated → confirmation sent.",
      },
      {
        title: "Table booking",
        description:
          "Caller requests a dinner reservation → AI confirms party size and time → booking logged.",
      },
      {
        title: "Guest service requests",
        description:
          "Guest calls for extra towels → AI logs request → housekeeping notified automatically.",
      },
      {
        title: "Amenity inquiries",
        description:
          "Guest asks about pool hours or parking → AI answers instantly.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    headline: "Guest experience that starts before check-in.",
    items: [
      {
        title: "Zero hold times",
        description:
          "Every guest call answered instantly, even during peak check-in hours.",
      },
      {
        title: "Higher booking capture",
        description:
          "After-hours reservation calls convert to confirmed bookings, not missed opportunities.",
      },
      {
        title: "Staff focus on guests in person",
        description:
          "Front-desk teams serve walk-in guests while AI handles the phone line.",
      },
      {
        title: "Fewer booking errors",
        description:
          "Automated confirmation and modification reduce double-bookings and miscommunication.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions from hospitality teams.",
    items: [
      {
        question: "Can it integrate with our PMS or booking system?",
        answer:
          "Yes. We connect to major property management and reservation systems. Compatibility is confirmed during onboarding.",
      },
      {
        question: "Does it support multiple properties?",
        answer:
          "Yes. Route calls and bookings to the correct property based on caller input or phone number.",
      },
      {
        question: "Can it handle multiple languages?",
        answer:
          "Yes. Multilingual support serves international guests in their preferred language.",
      },
      {
        question: "Can guests reach a human when needed?",
        answer:
          "Yes. The AI employee transfers to your front-desk team with full context for complex requests.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Elevate guest service with AI employees.",
    supportingCopy:
      "Book a demo to see hospitality workflows tailored to your property or brand.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
