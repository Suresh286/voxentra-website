import { BadgeListSection } from "@/components/pages/badge-list-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import { StepsSection } from "@/components/pages/steps-section";
import type { VoiceAgentsPageContent } from "@/content/types/pages";

type VoiceAgentsPageProps = {
  content: VoiceAgentsPageContent;
};

function VoiceAgentsPage({ content }: VoiceAgentsPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <FeatureGridSection
        id="overview"
        content={{ ...content.overview, items: content.overview.pillars }}
        background="surface"
      />
      <StepsSection id="call-handling" content={content.callHandling} />
      <BadgeListSection
        id="languages"
        content={{ ...content.languages, items: content.languages.items }}
        ariaLabel="Supported languages"
        background="surface"
      />
      <FeatureGridSection
        id="use-cases"
        content={{ ...content.useCases, items: content.useCases.items }}
        columns={2}
      />
      <FeatureGridSection
        id="outcomes"
        content={{ ...content.outcomes, items: content.outcomes.items }}
        background="surface"
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { VoiceAgentsPage };
