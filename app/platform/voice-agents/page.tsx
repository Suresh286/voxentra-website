import { VoiceAgentsPage } from "@/components/pages/voice-agents-page";
import { voiceAgentsPageContent } from "@/content/pages/voice-agents";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...voiceAgentsPageContent.meta, path: "/platform/voice-agents" });

export default function Page() {
  return <VoiceAgentsPage content={voiceAgentsPageContent} />;
}
