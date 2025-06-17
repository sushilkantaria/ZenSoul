import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './PageReveal.css'; // Import CSS file for styling
import Vid from '../Home/ZENSOUL.mp4'; // Corrected path for the video

const PageReveal = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3; // Set the video speed
      videoRef.current.onended = () => {
        setVideoEnded(true); // Update state when video ends
        setTimeout(() => {
          navigate('/Home'); // Navigate to the home page after a short delay
        }, 1000); // Adjust the delay as needed
      };
    }
  }, [navigate]);


   const location = useLocation();
    const ishome=location.pathname==='/Home' 


    if (ishome) {
      return null;
  }
  return (
    <div className={`page-reveal ${videoEnded ? 'reveal' : ''}`}>
      <video ref={videoRef} autoPlay muted>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-page">
        {/* Home page content goes here */}
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default PageReveal;