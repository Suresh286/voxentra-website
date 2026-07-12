import { CtaBandSection } from "@/components/pages/cta-band-section";
import { CategorizedFaqSection } from "@/components/pages/categorized-faq-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { FaqPageContent } from "@/content/types/pages";

type FaqPageProps = {
  content: FaqPageContent;
};

function FaqPage({ content }: FaqPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <CategorizedFaqSection categories={content.categories} />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { FaqPage };
