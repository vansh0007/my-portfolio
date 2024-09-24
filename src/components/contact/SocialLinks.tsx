import React from 'react';
import Desktop from './desktop.jpg';
import Contact from './Contact';
import './SocialLinks.css';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links-container">
        <Contact />
      <div className="desktop-image-container">
        <img src={Desktop} alt="Desktop" className="desktop-image"/>
        </div>

    </div>
  );
};

export default SocialLinks;
