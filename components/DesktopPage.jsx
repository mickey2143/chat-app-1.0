import ChatRoom from "@/components/chatroom"
import ChatSidebar from "@/components/chatsidebar"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "@/app/redux/openGroup"

function DesktopPage() {
    const openGroup = useSelector((state) => state.updateGroupId
        .groupId)
    const dispatch = useDispatch()

    function setGroupId(id) {
        dispatch(setId(id))
    }
    return (
        <div className="flex justify-between gap-3 w-full h-full">
            <nav className=" h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white flex flex-col px-6 py-7 rounded-xl shadow-xl w-1/4">

                <ChatSidebar handleChatOpen={setGroupId} />
            </nav>
            <main className="w-[73%] h-full fixed left-[26%] bg-white flex flex-col pt-7 rounded-xl gap-10 shadow-xl">
                {(openGroup) ? <ChatRoom /> : <p>Start Chatting</p>}
            </main>
        </div>

    )
}

export default DesktopPage