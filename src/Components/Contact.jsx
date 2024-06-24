import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const emailAddress = "npniranjan2001@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="bg-slate-50 text-black p-8 m-10 rounded-md shadow-xl mx-auto max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Contact<span className="text-black">.</span>
        </h1>
        <p className="text-lg text-center mb-4">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/niranjanpanda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            LinkedIn
          </a>{" "}
          {} if that's more your speed.
        </p>
        <div className="flex justify-center items-center text-xl">
          <a
            href={`mailto:${emailAddress}`}
            onClick={handleEmailClick}
            className="flex items-center"
          >
            <FaEnvelope className="mr-2 cursor-pointer" />
            <span>{emailAddress}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
