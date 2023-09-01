import React from 'react';
import './Projects.css';
import Tools from './tools.png'; 
import AMS from './ams.png'; 
import project3 from './Project 3.png'; 

const Projects = () => {
  const projectsData = [
    {
      title: "Tools",
      imageSrc: Tools,
      codeLink: "https://github.com/Amitkumar71/Tools",
      description: "Tools is a All-in-One Online Toolbox which eliminates the need for users to search and bookmark multiple individual tools. Everything they need is accessible from a single platform."
    },
    {
      title: "Attendance Management System",
      imageSrc: AMS,
      codeLink: "https://github.com/Anasdevs/Attendance-Management-System-2.0",
      description: "The Attendance Management System has been specifically designed to automate and streamline the attendance management process. It offers a digital platform that efficiently records, monitors, and analyzes student attendance data, replacing the traditional manual methods currently in use."
    },
    {
      title: "Project 3",
      imageSrc: project3,
      codeLink: "https://github.com/your-username/project3",
      description: "This is the short description about the Project 3 project which I am curently working on."
    },
    {
      title: "Project 4",
      imageSrc: project3,
      codeLink: "https://github.com/your-username/project4",
      description: "This is the short description about the the Project 4 project which I am curently working on."
    },
  ];

  return (
    <div className="projects-main">
    <h1>My Projects Include</h1>
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.imageSrc} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          <p className='project-description'>{project.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
