import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Editpodcast.css';
import CONFIG from "../../config";

const EditPodcast = () => {
    const { id } = useParams(); // Get the podcast ID from the URL params
    const [details, setDetails] = useState({
        title: "",
        youtubeLink: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPodcast = async () => {
            try {
                const response = await fetch(`${CONFIG.BASE_URL}/podcast/${id}`);
                if (response.ok) {
                    const podcast = await response.json();
                    setDetails({
                        title: podcast.title,
                        youtubeLink: podcast.youtubeLink,
                    });
                } else {
                    console.error("Failed to fetch podcast:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching podcast:", error);
            }
        };
        fetchPodcast();
    }, [id]);

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const editPodcast = async () => {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/editpodcast`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...details, id }), // Include the `id` in the request body
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    navigate('/listpodcasts');
                }
            } else {
                console.error("Failed to edit podcast:", response.statusText);
            }
        } catch (error) {
            console.error("Error editing podcast:", error);
        }
    };

    return (
        <div className="edit-podcast-form">
            <h2>Edit Podcast</h2>
            <form onSubmit={(e) => { e.preventDefault(); editPodcast(); }}>
                <p>Podcast Title</p>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={details.title} 
                    onChange={changeHandler} 
                />

                <p>Podcast Link</p>
                <input 
                    type="text" 
                    name="youtubeLink" 
                    placeholder="Link" 
                    value={details.youtubeLink} 
                    onChange={changeHandler} 
                />

                <button type="submit" className="btn primary">Save Changes</button>
                <button type="button" className="btn secondary" onClick={() => navigate('/listpodcasts')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditPodcast;
