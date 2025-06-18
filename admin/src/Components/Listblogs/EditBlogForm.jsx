import React, { useState, useEffect } from "react";
import JoditEditor from 'jodit-react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBlogForm.css';
import CONFIG from "../../config";

const EditBlogForm = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({
        title: "",
        category: "",
        description: "",
        image: ""
    });
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`${CONFIG.BASE_URL}/blog/${id}`);
            if (response.ok) {
                const blog = await response.json();
                setDetails(blog);
            } else {
                console.error("Failed to fetch blog:", response.statusText);
            }
        };
        fetchBlog();
    }, [id]);

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const editBlog = async () => {
        let formData = new FormData();
        formData.append('id', details.id);
        formData.append('title', details.title);
        formData.append('category', details.category);
        formData.append('description', details.description);
        if (image) {
            formData.append('image', image);
        } else {
            formData.append('image', details.image);
        }

        const response = await fetch(`${CONFIG.BASE_URL}/editblog`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                navigate('/listblogs');
            }
        } else {
            console.error("Failed to edit blog:", response.statusText);
        }
    };

    return (
        <div className="edit-blog-form">
            <h2>Edit Blog</h2>
            <form onSubmit={(e) => { e.preventDefault(); editBlog(); }}>
                <p>Blog Title</p>
                <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />

                <p>Category</p>
                <input type="text" name="category" placeholder="Category" value={details.category} onChange={changeHandler} />

                <p>Description</p>
                <JoditEditor
                    value={details.description}
                    onChange={newContent => setDetails({ ...details, description: newContent })}
                />

                <p>Upload Image</p>
                <input type="file" name="image" onChange={imageHandler} accept="image/*" />

                <button type="submit" className="btn primary">Save Changes</button>
                <button type="button" className="btn secondary" onClick={() => navigate('/listblogs')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditBlogForm;
