import type { AboutPageContent } from "@/content/types/pages";

export const aboutPageContent: AboutPageContent = {
  meta: {
    title: "About",
    description:
      "Voxentra AI builds the enterprise AI workforce platform — helping businesses deploy AI employees that handle conversations and complete workflows.",
  },
  hero: {
    eyebrow: "About Voxentra",
    headline: "Building the AI workforce for modern businesses.",
    supportingCopy:
      "Voxentra AI (Private) Limited is an enterprise AI workforce platform company. We help businesses hire, deploy, and scale AI employees that handle real conversations and complete real work.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
  },
  story: {
    eyebrow: "Our story",
    headline: "We saw businesses losing revenue to missed conversations.",
    supportingCopy:
      "Every day, businesses miss calls, leave leads waiting, and overwhelm support teams with repetitive requests. The tools available — chatbots and IVR systems — could answer questions but could not complete work. Voxentra was founded to close that gap: AI employees that handle conversations the way a trained team member would, integrated into the systems businesses already rely on.",
  },
  mission: {
    eyebrow: "Mission",
    headline: "Make AI employees accessible to every business.",
    supportingCopy:
      "We believe every business — regardless of size — should be able to deploy AI employees that answer customers, qualify leads, and run operations without a multi-month engineering project.",
  },
  vision: {
    eyebrow: "Vision",
    headline: "An AI employee for every role that runs on conversations.",
    supportingCopy:
      "We are building toward a world where businesses hire AI employees the same way they hire people — by role, with clear responsibilities, measurable outcomes, and the ability to scale as the business grows.",
  },
  principles: {
    eyebrow: "Core principles",
    headline: "How we build and operate.",
    items: [
      {
        title: "Outcomes over features",
        description:
          "We measure success by business results — booked meetings, resolved tickets, completed workflows — not conversation volume.",
      },
      {
        title: "Integration-first",
        description:
          "AI employees must work inside existing tools. A conversation that does not update your CRM is incomplete.",
      },
      {
        title: "Enterprise trust",
        description:
          "Security, access controls, and auditability are standard — not premium add-ons.",
      },
      {
        title: "Human partnership",
        description:
          "AI employees augment teams. Handoff to humans is a feature, not a failure.",
      },
    ],
  },
  whyExists: {
    eyebrow: "Why Voxentra exists",
    headline: "Businesses need employees, not bots.",
    supportingCopy:
      "The market is full of chatbot builders and voice bot platforms that require engineering teams to configure, maintain, and scale. Voxentra exists for business leaders who need AI employees deployed for a specific job — with integrations, security, and management built in from day one.",
  },
  finalCta: {
    eyebrow: "Work with us",
    headline: "See what Voxentra can do for your business.",
    supportingCopy:
      "Book a demo or get in touch to learn how AI employees fit your operations.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
};
