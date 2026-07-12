import type { LegalPageContent } from "@/content/types/pages";

export const cookiePolicyContent: LegalPageContent = {
  meta: {
    title: "Cookie Policy",
    description:
      "How Voxentra AI uses cookies and similar technologies on our website.",
  },
  hero: {
    eyebrow: "Legal",
    headline: "Cookie Policy",
    supportingCopy:
      "This policy explains how Voxentra AI (Private) Limited uses cookies and similar technologies when you visit our website.",
  },
  sections: [
    {
      id: "what-are-cookies",
      title: "What Cookies Are",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how visitors use the site, and improve the browsing experience.",
        "Similar technologies — such as local storage and session storage — may also be used for comparable purposes. References to \"cookies\" in this policy include these related technologies where applicable.",
      ],
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies Used",
      paragraphs: [
        "We use a limited set of cookies on our website, grouped into the categories below. We do not use cookies for advertising or cross-site tracking.",
      ],
    },
    {
      id: "essential-cookies",
      title: "Essential Cookies",
      paragraphs: [
        "Essential cookies are required for the website to function properly. They enable core features such as page navigation and access to secure areas.",
      ],
      listItems: [
        "Session management — maintaining your session state as you navigate the site.",
        "Security — supporting basic security features and protecting against misuse.",
        "Preference storage — remembering choices you make that affect site behavior.",
      ],
    },
    {
      id: "analytics-cookies",
      title: "Analytics Cookies",
      paragraphs: [
        "Analytics cookies help us understand how visitors interact with our website — such as which pages are visited and how long users stay. This information is used in aggregate to improve our site.",
        "We currently use minimal analytics tooling focused on understanding general site usage. If we introduce additional analytics services, this policy will be updated accordingly.",
      ],
    },
    {
      id: "managing-cookies",
      title: "Managing Cookies",
      paragraphs: [
        "Most web browsers allow you to control cookies through their settings. You can typically choose to block all cookies, accept all cookies, or receive a notification before a cookie is stored.",
        "Please note that disabling essential cookies may affect the functionality of our website. Blocking analytics cookies will not prevent you from using the site.",
        "For instructions on managing cookies, refer to your browser's help documentation.",
      ],
    },
  ],
  lastUpdated: {
    label: "Last updated",
    date: "July 12, 2026",
  },
  contact: {
    headline: "Contact Information",
    supportingCopy:
      "For questions about our use of cookies, contact us at:",
    email: "hello@voxentra.ai",
    emailLabel: "hello@voxentra.ai",
  },
};
