import type { BlogPageContent } from "@/content/types/pages";

export const blogPageContent: BlogPageContent = {
  meta: {
    title: "Blog",
    description:
      "Insights on AI employees, enterprise automation, and the future of business conversations — from the Voxentra team.",
  },
  hero: {
    eyebrow: "Blog",
    headline: "Insights on the AI workforce.",
    supportingCopy:
      "Perspectives on deploying AI employees, industry trends, and practical guidance for business leaders.",
    primaryCta: { label: "Book a Demo", href: "/demo" },
    secondaryCta: { label: "View Resources", href: "/resources" },
  },
  featured: {
    eyebrow: "Featured",
    headline: "Articles are on the way.",
    supportingCopy:
      "We are preparing our first articles on AI employee deployment, industry workflows, and enterprise automation. Check back soon — or contact us to be notified when new content publishes.",
  },
  categories: {
    eyebrow: "Categories",
    headline: "Topics we will cover.",
    supportingCopy:
      "Our blog will focus on practical insights for business leaders evaluating and deploying AI employees.",
    items: [
      "AI Employees",
      "Industry Insights",
      "Deployment Guides",
      "Platform Updates",
      "Enterprise Automation",
    ],
  },
  contentStrategy: {
    eyebrow: "Content strategy",
    headline: "What to expect from the Voxentra blog.",
    supportingCopy:
      "We publish when we have something useful to say — not on a schedule for its own sake.",
    points: [
      "Practical guides for deploying AI employees in specific industries and use cases.",
      "Honest perspectives on what AI employees can and cannot do today.",
      "Platform updates and integration announcements when they ship.",
      "No hype, no fabricated case studies — real insights from building enterprise AI infrastructure.",
    ],
  },
  finalCta: {
    eyebrow: "Stay informed",
    headline: "Want to know when we publish?",
    supportingCopy:
      "Contact us and we will notify you when new articles are available.",
    primaryCta: { label: "Contact Us", href: "/contact" },
    secondaryCta: { label: "View Resources", href: "/resources" },
  },
};
