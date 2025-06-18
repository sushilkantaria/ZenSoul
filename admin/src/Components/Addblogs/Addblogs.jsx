import React, { useState, useRef} from "react";
import './Addblogs.css';
import 'react-quill/dist/quill.snow.css'
import JoditEditor from 'jodit-react'
import CONFIG from "../../config";

const Addblogs = () => {
    const editor=useRef(null)
    const [details, setDetails] = useState({
        title: "",
        image: "",
        category: "",
        description: "",
    });

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const [image,setImage] = useState(false);

    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }

    const Add_Blogs = async() =>{
        console.log(details);
        let responseData;
        let blog = { ...details};

        let formData = new FormData();
        formData.append('blog', image);

        await fetch(`${CONFIG.BASE_URL}/upload`,{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
            {
                blog.image= responseData.image_url;
                console.log(blog);
                await fetch(`${CONFIG.BASE_URL}/addblogs`,{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(blog),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert('Blog Added'):alert('Failed')
                })
            }

    }

    const POST_CATEGORIES = ['Addiction', 'Anger', 'Anxiety', 'Depression', 'Disorder', 'Happiness', 'Meditation', 'Self-Improvement', 'Stress', 'Understanding Emotions'];

    return (
        <section className='create-post'>
            <div className="container">
                <h2>Create Blog</h2>
                <form className="form create-post_form" onSubmit={(e)=>{e.preventDefault(); Add_Blogs();}}>
                    <p>Blog Title</p>
                    <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />
                    
                    <p>Category</p>
                    <select name="category" value={details.category} onChange={changeHandler}>
                        {POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                    
                    <p>Description</p>

                    <JoditEditor
                    ref={editor}
                    value={details.description}
                    onChange={newContent => setDetails({...details, description: newContent})}/>
                    
                    <p>Upload Image</p>
                    <input type="file" namae='image' onChange={imageHandler} accept='png, jpg, jpeg' />
                    
                    <button type='submit' className="btn primary">Create</button>
                </form>
            </div>
        </section>
    )
}

export default Addblogs;