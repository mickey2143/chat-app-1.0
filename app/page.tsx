"use client";
import Button from "@/components/customComponents/button";
export default async function Index() {
  return (
    <div className="h-screen">
      <nav className="px-10 h-10 items-center flex">Anony</nav>
      <main className="w-full h-full flex items-center justify-between px-10 space-x-2">
        <div className="w-1/2 mb-3">
          <h1 className="text-5xl font-bold mb-2">Chat Anonymously</h1>
          <p className="text-xl">
            With People of Same{" "}
            <span className="text-2xl text-blue-700">Likes</span>
          </p>
          <div className="w-60 pt-3">
            <Button
              text={"Get Started"}
              type={"primary"}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
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
      </main>
    </div>
  );
}
