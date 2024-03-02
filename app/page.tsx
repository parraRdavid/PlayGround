import { Imbue } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full ">
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[1000px]">
          <div className="bg-slate-200 p-6 rounded-lg">
            {" "}
            {/* Added enclosing div with cyan background */}
            <h1 className="text-[50px] text-black font-mono">
              Welcome to my
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
                {" "}
                Portfolio
              </span>
            </h1>
            <p className="text-gray-500 hidden md:block font-mono">
              {" "}
              Hi, I'm David, and I'm a soon to be graduate of Arizona State
              University with a BS in Computer Science, Software Engineer!!!!!
            </p>
          </div>
          <div className="flex-col md:flex-row hidden md:flex bg-cyan-50"></div>
        </div>
      </div>
    </main>
  );
}
