import Message from "@/components/conversation/messages";
import SearchBar from "@/components/searchBar";

export default function Index() {
  return (
    <main className="w-full mb-20 h-full">
      <SearchBar />
      <Message />
    </main>
  );
}
