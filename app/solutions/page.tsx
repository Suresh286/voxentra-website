import { SolutionsHubPage } from "@/components/pages/solutions-hub-page";
import { solutionsHubContent } from "@/content/pages/solutions";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...solutionsHubContent.meta, path: "/solutions" });

export default function Page() {
  return <SolutionsHubPage content={solutionsHubContent} />;
}
