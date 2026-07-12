import { ContactPage } from "@/components/pages/contact-page";
import { contactPageContent } from "@/content/pages/contact";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...contactPageContent.meta, path: "/contact" });

export default function Page() {
  return <ContactPage content={contactPageContent} />;
}
