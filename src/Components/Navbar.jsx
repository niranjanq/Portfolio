// import React from 'react'
import { useState } from "react";
import Logo from "/Logo.svg"
// import { AiOutlineMenu } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [menu, setMenu] = useState(true)
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    // {
    //   id:2,
    //   text:"Skills"
    // },
    {
      id: 3,
      text: "Projects"
    },
    {
      id:4,
      text:"About"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg top-0 left-0 right-0">
        <div className="flex justify-between h-16 items-center font-semibold">
          <div className="flex space-x-2">
            <img src={Logo} className="h-12 w-12 rounded-full " alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Niranj<span className="text-red-600 text-2xl">an</span> Panda
              <p>Full Stack Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <CgMenuRightAlt size={24} /> : <IoClose size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col items-center justify-center h-screen text-xl space-y-3 font-bold">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
