import { useState } from "react";
import Logo from "/Logo.svg"
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false); // Default to menu closed
  const navItems = [
    { id: 1, text: "Home" },
    { id: 3, text: "Projects" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg top-0 left-0 right-0">
        <div className="flex justify-between h-16 items-center font-semibold">
          <div className="flex space-x-2">
            <img src={Logo} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Niranj<span className="text-red-600 text-2xl">an</span> Panda
              <p>Full Stack Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${menu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <IoClose size={24} onClick={() => setMenu(false)} className="cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 font-bold text-xl">
          {navItems.map(({ id, text }) => (
            <li
              className="hover:scale-105 duration-200 cursor-pointer"
              key={id}
              onClick={() => setMenu(false)} // Close menu on item click
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
