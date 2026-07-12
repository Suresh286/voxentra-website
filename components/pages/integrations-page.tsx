import { BadgeListSection } from "@/components/pages/badge-list-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { IntegrationCategorySection } from "@/components/pages/integration-category-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { IntegrationsPageContent } from "@/content/types/pages";

type IntegrationsPageProps = {
  content: IntegrationsPageContent;
};

function IntegrationsPage({ content }: IntegrationsPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <BadgeListSection
        id="categories"
        content={{ ...content.categories, items: content.categories.items }}
        ariaLabel="Integration categories"
        background="elevated"
      />
      <IntegrationCategorySection id="crm" content={content.crm} />
      <IntegrationCategorySection
        id="calendar"
        content={content.calendar}
        background="elevated"
      />
      <IntegrationCategorySection id="communication" content={content.communication} />
      <FeatureGridSection
        id="api-webhooks"
        content={{ ...content.apiWebhooks, items: content.apiWebhooks.features }}
        columns={2}
        background="elevated"
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { IntegrationsPage };
