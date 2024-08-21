import Link from "next/link";
import Image from "next/image";
import chatImage from "./chatting.svg";
import TopNav from "@/components/topNav";

export default async function Index() {
  return (
    <div className="h-screen">
      <TopNav />

      <main className="w-full h-full pt-24 text-blue-950">
        <section className=" w-full md:flex md:px-20 px-10 md:space-x-2 md:pt-0 pt-10">
          <div className="md:w-1/2 mb-3 flex  justify-center flex-col w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Chat Anonymously With People of same Likes
            </h1>
            <p className="mb-3 ">
              Do you love sports,games or news Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Qui sequi fuga debitis pariatur
              aspernatur nam atque eligendi officiis amet tempora voluptatem
            </p>
            <div className="w-60 pt-3">
              <Link
                href={"/signup"}
                className="w-full  bg-blue-950 px-7 py-3 text-white rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 h-1/2 mb-10 w-full flex justify-center">
            <Image src={chatImage} alt="an image of a chat" />
          </div>
        </section>

        <section className="md:px-20 px-10">
          <h2 className="font-bold md:text-5xl text-3xl w-full flex justify-center mt-10">
            What it is all About
          </h2>
          <p className="w-full flex justify-center text-sm">
            It is an open source, anonymous conversation platform.
          </p>

          <div className="md:grid-cols-3 sm:grid-col-2 grid mt-10 pb-10 gap-6 ">
            <div className="shadow-lg p-5 border-blue-950 border rounded-lg ">
              <h4 className="md:text-3xl text-2xl font-bold">No tracking</h4>
              <p>
                We don't use cookies or other scripts that track and identify
                users, so you stay private
              </p>
            </div>

            <div className="shadow-lg p-5 border-blue-950 border rounded-lg ">
              <h4 className="text-2xl font-bold">Open Sourced</h4>
              <p>
                We've open sourced our code to the world. No tricks or backdoors
                up our sleeves.
              </p>
            </div>

            <div className="shadow-lg p-5 border-blue-950 border rounded-lg ">
              <h4 className="text-2xl font-bold">How to Use It</h4>
              <p>
                Register with a Unique Username and Password and choose your
                conversion Likes
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-950 w-full h-full md:px-20 pt-7 px-7 justify-between items-center">
          <div className="flex justify-center w-full">
            <p className="text-white mr-4">Get stated</p>
            <div className="w-60 pt-3">
              <Link
                href={"/signup"}
                className="w-full  bg-white px-7 py-3 text-blue-950 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
