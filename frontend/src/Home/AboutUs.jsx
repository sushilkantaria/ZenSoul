import React from 'react';
import './AboutUs.css';
import About from '../assets/about2.jpg'

const About_Us = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <h1>Our Mission</h1>
          <hr className="divider" />
          <p>
            At the heart of ZenSoul lies our unwavering belief in the power of human connection and compassion. We understand that life can be overwhelming, and moments of struggle are a natural part of the human experience. Our mission is to cultivate a supportive community where individuals can find solace, understanding, and hope. We strive to create a space where you can connect with your inner self, explore different coping mechanisms, and ultimately, rediscover your own strength and resilience. By offering a range of tools and resources, we aim to empower you to navigate life's challenges with greater ease and confidence. Remember, you are not alone, and we are here to support you every step of the way.
          </p>
        </div>
        <div className="about-us-right">
          <img src={About} alt="About Us" className="about-us-image" />
        </div>
      </div>



    
    </div>
  );
};

export default About_Us;