import ChatRoom from "@/components/chatroom"
import ChatSidebar from "@/components/chatsidebar"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "@/app/redux/openGroup"
function MobilePage() {
    const openGroup = useSelector((state) => state.updateGroupId
        .groupId)
    const dispatch = useDispatch()

    function setGroupId(id) {
        dispatch(setId(id))
    }
    console.log(openGroup)
    return (
        <div className="h-screen">
            {(openGroup) ? <ChatRoom /> : <nav className="w-full h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white flex flex-col px-6 py-7 rounded-xl shadow-xl" ><ChatSidebar handleChatOpen={setGroupId} /></nav>}
        </div>
    )
}

export default MobilePage