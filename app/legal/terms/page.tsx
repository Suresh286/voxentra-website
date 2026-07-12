import { LegalPage } from "@/components/pages/legal-page";
import { termsOfServiceContent } from "@/content/pages/legal/terms";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(termsOfServiceContent.meta);

export default function Page() {
  return <LegalPage content={termsOfServiceContent} />;
}
