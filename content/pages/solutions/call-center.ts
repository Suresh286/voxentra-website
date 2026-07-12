import type { SolutionDetailPageContent } from "@/content/types/pages";

export const callCenterSolutionContent: SolutionDetailPageContent = {
  meta: {
    title: "Call Center Automation",
    description:
      "Deploy a Reception AI Employee to answer every call, capture caller details, route inquiries, and eliminate hold times.",
  },
  hero: {
    eyebrow: "Call Center Automation",
    headline: "Answer every call. Route every inquiry.",
    supportingCopy:
      "Your Reception AI Employee greets callers, captures details, routes to the right team, and logs every interaction — without hold times.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View All Solutions", href: "/solutions" },
  },
  challenge: {
    eyebrow: "Business challenge",
    headline: "Missed calls mean missed revenue.",
    supportingCopy:
      "When your front desk is overwhelmed, callers hang up, go to voicemail, or reach the wrong person.",
    points: [
      "Peak call volumes overwhelm reception staff and create long hold times.",
      "After-hours callers reach voicemail instead of getting help.",
      "Callers are routed incorrectly and repeat their request to multiple people.",
      "Caller details and follow-up actions are lost when staff are busy.",
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "A front desk that never gets overwhelmed.",
    steps: [
      {
        title: "Answers instantly",
        description:
          "Every call answered in under a second — no hold music, no voicemail.",
      },
      {
        title: "Captures caller intent",
        description:
          "Identifies why the caller is reaching out and collects relevant details.",
      },
      {
        title: "Routes intelligently",
        description:
          "Transfers to the right department, person, or workflow based on your rules.",
      },
      {
        title: "Logs and follows up",
        description:
          "Records caller details and triggers follow-up messages when needed.",
      },
    ],
  },
  workflow: {
    eyebrow: "Example workflow",
    headline: "From inbound call to correct routing.",
    steps: [
      {
        label: "Trigger",
        description: "Caller dials your main business line during peak hours.",
      },
      {
        label: "AI Employee",
        description: "Reception AI Employee",
      },
      {
        label: "Process",
        description:
          "Greets caller → identifies inquiry type → captures name and details → routes to billing team.",
      },
      {
        label: "Outcome",
        description:
          "Caller connected on first attempt. Interaction logged with full context for the receiving team.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Expected outcomes",
    headline: "Call handling your customers notice.",
    items: [
      {
        title: "Zero missed calls",
        description:
          "Every caller greeted professionally, regardless of volume or time of day.",
      },
      {
        title: "First-call resolution routing",
        description:
          "Callers reach the right team without transfers and repeated explanations.",
      },
      {
        title: "Complete call records",
        description:
          "Every interaction logged with caller details and routing decisions.",
      },
      {
        title: "Reduced front-desk pressure",
        description:
          "Your team handles complex in-person needs while AI manages the phone line.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions about Call Center Automation.",
    items: [
      {
        question: "Can it integrate with our phone system?",
        answer:
          "Yes. Voxentra connects to major telephony providers and PBX systems for inbound and outbound call handling.",
      },
      {
        question: "Can callers still reach a human?",
        answer:
          "Yes. The AI employee transfers to your team with full context whenever the caller requests it or the workflow requires it.",
      },
      {
        question: "Does it support multiple languages?",
        answer:
          "Yes. Multilingual voice support is available. We confirm language coverage for your deployment during onboarding.",
      },
      {
        question: "Can it handle outbound calls too?",
        answer:
          "Yes. Use it for appointment reminders, follow-ups, and proactive outreach in addition to inbound reception.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to hire",
    headline: "Put a Reception AI Employee on your phone line.",
    supportingCopy:
      "Book a demo to see call handling and routing tailored to your business.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Sales", href: "/contact" },
  },
};
