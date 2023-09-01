import React from 'react';
import './contact.css'; // Import the CSS for this component
import { useForm, ValidationError } from '@formspree/react';

export default function ContactMeForm() {
  const [state, handleSubmit] = useForm("xjvqryvn");

  return (
    <div className='contact-me-main'>
      <div className="contact-me-form-main">
        <div className='contact-me-content'>
          <h1>Contact Me</h1>
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
      </div>
    </div>
  );
}
