import { ChallengeSection } from "@/components/pages/challenge-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FaqSection } from "@/components/pages/faq-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { SecurityPageContent } from "@/content/types/pages";

type SecurityPageProps = {
  content: SecurityPageContent;
};

function SecurityPage({ content }: SecurityPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="surface"
      />
      <FeatureGridSection
        id="data-protection"
        content={{ ...content.dataProtection, items: content.dataProtection.items }}
        columns={2}
      />
      <FeatureGridSection
        id="access-controls"
        content={{ ...content.accessControls, items: content.accessControls.items }}
        columns={2}
        background="surface"
      />
      <FeatureGridSection
        id="auditability"
        content={{ ...content.auditability, items: content.auditability.items }}
        columns={2}
      />
      <ChallengeSection
        content={content.privacy}
        id="privacy"
        background="surface"
      />
      <FaqSection content={content.faq} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { SecurityPage };
