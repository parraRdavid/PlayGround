const Nav = () => {
  let navLinks = [
    { name: "About Me", link: "/aboutme" },
    { name: "Projects", link: "/myprojects" },
    { name: "Contact Me", link: "/contactme" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black ">
          David R. Parra
        </div>
        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          <img src="next.svg" alt="" />
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {navLinks.map((link) => (
            <li className="font-[Poppins] md:ml-8 text-xl md:my-0 my-7">
              <a
                className="text-black hover:text-red-400 duration-500"
                href={link.link}
              >
                {" "}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Nav;
