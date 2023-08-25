import React from 'react';
import './About.css';
import selfImage from './self.jpg'; // Import the image

function About() {
  return (
    <div className='about-me'>
      <div className='about-image'>
        <img src={selfImage} alt="Amit Kumar" />
      </div>
      <div className='about-text'>
        <p>Experienced full stack web developer and tech enthusiast. Enthusiastic learner, currently focusing on mastering React and honing database design skills. Collaborative team player in the dynamic market landscape.</p>
        <p>Currently Learning React & Database Design</p>
      </div>
    </div>
  );
}

export default About;
