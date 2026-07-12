import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { PreviewCardsSection } from "@/components/pages/preview-cards-section";
import type { ResourcesPageContent } from "@/content/types/pages";

type ResourcesPageProps = {
  content: ResourcesPageContent;
};

function ResourcesPage({ content }: ResourcesPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="categories"
        content={{ ...content.categories, items: content.categories.items }}
        background="elevated"
      />
      <PreviewCardsSection id="guides" content={content.guides} />
      <PreviewCardsSection
        id="playbooks"
        content={content.playbooks}
        background="elevated"
      />
      <PreviewCardsSection id="documentation" content={content.documentation} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { ResourcesPage };
