import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Editmeditation.css';
import CONFIG from "../../config";

const EditMeditation = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({
        title: "",
        category: "",
        link: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMeditation = async () => {
            try {
                const response = await fetch(`${CONFIG.BASE_URL}/meditation/${id}`);
                if (response.ok) {
                    const meditation = await response.json();
                    setDetails(meditation);
                } else {
                    console.error("Failed to fetch meditation:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching meditation:", error);
            }
        };
        fetchMeditation();
    }, [id]);

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const editMeditation = async () => {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/editmeditation`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...details, id }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    navigate('/listmeditations');
                }
            } else {
                console.error("Failed to edit meditation:", response.statusText);
            }
        } catch (error) {
            console.error("Error editing meditation:", error);
        }
    };

    return (
        <div className="edit-meditation-form">
            <h2>Edit Meditation</h2>
            <form onSubmit={(e) => { e.preventDefault(); editMeditation(); }}>
                <p>Meditation Title</p>
                <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />

                <p>Meditation Category</p>
                <input type="text" name="category" placeholder="Category" value={details.category} onChange={changeHandler} />

                <p>Meditation Link</p>
                <input type="text" name="link" placeholder="Link" value={details.link} onChange={changeHandler} />

                <button type="submit" className="btn primary">Save Changes</button>
                <button type="button" className="btn secondary" onClick={() => navigate('/listmeditations')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditMeditation;
