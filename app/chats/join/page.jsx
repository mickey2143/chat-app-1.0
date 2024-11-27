import Nav from "@/components/nav";
import Profile from "@/components/profile";
import JoinGroup from "@/components/joinGroup"

export default function Page() {
    return (
        <div className="flex justify-between gap-3 w-full h-full">
            <main className="hidden w-full h-full left-[26%]  bg-gray-50 md:flex flex-col rounded-xl gap-10 shadow-xl flex-grow overflow-y-scroll">
                <JoinGroup />
            </main>

            <div className=" md:hidden w-full h-full fixed top-0 overflow-y-scroll chats bg-gray-50 flex flex-col px-6 rounded-xl shadow-xl">
                {/* <div className=" flex items-center justify-between z-10 pb-8 pt-6 bg-gray-50 sticky top-0"> */}
                {/* <Profile /> */}
                {/* <span className="">
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
                    </span> */}
                {/* {sidebar && <SearchBar close={setSidebar} />} */}
                {/* </div> */}

                <Nav />

                <JoinGroup />


            </div>
        </div>
    );
}