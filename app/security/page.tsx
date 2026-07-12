import { SecurityPage } from "@/components/pages/security-page";
import { securityPageContent } from "@/content/pages/security";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...securityPageContent.meta, path: "/security" });

export default function Page() {
  return <SecurityPage content={securityPageContent} />;
}
