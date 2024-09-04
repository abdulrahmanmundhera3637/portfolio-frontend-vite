import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


const projects = [
  {
    id: 1,
    name: "Ecommerce App",
    technologies: "MERN Stack",
    image: project1,
    github: "https://github.com/abdulrahmanmundhera3637/MERN-ECOMMERCACE-APP",
    website: "https://mern-frontend-phi-mauve.vercel.app",
  },
  {
    id: 2,
    name: "Simon Says Game",
    technologies: "HTML CSS JS",
    image: project2,
    github: "https://github.com/abdulrahmanmundhera3637/Simon_Says-Game",
    website: "https://simon-says-game-orcin.vercel.app",
  },
  {
    id: 3,
    name: "Portfolio App",
    technologies: "MERN Stack",
    image: project3,
    github: "https://github.com/abdulrahmanmundhera3637/MERN-PORTFOLIO-APP",
    website: "https://my-personal-portfolio-frontend-qekm.vercel.app",
  },
  {
    id: 4,
    name: "Portfolio App",
    technologies: "MERN Stack Vite",
    image: project4,
    github: "https://github.com/abdulrahmanmundhera3637/portfolio_With_Vite",
    website: "https://portfolio-frontend-vite.vercel.app",
  },
  {
    id: 5,
    name: "Culculator App",
    technologies: "HTML,CSS,JavaScript",
    image: project5,
    github: "https://github.com/abdulrahmanmundhera3637/Calculator_App",
    website: "https://calculator-app-one-rouge.vercel.app",
  },
  {
    id: 6,
    name: "Culculator App",
    technologies: "HTML,CSS,JavaScript",
    image: project6,
    github: "https://github.com/abdulrahmanmundhera3637/Culculator2",
    website: "https://culculator2.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-4 md:py-8" id="project">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 md:p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a 
                  href={project.github} 
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
                <a 
                  href={project.website} 
                  className="inline-block bg-gradient-to-r 
                  from-blue-400 to-purple-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
