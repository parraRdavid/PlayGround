// Home.tsx

import React from "react";
import NavButton from "@/components/randomUi/navigationButton";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl text-black font-mono mb-4">
          Welcome to my{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            Portfolio
          </span>
        </h1>
        <p className="text-gray-500 font-mono">
          Hi, I'm David, and I'm a soon-to-be graduate of Arizona State
          University with a BS in Computer Science, Software Engineering!
        </p>
      </div>
      <div className="flex-col md:flex-row hidden md:flex mt-5 gap-5">
        <NavButton buttonName="Calculator Function" destination="/calculator" />
      </div>
    </main>
  );
}
