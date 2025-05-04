"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "./customComponents/button"

function GroupDetail({ group }) {

    return (
        <li className="border border-blue-950 px-6 py-4 rounded-xl flex flex-col items-center">
            <div className="flex w-full justify-between">
                <h4 className="text-lg font-extrabold">{group.groupName}</h4>
                {/* <Link href={`#${group.id}`} onClick={handleClick} >
                    <span >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </span>
                </Link> */}

            </div>
            <p className="text-blue-950">Anonys ({group.members})</p>
            <p className="text-slate-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic repudiandae minus nesciunt dolore at exercitationem adipisci aspernatur cupiditate quod</p>
            
            <div className="pt-5 max-w-32 w-full">
                <Button text={"Join"} textColor="text-white" />
            </div>


        </li>)
}

export default GroupDetail