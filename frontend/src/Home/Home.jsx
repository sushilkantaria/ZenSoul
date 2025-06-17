import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import dayLogo from '../assets/wordLogo2-bgLess.png'; // Current logo for light mode
import nightLogo from '../assets/ZENSOUL-wordLogo-BGLess.png'; // New logo for dark mode
import logoGif from '../assets/logo22.gif'; // Path to your logo GIF
import BGVideo from '../assets/back-vid.mp4';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkLightMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`body-of-home ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <video src={BGVideo} autoPlay loop muted playsInline className="background-video" />
            {!isDarkMode && <div className="video-overlay"></div>} {/* White overlay in light mode */}
            <header className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="navbar-left">
                    <div className="word-logo">
                        <img src={isDarkMode ? nightLogo : dayLogo} alt="wordLogo" />
                    </div>
                </div>
                <div className="navbar-right">
                    <Link to="/ExplorePg" className="menu-button">Explore</Link>
                    <Link to="/AboutUs" className="menu-button">About </Link>
                    <Link to="/ContactUs" className="menu-button">Contact Us</Link>
                    <Link to="/login" className="login-button">Login</Link>
                    <button 
                        className="dark-light-mode-toggle" 
                        onClick={toggleDarkLightMode}
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>
            </header>
            <div className={`overlay ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="content-section">
                    <div className="content-left">
                        <img src={logoGif} alt="Logo GIF" className="logo-gif" />
                    </div>
                    <div className="content-right">
                        <h1 className={`heading ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Welcome to Zensoul</h1>
                        <p className={`subheading ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Let's unveil the inner radiance and embark on a path to endless joy and bliss and peace.</p>
                    </div>
                </div>
                <Link to="/ExplorePg" className="explore-button">Explore</Link>
            </div>
        </div>
    );
};

export default Home;
