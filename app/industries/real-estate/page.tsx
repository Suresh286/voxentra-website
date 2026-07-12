import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import { realEstateIndustryContent } from "@/content/pages/industries/real-estate";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...realEstateIndustryContent.meta, path: "/industries/real-estate" });

export default function Page() {
  return <IndustryDetailPage content={realEstateIndustryContent} />;
}
