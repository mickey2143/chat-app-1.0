"use client";
import Button from "@/components/customComponents/button";
import Link from "next/link";
import CustomInput from "@/components/customComponents/input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



function Form() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);

    const handleSigin = async (e) => {

        e.preventDefault();
        if (username === "" | password === "") {

            toast.error("Please fill in the credentials")
        } else {
            try {
                // await SignIn("credentials", { username, password })

                setBusy(true);
                fetch("/api/login", {
                    method: "POST",
                    body: JSON.stringify({ username, password }),
                })
                    .then((res) => {
                        setBusy(true);
                        return res.json();
                    })
                    .then((data) => {
                        if (data.success) {
                            toast.success("sigin Successfully")
                            document.cookie = `accessToken=${data?.data?.accessToken};path="/";Max-Age=30`
                        } else {
                            toast.error("Sorry, it is from our Server please Try again")

                        }
                        console.log(data)
                    })
                    .catch((err) => {
                        setBusy(false);
                        console.log(err);
                    })
                    .finally(() => {
                        setBusy(false);
                    });
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <form
            onSubmit={(e) => handleSigin(e)}
            className="bg-white max-w-6xl w-full md:w-1/2 p-5 flex items-center justify-center flex-col"
        >
            <div className=" w-full mb-5">
                <CustomInput
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    label="Username"
                    value={username}
                    handleInput={(name) => setUserName(name)}
                />
            </div>
            <div className=" w-full mb-5">
                <CustomInput
                    type="password"
                    placeholder="Enter Password"
                    label="Password"
                    value={password}
                    handleInput={(name) => setPassword(name)}
                />
                <p className="text-blue-950 pt-1 text-sm underline">
                    <Link href={"./reset-password"}>Forgot Password?</Link>
                </p>
            </div>
            <div className="mb-2 w-full">
                <Button
                    type="bg-black"
                    onClick={(e) => console.log("buuton clicked")}
                    text="Login"
                    busy={busy}
                />
            </div>

            <p className="w-full flex text-sm">
                Already a User?{" "}
                <span className="pl-2 text-blue-950 underline">
                    <Link href={"./signup"}>Signup</Link>
                </span>
            </p>
        </form>
    );
}

export default Form;
