import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { salesSolutionContent } from "@/content/pages/solutions/sales";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...salesSolutionContent.meta, path: "/solutions/sales" });

export default function Page() {
  return <SolutionDetailPage content={salesSolutionContent} />;
}
