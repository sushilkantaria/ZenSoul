import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import DaykaLogo from '../assets/wordLogo2-bgLess.png'; 
import NightkaLogo from '../assets/ZENSOUL-wordLogo-BGLess.png'; 
import Home from '../Home/home.png';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/Home' || location.pathname === '/' || 
                   location.pathname === '/AnxietyPg' || location.pathname === '/StressedPg' || 
                   location.pathname === '/FrustratedPg' || location.pathname === '/MoodSwingsPg' || 
                   location.pathname === '/BoredomPg' || location.pathname === '/Meditation' || 
                   location.pathname === '/Sounds' || location.pathname === '/YogaAct' 
                   || location.pathname === '/PSE' || location.pathname === '/ActJ' 
                   || location.pathname === '/Eft' || location.pathname === '/Activity';
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

    const toggleDarkLightMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const checkLoginStatus = () => {
            const userToken = localStorage.getItem('token'); // Check for the token in localStorage
            setIsLoggedIn(!!userToken); // Set isLoggedIn to true if token exists
        };

        // Call the function on mount
        checkLoginStatus();

        // Listen for changes in localStorage (this will capture changes like logout)
        window.addEventListener('storage', checkLoginStatus);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []); // Empty array ensures this runs only once

    // Optional: Manually update login state if a logout is triggered elsewhere
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from localStorage
        setIsLoggedIn(false); // Update state to reflect logout
    };

    if (isHome) {
        return null;
    }

    return (
        <div className={`bodyOfNav ${isDarkMode ? 'dark-Mode' : 'Light-mode'}`}>
            <header className={`MainNavbar ${isDarkMode ? 'dark-Mode' : 'Light-mode'}`}>
                <div className="leftofmainNavbar">
                    <div className="WORD-Logo">
                        <img src={isDarkMode ? NightkaLogo : DaykaLogo} alt="wordLogo" />
                    </div>
                </div>
                <div className="rightofmainNavbar">
                    <Link to="/Home" className="home-btn"><img src={Home} alt="Home" /></Link>
                    <Link to="/ExplorePg" className="menu-btn">Explore</Link>
                    <Link to="/Journal" className="menu-btn">Journal</Link>
                    <Link to="/QuizPage" className="menu-btn">Quiz</Link>
                    <Link to="/BlogPg" className="menu-btn">Blogs</Link>
                    <Link to="/PodcastsPg" className="menu-btn">Podcasts</Link>

                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" className="login-btn">Profile</Link>
                            {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
                        </>
                    ) : (
                        <Link to="/login" className="login-btn">Login</Link>
                    )}
                    
                    <button 
                        className="toggle-of-dark-light-mode" 
                        onClick={toggleDarkLightMode}
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                </div>
            </header>
        </div>
    ); 
};

export default Navbar;
