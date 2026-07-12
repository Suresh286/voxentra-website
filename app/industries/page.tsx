import { IndustriesHubPage } from "@/components/pages/industries-hub-page";
import { industriesHubContent } from "@/content/pages/industries";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...industriesHubContent.meta, path: "/industries" });

export default function Page() {
  return <IndustriesHubPage content={industriesHubContent} />;
}
