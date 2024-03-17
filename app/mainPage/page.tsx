import React from "react";
import NavBar from "@/components/NavBar/navBar";

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex bg-cover bg-center"
      style={{
        backgroundImage: 'url("/mainBG.jpg")',
      }}
    >
      <img
        src="/gengar.jpeg"
        alt="Description of the image"
        className="w-1/2 h-full"
      />
      <div className="flex flex-col justify-center items-center w-1/2 px-20 py-20">
        <NavBar />
        <h1 className="text-5xl text-red-5 font-Yeseva text-Slate mb-4">
          Welcome to my{" "}
          <span className="text-transparent bg-clip-text ">Portfolio</span>
        </h1>
      </div>
    </div>
  );
}
