import Nav from "@/components/nav";
import Profile from "@/components/profile";
import JoinGroup from "@/components/joinGroup"

export default function Page() {
    return (
        <div className="flex justify-between gap-3 w-full h-full">
            <main className="hidden w-[73%] h-full fixed left-[26%] bg-white md:flex flex-col pt-7 rounded-xl gap-10 shadow-xl">
                Hi
            </main>

            <div className=" md:hidden w-full h-full fixed top-0 overflow-hidden  hover:overflow-auto chats bg-white flex flex-col px-6 py-7 rounded-xl shadow-xl">
                <div className=" flex items-center justify-between z-10 pb-8 bg-white sticky top-0">
                    <Profile />
                    <span className="">
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
                    {/* {sidebar && <SearchBar close={setSidebar} />} */}
                </div>
                <Nav />
                <p>Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio, similique iusto quasi officiis qui quam est rerum porro esse eveniet suscipit libero expedita animi consequatur earum neque nemo obcaecati?</p>
            </div>
        </div>
    );
}