// import React, { useState } from "react";
// import './Addpodcast.css';

// const AddPodcast = () => {
//     const [details, setDetails] = useState({
//         title: "",
//         category: "video", // Default to 'video'
//         youtubeLink: "",
//         description: "",
//         author: "",
//         duration: "",
//     });

//     const [audioFile, setAudioFile] = useState(null);
//     const [imageFile, setImageFile] = useState(null);

//     const changeHandler = (e) => {
//         setDetails({ ...details, [e.target.name]: e.target.value });
//     };

//     const fileChangeHandler = (e) => {
//         if (e.target.name === 'audioFile') {
//             setAudioFile(e.target.files[0]);
//         } else if (e.target.name === 'imageFile') {
//             setImageFile(e.target.files[0]);
//         }
//     };


//     const Add_Podcast = async () => {
//         const formData = new FormData();
//         formData.append('title', details.title);
//         formData.append('category', details.category);
//         formData.append('description', details.description);
//         formData.append('author', details.author);
//         formData.append('duration', details.duration);

//         if (details.category === 'video') {
//             formData.append('youtubeLink', details.youtubeLink);
//         } else if (details.category === 'audio') {
//             if (audioFile) {
//                 formData.append('audioFile', audioFile);
//             }
//             if (imageFile) {
//                 formData.append('imageFile', imageFile);
//             }
//         }


//        // Debugging: log FormData entries
//        for (let [key, value] of formData.entries()) {
//         console.log(`${key}: ${value}`);
//     }

//     try {
//         const response = await fetch('http://localhost:4000/addpodcast', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();

//         if (data.success) {
//             alert('Podcast Added');
//             setDetails({
//                 title: "",
//                 category: "video",
//                 youtubeLink: "",
//                 description: "",
//                 author: "",
//                 duration: "",
//             });
//             setAudioFile(null);
//             setImageFile(null);
//         } else {
//             alert('Failed to add podcast');
//         }
//     } catch (error) {
//         console.error("Error adding podcast:", error);
//         alert('An error occurred while adding the podcast');
//     }
// };




//     return (
//         <section className='create-post'>
//             <div className="container">
//                 <h2>Create Podcast</h2>
//                 <form className="form create-post_form" onSubmit={(e) => { e.preventDefault(); Add_Podcast(); }}>
//                     <p>Podcast Title</p>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={details.title}
//                         onChange={changeHandler}
//                     />
                    
//                     <p>Category</p>
//                     <select name="category" value={details.category} onChange={changeHandler}>
//                         <option value="video">Video</option>
//                         <option value="audio">Audio</option>
//                     </select>
                    
//                     {details.category === "video" && (
//                         <>
//                             <p>YouTube Link</p>
//                             <input
//                                 type="text"
//                                 name="youtubeLink"
//                                 placeholder="YouTube Link"
//                                 value={details.youtubeLink}
//                                 onChange={changeHandler}
//                             />
//                         </>
//                     )}

//                     {details.category === "audio" && (
//                         <>
//                             <p>Upload Audio File</p>
//                             <input
//                                 type="file"
//                                 name="audioFile"
//                                 accept="audio/*"
//                                 onChange={fileChangeHandler}
//                             />
//                         </>
//                     )}

//                     <p>Duration</p>
//                     <input
//                         type="text"
//                         name="duration"
//                         placeholder="Duration"
//                         value={details.duration}
//                         onChange={changeHandler}
//                     />

//                     <p>Author</p>
//                     <input
//                         type="text"
//                         name="author"
//                         placeholder="Author"
//                         value={details.author}
//                         onChange={changeHandler}
//                     />

//                     <p>Description</p>
//                     <textarea
//                         name="description"
//                         placeholder="Description"
//                         value={details.description}
//                         onChange={changeHandler}
//                     ></textarea>
                    
//                     <button type='submit' className="btn primary">Create</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default AddPodcast;




// import React, { useState } from "react";
// import './Addpodcast.css';

// const AddPodcast = () => {
//     const [details, setDetails] = useState({
//         title: "",
//         category: "video", // Default to 'video'
//         youtubeLink: "",
//         description: "",
//         author: "",
//         duration: "",
//     });

//     const changeHandler = (e) => {
//         setDetails({ ...details, [e.target.name]: e.target.value });
//     };

//     const Add_Podcast = async () => {
//         const formData = new FormData();
//         formData.append('title', details.title);
//         formData.append('category', details.category);
//         formData.append('youtubeLink', details.youtubeLink);
//         // formData.append('description', details.description);
//         // formData.append('author', details.author);
//         // formData.append('duration', details.duration);

//         // Debugging: log FormData entries
//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}: ${value}`);
//         }

//         try {
//             const response = await fetch('http://localhost:4000/addpodcast', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const data = await response.json();

//             if (data.success) {
//                 alert('Podcast Added');
//                 setDetails({
//                     title: "",
//                     category: "video",
//                     youtubeLink: "",
//                     // description: "",
//                     // author: "",
//                     // duration: "",
//                 });
//             } else {
//                 alert('Failed to add podcast');
//             }
//         } catch (error) {
//             console.error("Error adding podcast:", error);
//             alert('An error occurred while adding the podcast');
//         }
//     };

//     return (
//         <section className='create-post'>
//             <div className="container">
//                 <h2>Create Podcast</h2>
//                 <form className="form create-post_form" onSubmit={(e) => { e.preventDefault(); Add_Podcast(); }}>
//                     <p>Podcast Title</p>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={details.title}
//                         onChange={changeHandler}
//                     />
                    
//                     <p>Category</p>
//                     <select name="category" value={details.category} onChange={changeHandler}>
//                         <option value="video">Video</option>
//                     </select>
                    
//                     <p>YouTube Link</p>
//                     <input
//                         type="text"
//                         name="youtubeLink"
//                         placeholder="YouTube Link"
//                         value={details.youtubeLink}
//                         onChange={changeHandler}
//                     />
                    
//                     <button type='submit' className="btn primary">Create</button>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default AddPodcast;




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
