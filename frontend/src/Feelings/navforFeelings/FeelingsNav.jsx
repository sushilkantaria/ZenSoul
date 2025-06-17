import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import DaykaLogo from '..//..//assets/wordLogo2-bgLess.png';
import NightkaLogo from '..//..//assets/ZENSOUL-wordLogo-BGLess.png';

const Navbar = () => {
    const location = useLocation();
    const isIndBlogPage = location.pathname.startsWith('/IndBlogs/') || location.pathname.startsWith('/PasswordReset');
    const ishome=location.pathname==='/Home' || location.pathname==='/' || location.pathname==='/BlogPg' || location.pathname==='/QuizPage' || location.pathname ==='/ExplorePg' || location.pathname ==='/PodcastsPg' || location.pathname==='/Stressmeter' || location.pathname==='/Journal' || location.pathname==='/Attachment' || location.pathname==='/Lonely' || location.pathname==='/Color' || location.pathname==='/Anxiety' || location.pathname==='/Selflove' || location.pathname==='/Tune' || location.pathname==='/Seasons' || location.pathname==='/Lovelang' || location.pathname==='/Anger' || location.pathname==='/IndBlogs/:id' || location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/ContactUs' || location.pathname==='/AboutUs' || location.pathname==='/ForgetPassword' || location.pathname==='/profile';
    
    const [ISDARKMode, setisDarkmode] = useState(false);

    const toggledarklightMode = () => {
        setisDarkmode(prevmode => !prevmode);
    };

    // If on Home page, do not render the Navbar
    if (ishome || isIndBlogPage) {
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
                    <Link to="/Journal" className="menu-btn">Journal</Link>
                    <Link to="/Activity" className="menu-btn">Activities</Link>
                    <Link to="/PodcastsPg" className="menu-btn">Podcasts</Link>
                    <Link to="/Meditation" className="menu-btn">Meditation</Link>
                    <Link to="/Sounds" className="menu-btn">Sounds</Link>

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
