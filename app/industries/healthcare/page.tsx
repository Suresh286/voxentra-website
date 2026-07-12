import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import { healthcareIndustryContent } from "@/content/pages/industries/healthcare";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...healthcareIndustryContent.meta, path: "/industries/healthcare" });

export default function Page() {
  return <IndustryDetailPage content={healthcareIndustryContent} />;
}
