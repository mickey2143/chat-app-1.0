"use client";
import Button from "@/components/customComponents/button";
import Link from "next/link";
import CustomInput from "@/components/customComponents/input";
import { useState } from "react";
import { toast } from "react-toastify";


function Form() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [busy, setBusy] = useState(false);
    const [recovery, setRecovery] = useState();



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            toast.error("Please fill the credentials")

        } else {
            setBusy(true)

            try {
                const res = await fetch("api/signup", {
                    method: "POST",
                    body: JSON.stringify({ username, password })
                })
                const data = await res.json()

                if (data.success) {
                    const seedPhrase = data.keys.seed.split(" ")
                    toast("Account Created Successfully");
                    setRecovery(seedPhrase)
                    setRegistered(data.success)
                    setBusy(false)
                    document.cookie = `accessToken=${data?.accessToken};path="/";Max-Age=30`

                } else {
                    setBusy(false)
                    toast.error(data.error)
                }

            } catch (error) {
                toast.error(error)
                setBusy(false)
            }
        }


    };

    // const generateUserName = async () => {
    //     if (busy) return

    //     try {
    //         setBusy(true)
    //         const res = await fetch("/api/generateName");
    //         const data = await res.json();
    //         if (data.success) {
    //             // setUserName(data.username);
    //             toast.success("Username Generated");
    //             setBusy(false)
    //             setRegistered(data.success)
    //             console.log(registered)
    //             const seedPhrase = data.recovery.keys.seed.split(" ")
    //             setRecovery(seedPhrase)
    //         } else {
    //             setBusy(false)
    //             toast.error(data.error)
    //         }

    //     } catch (error) {

    //         toast.error(error)
    //     }

    // };

    {
        if (!registered) {
            return (<form
                onSubmit={(e) => handleSubmit(e)}
                className="bg-white slide-out max-w-6xl md:w-1/2 w-full p-5 flex items-center justify-center flex-col"
            >
                <div className=" w-full mb-5">
                    <CustomInput
                        type="text"
                        placeholder="Create a Unique username"
                        name="username"
                        label="Username"
                        value={username}
                        handleInput={(name) => setUserName(name)}
                    />
                    {/* {!busy ? (<p
                        className="text-blue-950 underline cursor-pointer select-none"
                        onClick={generateUserName}
                    >
                        Generate
                    </p>) : (<span className="loading">Loading...</span>)} */}

                </div>
                <div className=" w-full mb-5">
                    <CustomInput
                        type="password"
                        placeholder="Create a Unique Password"
                        label="Password"
                        value={password}
                        handleInput={(name) => setPassword(name)}
                    />
                </div>

                <div className="mb-4 w-full">
                    <Button
                        type="bg-black"
                        onClick={(e) => console.log("buuton clicked")}
                        text="Register"
                        busy={busy}
                    />
                </div>


                <p>
                    Already a User? <Link href={"./signin"}><span className="underline">Signin</span></Link>
                </p></form >)
        } else {
            return (

                <div className="bg-red flex justify-center max-w-6xl md:w-1/2 w-full flex-col items-center">
                    <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {recovery?.map((phrase, id) => (<span className="bg-white border border-gray-200 py-2 px-4 w-28 rounded-lg">{id + 1} {phrase}</span>))}

                    </div>
                    <p className="text-blue-950 my-4 select-none cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(recovery.join(" ")).then(() => {
                            toast.info("Copied to clipboard")
                        }).catch((err) => toast.error("Sorry, Unable to Copy"))}
                    >Copy to Clipboard</p>
                    <Link href={"/chats/join"}>
                        <div className="mb-4 w-full">
                            <Button
                                type="bg-black"
                                onClick={(e) => true}
                                text="Join a Gropu"
                                busy={busy}
                            />
                        </div>
                    </Link>
                    <Link href={"/chats/create"}>
                        <div className="mb-4 w-full">
                            <Button
                                type="bg-black"
                                onClick={(e) => true}
                                text="Create a Group"
                                busy={busy}
                            />
                        </div>
                    </Link>

                </div>

            )
        }
    }


}

export default Form;
