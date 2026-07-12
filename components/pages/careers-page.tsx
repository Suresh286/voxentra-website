import { ChallengeSection } from "@/components/pages/challenge-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { NarrativeSection } from "@/components/pages/narrative-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { CareersPageContent } from "@/content/types/pages";

type CareersPageProps = {
  content: CareersPageContent;
};

function CareersPage({ content }: CareersPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <ChallengeSection content={content.workingAt} id="working-at" />
      <FeatureGridSection
        id="values"
        content={{ ...content.values, items: content.values.items }}
        background="elevated"
      />
      <NarrativeSection
        id="hiring-philosophy"
        content={content.hiringPhilosophy}
      />
      <ChallengeSection
        content={content.futureOpportunities}
        id="future-opportunities"
        background="elevated"
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { CareersPage };
