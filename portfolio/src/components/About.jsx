import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import selfImage from './self.jpg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <div className='about-me'>
      <div className='about-image'>
        <img src={selfImage} alt="Amit Kumar" />
      </div>
      <div className='about-text'>
        <h1>Hi' I am <span className='name'>AMIT</span> </h1>
        <p>
          Full stack web developer and tech enthusiast. Enthusiastic learner, currently focusing on mastering React and honing database design skills. Collaborative team player in the dynamic market landscape.
        </p>
        <p>
        <FontAwesomeIcon icon={faLaptopCode} /> Currently Learning React &amp; Database Design
        </p>
        <p className='social-icons'>Social's:
          <FaLinkedin className='social-icon' onClick={() => window.open('https://www.linkedin.com/', '_blank')} />
          <FaGithub className='social-icon' onClick={() => window.open('https://github.com/', '_blank')} />
          <FaTwitter className='social-icon' onClick={() => window.open('https://twitter.com/', '_blank')} />
        </p>
      </div>
    </div>
  );
}

export default About;
