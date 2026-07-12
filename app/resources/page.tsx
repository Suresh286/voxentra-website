import { ResourcesPage } from "@/components/pages/resources-page";
import { resourcesPageContent } from "@/content/pages/resources";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...resourcesPageContent.meta, path: "/resources" });

export default function Page() {
  return <ResourcesPage content={resourcesPageContent} />;
}
