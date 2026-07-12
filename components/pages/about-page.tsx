import { CtaBandSection } from "@/components/pages/cta-band-section";
import { FeatureGridSection } from "@/components/pages/feature-grid-section";
import { NarrativeSection } from "@/components/pages/narrative-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { AboutPageContent } from "@/content/types/pages";

type AboutPageProps = {
  content: AboutPageContent;
};

function AboutPage({ content }: AboutPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <NarrativeSection id="story" content={content.story} background="elevated" />
      <NarrativeSection id="mission" content={content.mission} />
      <NarrativeSection id="vision" content={content.vision} background="elevated" />
      <FeatureGridSection
        id="principles"
        content={{ ...content.principles, items: content.principles.items }}
        columns={2}
      />
      <NarrativeSection id="why-exists" content={content.whyExists} background="elevated" />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { AboutPage };
