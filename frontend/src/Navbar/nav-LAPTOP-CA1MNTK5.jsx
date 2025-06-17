import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import './nav.css';
import DaykaLogo from '../assets/wordLogo2-bgLess.png'; // Updated light mode logo
import NightkaLogo from '../assets/ZENSOUL-wordLogo-BGLess.png'; // Updated dark mode logo

const Navbar = () => {
    const location = useLocation();
    const ishome=location.pathname==='/Home' || location.pathname === '/' || location.pathname === '/AnxietyPg'  || location.pathname === '/StressedPg'  || location.pathname === '/FrustratedPg'  || location.pathname === '/MoodSwingsPg'  || location.pathname === '/BoredomPg';
    const [ISDARKMode, setisDarkmode] = useState(false);

    const toggledarklightMode = () => {
        setisDarkmode(prevmode => !prevmode);
    };

    // If on Home page, do not render the Navbar
    if (ishome) {
        return null;
    }

    return (
        <div className={`bodyOfNav ${ISDARKMode ? 'dark-Mode' : 'Light-mode'}`}>
            <header className={`MainNavbar ${ISDARKMode ? 'dark-Mode' : 'Light-mode'}`}>
                <div className="leftofmainNavbar">
                    <div className="WORD-Logo">
                        <img src={ISDARKMode ? NightkaLogo : DaykaLogo} alt="wordLogo" />
                    </div>
                </div>
                <div className="rightofmainNavbar">
                    <Link to="/Home" className="menu-btn">Home</Link>
                    <Link to="/journal" className="menu-btn">Journal</Link>
                    <Link to="/QuizPage" className="menu-btn">Quiz</Link>
                    <Link to="/BlogPg" className="menu-btn">Blogs</Link>

                    {/* Dropdown for Podcasts */}
                    {/* <div className="dropdown">
                        <button className="dropdown-btn">Podcast</button>
                        <div className="dropdown-content">
                            <Link to="/PodcastsPg" className="dropdown-item">Audio</Link>
                            <Link to="/podcasts/episode2" className="dropdown-item">Episode 2</Link>
                        </div>
                    </div> */}

                    <Link to="/PodcastsPg" className="menu-btn">Podcasts</Link>

                    {/* Dropdown for Stories */}
                    <div className="dropdown">
                        <button className="dropdown-btn">Stories</button>
                        <div className="dropdown-content">
                            <Link to="/stories/story1" className="dropdown-item">Story 1</Link>
                            <Link to="/stories/story2" className="dropdown-item">Story 2</Link>
                        </div>
                    </div>

                    <Link to="/login" className="login-btn">Login</Link>
                    <button 
                        className="toggle-of-dark-light-mode" 
                        onClick={toggledarklightMode}
                    >
                        {ISDARKMode ? '🌙' : '☀️'}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
