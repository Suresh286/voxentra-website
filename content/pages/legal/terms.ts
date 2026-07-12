import type { LegalPageContent } from "@/content/types/pages";

export const termsOfServiceContent: LegalPageContent = {
  meta: {
    title: "Terms of Service",
    description:
      "Terms governing your use of the Voxentra AI website and platform services.",
  },
  hero: {
    eyebrow: "Legal",
    headline: "Terms of Service",
    supportingCopy:
      "These terms govern your access to and use of the Voxentra AI website and platform services operated by Voxentra AI (Private) Limited.",
  },
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing or using our website or services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.",
        "If you are using our services on behalf of a business, you represent that you have authority to bind that business to these terms.",
      ],
    },
    {
      id: "use-of-services",
      title: "Use of Services",
      paragraphs: [
        "Voxentra provides an enterprise AI workforce platform that enables businesses to deploy AI employees for voice, chat, and workflow automation.",
        "Access to platform services is provided under separate agreements scoped to each customer's deployment. These website terms apply to general use of our site and any publicly available features.",
      ],
      listItems: [
        "You may use our website for lawful business purposes related to evaluating or engaging with our services.",
        "You may not attempt to gain unauthorized access to our systems, interfere with platform operations, or use our services for unlawful purposes.",
        "We reserve the right to modify, suspend, or discontinue any part of our website or services with reasonable notice where practicable.",
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      paragraphs: [
        "When using our services, you are responsible for the accuracy of information you provide and for ensuring your use complies with applicable laws and regulations in your jurisdiction.",
      ],
      listItems: [
        "Provide accurate contact and business information when requesting demos or services.",
        "Ensure that your use of AI employee deployments complies with laws applicable to your industry and region.",
        "Maintain appropriate authorization for integrations and data connections you configure.",
        "Notify us promptly of any unauthorized access to your account or deployment.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "All content, trademarks, software, and materials on our website and platform are owned by or licensed to Voxentra AI (Private) Limited. You may not copy, modify, distribute, or reverse-engineer our platform without written permission.",
        "Customer data and content you provide through our services remain yours. We process customer data solely to operate and improve the services as described in our Privacy Policy and applicable service agreements.",
      ],
    },
    {
      id: "service-availability",
      title: "Service Availability",
      paragraphs: [
        "We aim to maintain reliable platform availability but do not guarantee uninterrupted access. Scheduled maintenance, updates, or circumstances beyond our reasonable control may affect availability.",
        "Service level commitments, uptime targets, and support terms for platform deployments are defined in individual customer agreements — not in these general website terms.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, Voxentra AI (Private) Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.",
        "Our total liability for claims related to website use shall not exceed the amount you paid us for services in the twelve months preceding the claim, or one hundred US dollars if no fees were paid.",
        "Some jurisdictions do not allow certain limitations of liability. In those cases, our liability is limited to the maximum extent permitted by law.",
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
      "For questions about these terms, contact us at:",
    email: "hello@voxentra.ai",
    emailLabel: "hello@voxentra.ai",
  },
};
