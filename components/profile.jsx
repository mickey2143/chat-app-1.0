function Profile() {
    return (<div className="flex gap-2 items-center">
        <div className="h-12 w-12 p-3 rounded-full relative bg-blue-950 text-white flex justify-center items-center">
            MA
            <span className="bg-green-500 absolute bottom-0 right-0 block rounded-full h-3 w-3">.</span>
        </div>
        <div>
            <h1>Michael Ani</h1>
            <p className="text-xs">Info Account</p>
            {/* <p className="text-green-300">Online</p> */}
        </div>
    </div>)
}

export default Profile