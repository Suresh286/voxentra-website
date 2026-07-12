import { LegalPage } from "@/components/pages/legal-page";
import { cookiePolicyContent } from "@/content/pages/legal/cookies";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(cookiePolicyContent.meta);

export default function Page() {
  return <LegalPage content={cookiePolicyContent} />;
}
