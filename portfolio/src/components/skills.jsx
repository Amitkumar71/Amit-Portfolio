import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className='skill'>My Skills Include</h1>
      <div className="section">
        <h2>Frontend</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="section-2">
        <h2>Backend</h2>
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Flask</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className="section-3">
        <h2>Tools</h2>
        <ul>
          <li>Canva</li>
          <li>Figma</li>
          <li>Github</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
