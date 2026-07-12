import { BlogPage } from "@/components/pages/blog-page";
import { blogPageContent } from "@/content/pages/blog";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...blogPageContent.meta, path: "/blog" });

export default function Page() {
  return <BlogPage content={blogPageContent} />;
}
