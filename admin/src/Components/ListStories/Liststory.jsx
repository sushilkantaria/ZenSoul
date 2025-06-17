import React, { useState, useEffect } from "react";
import './Liststory.css';
import { useNavigate } from 'react-router-dom';

const Liststory = () => {
    const [allstories, setAllStories] = useState([]);
    const navigate = useNavigate();

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allstories')
            .then((res) => res.json())
            .then((data) => { setAllStories(data); });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removestories', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        fetchInfo();
    };

    const handleEditClick = (id) => {
        navigate(`/editstory/${id}`);
    };

    return (
        <div className="list-product">
            <h1>All Stories List</h1>
            <div className="listproduct-format-main">
                <p>Stories</p>
                <p>Title</p>
                <p>Edit</p>
                <p>Remove</p>
            </div>
            
            <div className="listproduct-allproducts">
                <hr />
                {allstories.map((story, index) => {
                    return (
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <img src={story.image} alt="" className="listproduct-product-icon" />
                            <p>{story.title}</p>
                            <button onClick={() => handleEditClick(story.id)} className='listproduct-edit-icon'>Edit</button>
                            <button onClick={() => { remove_product(story.id) }} className='listproduct-remove-icon'>Delete</button>
                        </div>
                    )
                })}
                <hr />
            </div>
        </div>
    );
};

export default Liststory;
