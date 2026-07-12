import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import { hospitalityIndustryContent } from "@/content/pages/industries/hospitality";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...hospitalityIndustryContent.meta, path: "/industries/hospitality" });

export default function Page() {
  return <IndustryDetailPage content={hospitalityIndustryContent} />;
}
