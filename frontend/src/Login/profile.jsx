// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './profile.css'

// const ProfilePage = () => {
//     const [userInfo, setUserInfo] = useState({});
//     const [journalEntries, setJournalEntries] = useState([]);
//     const [showEntries, setShowEntries] = useState(false);

//     useEffect(() => {
//         const userId = localStorage.getItem('userId'); // Assuming you're storing userId in localStorage
//         const userToken = localStorage.getItem('token'); // Check if the user is logged in

//         // Fetch user info
//         if (userId && userToken) {
//             fetch(`http://localhost:4000/users/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`, // Use the token for authorization
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setUserInfo(data.user); // Assuming your API returns user data under 'user'
//                 })
//                 .catch(err => console.error('Error fetching user info:', err));
//         }
//     }, []);

//     const handleShowEntries = () => {
//         const userId = localStorage.getItem('userId');
//         const userToken = localStorage.getItem('token');

//         // Fetch journal entries
//         if (userId && userToken) {
//             fetch(`http://localhost:4000/journal/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setJournalEntries(data); // Assuming entries are returned under 'entries'
//                     setShowEntries(true);
//                 })
//                 .catch(err => console.error('Error fetching journal entries:', err));
//         }
//     };

//     return (
//         <div className="profile-container">
//             <h1 className="profile-h1">User Profile</h1>
//             <div className="profile-user-info">
//                 <p><strong>Username:</strong> {userInfo.username}</p>
//                 <p><strong>Email:</strong> {userInfo.email}</p>
//                 <button onClick={handleShowEntries}>My Memories</button>
//             </div>

//             {showEntries && (
//                 <div className="profile-journal-entries">
//                     <h2>Your Journal Entries:</h2>
//                     {journalEntries.length > 0 ? (
//                         <ul>
//                             {journalEntries.map(entry => (
//                                 <li key={entry.id}>{entry.text} - {entry.date}</li> // Adjust based on your entry structure
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No journal entries found.</p>
//                     )}
//                 </div>
//             )}

//             <Link to="/Home">Go Back</Link>
//         </div>
//     );
// };

// export default ProfilePage;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './profile.css';

// const ProfilePage = () => {
//     const [userInfo, setUserInfo] = useState({});
//     const [journalEntries, setJournalEntries] = useState([]);
//     const [showEntries, setShowEntries] = useState(false);

//     useEffect(() => {
//         const userId = localStorage.getItem('userId');
//         const userToken = localStorage.getItem('token');

//         // Fetch user info
//         if (userId && userToken) {
//             fetch(`http://localhost:4000/users/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setUserInfo(data.user);
//                 })
//                 .catch(err => console.error('Error fetching user info:', err));
//         }
//     }, []);

//     const handleShowEntries = () => {
//         const userId = localStorage.getItem('userId');
//         const userToken = localStorage.getItem('token');

//         if (userId && userToken) {
//             fetch(`http://localhost:4000/journal/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setJournalEntries(data); // Directly set data since your endpoint returns entries directly
//                     setShowEntries(true);
//                 })
//                 .catch(err => console.error('Error fetching journal entries:', err));
//         }
//     };

//     return (
//         <div className="profile-container">
//             <h1 className="profile-h1">User Profile</h1>
//             <div className="profile-user-info">
//                 <p><strong>Username:</strong> {userInfo.username}</p>
//                 <p><strong>Email:</strong> {userInfo.email}</p>
//                 <button onClick={handleShowEntries}>My Memories</button>
//             </div>

//             {showEntries && (
//                 <div className="profile-journal-entries">
//                     <h2>Your Journal Entries:</h2>
//                     {journalEntries.length > 0 ? (
//                         <ul>
//                         {journalEntries.map(entry => (
//                             <li key={entry._id}>
//                                 <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
//                                 <p><strong>Mood:</strong> {entry.mood}</p>
//                                 <p><strong>Affirmations:</strong> {entry.affirmations.join(', ')}</p>
//                                 <p><strong>Gratitude:</strong> {entry.gratitude.join(', ')}</p>
//                                 <p><strong>Text:</strong> {entry.journalText}</p>
                                
//                                 {/* Display images if they exist */}
//                                 {entry.images && entry.images.length > 0 && (
//                                     <div className="entry-images">
//                                         {entry.images.map((img, index) => (
//                                             <img key={index} src={`http://localhost:4000/${img}`} alt={`Journal entry image ${index + 1}`} />
//                                         ))}
//                                     </div>
//                                 )}
                
//                                 {/* Display audio files if they exist */}
//                                 {entry.audios && entry.audios.length > 0 && (
//                                     <div className="entry-audios">
//                                         {entry.audios.map((audio, index) => (
//                                             <audio key={index} controls>
//                                                 <source src={`http://localhost:4000/${audio}`} type="audio/mpeg" />
//                                                 Your browser does not support the audio element.
//                                             </audio>
//                                         ))}
//                                     </div>
//                                 )}
                
