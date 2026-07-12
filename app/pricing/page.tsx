import { PricingPage } from "@/components/pages/pricing-page";
import { pricingPageContent } from "@/content/pages/pricing";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...pricingPageContent.meta, path: "/pricing" });

export default function Page() {
  return <PricingPage content={pricingPageContent} />;
}
