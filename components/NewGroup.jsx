"use client"
import { useState } from "react"
import CustomInput from "./customComponents/input"
import Button from "./customComponents/button"


function NewGroup(props) {
    const [group, setGroup] = useState("")
    return (
        <div className="fixed top-0 h-full bg-white/30 w-full backdrop-blur-sm flex items-center justify-center">
            <div className="w-full bg-blue-950 px-8 pb-14 absolute">
                <div className="bg-black relative left-80 w-14 h-14 text-white flex items-center justify-center -top-8">
                    x
                </div>
                <CustomInput
                    type="text"
                    placeholder="Enter Group Name"
                    label="Group Name"
                    value={group}
                    handleInput={(name) => setGroup(name)}
                    labelColor={"text-white"}
                />
                <CustomInput
                    type="text"
                    placeholder="tags"
                    label="Tags"
                    value={group}
                    handleInput={(name) => setGroup(name)}
                    labelColor={"text-white"}
                />

                <div className="mt-3">
                    <Button
                        type="bg-white"
                        onClick={(e) => console.log(e)}
                        text="Create"
                        busy={false}
                        textColor={"text-blue-950"}
                    />
                </div>
            </div>
        </div>
    )
}



export default NewGroup
