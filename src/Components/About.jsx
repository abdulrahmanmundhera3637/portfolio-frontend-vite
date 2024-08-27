import React from "react";
import AboutImage from "../assets/me.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-8" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-64 h-72 rounded object-cover mb-6 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-6">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/4">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-1/4">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-1/4">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between text-center">
                <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500">
                        6+
                    </h3>
                    <p>Months Experience</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500">
                        10+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500">
                        05+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
