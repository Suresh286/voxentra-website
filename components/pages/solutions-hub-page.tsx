import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { SolutionsGridSection } from "@/components/pages/solutions-grid-section";
import type { SolutionsHubPageContent } from "@/content/types/pages";

type SolutionsHubPageProps = {
  content: SolutionsHubPageContent;
};

function SolutionsHubPage({ content }: SolutionsHubPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="elevated"
      />
      <SolutionsGridSection content={content.solutions} />
      <FeatureGridSection
        id="benefits"
        content={{ ...content.benefits, items: content.benefits.items }}
        columns={2}
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { SolutionsHubPage };
