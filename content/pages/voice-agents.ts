import type { VoiceAgentsPageContent } from "@/content/types/pages";

export const voiceAgentsPageContent: VoiceAgentsPageContent = {
  meta: {
    title: "Voice AI Employees",
    description:
      "Deploy Voice AI Employees that answer calls, qualify leads, book appointments, and handle customer conversations naturally — 24/7.",
  },
  hero: {
    eyebrow: "Voice AI Employees",
    headline: "AI employees that answer every call.",
    supportingCopy:
      "Natural voice conversations that qualify leads, resolve requests, book appointments, and route complex cases — without hold times.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
  },
  overview: {
    eyebrow: "Voice AI overview",
    headline: "Phone conversations handled like a team member.",
    supportingCopy:
      "Voice AI Employees are not IVR menus. They understand context, follow your processes, and complete business tasks on every call.",
    pillars: [
      {
        title: "Natural conversation",
        description:
          "Understands caller intent and responds conversationally — not with rigid scripts.",
      },
      {
        title: "Instant pickup",
        description:
          "Every call answered in under a second, regardless of volume or time of day.",
      },
      {
        title: "Workflow completion",
        description:
          "Updates CRM, books calendars, and routes cases — not just collects information.",
      },
      {
        title: "Human handoff",
        description:
          "Transfers to your team with full context when the conversation requires it.",
      },
    ],
  },
  callHandling: {
    eyebrow: "Call handling",
    headline: "How a voice call flows.",
    supportingCopy:
      "From ring to resolution — in one connected workflow.",
    steps: [
      {
        step: "01",
        title: "Call answered",
        description:
          "AI employee picks up instantly, greets the caller, and identifies the reason for the call.",
      },
      {
        step: "02",
        title: "Intent understood",
        description:
          "Processes the request — qualification, support, booking, or routing — using your business rules.",
      },
      {
        step: "03",
        title: "Action completed",
        description:
          "Updates CRM, confirms appointments, resolves requests, or prepares a handoff with full context.",
      },
    ],
  },
  languages: {
    eyebrow: "Languages",
    headline: "Multilingual voice support.",
    supportingCopy:
      "Serve diverse customer bases with AI employees that converse in multiple languages.",
    items: [
      "English",
      "Urdu",
      "Arabic",
      "Spanish",
      "French",
      "Hindi",
      "20+ languages",
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    headline: "Jobs voice AI employees handle today.",
    items: [
      {
        title: "Inbound sales calls",
        description:
          "Qualify leads, answer product questions, and book meetings on the first call.",
      },
      {
        title: "Customer support",
        description:
          "Resolve common inquiries and escalate complex cases with full conversation history.",
      },
      {
        title: "Appointment booking",
        description:
          "Check availability, confirm slots, and send reminders — no back-and-forth.",
      },
      {
        title: "Reception & routing",
        description:
          "Answer every call, capture details, and route to the right team or department.",
      },
      {
        title: "Outbound follow-up",
        description:
          "Call prospects after form fills, demos, or missed connections.",
      },
      {
        title: "After-hours coverage",
        description:
          "Keep sales and support running when your office is closed.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Outcomes",
    headline: "What changes when every call is answered.",
    items: [
      {
        title: "Zero missed calls",
        description:
          "Every caller reaches a professional response — not voicemail.",
      },
      {
        title: "Faster lead response",
        description:
          "Inbound inquiries qualified and booked while intent is highest.",
      },
      {
        title: "Lower cost per conversation",
        description:
          "Handle more volume without proportional hiring for every shift.",
      },
      {
        title: "Consistent caller experience",
        description:
          "Every call handled to the same standard, every time.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get started",
    headline: "Hear your Voice AI Employee in action.",
    supportingCopy:
      "Book a demo with scenarios tailored to your business and call volume.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View Pricing", href: "/pricing" },
  },
};
