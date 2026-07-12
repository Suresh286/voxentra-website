import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { IndustriesGridSection } from "@/components/pages/industries-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { IndustriesHubPageContent } from "@/content/types/pages";

type IndustriesHubPageProps = {
  content: IndustriesHubPageContent;
};

function IndustriesHubPage({ content }: IndustriesHubPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="surface"
      />
      <IndustriesGridSection content={content.industries} />
      <FeatureGridSection
        id="why-choose"
        content={{ ...content.whyChoose, items: content.whyChoose.reasons }}
        columns={2}
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { IndustriesHubPage };
