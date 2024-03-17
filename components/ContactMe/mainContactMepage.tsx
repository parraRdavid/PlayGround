import NavBar from "@/components/NavBar/navBar";

export default function ContactMe() {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/mainBG.jpg")',
      }}
    >
      <div className="text-center border border-Slate px-20 py-20 rounded-md mb-8 ">
        <NavBar />
        <h1 className="text-5xl text-red-5 font-Yeseva text-Slate mb-4">
          Welcome to my{" "}
          <span className="text-transparent bg-clip-text ">Contact Me</span>
        </h1>
      </div>
      <div className="flex-col md:flex-row hidden md:flex mt-5 gap-5"></div>
    </div>
  );
}
