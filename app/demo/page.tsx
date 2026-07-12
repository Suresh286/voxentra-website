import { DemoPage } from "@/components/pages/demo-page";
import { demoPageContent } from "@/content/pages/demo";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...demoPageContent.meta, path: "/demo" });

export default function Page() {
  return <DemoPage content={demoPageContent} />;
}
