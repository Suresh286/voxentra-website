import { PlatformPage } from "@/components/pages/platform-page";
import { platformPageContent } from "@/content/pages/platform";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...platformPageContent.meta, path: "/platform" });

export default function Page() {
  return <PlatformPage content={platformPageContent} />;
}
