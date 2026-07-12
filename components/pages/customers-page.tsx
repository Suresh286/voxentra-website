import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { StepsSection } from "@/components/pages/steps-section";
import type { CustomersPageContent } from "@/content/types/pages";

type CustomersPageProps = {
  content: CustomersPageContent;
};

function CustomersPage({ content }: CustomersPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="outcomes"
        content={{ ...content.outcomes, items: content.outcomes.items }}
        background="elevated"
      />
      <FeatureGridSection
        id="workflows"
        content={{ ...content.workflows, items: content.workflows.items }}
        columns={2}
      />
      <FeatureGridSection
        id="industry-examples"
        content={{ ...content.industryExamples, items: content.industryExamples.items }}
        background="elevated"
      />
      <StepsSection id="results-framework" content={content.resultsFramework} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { CustomersPage };
