import React, { useState, useEffect } from "react";
import './Listblogs.css';
import { useNavigate } from 'react-router-dom';
import CONFIG from "../../config";

const Listblogs = () => {
    const [allblogs, setAllBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchInfo = async () => {
        await fetch(`${CONFIG.BASE_URL}/allblogs`)
            .then((res) => res.json())
            .then((data) => { setAllBlogs(data); });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch(`${CONFIG.BASE_URL}/removeblogs`, {
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
        navigate(`/edit/${id}`);
    };

    return (
        <div className="list-product">
            <h1>All Blogs List</h1>
            <div className="listproduct-format-main">
                <p>Blogs</p>
                <p>Title</p>
                <p>Category</p>
                <p>Edit</p>
                <p>Remove</p>
            </div>
            
            <div className="listproduct-allproducts">
                <hr />
                {allblogs.map((blog, index) => {
                    return (
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <img src={blog.image} alt="" className="listproduct-product-icon" />
                            <p>{blog.title}</p>
                            <p>{blog.category}</p>
                            <button onClick={() => handleEditClick(blog.id)} className='listproduct-edit-icon'>Edit</button>
                            <button onClick={() => { remove_product(blog.id) }} className='listproduct-remove-icon'>Delete</button>
                        </div>
                    )
                })}
                <hr />
            </div>
        </div>
    );
};

export default Listblogs;
