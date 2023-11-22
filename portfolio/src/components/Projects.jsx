import React from 'react';
import './Projects.css';
import Tools from './images/tools.png'; 
import AMS from './images/ams.png'; 
import project3 from './images/Project3.png';
import project4 from './images/Project4.png';


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
      title: "Health Fit",
      imageSrc: project3,
      codeLink: "https://github.com/Amitkumar71/SIH-Prototype",
      description: "Health Fit is a hybrid application specially designed to cater the mental health needs of the Indian population.Offers a variety of activities and techniques to help users manage their stress levels, catering to those with moderate to low stress."
    },
    {
      title: "Notes",
      imageSrc: project4,
      codeLink: "https://github.com/your-username/project4",
      description: "Notes a centralized platform for students to share their notes and study material with others. It is a platform where students can upload their notes and study material and can also download notes and study material uploaded by other students"
    },
  ];

  return (
    <div className="projects-main">
    <h1>My Projects</h1>
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
