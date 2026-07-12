import { LegalPage } from "@/components/pages/legal-page";
import { privacyPolicyContent } from "@/content/pages/legal/privacy";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(privacyPolicyContent.meta);

export default function Page() {
  return <LegalPage content={privacyPolicyContent} />;
}
