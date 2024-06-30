// import React from 'react'
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import QR from "/QR.png";
import Image from "/Image.jpeg";

function Home() {
  const qrCodeLink = "https://resume-nw.netlify.app/";

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl font-bold">Welcome to My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1 className="font-bold">Hello! I am</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                // typedRef={setTyped}
                strings={["Niranjan", "a Programmer", "a Developer", "a Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Eager and motivated full-stack developer with a B.Tech in Computer
              Science and Engineering. Experienced in building web applications
              with React and Node.js. Looking forward to contributing to
              innovative projects and expanding my expertise in web development.
            </p>
            <br />
            <div className="flex items-center justify-center mt-8">
              <a href={qrCodeLink} target="_blank" className="relative">
                <img
                  src={QR}
                  alt="Resume_Here"
                  className="h-[300px] w-[300px] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
                  <span className="text-xl text-black font-semibold p-4 bg-white bg-opacity-40 rounded-full">
                    Resume
                  </span>
                </div>
              </a>
            </div>
            <div className="flex flex-col md:flex-row px-12 justify-evenly space-y-6 md:space-y-0 items-center">
              <div className="space-x-8">
                <button className="bg-slate-600 hover:bg-black duration-300 text-white font-bold py-2 px-4 rounded-full mt-5">
                  <a
                    href="https://www.linkedin.com/in/niranjanpanda/"
                    target="-blank"
                  >
                    <FaLinkedin />
                  </a>
                </button>
              </div>
              <div className="space-x-8">
                <button className="bg-slate-600 hover:bg-black duration-300 text-white font-bold py-2 px-4 rounded-full mt-5">
                  <a href="https://github.com/niranjanq" target="_blank">
                    <FaGithubSquare />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-20 order-1 mt-8 flex justify-center">
            <img
              src={Image}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
