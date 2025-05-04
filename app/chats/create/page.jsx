import Button from "@/components/customComponents/button"
import Nav from "@/components/nav"


function page() {
    return (
        <>
         <div className="flex justify-between gap-3 w-full h-full">
            <main className="hidden w-full h-full left-[26%]  bg-gray-50 md:flex flex-col rounded-xl gap-10 shadow-xl flex-grow overflow-y-scroll">
            <div className=" w-full h-full px-5 text-blue-950 relative">
                <h1 className="text-xl md:text-2xl font-bold mb-3 md:pt-6">Hi there, Welcome to Chatanoni, Create a Group To get Stated</h1>

                <p>Create a Group </p>
                

                <ul className="list-image-none my-2 ">
                    <form action="" className="pt-5">
                        <div className="w-full pb-5">
                            <label htmlFor="groupname">Group Name</label>
                            <input type="text" id="groupname" placeholder="Enter group Name" className="border border-blue-900 w-full p-2 " />
                        </div>
                        <div className="w-full pb-5">
                            <label htmlFor="groupdescription">Group Description</label>
                            <input type="text" id="groupdescription" placeholder="Enter group Description" className="border border-blue-900 w-full p-4 "/>
                        </div>
                        <Button text={"Create"} textColor="text-white" />
                    </form>
                </ul>

            </div>
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

               


            </div>
        </div>
        </>

    )
}


export default page
