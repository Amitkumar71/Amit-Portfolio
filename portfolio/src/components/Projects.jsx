import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      imageSrc: "project1.jpg",
      codeLink: "https://github.com/your-username/project1",
    },
    {
      title: "Project 2",
      imageSrc: "project2.jpg",
      codeLink: "https://github.com/your-username/project2",
    },
    {
      title: "Project 3",
      imageSrc: "project3.jpg",
      codeLink: "https://github.com/your-username/project3",
    },
    {
      title: "Project 4",
      imageSrc: "project4.jpg",
      codeLink: "https://github.com/your-username/project4",
    },
  ];

  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.imageSrc} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
