import { ChallengeSection } from "@/components/pages/challenge-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FaqSection } from "@/components/pages/faq-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { IndustryDetailPageContent } from "@/content/types/pages";

type IndustryDetailPageProps = {
  content: IndustryDetailPageContent;
};

function IndustryDetailPage({ content }: IndustryDetailPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <ChallengeSection content={content.challenges} id="challenges" />
      <FeatureGridSection
        id="recommended-employees"
        content={{
          ...content.recommendedEmployees,
          items: content.recommendedEmployees.roles,
        }}
        background="elevated"
      />
      <FeatureGridSection
        id="workflows"
        content={{ ...content.workflows, items: content.workflows.items }}
        columns={2}
      />
      <FeatureGridSection
        id="outcomes"
        content={{ ...content.outcomes, items: content.outcomes.items }}
        background="elevated"
      />
      <FaqSection content={content.faq} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { IndustryDetailPage };
