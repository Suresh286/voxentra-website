import type { CtaLink, FooterColumn, NavItem } from "@/content/types/content";

export const primaryCta: CtaLink = {
  label: "Book a Demo",
  href: "/demo",
};

export const mainNavigation: NavItem[] = [
  {
    type: "link",
    label: "Platform",
    href: "/platform",
  },
  {
    type: "dropdown",
    label: "AI Employees",
    href: "/platform",
    items: [
      {
        label: "Voice AI Employees",
        href: "/platform/voice-agents",
        description: "AI employees that handle phone conversations",
      },
      {
        label: "Chat AI Employees",
        href: "/platform/chat-agents",
        description: "AI employees for chat and messaging",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Customer Support", href: "/solutions/customer-support" },
      { label: "Sales & Lead Qualification", href: "/solutions/sales" },
      { label: "Appointment Booking", href: "/solutions/appointments" },
      { label: "Call Center Automation", href: "/solutions/call-center" },
      { label: "Internal Operations", href: "/solutions/operations" },
      { label: "View all solutions", href: "/solutions" },
    ],
  },
  {
    type: "dropdown",
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Education", href: "/industries/education" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "View all industries", href: "/industries" },
    ],
  },
  {
    type: "link",
    label: "Pricing",
    href: "/pricing",
  },
  {
    type: "dropdown",
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Guides & Playbooks", href: "/resources" },
      { label: "Customer Stories", href: "/customers" },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "AI Employees", href: "/platform#ai-employees" },
      { label: "Security", href: "/security" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer Support", href: "/solutions/customer-support" },
      { label: "Sales", href: "/solutions/sales" },
      { label: "Call Center", href: "/solutions/call-center" },
      { label: "View all", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Customer Stories", href: "/customers" },
      { label: "Industries", href: "/industries" },
    ],
  },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
] as const;
