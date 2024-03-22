"use client"
function UserChat({messages}) {
   const currentUserId = 5555
   console.log(messages)
  return (
    <div className="h-full px-5">
      {messages.map((info) => (
        <>
          
          <div className={(info.userId === currentUserId)?"mt-5 w-3/4 p-5  rounded-md text-white bg-blue-700 float-right":"mt-5 w-3/4 p-5 rounded-md bg-slate-100 float-left"}>
            <p className="text-2xl">{info.message}</p>
          </div>

          
        </>
      ))}
    </div>
  );
}

export default UserChat;
