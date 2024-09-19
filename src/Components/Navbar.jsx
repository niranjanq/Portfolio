import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import img from "/img.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function Navbar({ toggleTheme }) {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "About", to: "about" },
    { id: 5, text: "Contact", to: "contact" },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg top-0 left-0 right-0">
        <div className="flex justify-between h-16 items-center font-semibold">
          <div className="flex space-x-2">
            <img src={img} className="h-12 w-12 rounded-full" alt="Logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Niranj<span className="text-red-600 text-2xl">an</span> Panda
              <p>Full Stack Developer</p>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, to }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="text-2xl hidden md:block ml-4"
            >
              {document.body.classList.contains("dark") ? (
                <MdLightMode />
              ) : (
                <MdDarkMode />
              )}
            </button>
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {menu ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <IoClose
            size={24}
            onClick={() => setMenu(false)}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 font-bold text-xl">
          {navItems.map(({ id, text, to }) => (
            <li
              className="hover:scale-105 duration-200 cursor-pointer"
              key={id}
              onClick={() => setMenu(false)}
            >
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
