import type { LegalPageContent } from "@/content/types/pages";

export const privacyPolicyContent: LegalPageContent = {
  meta: {
    title: "Privacy Policy",
    description:
      "How Voxentra AI collects, uses, and protects information when you use our website and platform services.",
  },
  hero: {
    eyebrow: "Legal",
    headline: "Privacy Policy",
    supportingCopy:
      "This policy describes how Voxentra AI (Private) Limited collects, uses, and protects information when you visit our website or use our services.",
  },
  sections: [
    {
      id: "information-collected",
      title: "Information We Collect",
      paragraphs: [
        "We collect information that you provide directly to us and information generated through your use of our website and services.",
      ],
      listItems: [
        "Contact information — such as your name, email address, company name, and phone number when you submit a form, request a demo, or contact us.",
        "Account and business information — details you provide during onboarding, deployment planning, or customer support interactions.",
        "Communication data — messages, emails, and conversation records related to your use of our platform services.",
        "Website usage data — such as pages visited, browser type, device information, and general interaction data collected through standard web technologies.",
      ],
    },
    {
      id: "how-information-is-used",
      title: "How Information Is Used",
      paragraphs: [
        "We use the information we collect for legitimate business purposes related to operating and improving our services.",
      ],
      listItems: [
        "To respond to inquiries, schedule demos, and provide customer support.",
        "To deliver, configure, and maintain AI employee deployments for our customers.",
        "To improve our website, platform, and services based on usage patterns and feedback.",
        "To send service-related communications, such as deployment updates or account notifications.",
        "To comply with applicable legal obligations and protect our rights.",
      ],
    },
    {
      id: "data-storage-security",
      title: "Data Storage & Security",
      paragraphs: [
        "We implement technical and organizational measures designed to protect information against unauthorized access, alteration, or disclosure. These measures include encryption in transit and at rest for platform operations, access controls, and secure infrastructure.",
        "Data retention periods depend on the type of information and the purpose for which it was collected. We retain information for as long as necessary to provide our services and fulfill the purposes described in this policy, unless a longer retention period is required by law.",
        "For more detail on our security practices, see our Security page.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "We may use third-party service providers to help operate our website and platform — such as hosting providers, communication tools, and integration partners. These providers process information on our behalf and are expected to handle data in accordance with applicable agreements.",
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.",
      ],
    },
    {
      id: "user-rights",
      title: "User Rights",
      paragraphs: [
        "Depending on your location and applicable law, you may have rights regarding your personal information — such as the right to access, correct, or request deletion of your data.",
        "To exercise these rights or ask questions about how we handle your information, contact us using the details below. We will respond to reasonable requests in accordance with applicable law.",
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
      "For privacy-related questions or requests, contact us at:",
    email: "hello@voxentra.ai",
    emailLabel: "hello@voxentra.ai",
  },
};
