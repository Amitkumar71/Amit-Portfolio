import React from 'react';
import './contact.css';

const ContactMe = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:your.email@example.com?subject=Contact%20From%20Website';
  };

  

export default ContactMe;
