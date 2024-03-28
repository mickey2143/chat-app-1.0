"use client";
import CustomInput from "@/components/customComponents/input";
import Button from "@/components/customComponents/button";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleSubmit = (e) => {
  e.preventDefault();
  toast("Account Created Successfully");
};
const SignUp = () => {
  return (
    <div className="w-full h-screen p-5 flex items-center justify-between px-10">
      <div className="w-1/2">
        <h3 className="font-extrabold text-2xl pb-5">
          Anonymounsly chat with people from different Locations
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum
          voluptatum eum consectetur cum, in porro deleniti repellat possimus
          dicta sequi delectus aliquam inventore blanditiis, facere at autem
          exercitationem. Quibusdam.
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white max-w-6xl w-1/2 p-5 flex items-center justify-center flex-col"
      >
        <div className=" w-full mb-5">
          <CustomInput
            type="text"
            placeholder="Create a Unique username"
            name="username"
            label="Username"
          />
          <p className="text-blue-700 underline">Generate</p>
        </div>
        <div className=" w-full mb-5">
          <CustomInput
            type="password"
            placeholder="Create a Unique Password"
            label="Password"
          />
        </div>

        <div className="mb-4 w-full">
          <Button
            type="primary"
            onClick={(e) => console.log("buuton clicked")}
            text="SignUp"
          />
        </div>
        <ToastContainer />

        <p>
          Already a User? <Link href={"./signin"}>Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
