import { ChallengeSection } from "@/components/pages/challenge-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FaqSection } from "@/components/pages/faq-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { WorkflowExampleSection } from "@/components/pages/workflow-example-section";
import type { SolutionDetailPageContent } from "@/content/types/pages";

type SolutionDetailPageProps = {
  content: SolutionDetailPageContent;
};

function SolutionDetailPage({ content }: SolutionDetailPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <ChallengeSection content={content.challenge} />
      <FeatureGridSection
        id="how-it-works"
        content={{ ...content.howItWorks, items: content.howItWorks.steps }}
        columns={2}
      />
      <WorkflowExampleSection
        content={content.workflow}
        background="elevated"
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

export { SolutionDetailPage };
