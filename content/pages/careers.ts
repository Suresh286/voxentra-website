import type { CareersPageContent } from "@/content/types/pages";

export const careersPageContent: CareersPageContent = {
  meta: {
    title: "Careers",
    description:
      "Join Voxentra AI and help build the enterprise AI workforce platform. Learn about our values, culture, and future opportunities.",
  },
  hero: {
    eyebrow: "Careers",
    headline: "Help build the AI workforce.",
    supportingCopy:
      "Voxentra is building the platform that lets businesses hire AI employees. We are a focused team solving a hard problem at the intersection of AI, voice, and enterprise operations.",
    primaryCta: { label: "Get in Touch", href: "/contact" },
    secondaryCta: { label: "About Voxentra", href: "/about" },
  },
  workingAt: {
    eyebrow: "Working at Voxentra",
    headline: "Small team. Big problem. Real impact.",
    supportingCopy:
      "We are building enterprise infrastructure — not a consumer app. That means high standards, direct ownership, and work that matters to the businesses we serve.",
    points: [
      "Direct impact on product and customer outcomes — no layers of bureaucracy.",
      "Work at the intersection of AI, voice technology, and enterprise software.",
      "Remote-friendly with a culture of async communication and clear documentation.",
      "Focus on building production systems that businesses depend on daily.",
    ],
  },
  values: {
    eyebrow: "Values",
    headline: "What we stand for.",
    items: [
      {
        title: "Customer outcomes first",
        description:
          "We build what helps businesses deploy AI employees successfully — not what looks good in a demo.",
      },
      {
        title: "Craft and reliability",
        description:
          "Enterprise customers depend on us. We ship carefully and maintain what we build.",
      },
      {
        title: "Honest communication",
        description:
          "We tell customers and each other the truth — about capabilities, timelines, and trade-offs.",
      },
      {
        title: "Continuous learning",
        description:
          "AI and voice technology evolve fast. We stay curious and adapt.",
      },
    ],
  },
  hiringPhilosophy: {
    eyebrow: "Hiring philosophy",
    headline: "We hire for impact, not headcount.",
    supportingCopy:
      "We add team members when a role directly accelerates our ability to serve customers. We look for people who take ownership, communicate clearly, and care about building systems that work in production — not just prototypes.",
  },
  futureOpportunities: {
    eyebrow: "Future opportunities",
    headline: "No open positions right now.",
    supportingCopy:
      "We are not actively hiring for specific roles at this time. As Voxentra grows, we expect to expand across engineering, customer success, and go-to-market.",
    points: [
      "Engineering — platform, voice AI, integrations, and infrastructure.",
      "Customer success — onboarding, deployment, and ongoing account support.",
      "Go-to-market — enterprise sales and partnerships.",
      "Interested in future roles? Reach out through our contact page.",
    ],
  },
  finalCta: {
    eyebrow: "Stay connected",
    headline: "Interested in joining Voxentra?",
    supportingCopy:
      "Send us a note through our contact page. We will keep your information on file for future opportunities.",
    primaryCta: { label: "Contact Us", href: "/contact" },
    secondaryCta: { label: "About Voxentra", href: "/about" },
  },
};
