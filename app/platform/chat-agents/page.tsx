import { ChatAgentsPage } from "@/components/pages/chat-agents-page";
import { chatAgentsPageContent } from "@/content/pages/chat-agents";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({ ...chatAgentsPageContent.meta, path: "/platform/chat-agents" });

export default function Page() {
  return <ChatAgentsPage content={chatAgentsPageContent} />;
}
