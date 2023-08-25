import React from 'react';
import './contact.css';

const ContactMe = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:your.email@example.com?subject=Contact%20From%20Website';
  };

  return (
    <div className="contact-container">
      <h1 className='info'>Contact Me</h1>
      <p className=''>If you have any questions or inquiries, feel free to send me an email.</p>
      <button className="mail-button" onClick={handleMailClick}>Send Email</button>
    </div>
  );
};

export default ContactMe;
