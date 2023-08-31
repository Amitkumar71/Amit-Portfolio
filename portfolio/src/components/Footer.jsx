import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Made with{' '}
        <span className="heart">&hearts;</span> by AMIT KUMAR
      </p>
    </footer>
  );
};

export default Footer;
