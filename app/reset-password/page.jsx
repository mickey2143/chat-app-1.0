"use client";
import CustomInput from "@/components/customComponents/input";
import Button from "@/components/customComponents/button";
import Link from "next/link";
import Image from "next/image";
import signImage from "@/lib/images/signImage.svg"


const SignIn = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row mt-5 justify-between md:space-x-5 px-7">
      <div className="md:w-1/2 w-full ">
        <Image
          src={signImage}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white max-w-6xl md:w-1/2 w-full p-5 flex items-center justify-center flex-col"
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
        <p>
          <Link href={"./signin"}><span className="underline">Signin</span></Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
