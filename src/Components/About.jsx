// import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MdSentimentSatisfied } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";

function About() {
  return (
    <div className="bg-white text-black p-8">
      <div className="flex items-center mb-8">
        <h1 className="text-6xl font-bold">
          About<span className="text-black">.</span>
        </h1>
        <div className="flex-1 ml-4 border-t-2 border-black"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-black p-4 rounded-md text-3xl text-white font-bold">
              H
            </div>
            <p className="text-xl">
              ey! I'm Niranjan, a versatile full stack web developer with
              expertise in both front-end and back-end technologies. I
              specialize in creating dynamic, responsive, and user-friendly web
              applications.
            </p>
          </div>
          <p className="text-lg">
            With a solid foundation in HTML, CSS, JavaScript, and modern
            frameworks like React and Svelte on the front end, coupled with
            proficiency in server-side languages such as Node.js and Python, I
            build robust, scalable solutions.
          </p>
          <p className="text-lg">
            My experience extends to database management with SQL and NoSQL
            databases, ensuring seamless integration and performance. I am
            passionate about continuous learning, and leveraging the latest
            technologies to deliver exceptional digital experiences.
          </p>
          <p className="text-lg">
            I'm passively looking for new positions where I can merge my love
            for code with my love for the canvas. If you think you've got an
            opening that I might like, let's connect{" "}
            <FaEnvelope className="inline" />
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/niranjanpanda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/niranjanq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <AiFillCode className="text-2xl text-black mr-2" />
              <h2 className="text-2xl font-bold text-black">Skills</h2>
            </div>
            <div className="flex flex-wrap space-x-2">
              {[
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "React",
                "Redux",
                "NodeJS",
                "C++",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white py-1 px-3 rounded-full text-sm mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <MdSentimentSatisfied className="text-2xl text-black mr-2" />
              <h2 className="text-2xl font-bold text-black">For Fun </h2>
            </div>
            <div className="flex flex-wrap space-x-2">
              {[
                "Cricket",
                "Carrom",
                "Volley Ball",
                "BGMI",
                "Asphalt",
                "Valorant",
                "Movies",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white py-1 px-3 rounded-full text-sm mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
