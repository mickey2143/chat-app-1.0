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


    useEffect(() => {
        let start = (currentPage - 1) * chatGroupPerPage;
        let lastPage = start + chatGroupPerPage;
        const displayGroup = groups?.slice(start, lastPage);
        setChatGroupToDisplay(displayGroup);

    }, [currentPage]);


    return (
        <>
            <div className=" w-full h-full px-5 text-blue-950 relative">
                <h1 className="text-xl md:text-2xl font-bold mb-3 md:pt-6">Hi there, Welcome to Chatanoni, Join a Group To get Stated</h1>

                <p>Join a Group </p>
                <div className="sticky top-0 bg-gray-50 pt-6">
                    <SearchBar placeholder="Search Group By Name,likes etc" />
                </div>

                <ul className="list-image-none my-2 gap-5 grid grid-cols-1 sm:grid-cols-2">
                    {chatGroupTodisplay.map((group) => (<GroupDetail group={group} />))}
                </ul>

                <Pagination currentPage={currentPage} length={groups.length} postsPerPage={chatGroupPerPage} setCurrentPage={setCurrentPage} showing={0} />


            </div>
        </>

    )
}

export default JoinGroup