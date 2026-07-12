import { FaqPage } from "@/components/pages/faq-page";
import { faqPageContent } from "@/content/pages/faq";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...faqPageContent.meta, path: "/faq" });

export default function Page() {
  return <FaqPage content={faqPageContent} />;
}
