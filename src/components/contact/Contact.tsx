import React from 'react';
import { useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';
import Twitter from './twitter.gif';
import Facebook from './facebook.gif';
import Linkedin from './linkedin.gif';
import Instagram from './instagram.gif';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("yes");
    // Handle form submission, e.g., send data to an API
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} id="contact" className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p>Get in touch with me via social media or email.</p>
      <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" className="social-icon"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="social-icon"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin" className="social-icon"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="social-icon"/>
          </a>
      </div>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> vansh.bhatia9@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +1 250 913 1376
        </p>
        
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: true })}
            placeholder="Your name"
          />
          {errors.name && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            placeholder="Your email"
          />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: true })}
            placeholder="Your message"
          />
          {errors.message && <span className="error">Message is required</span>}
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </animated.div>
  );
};

export default Contact;




 