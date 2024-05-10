import React from 'react'

const topNav = () => {
    return (
        <nav className="md:px-10 px-7 h-20 items-center justify-between w-full flex shadow-md sticky top-0 bg-white ">
            <span className="text-blue-950 text-xl">AnoniChat</span>
            <span className="md:hidden flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  text-blue-950"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                </svg>
            </span>
        </nav>
    )
}

export default topNav