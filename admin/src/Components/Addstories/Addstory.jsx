// import React, { useState, useRef} from "react";
// import './Addstory.css';
// import 'react-quill/dist/quill.snow.css'
// import JoditEditor from 'jodit-react'

// const Addstory = () => {
//     const editor=useRef(null)
//     const [details, setDetails] = useState({
//         title: "",
//         image: "",
//         description: "",
//     });

//     const changeHandler = (e) => {
//         setDetails({ ...details, [e.target.name]: e.target.value });
//     };

//     const [image,setImage] = useState(false);

//     const imageHandler = (e) =>{
//         setImage(e.target.files[0]);
//     }

//     const Add_Stories = async() =>{
//         console.log(details);
//         let responseData;
//         let story = { ...details};

//         let formData = new FormData();
//         formData.append('blog', image);

//         await fetch('http://localhost:4000/upload',{
//             method:'POST',
//             headers:{
//                 Accept:'application/json',
//             },
//             body:formData,
//         }).then((resp)=> resp.json()).then((data)=>{responseData=data})

//         if(responseData.success)
//             {
//                 story.image= responseData.image_url;
//                 console.log(story);
//                 await fetch('http://localhost:4000/addstory',{
//                     method:'POST',
//                     headers:{
//                         Accept:'application/json',
//                         'Content-Type':'application/json',
//                     },
//                     body:JSON.stringify(story),
//                 }).then((resp)=>resp.json()).then((data)=>{
//                     data.success?alert('Story Added'):alert('Failed')
//                 })
//             }

//     }

//     return (
//         <section className='create-post'>
//             <div className="container">
//                 <h2>Create Story</h2>
//                 <form className="form create-post_form" onSubmit={(e)=>{e.preventDefault(); Add_Stories();}}>
//                     <p>Story Title</p>
//                     <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />
                    
//                     <p>Description</p>

//                     <JoditEditor
//                     ref={editor}
//                     value={details.description}
//                     onChange={newContent => setDetails({...details, description: newContent})}/>
                    
//                     <p>Upload Image</p>
//                     <input type="file" namae='image' onChange={imageHandler} accept='png, jpg, jpeg' />
                    
//                     <button type='submit' className="btn primary">Create</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Addstory;




import React, { useState, useRef } from "react";
import './Addstory.css';
import 'react-quill/dist/quill.snow.css';
import JoditEditor from 'jodit-react';

const Addstory = () => {
    const editor = useRef(null);
    const [details, setDetails] = useState({
        title: "",
        image: "",
        description: "",
    });

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const [image, setImage] = useState(null);

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const Add_Stories = async () => {
        console.log(details);
        let responseData;
        let story = { ...details };

        let formData = new FormData();
        formData.append('blog', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data });

        if (responseData.success) {
            story.image = responseData.image_url;
            console.log(story);
            await fetch('http://localhost:4000/addstory', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(story),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert('Story Added') : alert('Failed');
            });
        }
    };

    return (
        <section className='create-post'>
            <div className="container">
                <h2>Create Story</h2>
                <form className="form create-post_form" onSubmit={(e) => { e.preventDefault(); Add_Stories(); }}>
                    <p>Story Title</p>
                    <input type="text" name="title" placeholder="Title" value={details.title} onChange={changeHandler} />
                    
                    <p>Description</p>

                    <JoditEditor
                        ref={editor}
                        value={details.description}
                        onChange={newContent => setDetails({ ...details, description: newContent })}
                    />
                    
                    <p>Upload Image</p>
                    <input type="file" name='image' onChange={imageHandler} accept='image/png, image/jpg, image/jpeg' />
                    
                    <button type='submit' className="btn primary">Create</button>
                </form>
            </div>
        </section>
    );
};

export default Addstory;
