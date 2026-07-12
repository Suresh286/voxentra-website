import { AboutPage } from "@/components/pages/about-page";
import { aboutPageContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...aboutPageContent.meta, path: "/about" });

export default function Page() {
  return <AboutPage content={aboutPageContent} />;
}
