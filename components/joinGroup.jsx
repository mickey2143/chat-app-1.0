"use client"
import Button from "@/components/customComponents/button"
import Pagination from "@/components/customComponents/Pagination"
import SearchBar from "@/components/searchBar"
import TopNav from "@/components/topNav"
import { useEffect, useState } from "react"
import GroupDetail from "@/components/groupDetail"
function JoinGroup() {
    const groups = [{
        id: 100,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki",
        public: true,
    }, {
        id: 101,
        topic: ["food", "snacks"],
        members: 300,
        description: "We look to talk about Food",
        createdAt: "2024-09-08T22:14:20.869Z",
        updatedAt: "2024-09-08T22:14:20.869Z",
        admin: [102],
        groupName: "Manki1002",
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
    function select(e, id) {
        console.log(e.target.parentElement)
    }
    return (
        <>
            <TopNav />
            <main className=" w-full md:px-20 px-10  h-full pt-24 text-blue-950 pb-5">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">Hi there, Welcome to Chatanoni, A web Platform that allows you chat anonymously with Anonys of Same Likes</h1>

                <p>Select Group to get Stated</p>
                <SearchBar placeholder="Search Group By Name,likes etc" />

                <ul className="list-image-none my-2 space-y-3">
                    {chatGroupTodisplay.map((group) => (<GroupDetail click={(e) => select(e, group.id)} group={group} />))}
                </ul>

                <Pagination currentPage={currentPage} length={groups.length} postsPerPage={chatGroupPerPage} setCurrentPage={setCurrentPage} showing={0} />

                <Button text={"Join"} textColor="text-white" busy={true} onClick={(e) => console.log("Hi")} type="bg-blue-950" key={1} />
            </main>
        </>

    )
}

export default JoinGroup