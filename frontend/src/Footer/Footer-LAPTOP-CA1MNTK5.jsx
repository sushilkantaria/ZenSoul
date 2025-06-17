import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import Insta from '../assets/social.png';
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';

const Footer = () => {
   const location = useLocation();
    const ishome= location.pathname === '/' || location.pathname==='/Home';
    
       if (ishome) {
        return null;
    }

  return (
    <div className="footer">
      <div className="footer-tagline-section">
        <h2 className="footer-tagline" style={{ margin: '5px' }}>Your Mental Health Matters</h2>
      </div>
      <div className="footer-subheading-buttons-section">
        <div className="footer-subhead-section">
          <h3>Follow Us</h3>
        </div>
        <div className="tobringtheminoneclass">
        <div className="footer-social-buttons">
          <a href="#" className="social-button"><img src={Insta} alt="Instagram-icon" /></a>
          <a href="#" className="social-button"><img src={Twitter} alt="Twitter-icon" /></a>
          <a href="#" className="social-button"><img src={LinkedIn} alt="LinkedIn-icon" /></a>
          <a href="#" className="social-button"><img src={Github} alt="Github-icon" /></a>
        </div>
      </div>
      <div className="footer-menu">
        <a href="#" className="footer-link">Home</a>
        <a href="#" className="footer-link">About</a>
        <a href="#" className="footer-link">Services</a>
        <a href="#" className="footer-link">Contact</a>
        <a href="#" className="footer-link">Blog</a>
      </div>
      </div>{/* remove this div if u want two sections differently */}
      <div className="footer-copyright-section">
        <p>With love and compassion, we care for your well-being.</p>
        <p>copyright&copy; 2024 🤍</p>
      </div>
    </div>
  );
};

export default Footer;
