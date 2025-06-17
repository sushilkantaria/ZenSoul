import React, { useState, useEffect } from "react";
import './Listpodcast.css';
import { useNavigate } from 'react-router-dom';

const ListPodcast = () => {
    const [allPodcasts, setAllPodcasts] = useState([]);
    const navigate = useNavigate();

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allpodcasts');
            if (!response.ok) {
                throw new Error('Failed to fetch podcasts');
            }
            const data = await response.json();
            setAllPodcasts(data);
        } catch (error) {
            console.error('Error fetching podcasts:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_podcast = async (id) => {
        try {
            const response = await fetch('http://localhost:4000/removepodcast', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });
            if (!response.ok) {
                throw new Error('Failed to delete podcast');
            }
            fetchInfo(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting podcast:', error);
        }
    };

    const handleEditClick = (id) => {
        navigate(`/editpodcast/${id}`);
    };

    return (
        <div className="list-podcast">
            <h1>All Podcasts List</h1>
            <div className="listpodcast-format-main">
                <p>Title</p>
                <p>Edit</p>
                <p>Remove</p>
            </div>
            
            <div className="listpodcast-allpodcasts">
                <hr />
                {allPodcasts.map((podcast, index) => (
                    <div key={index} className="listpodcast-format-main listpodcast-format">
                        <p>{podcast.title}</p>
                        <button onClick={() => handleEditClick(podcast.id)} className='listpodcast-edit-icon'>Edit</button>
                        <button onClick={() => remove_podcast(podcast.id)} className='listpodcast-remove-icon'>Delete</button>
                    </div>
                ))}
                <hr />
            </div>
        </div>
    );
};

export default ListPodcast;
