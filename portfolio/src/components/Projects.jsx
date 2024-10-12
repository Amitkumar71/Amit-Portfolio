"use client"

import {React, useEffect} from 'react';
import './Projects.css';
import Project1 from './images/Stockflow.png'; 
import AMS from './images/ams.png'; 
import HealthFit from './images/Project3.png';
import project4 from './images/Project4.png';
import Chatapp from './images/Chatapp.png'
import SimpleParallax from 'simple-parallax-js'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS when this component is mounted
  }, []);

  const projectsData = [
    {
      title: "Real Time Chat Application",
      imageSrc: Chatapp,
      codeLink: "https://github.com/Amitkumar71/Realtime-Chat-Room",
      LiveDemo: "https://github.com/Amitkumar71/Realtime-Chat-Room",
      description: "A dynamic chat platform developed using Django and Django Channels, supporting real-time messaging and multiple chat rooms."
    },
    {
      title: "StockFlow-Inventory Ledger",
      imageSrc: Project1,
      codeLink: "https://github.com/Anasdevs/Stock-management-system-msi-",
      LiveDemo: "https://github.com/Anasdevs/Stock-management-system-msi-",
      description: "MSI Stock Management System is a comprehensive digital solution designed to streamline and optimize the management of various resources and supplies within the college premises."
    },
    {
      title: "Health Fit",
      imageSrc: HealthFit,
      codeLink: "https://github.com/Amitkumar71/SIH-Prototype",
      LiveDemo: "https://sih-prototype.vercel.app/",
      description: "Health Fit is a hybrid application specially designed to cater the mental health needs of the Indian population.Offers a variety of activities and techniques to help users manage their stress levels."
    },
    {
      title: "Attendance Management System",
      imageSrc: AMS,
      codeLink: "https://github.com/Anasdevs/Attendance-Management-System-2.0",
      LiveDemo: "https://github.com/Anasdevs/Attendance-Management-System-2.0",
      description: "The Attendance Management System has been specifically designed to automate and streamline the attendance management process In our college Premises."
    },
    {
      title: "Notes",
      imageSrc: project4,
      codeLink: "https://github.com/your-username/project4",
      LiveDemo: "https://notes-pages.vercel.app/",
      description: "Notes a centralized platform for students to share their notes and study material with others."
    },
  ];

  return (
    <div className="projects-main">
    <h1>My Projects</h1>
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div data-aos="zoom-in" className="project-card" key={index}>
          <SimpleParallax orientation='down' scale={1.5}>
          <img src={project.imageSrc} alt={project.title} />
          </SimpleParallax>
          <h3 className='font-bold p-3 font-size-l'>{project.title}</h3>
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
