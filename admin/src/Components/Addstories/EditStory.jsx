import React, { useState, useEffect } from "react";
import JoditEditor from 'jodit-react';
import { useParams, useNavigate } from 'react-router-dom';
import './Editstory.css';

const EditStory = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({
        title: "",
        description: "",
        image: ""
    });
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(`http://localhost:4000/story/${id}`);
            if (response.ok) {
                const story = await response.json();
                setDetails(story);
            } else {
                console.error("Failed to fetch story:", response.statusText);
            }
        };
        fetchStory();
    }, [id]);

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const editStory = async () => {
        let formData = new FormData();
        formData.append('id', details.id);
        formData.append('title', details.title);
        formData.append('description', details.description);
        if (image) {
            formData.append('image', image);
        } else {
            formData.append('image', details.image);
        }

        const response = await fetch('http://localhost:4000/editstory', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                navigate('/liststories');
            }
        } else {
            console.error("Failed to edit story:", response.statusText);
        }
    };

    return (
        <div className="edit-blog-form">
            <h2>Edit Story</h2>
            <form onSubmit={(e) => { e.preventDefault(); editStory(); }}>
                <p>Story Title</p>
                <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />

                <p>Description</p>
                <JoditEditor
                    value={details.description}
                    onChange={newContent => setDetails({ ...details, description: newContent })}
                />

                <p>Upload Image</p>
                <input type="file" name="image" onChange={imageHandler} accept="image/*" />

                <button type="submit" className="btn primary">Save Changes</button>
                <button type="button" className="btn secondary" onClick={() => navigate('/liststories')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditStory;
