import React from 'react';
import './About.css';

function About() {

  return (
    <div className='about-me'>
      <h1>Hi Myself Amit Kumar</h1> 

      <p>AGE - 19 </p>
      <p>3rd Year BCA student at Hamaraja Surajmal Institute (IPU) in Delhi.</p>
    <p>Currently Learning React</p>
    <p>Working with Database Design</p>
      <p>My skills include:</p>
      <ul className='skills'>
        <ul>HTML</ul>
        <ul>CSS</ul>
        <ul>JavaScript</ul>
        <ul>React</ul>
      </ul>

    </div>
  );

}

export default About;