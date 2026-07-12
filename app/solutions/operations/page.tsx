import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { operationsSolutionContent } from "@/content/pages/solutions/operations";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...operationsSolutionContent.meta, path: "/solutions/operations" });

export default function Page() {
  return <SolutionDetailPage content={operationsSolutionContent} />;
}
