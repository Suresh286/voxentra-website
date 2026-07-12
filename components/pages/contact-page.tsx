import { ContactOptionsSection } from "@/components/pages/contact-options-section";
import { CtaBandSection } from "@/components/pages/cta-band-section";
import { PageHeroSection } from "@/components/pages/page-hero";
import type { ContactPageContent } from "@/content/types/pages";

type ContactPageProps = {
  content: ContactPageContent;
};

function ContactPage({ content }: ContactPageProps) {
  return (
    <>
      <PageHeroSection content={content.hero} />
      <ContactOptionsSection
        options={content.options}
        demoRequest={content.demoRequest}
        businessInquiry={content.businessInquiry}
      />
      <CtaBandSection content={content.finalCta} />
    </>
  );
}

export { ContactPage };
