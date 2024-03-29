import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import selfImage from './images/self.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import resume from './Resume/Amit Kumar_Resume.pdf';

function About() {
  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className='about-me'>
      <div className='about-image'>
        <img src={selfImage} alt="Amit Kumar" />
      </div>
      <div className='about-text'>
        <h1>Hi' I am <span className='name'>AMIT</span> </h1>
        <p>
          Full stack web developer, currently focusing on mastering <span className='name'>React</span> and honing <span className='name'>Database Design</span> skills. Collaborative team player in the dynamic market landscape.
        </p>
        <p>
          <FontAwesomeIcon icon={faLaptopCode} /> Currently Learning React &amp; Database Design
        </p>
        <p className='social-icons'>
          <FaLinkedin className='social-icon' onClick={() => window.open('https://www.linkedin.com/in/amit-kumar-970574227/','_blank')} />
          <FaGithub className='social-icon' onClick={() => window.open('https://github.com/Amitkumar71', '_blank')} />
          <FaTwitter className='social-icon' onClick={() => window.open('https://twitter.com/', '_blank')} />
        </p>
        <button className='resume-button' onClick={openResume}>View Resume</button>
      </div>
    </div>
  );
}

export default About;
