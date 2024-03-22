import Chat from "@/components/chat"

export default async function Page() {

  const messages = [
    {userId:2332,message:"Let us go on vactions i have plans"},
    {userId:5555,message:"why do you think so"},
    {userId:5555,message:"when did you think it can happen"},
    {userId:2332,message:"Tommorrow"},

  ]
  
  return (
    <div className="w-full relative pb-52">
      <Chat messages={messages} />
     
   </div>
  );
}
