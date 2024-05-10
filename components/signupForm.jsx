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
                    console.log(data)
                    toast("Account Created Successfully");
                    setBusy(false)
                    setRegistered(true)
                } else {
                    setBusy(false)
                    toast.error(data.error)
                }

            } catch (error) {
                toast.error(error)
            }
        }


    };

    const generateUserName = async () => {
        if (busy) return
        let data
        try {
            setBusy(true)
            const res = await fetch("/api/generateName");
            data = await res.json();

        } catch (error) {

        }

        console.log(data);


        fetch("/api/checkusername", { method: "post", body: JSON.stringify({ username: data.username }) }).then((res) => res.json()).then((dat) => {

            if (!dat.user) {
                setUserName(data.username);
                toast.success("Username Generated");
                setBusy(false)
            } else {
                // generateUserName()
            }
            console.log(data)

        })
    };

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
                    {!busy ? (<p
                        className="text-blue-950 underline cursor-pointer select-none"
                        onClick={generateUserName}
                    >
                        Generate
                    </p>) : (<span className="loading">Loading...</span>)}

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
                        type="primary"
                        onClick={(e) => console.log("buuton clicked")}
                        text="SignUp"
                        busy={busy}
                    />
                </div>


                <p>
                    Already a User? <Link href={"./signin"}><span className="underline">Signin</span></Link>
                </p></form >)
        } else {
            return (

                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="bg-white slide-in max-w-6xl md:w-1/2 w-full p-5 flex items-center justify-center flex-col"
                >
                    <div className=" w-full mb-5">
                        <CustomInput
                            type="text"
                            placeholder="Create a Unique username"
                            name="phrase"
                            label="PasswordRecoveryPhrase"
                            value={"Peter is a bad boy"}
                            readOnly={true}
                        />
                        <p className="text-xs text-red-700">Please ensure to keep this phrase safe once lost you cannot recover your account when passowrd is forgotten</p>
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
                            type="primary"
                            onClick={(e) => console.log("buuton clicked")}
                            text="Register"
                            busy={busy}
                        />
                    </div>

                </form >
            )
        }
    }


}

export default Form;
