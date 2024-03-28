import Nav from "@/components/nav";
import Message from "@/components/conversation/messages";
import SearchBar from "@/components/searchBar";
import Chat from "@/components/conversation/chat";

export default async function Index() {
  const users = [
    {
      id: "f35341d0-c283-4690-a97b-8099f439f486",
      userName: "Michael Ani",
      lastMsg: "Come and eat better food",
    },
    {
      id: "f35343TY9-c283-4690-a97b-8099f439f486",
      userName: "HeartBeat",
      lastMsg: "Exams is tommorrow",
    },
    {
      id: "f35341d0-3y42-4690-a97b-8099f439f486",
      userName: "Moses Bliss",
      lastMsg: "Come and cook",
    },
  ];

  return (
    <main className="w-full mb-20 h-full">
      <SearchBar />
      <Message users={users} />
    </main>
  );
}
