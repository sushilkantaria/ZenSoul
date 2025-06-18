import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import CONFIG from '../config';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null); // Initialize userInfo as null
    const [journalEntries, setJournalEntries] = useState([]);
    const [showEntries, setShowEntries] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const userToken = localStorage.getItem('token');

        if (userId && userToken) {
            fetch(`${CONFIG.BASE_URL}/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUserInfo(data.user);
                })
                .catch(err => console.error('Error fetching user info:', err));
        }
    }, []);

    const handleShowEntries = () => {
        const userId = localStorage.getItem('userId');
        const userToken = localStorage.getItem('token');

        if (userId && userToken) {
            fetch(`${CONFIG.BASE_URL}/journal/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setJournalEntries(data);
                    setShowEntries(true);
                })
                .catch(err => console.error('Error fetching journal entries:', err));
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        navigate('/Home'); 
    };

    return (
        <div className="profile-container">
            <h1 className="profile-h1">User Profile</h1>
            <div className="profile-user-info">
                {/* Check if userInfo is loaded before rendering */}
                {userInfo ? (
                    <>
                        <p><strong>Username:</strong> {userInfo.username}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                    </>
                ) : (
                    <p>Loading user information...</p>
                )}
                <button onClick={handleShowEntries}>My Memories</button>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>

            {showEntries && (
                <div className="profile-journal-entries">
                    <h2>Your Journal Entries:</h2>
                    {journalEntries.length > 0 ? (
                        <ul>
                        {journalEntries.map(entry => (
                            <li key={entry._id}>
                                <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
                                <p><strong>Mood:</strong> {entry.mood}</p>
                                <p><strong>Affirmations:</strong> {entry.affirmations.join(', ')}</p>
                                <p><strong>Gratitude:</strong> {entry.gratitude.join(', ')}</p>
                                <p><strong>Text:</strong> {entry.journalText}</p>
                                
                                {/* Display images if they exist */}
                                {entry.images && entry.images.length > 0 && (
                                    <div className="entry-images">
                                        {entry.images.map((img, index) => (
                                            <img key={index} src={`${CONFIG.BASE_URL}/${img}`} alt={`Journal entry image ${index + 1}`} />
                                        ))}
                                    </div>
                                )}
                
                                {/* Display audio files if they exist */}
                                {entry.audios && entry.audios.length > 0 && (
                                    <div className="entry-audios">
                                        {entry.audios.map((audio, index) => (
                                            <audio key={index} controls>
                                                <source src={`${CONFIG.BASE_URL}/${audio}`} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        ))}
                                    </div>
                                )}
                
                                {/* Display videos if they exist */}
                                {entry.videos && entry.videos.length > 0 && (
                                    <div className="entry-videos">
                                        {entry.videos.map((video, index) => (
                                            <video key={index} controls>
                                                <source src={`${CONFIG.BASE_URL}/${video}`} type="video/mp4" />
                                                Your browser does not support the video element.
                                            </video>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    ) : (
                        <p>No journal entries found.</p>
                    )}
                </div>
            )}

            <Link to="/Home">Go Back</Link>
        </div>
    );
};

export default ProfilePage;
