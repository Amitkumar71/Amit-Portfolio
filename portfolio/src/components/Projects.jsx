import React from 'react';
import './Projects.css';
import Project1 from './images/Stockflow.png'; 
import AMS from './images/ams.png'; 
import project3 from './images/Project3.png';
import project4 from './images/Project4.png';


const Projects = () => {
  const projectsData = [
    {
      title: "StockFlow-Inventory Ledger",
      imageSrc: Project1,
      codeLink: "https://github.com/Anasdevs/Stock-management-system-msi-",
      LiveDemo: "https://github.com/Anasdevs/Stock-management-system-msi-",
      description: "MSI Stock Management System is a comprehensive digital solution designed to streamline and optimize the management of various resources and supplies within the college premises. This user-friendly system provides administrator with an efficient way to track, monitor, and manage stocks."
    },
    {
      title: "Health Fit",
      imageSrc: project3,
      codeLink: "https://github.com/Amitkumar71/SIH-Prototype",
      LiveDemo: "https://sih-prototype.vercel.app/",
      description: "Health Fit is a hybrid application specially designed to cater the mental health needs of the Indian population.Offers a variety of activities and techniques to help users manage their stress levels, catering to those with moderate to low stress."
    },
    {
      title: "Attendance Management System",
      imageSrc: AMS,
      codeLink: "https://github.com/Anasdevs/Attendance-Management-System-2.0",
      LiveDemo: "https://github.com/Anasdevs/Attendance-Management-System-2.0",
      description: "The Attendance Management System has been specifically designed to automate and streamline the attendance management process. It offers a digital platform that efficiently records, monitors, and analyzes student attendance data, replacing the traditional manual methods currently in use."
    },
    {
      title: "Notes",
      imageSrc: project4,
      codeLink: "https://github.com/your-username/project4",
      LiveDemo: "https://notes-pages.vercel.app/",
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
          <div className='btns'>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          <a href={project.LiveDemo}>Live Demo</a>
          </div>
          <p className='project-description'>{project.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
