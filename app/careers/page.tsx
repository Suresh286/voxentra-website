import { CareersPage } from "@/components/pages/careers-page";
import { careersPageContent } from "@/content/pages/careers";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...careersPageContent.meta, path: "/careers" });

export default function Page() {
  return <CareersPage content={careersPageContent} />;
}