//                                 {/* Display videos if they exist */}
//                                 {entry.videos && entry.videos.length > 0 && (
//                                     <div className="entry-videos">
//                                         {entry.videos.map((video, index) => (
//                                             <video key={index} controls>
//                                                 <source src={`http://localhost:4000/${video}`} type="video/mp4" />
//                                                 Your browser does not support the video element.
//                                             </video>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                     ) : (
//                         <p>No journal entries found.</p>
//                     )}
//                 </div>
//             )}

//             <Link to="/Home">Go Back</Link>
//         </div>
//     );
// };

// export default ProfilePage;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './profile.css';

// const ProfilePage = () => {
//     const [userInfo, setUserInfo] = useState({});
//     const [journalEntries, setJournalEntries] = useState([]);
//     const [showEntries, setShowEntries] = useState(false);
//     const navigate = useNavigate(); // Initialize useNavigate

//     useEffect(() => {
//         const userId = localStorage.getItem('userId');
//         const userToken = localStorage.getItem('token');

//         // Fetch user info
//         if (userId && userToken) {
//             fetch(`http://localhost:4000/users/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setUserInfo(data.user);
//                 })
//                 .catch(err => console.error('Error fetching user info:', err));
//         }
//     }, []);

//     const handleShowEntries = () => {
//         const userId = localStorage.getItem('userId');
//         const userToken = localStorage.getItem('token');

//         if (userId && userToken) {
//             fetch(`http://localhost:4000/journal/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setJournalEntries(data); // Directly set data since your endpoint returns entries directly
//                     setShowEntries(true);
//                 })
//                 .catch(err => console.error('Error fetching journal entries:', err));
//         }
//     };

//     // Handle logout action
//     const handleLogout = () => {
//         // Clear the local storage
//         localStorage.removeItem('userId');
//         localStorage.removeItem('token');

//         // Redirect the user to the login or home page
//         navigate('/Home'); // Redirect to Home page or any other page you want
//     };

//     return (
//         <div className="profile-container">
//             <h1 className="profile-h1">User Profile</h1>
//             <div className="profile-user-info">
//                 <p><strong>Username:</strong> {userInfo.username}</p>
//                 <p><strong>Email:</strong> {userInfo.email}</p>
//                 <button onClick={handleShowEntries}>My Memories</button>
//                 <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
//             </div>

//             {showEntries && (
//                 <div className="profile-journal-entries">
//                     <h2>Your Journal Entries:</h2>
//                     {journalEntries.length > 0 ? (
//                         <ul>
//                         {journalEntries.map(entry => (
//                             <li key={entry._id}>
//                                 <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
//                                 <p><strong>Mood:</strong> {entry.mood}</p>
//                                 <p><strong>Affirmations:</strong> {entry.affirmations.join(', ')}</p>
//                                 <p><strong>Gratitude:</strong> {entry.gratitude.join(', ')}</p>
//                                 <p><strong>Text:</strong> {entry.journalText}</p>
                                
//                                 {/* Display images if they exist */}
//                                 {entry.images && entry.images.length > 0 && (
//                                     <div className="entry-images">
//                                         {entry.images.map((img, index) => (
//                                             <img key={index} src={`http://localhost:4000/${img}`} alt={`Journal entry image ${index + 1}`} />
//                                         ))}
//                                     </div>
//                                 )}
                
//                                 {/* Display audio files if they exist */}
//                                 {entry.audios && entry.audios.length > 0 && (
//                                     <div className="entry-audios">
//                                         {entry.audios.map((audio, index) => (
//                                             <audio key={index} controls>
//                                                 <source src={`http://localhost:4000/${audio}`} type="audio/mpeg" />
//                                                 Your browser does not support the audio element.
//                                             </audio>
//                                         ))}
//                                     </div>
//                                 )}
                
//                                 {/* Display videos if they exist */}
//                                 {entry.videos && entry.videos.length > 0 && (
//                                     <div className="entry-videos">
//                                         {entry.videos.map((video, index) => (
//                                             <video key={index} controls>
//                                                 <source src={`http://localhost:4000/${video}`} type="video/mp4" />
//                                                 Your browser does not support the video element.
//                                             </video>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                     ) : (
//                         <p>No journal entries found.</p>
//                     )}
//                 </div>
//             )}

//             <Link to="/Home">Go Back</Link>
//         </div>
//     );
// };

// export default ProfilePage;






import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null); // Initialize userInfo as null
    const [journalEntries, setJournalEntries] = useState([]);
    const [showEntries, setShowEntries] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const userToken = localStorage.getItem('token');

        if (userId && userToken) {
            fetch(`http://localhost:4000/users/${userId}`, {
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
            fetch(`http://localhost:4000/journal/${userId}`, {
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
                                            <img key={index} src={`http://localhost:4000/${img}`} alt={`Journal entry image ${index + 1}`} />
                                        ))}
                                    </div>
                                )}
                
                                {/* Display audio files if they exist */}
                                {entry.audios && entry.audios.length > 0 && (
                                    <div className="entry-audios">
                                        {entry.audios.map((audio, index) => (
                                            <audio key={index} controls>
                                                <source src={`http://localhost:4000/${audio}`} type="audio/mpeg" />
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
                                                <source src={`http://localhost:4000/${video}`} type="video/mp4" />
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
