import type { ContactPageContent } from "@/content/types/pages";

export const contactPageContent: ContactPageContent = {
  meta: {
    title: "Contact",
    description:
      "Contact Voxentra AI to book a demo, discuss pricing, or explore how AI employees can support your business operations.",
  },
  hero: {
    eyebrow: "Contact",
    headline: "Let's talk about your AI workforce.",
    supportingCopy:
      "Whether you are ready to book a demo or exploring options for your team, we respond within one business day.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "View Platform",
      href: "/platform",
    },
  },
  options: {
    eyebrow: "How to reach us",
    headline: "Choose the path that fits your stage.",
    supportingCopy:
      "Every inquiry is handled by our team — not an automated queue.",
    items: [
      {
        title: "Book a demo",
        description:
          "See AI employees handle workflows relevant to your business in a live 30-minute session.",
        cta: {
          label: "Schedule Demo",
          href: "/demo",
        },
      },
      {
        title: "Pricing inquiry",
        description:
          "Discuss scope, volume, and integrations to receive a tailored pricing proposal.",
        cta: {
          label: "View Pricing",
          href: "/pricing",
        },
      },
      {
        title: "General inquiry",
        description:
          "Questions about platform capabilities, integrations, or partnership opportunities.",
        cta: {
          label: "Email Us",
          href: "mailto:hello@voxentra.ai",
        },
      },
    ],
  },
  demoRequest: {
    eyebrow: "Demo request",
    headline: "Ready to see Voxentra in action?",
    supportingCopy:
      "Tell us about your highest-impact workflow and we will tailor the demonstration.",
    points: [
      "30-minute live walkthrough",
      "Tailored to your industry and use case",
      "Integration and timeline discussion included",
      "No commitment required",
    ],
    cta: {
      label: "Book a Demo",
      href: "/demo",
    },
  },
  businessInquiry: {
    eyebrow: "Business inquiry",
    headline: "Discuss pricing or enterprise deployment.",
    supportingCopy:
      "For multi-channel, multi-location, or compliance-sensitive deployments.",
    points: [
      "Custom scope and pricing proposal",
      "Enterprise security and compliance review",
      "Dedicated integration planning",
      "Response within one business day",
    ],
    cta: {
      label: "Email Sales",
      href: "mailto:sales@voxentra.ai",
    },
  },
  finalCta: {
    eyebrow: "Hire your first AI employee",
    headline: "The fastest way to get started is a demo.",
    supportingCopy:
      "See how Voxentra AI employees fit your operations before you commit.",
    primaryCta: {
      label: "Book a Demo",
      href: "/demo",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
  },
};
