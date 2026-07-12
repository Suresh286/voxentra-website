import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FaqSection } from "@/components/pages/faq-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { StepsSection } from "@/components/pages/steps-section";
import type { DemoPageContent } from "@/content/types/pages";

type DemoPageProps = {
  content: DemoPageContent;
};

function DemoPage({ content }: DemoPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="why-book"
        content={{ ...content.whyBook, items: content.whyBook.reasons }}
        columns={2}
        background="surface"
      />
      <StepsSection id="what-happens" content={content.whatHappens} />
      <FeatureGridSection
        id="workflows"
        content={content.workflows}
        columns={2}
      />
      <FaqSection content={content.faq} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { DemoPage };
