import React from 'react';
import './contact.css'; // Import the CSS for this component
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


export default function ContactMeForm() {
  const [state, handleSubmit] = useForm("xjvqryvn");

  return (
    <div className='contact-me-main'>
      <div className="contact-me-content">
        <div className="contact-form">
          <h1>Send Message</h1>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/xjvqryvn" method="POST">
            <div className='form-group'>
              <input type='text' id='name' name='name' placeholder='Your Name' required />
            </div>
            <div className='form-group'>
              <input type='email' id='email' name='_replyto' placeholder='Your Email' required />
            </div>
            <div className='form-group'>
              <input type='text' id='subject' name='subject' placeholder='Subject' required />
            </div>
            <div className='form-group'>
              <textarea id='message' name='message' rows='8' placeholder='PS C:Contact/Message' required />
            </div>
            <button type='submit' className='contact-me-button' disabled={state.submitting}>
              {state.succeeded ? 'Message Sent!' : 'Send Message'}
            </button>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </form>
        </div>
        <div className="contact-info">
          <h1>Contact Info</h1>
          <div className="info-item">
            <p>Mobile: +91 9906512856</p>
          </div>
          <div className="info-item">
            <p>Email: amitkumarr7135@gmail.com</p>
          </div>
          <div className="info-item">
          <p className='icons'>
          <FaLinkedin className='C-icon' onClick={() => window.open('https://www.linkedin.com/', '_blank')} />
          <FaGithub className='C-icon' onClick={() => window.open('https://github.com/', '_blank')} />
          <FaTwitter className='C-icon' onClick={() => window.open('https://twitter.com/', '_blank')} />
        </p>
          </div>
          <div className="info-item">
            <p>Address: Delhi, India</p>
            <iframe className="map"  title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56062.11306740022!2d77.00389557815252!3d28.573303878185484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31eec4e1%3A0x39493976cba4c89a!2sDwarka%2C%20Delhi!5e0!3m2!1sen!2sin!4v1693658720909!5m2!1sen!2sin"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
