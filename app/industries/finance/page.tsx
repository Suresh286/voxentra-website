import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import { financeIndustryContent } from "@/content/pages/industries/finance";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...financeIndustryContent.meta, path: "/industries/finance" });

export default function Page() {
  return <IndustryDetailPage content={financeIndustryContent} />;
}
