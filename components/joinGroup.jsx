"use client"
import Button from "@/components/customComponents/button"
import Pagination from "@/components/customComponents/Pagination"
import SearchBar from "@/components/searchBar"
import TopNav from "@/components/topNav"
import { useEffect, useState } from "react"
import GroupDetail from "@/components/groupDetail"
import Goback from "./Goback"
function JoinGroup() {
    const groups = [{
        id: 2,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Eximus",
        public: true,
    }, {
        id: 11,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Hackers",
        public: true,
    }, {
        id: 1,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }]

    const chatGroupPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [chatGroupTodisplay, setChatGroupToDisplay] = useState([]);
    const [selectGroup, setSelectGroup] = useState();

    useEffect(() => {
        let start = (currentPage - 1) * chatGroupPerPage;
        let lastPage = start + chatGroupPerPage;
        const displayGroup = groups?.slice(start, lastPage);
        setChatGroupToDisplay(displayGroup);
        // select()
    }, [currentPage]);

    function select() {
        const id = location.hash.replace("#", "")
        const newGroup = groups.filter((group) => group.id == id)
        setSelectGroup(newGroup[0])
    }
    return (
        <>

            {(selectGroup?.groupName) ? (<div className="flex flex-col items-center w-full px-10 justify-center h-full md:relative">

                <div className="absolute top-7 left-7 z-20" onClick={() => setSelectGroup("")}>
                    <Goback />
                </div>

                <div className="flex justify-center items-center w-36 h-36 rounded-lg font-black text-2xl shadow-md p-7 bg-white">
                    MA
                </div>

                <h4 className="text-xl font-black pt-5">{selectGroup.groupName}</h4>
                <p className="text-xl pt-5">Anonys ({selectGroup.members})</p>
                <p className="text-xl pt-5 text-center">
                    {selectGroup.groupName}
                </p>
                <div className="pt-5 max-w-32 w-full">
                    <Button text={"Join"} textColor="text-white" />
                </div>
            </div>
            ) : (<div className=" w-full h-full px-5 text-blue-950 relative">
                <h1 className="text-xl md:text-2xl font-bold mb-3 md:pt-6">Hi there, Welcome to Chatanoni, Join a Group To get Stated</h1>

                <p>Join a Group </p>
                <div className="sticky top-0 bg-gray-50 pt-6">
                    <SearchBar placeholder="Search Group By Name,likes etc" />
                </div>

                <ul className="list-image-none my-2 space-y-3">
                    {chatGroupTodisplay.map((group) => (<GroupDetail handleClick={select} group={group} />))}
                </ul>

                <Pagination currentPage={currentPage} length={groups.length} postsPerPage={chatGroupPerPage} setCurrentPage={setCurrentPage} showing={0} />


            </div>)}


        </>

    )
}

export default JoinGroup