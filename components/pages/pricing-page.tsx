import { ChecklistSection } from "@/components/pages/checklist-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FaqSection } from "@/components/pages/faq-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { PricingTiersSection } from "@/components/pages/pricing-tiers-section";
import type { PricingPageContent } from "@/content/types/pages";

type PricingPageProps = {
  content: PricingPageContent;
};

function PricingPage({ content }: PricingPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="why-custom"
        content={{ ...content.whyCustom, items: content.whyCustom.reasons }}
        columns={2}
        background="elevated"
      />
      <FeatureGridSection
        id="pricing-factors"
        content={{ ...content.pricingFactors, items: content.pricingFactors.factors }}
      />
      <ChecklistSection id="included" content={content.included} />
      <PricingTiersSection content={content.tiers} />
      <FaqSection content={content.faq} background="elevated" />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { PricingPage };
