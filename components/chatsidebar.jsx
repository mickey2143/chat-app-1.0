"use client"
import React, { useEffect, useState } from 'react'
import SearchBar from './searchBar';
import Profile from './profile';
import GroupList from './groupList';
import Link from 'next/link';
import Nav from './nav';



export default function ChatSidebar({ changePage }) {

    let [groups, setGroup] = useState([]);
    let [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        fetch('/api/groups', {
            method: "GET", headers: {
                user_id: "102"
            }
        }).then((data) => data.json()).then((data) => {

            console.log(data)
            setGroup(data.data)
        }).catch(error => {

            console.log(error)
        })
    }, [])


    return (
        // <p>sidebar</p>
        <>
            <div className="flex items-center justify-between z-10 pb-8 sticky top-0">
                <Profile />
                <span className="" onClick={() => setSidebar(!sidebar)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </span>
                {sidebar && <SearchBar close={setSidebar} />}
            </div>
            <Nav />
            <GroupList groups={groups} />z
        </>
    )
}
