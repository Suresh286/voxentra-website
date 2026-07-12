import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import { educationIndustryContent } from "@/content/pages/industries/education";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...educationIndustryContent.meta, path: "/industries/education" });

export default function Page() {
  return <IndustryDetailPage content={educationIndustryContent} />;
}
