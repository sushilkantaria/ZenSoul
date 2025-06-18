
import React, { useState } from "react";
import './Addpodcast.css';

const AddPodcast = () => {
    const [details, setDetails] = useState({
        title: "",
        category: "video", // Default to 'video'
        youtubeLink: "",
    });

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const Add_Podcast = async () => {
        try {
            const response = await fetch('http://localhost:4000/addpodcast', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            const data = await response.json();

            if (data.success) {
                alert('Podcast Added');
                setDetails({
                    title: "",
                    category: "video",
                    youtubeLink: "",
                });
            } else {
                alert('Failed to add podcast');
            }
        } catch (error) {
            console.error("Error adding podcast:", error);
            alert('An error occurred while adding the podcast');
        }
    };

    return (
        <section className='create-post'>
            <div className="container">
                <h2>Create Podcast</h2>
                <form className="form create-post_form" onSubmit={(e) => { e.preventDefault(); Add_Podcast(); }}>
                    <p>Podcast Title</p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={details.title}
                        onChange={changeHandler}
                    />
                    
                    <p>Category</p>
                    <select name="category" value={details.category} onChange={changeHandler}>
                        <option value="video">Video</option>
                    </select>
                    
                    <p>YouTube Link</p>
                    <input
                        type="text"
                        name="youtubeLink"
                        placeholder="YouTube Link"
                        value={details.youtubeLink}
                        onChange={changeHandler}
                    />
                    
                    <button type='submit' className="btn primary">Create</button>
                </form>
            </div>
        </section>
    );
}

export default AddPodcast;
