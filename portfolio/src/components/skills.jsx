import React from 'react';

const SkillsComponent = () => {
  return (
    <div className="skills-container">
      <div className="section">
        <h2>Frontend</h2>
        <ul>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="section">
        <h2>Backend</h2>
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Flask</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className="section">
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

export default SkillsComponent;
