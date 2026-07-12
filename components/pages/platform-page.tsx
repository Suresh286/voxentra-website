import { BadgeListSection } from "@/components/pages/badge-list-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { PlatformPageContent } from "@/content/types/pages";

type PlatformPageProps = {
  content: PlatformPageContent;
};

function PlatformPage({ content }: PlatformPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="elevated"
      />
      <FeatureGridSection
        id="architecture"
        content={{ ...content.architecture, items: content.architecture.layers }}
        columns={2}
      />
      <FeatureGridSection
        id="ai-employees"
        content={{ ...content.aiEmployees, items: content.aiEmployees.roles }}
        background="elevated"
      />
      <BadgeListSection
        id="integrations"
        content={{ ...content.integrations, items: content.integrations.categories }}
        background="elevated"
        ariaLabel="Integration categories"
      />
      <FeatureGridSection
        id="security"
        content={{ ...content.security, items: content.security.pillars }}
        columns={2}
        background="elevated"
      />
      <FeatureGridSection
        id="dashboard"
        content={{ ...content.dashboard, items: content.dashboard.capabilities }}
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { PlatformPage };
