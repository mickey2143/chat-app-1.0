"use client";
import CustomInput from "@/components/customComponents/input";
import Button from "@/components/customComponents/button";
import Link from "next/link";

const SignIn = () => {
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
        onSubmit={(e) => e.preventDefault()}
        className="bg-white max-w-6xl w-1/2 p-5 flex items-center justify-center flex-col"
      >
        <div className=" w-full mb-5">
          <CustomInput
            type="text"
            placeholder="Enter username"
            name="username"
            label="Username"
          />
        </div>
        <div className=" w-full mb-5">
          <CustomInput
            type="text"
            placeholder="Enter PassPhrase"
            label="PassPhrase"
          />
        </div>
        <div className=" w-full mb-5">
          <CustomInput
            type="text"
            placeholder="Enter New Password"
            label="New Password"
          />
        </div>
        <div className="mb-2 w-full">
          <Button
            type="primary"
            onClick={(e) => console.log(e)}
            text="Reset Password"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
