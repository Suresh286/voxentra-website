import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { customerSupportSolutionContent } from "@/content/pages/solutions/customer-support";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...customerSupportSolutionContent.meta, path: "/solutions/customer-support" });

export default function Page() {
  return <SolutionDetailPage content={customerSupportSolutionContent} />;
}
