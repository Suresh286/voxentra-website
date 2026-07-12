import { CustomersPage } from "@/components/pages/customers-page";
import { customersPageContent } from "@/content/pages/customers";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...customersPageContent.meta, path: "/customers" });

export default function Page() {
  return <CustomersPage content={customersPageContent} />;
}
