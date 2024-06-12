import TopNav from "@/components/topNav";
import Image from "next/image";
import signImage from "@/lib/images/signImage.svg"
import Form from "@/components/signinForm"
const SignIn = () => {

  return (
    <main className="w-full h-screen">
      <TopNav />

      <div className="w-full pt-24 flex flex-col-reverse md:flex-row mt-5 justify-between md:space-x-5 px-7">
        <div className="md:w-1/2 w-full ">
          <Image
            src={signImage}
          />
        </div>
        <Form />
      </div>
    </main>
  );
};

export default SignIn;
