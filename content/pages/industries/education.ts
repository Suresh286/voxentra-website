import type { IndustryDetailPageContent } from "@/content/types/pages";

export const educationIndustryContent: IndustryDetailPageContent = {
  meta: {
    title: "Education",
    description:
      "AI employees for education — enrollment support, admin requests, and parent communication at scale during peak seasons.",
  },
  hero: {
    eyebrow: "Education",
    headline: "Scale enrollment support without overwhelming your office.",
    supportingCopy:
      "Deploy AI employees for enrollment questions, admin requests, and parent communication — especially during peak admission seasons.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Industries", href: "/industries" },
  },
  challenges: {
    eyebrow: "Industry challenges",
    headline: "Enrollment season overwhelms admin teams.",
    supportingCopy:
      "Schools and universities face predictable surges in calls and inquiries that strain limited staff.",
    points: [
      "Enrollment periods generate hundreds of repeat questions from students and parents.",
      "Admin staff answer the same FAQs about deadlines, requirements, and campus visits.",
      "After-hours calls go to voicemail during critical admission windows.",
      "Complex cases get lost in phone queues when staff are handling routine inquiries.",
    ],
  },
  recommendedEmployees: {
    eyebrow: "Recommended AI employees",
    headline: "Roles that fit education operations.",
    roles: [
      {
        title: "Reception AI Employee",
        description:
          "Answers inbound calls, handles enrollment FAQs, and routes complex cases to admissions.",
      },
      {
        title: "Appointment Booking AI Employee",
        description:
          "Schedules campus tours, advisor meetings, and enrollment consultations.",
      },
      {
        title: "Customer Support AI Employee",
        description:
          "Resolves common student and parent inquiries about policies, deadlines, and requirements.",
      },
    ],
  },
  workflows: {
    eyebrow: "Example workflows",
    headline: "How education teams use Voxentra.",
    items: [
      {
        title: "Enrollment FAQ handling",
        description:
          "Parent calls about application deadlines → AI answers instantly → complex cases routed to admissions.",
      },
      {
        title: "Campus tour scheduling",
        description:
          "Prospective student requests a tour → AI checks availability → booking confirmed and reminder sent.",
      },
      {
        title: "Financial aid inquiries",
        description:
          "AI answers common aid questions and routes detailed cases to the financial aid office.",
      },
      {
        title: "After-hours support",
        description:
          "Calls answered during evening hours when admin offices are closed.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Business outcomes",
    headline: "Better access for students and parents.",
    items: [
      {
        title: "Reduced admin burden",
        description:
          "Routine inquiries handled automatically during peak enrollment periods.",
      },
      {
        title: "Faster parent response",
        description:
          "Questions answered instantly instead of waiting for a callback.",
      },
      {
        title: "More tours and meetings booked",
        description:
          "Automated scheduling fills campus visit calendars efficiently.",
      },
      {
        title: "Better case routing",
        description:
          "Complex inquiries reach the right department with full context.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions from education teams.",
    items: [
      {
        question: "Can it handle FERPA-related concerns?",
        answer:
          "Voxentra is built with enterprise security. We discuss data handling and compliance requirements during onboarding.",
      },
      {
        question: "Does it work during enrollment peaks?",
        answer:
          "Yes. AI employees scale to handle volume surges without adding temporary staff.",
      },
      {
        question: "Can we update FAQ content seasonally?",
        answer:
          "Yes. Enrollment deadlines, requirements, and policies can be updated as your academic calendar changes.",
      },
      {
        question: "Can it schedule campus tours?",
        answer:
          "Yes. Tour scheduling integrates with your calendar system and sends confirmations automatically.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to start",
    headline: "Prepare for enrollment season with AI employees.",
    supportingCopy:
      "Book a demo to see education workflows tailored to your institution.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
