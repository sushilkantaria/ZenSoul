import React, { useState, useEffect } from "react";
import './Listmeditation.css';
import { useNavigate } from 'react-router-dom';

const ListMeditation = () => {
    const [allMeditations, setAllMeditations] = useState([]);
    const navigate = useNavigate();

    const fetchMeditations = async () => {
        try {
            const response = await fetch('http://localhost:4000/allmeditations');
            if (!response.ok) {
                throw new Error('Failed to fetch meditations');
            }
            const data = await response.json();
            setAllMeditations(data);
        } catch (error) {
            console.error('Error fetching meditations:', error);
        }
    };

    useEffect(() => {
        fetchMeditations();
    }, []);

    const removeMeditation = async (id) => {
        try {
            const response = await fetch('http://localhost:4000/removemeditation', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });
            if (!response.ok) {
                throw new Error('Failed to delete meditation');
            }
            fetchMeditations(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting meditation:', error);
        }
    };

    const handleEditClick = (id) => {
        navigate(`/editmeditation/${id}`);
    };

    return (
        <div className="list-meditation">
            <h1>All Meditations List</h1>
            <div className="listmeditation-format-main">
                <p>Title</p>
                <p>Edit</p>
                <p>Remove</p>
            </div>
            
            <div className="listmeditation-allmeditations">
                <hr />
                {allMeditations.map((meditation, index) => (
                    <div key={index} className="listmeditation-format-main listmeditation-format">
                        <p>{meditation.title}</p>
                        <button onClick={() => handleEditClick(meditation.id)} className='listmeditation-edit-icon'>Edit</button>
                        <button onClick={() => removeMeditation(meditation.id)} className='listmeditation-remove-icon'>Delete</button>
                    </div>
                ))}
                <hr />
            </div>
        </div>
    );
};

export default ListMeditation;
