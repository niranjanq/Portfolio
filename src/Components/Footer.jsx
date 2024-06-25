import React from "react";
import { TbNoCopyright } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const emailAddress = "npniranjan2001@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/niranjanpanda/";
  const githubUrl = "https://github.com/niranjanq";

  return (
    <div>
      <div className="flex flex-col items-center bg-gray text-black font-bold h-[12rem] justify-center">
        <h4 className="flex items-center mb-2">
          <TbNoCopyright className="mr-2" /> Copyright. All rights reserved.
        </h4>
        <div className="flex space-x-2">
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-xl cursor-pointer" />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl cursor-pointer" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
