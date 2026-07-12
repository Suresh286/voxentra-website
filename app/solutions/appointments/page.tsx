import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { appointmentsSolutionContent } from "@/content/pages/solutions/appointments";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...appointmentsSolutionContent.meta, path: "/solutions/appointments" });

export default function Page() {
  return <SolutionDetailPage content={appointmentsSolutionContent} />;
}
