import { BadgeListSection } from "@/components/pages/badge-list-section";
import { ChallengeSection } from "@/components/pages/challenge-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { NarrativeSection } from "@/components/pages/narrative-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { BlogPageContent } from "@/content/types/pages";

type BlogPageProps = {
  content: BlogPageContent;
};

function BlogPage({ content }: BlogPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <NarrativeSection id="featured" content={content.featured} background="surface" />
      <BadgeListSection
        id="categories"
        content={{ ...content.categories, items: content.categories.items }}
        ariaLabel="Blog categories"
      />
      <ChallengeSection
        content={content.contentStrategy}
        id="content-strategy"
        background="surface"
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { BlogPage };
