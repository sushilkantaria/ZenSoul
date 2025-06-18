import React, { useState } from "react";
import './Meditation.css';
import CONFIG from "../../config";

const AddMeditation = () => {
    const [details, setDetails] = useState({
        title: "",
        category: "Anxious", // Default to 'Anxious'
        link: "",
    });

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const addMeditation = async () => {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/addMeditation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            const data = await response.json();

            if (data.success) {
                alert('Meditation Added');
                setDetails({
                    title: "",
                    category: "Anxious",
                    link: "",
                });
            } else {
                alert('Failed to add meditation');
            }
        } catch (error) {
            console.error("Error adding meditation:", error);
            alert('An error occurred while adding the meditation');
        }
    };

    return (
        <section className='create-post'>
            <div className="container">
                <h2>Create Meditation</h2>
                <form className="form create-post_form" onSubmit={(e) => { e.preventDefault(); addMeditation(); }}>
                    <p>Meditation Title</p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={details.title}
                        onChange={changeHandler}
                    />
                    
                    <p>Category</p>
                    <select name="category" value={details.category} onChange={changeHandler}>
                        <option value="Anxious">Anxious</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Frustrated">Frustrated</option>
                        <option value="Boredom">Boredom</option>
                        <option value="Mood Swings">Mood Swings</option>
                    </select>
                    
                    <p>Meditation Link</p>
                    <input
                        type="text"
                        name="link"
                        placeholder="Link"
                        value={details.link}
                        onChange={changeHandler}
                    />
                    
                    <button type='submit' className="btn primary">Create</button>
                </form>
            </div>
        </section>
    );
}

export default AddMeditation;
