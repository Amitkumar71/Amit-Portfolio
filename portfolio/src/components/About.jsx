// import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import selfImage from './images/self.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import resume from './Resume/Resume_Latest.pdf';
import {motion} from 'framer-motion'

function About() {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const openResume = () => {
  //   setIsDialogOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  // const closeDialog = () => {
  //   setIsDialogOpen(false);
  //   document.body.style.overflow = '';
  // };

  return (
    <motion.div  className='about-me'>
      <div className='about-image'>
        <img src={selfImage} alt="Amit Kumar" />
      </div>
      <div className='about-text'>
        <h1>Hi, I am <span className='name'>AMIT</span> </h1>
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
        <button className='resume-button' onClick={() => window.open(resume,'_blank')}>View Resume</button>
      </div>

      {/* {isDialogOpen && (
        <div className="dialog-box">
          <button className="close-btn" onClick={closeDialog}>Close</button>

          <iframe src={resume} className="resume-iframe" title="Resume"></iframe>
        </div>
      )} */}

      {/* <div className={`background ${isDialogOpen ? 'blur' : ''}`}></div> */}
    </motion.div>
  );
}

export default About;
