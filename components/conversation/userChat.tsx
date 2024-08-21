"use client";
function UserChat({ messages }: any) {
  const currentUserId = 5555;
  const msg = [
    {
      id: 2,
      senderName: "Michael",
      senderId: "5555",
      sentAt: "2024-07-23T07:48:09.211Z",
      message: "Hello birthfull people",
      group: 40,
    },
    {
      id: 1,
      senderName: "obinna",
      senderId: "200",
      sentAt: "2024-07-23T07:48:09.211Z",
      message: "Hello birthfull people",
      group: 2,
    },
    {
      id: 3,
      senderName: "obinna",
      senderId: "200",
      sentAt: "2024-07-23T07:48:09.211Z",
      message: "Hello birthfull people",
      group: 2,
    },
    {
      id: 4,
      senderName: "obinna",
      senderId: "200",
      sentAt: "2024-07-23T07:48:09.211Z",
      message: "Hello birthfull people",
      group: 2,
    },
  ];

  return (
    <div className="h-full px-5 flex flex-col relative w-full mb-5">
      {msg.map((info: any) => (
        <>
          <div
            className={
              info.senderId == currentUserId
                ? "items-end flex flex-col w-full"
                : "items-start flex flex-col w-full "
            }
          >
            <p
              className={
                info.senderId == currentUserId
                  ? "mt-5 w-3/4 p-5  rounded-md text-white bg-blue-950 float-right text-2xl"
                  : "mt-5 w-3/4 p-5 rounded-md bg-slate-100 float-left text-2xl"
              }
            >
              {info.message}
            </p>
            <div className="flex w-3/4 justify-between">
              <p className="text-sm">{info.senderName}</p>
              <p className="text-sm">{`${
                String(new Date(info.sentAt).toString()).split("GMT")[0]
              }`}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default UserChat;
