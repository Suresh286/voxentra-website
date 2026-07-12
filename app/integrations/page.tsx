import { IntegrationsPage } from "@/components/pages/integrations-page";
import { integrationsPageContent } from "@/content/pages/integrations";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...integrationsPageContent.meta, path: "/integrations" });

export default function Page() {
  return <IntegrationsPage content={integrationsPageContent} />;
}
