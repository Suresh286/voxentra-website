import { BadgeListSection } from "@/components/pages/badge-list-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { StepsSection } from "@/components/pages/steps-section";
import type { ChatAgentsPageContent } from "@/content/types/pages";

type ChatAgentsPageProps = {
  content: ChatAgentsPageContent;
};

function ChatAgentsPage({ content }: ChatAgentsPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="elevated"
      />
      <StepsSection id="customer-journey" content={content.customerJourney} />
      <FeatureGridSection
        id="use-cases"
        content={{ ...content.useCases, items: content.useCases.items }}
        columns={2}
      />
      <BadgeListSection
        id="integrations"
        content={{ ...content.integrations, items: content.integrations.items }}
        ariaLabel="Chat integrations"
        background="elevated"
      />
      <FeatureGridSection
        id="outcomes"
        content={{ ...content.outcomes, items: content.outcomes.items }}
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { ChatAgentsPage };
