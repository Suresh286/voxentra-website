import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { callCenterSolutionContent } from "@/content/pages/solutions/call-center";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...callCenterSolutionContent.meta, path: "/solutions/call-center" });

export default function Page() {
  return <SolutionDetailPage content={callCenterSolutionContent} />;
}
