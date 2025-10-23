import ChatMessage from "@/components/chatRoom/chatmessage"
import ChatInput from "@/components/chatRoom/chatinput"
import ChatHeader from "@/components/chatRoom/chatheader"

export default function ChatPage() {
 
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-gradient-to-b from-blue-100/80 to-blue-50 dark:from-slate-900 dark:to-slate-950 font-display pt-24">
      
      {/* Header */}
       <ChatHeader />

      {/* Messages */}
      <ChatMessage />

      {/* Message Input */}
      <ChatInput />
    </main>
  );
}
