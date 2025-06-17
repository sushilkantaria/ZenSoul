// import React, { useEffect, useRef, useState } from 'react';
// import './ind_blogs.css';
// import AnxiousBlogImg from '../assets/anxious-blog-img-trial.jpg';
// import AnxiousMind from '../assets/anxious-mind.png';
// import MainImgBlog from '../assets/quiz2.jpg';

// const IndBlogs = () => {
//   const [isSticky, setIsSticky] = useState(true);
//   const leftSectionRef = useRef(null);
//   const rightSectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (leftSectionRef.current && rightSectionRef.current) {
//         const leftSectionBottom = leftSectionRef.current.getBoundingClientRect().bottom;
//         const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;

//         if (leftSectionBottom < rightSectionTop) {
//           setIsSticky(false);
//         } else {
//           setIsSticky(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="ind-blogs-pg-container">
//       <div className="ind-blogs-pg-heading-container">
//         <div className="ind-blogs-pg-heading">Blog Heading</div>
//       </div>
//       <div className="ind-blogs-pg-main-content">
//         <div className="ind-blogs-pg-left-section" ref={leftSectionRef}>
//           <img
//             src={MainImgBlog}
//             alt="Blog"
//             className="ind-blogs-pg-blog-image"
//           />
//           <h2 className="ind-blogs-pg-blog-title">Blog Title</h2>
//           <p className="ind-blogs-pg-paragraph">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente amet fugiat aliquid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur veritatisplicabo. Sit dolor molestias quos repellat dignissimos optio atque, veritatis ipsum ipsam quidem unde recusandae officiis. Tempora, repellat neque?dolor sit amet, consectetur adipiscing elit.</p>
//           <p className="ind-blogs-pg-paragraph">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <p className="ind-blogs-pg-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           <ul className="ind-blogs-pg-unordered-list">
//             <li>First item</li>
//             <li>Second item</li>
//             <li>Third item</li>
//           </ul>
//           <p className="ind-blogs-pg-paragraph">Vestibulum auctor augniet, eos velit repudiandae sed odit ducimus enim inventore nostrum itaque? Vero fugiat ea error ad sunt cupiditate illum adipisci distinctio reiciendis!
//           Consequatur sed deleniti non? Ipsa perspiciatis asperiores omnis eos explicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos et ullamcorper ipsum facilisis nec.</p>
//           <p className="ind-blogs-pg-paragraph">Curabitur sed massa viuid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consec Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eaque quam atque optio quas ex quos error excepturi commodi incidunt distinctio nihil fugiat itaque beatae sint eos, illo, nobis totam.
//           Inventore distinctio sapiente non  explicabo aperiam molestias quos repellat dignissimos tae eros efficitur sagittis.</p>
//           <p className="ind-blogs-pg-paragraph">Integer vel Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eius tempore ducimus reiciendis, velit dicta commodi eveniet ipsam ea eos fuga sunt praesentium ad a odit provident? Recusandae, numquam ad!xplicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos rci cursus tincidunt.</p>
//           <p className="ind-blogs-pg-paragraph">Proin sit amet uid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur veritatis autem excepturi eveniet, eos velit repudiandae sed odit ducimus enim inventore nostrum itaque? Vero fugiat ea error ad sunt cupiditate illum adipisci distinctio reiciendis!
//           Consequatur sed deleniti non? Ipsa perspiciatis asperiores omnis eos explicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos uid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur v ut dicta quidem repellat? Eius quam officia eligendi aliquam, aspernatur quidem dolorum ducimus! Voluptatum, earum dolore!metus non erat pellentesque vestibulum.</p>
//         </div>
//         <div className="ind-blogs-pg-right-section" ref={rightSectionRef} style={{ position: isSticky ? 'sticky' : 'static' }}>
//           <h3 className="ind-blogs-pg-recommended-blogs-heading">Recommended Blogs</h3>
//           <img
//             src={AnxiousMind}
//             alt="Recommended"
//             className="ind-blogs-pg-recommended-image"
//           />
//           <br />
//           <br />
//           <img
//             src={AnxiousBlogImg}
//             alt="Recommended"
//             className="ind-blogs-pg-recommended-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndBlogs;













// import React, { useEffect, useRef, useState } from 'react';
// import './IndBlogs.css';
// import AnxiousBlogImg from '../assets/final-attachment.jpg';
// import AnxiousMind from '../assets/anxious-mind.png';
// import MainImgBlog from '../assets/seasons-final.jpg';

// const IndBlogs = () => {
//   const [blogData, setBlogData] = useState(null);
//   const [isSticky, setIsSticky] = useState(true);
//   const leftSectionRef = useRef(null);
//   const rightSectionRef = useRef(null);

//     useEffect(() => {
//     // Fetch blog data from the backend
//     const fetchBlogData = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/blog/:id'); // Replace with your API endpoint
//         const data = await response.json();
//         setBlogData(data);
//       } catch (error) {
//         console.error('Error fetching blog data:', error);
//       }
//     };

//     fetchBlogData();
// }, []);


//   useEffect(() => {
//     const handleScroll = () => {
//       if (leftSectionRef.current && rightSectionRef.current) {
//         const leftSectionBottom = leftSectionRef.current.getBoundingClientRect().bottom;
//         const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;

//         if (leftSectionBottom < rightSectionTop) {
//           setIsSticky(false);
//         } else {
//           setIsSticky(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   if (!blogData) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div className="ind-blogs-pg-container">
//       <div className="ind-blogs-pg-heading-container">
//         <div className="ind-blogs-pg-heading">Blog Heading hattttBlog Heading hatttt Blog Heading Blog Heading hattttBlog Heading hattttBlog Heading hatttt</div>
//       </div>
//       <div className="ind-blogs-pg-main-content">
//         <div className="ind-blogs-pg-left-section" ref={leftSectionRef}>
//           <img
//             src={MainImgBlog}
//             alt="Blog"
//             className="ind-blogs-pg-blog-image"
//           />
//           <h2 className="ind-blogs-pg-blog-title">Blog Title</h2>
//           <p className="ind-blogs-pg-paragraph">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente amet fugiat aliquid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur veritatisplicabo. Sit dolor molestias quos repellat dignissimos optio atque, veritatis ipsum ipsam quidem unde recusandae officiis. Tempora, repellat neque?dolor sit amet, consectetur adipiscing elit.</p>
//           <p className="ind-blogs-pg-paragraph">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           <p className="ind-blogs-pg-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           <ul className="ind-blogs-pg-unordered-list">
//             <li>First item</li>
//             <li>Second item</li>
//             <li>Third item</li>
//           </ul>
//           <p className="ind-blogs-pg-paragraph">Vestibulum auctor augniet, eos velit repudiandae sed odit ducimus enim inventore nostrum itaque? Vero fugiat ea error ad sunt cupiditate illum adipisci distinctio reiciendis!
//           Consequatur sed deleniti non? Ipsa perspiciatis asperiores omnis eos explicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos et ullamcorper ipsum facilisis nec.</p>
//           <p className="ind-blogs-pg-paragraph">Curabitur sed massa viuid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consec Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eaque quam atque optio quas ex quos error excepturi commodi incidunt distinctio nihil fugiat itaque beatae sint eos, illo, nobis totam.
//           Inventore distinctio sapiente non  explicabo aperiam molestias quos repellat dignissimos tae eros efficitur sagittis.</p>
//           <p className="ind-blogs-pg-paragraph">Integer vel Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eius tempore ducimus reiciendis, velit dicta commodi eveniet ipsam ea eos fuga sunt praesentium ad a odit provident? Recusandae, numquam ad!xplicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos rci cursus tincidunt.</p>
//           <p className="ind-blogs-pg-paragraph">Proin sit amet uid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur veritatis autem excepturi eveniet, eos velit repudiandae sed odit ducimus enim inventore nostrum itaque? Vero fugiat ea error ad sunt cupiditate illum adipisci distinctio reiciendis!
//           Consequatur sed deleniti non? Ipsa perspiciatis asperiores omnis eos explicabo. Sit dolorum explicabo aperiam molestias quos repellat dignissimos uid! Nesciunt aliquid placeat velit consectetur voluptatum tenetur eveniet, unde libero. Laborum aliquam nostrum expedita quos, quo repellendus?
//           Nemo consectetur, voluptatem minus pariatur v ut dicta quidem repellat? Eius quam officia eligendi aliquam, aspernatur quidem dolorum ducimus! Voluptatum, earum dolore!metus non erat pellentesque vestibulum.</p>
//         </div>
//         <div className="ind-blogs-pg-right-section" ref={rightSectionRef} style={{ position: isSticky ? 'sticky' : 'static' }}>
//           <h3 className="ind-blogs-pg-recommended-blogs-heading">Recommended Blogs</h3>
//           <div className="ind-blogs-pg-recommended-item">
//             <img
//               src={AnxiousMind}
//               alt="Recommended"
//               className="ind-blogs-pg-recommended-image"
//             />
//             <a href="#recommended1" className="ind-blogs-pg-recommended-link">Read more  more about Anxious Mind</a>
//           </div>
//           <div className="ind-blogs-pg-recommended-item">
//             <img
//               src={AnxiousBlogImg}
//               alt="Recommended"
//               className="ind-blogs-pg-recommended-image"
//             />
//             <a href="#recommended2" className="ind-blogs-pg-recommended-link">Read more about Anxious Blog Read more about Anxious Mind</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndBlogs;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './IndBlogs.css';

// const IndBlogs = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/blog/${id}`)
//       .then(res => res.json())
//       .then(data => setBlog(data))
//       .catch(err => console.error('Error fetching blog:', err));
//   }, [id]);

//   if (!blog) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="ind-blogs-pg-container">
//       <div className="ind-blogs-pg-heading-container">
//         <div className="ind-blogs-pg-heading">{blog.title}</div>
//       </div>
//       <div className="ind-blogs-pg-main-content">
//         <div className="ind-blogs-pg-left-section">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="ind-blogs-pg-blog-image"
//           />
//           <h2 className="ind-blogs-pg-blog-title">{blog.title}</h2>
//           <p className="ind-blogs-pg-paragraph">{blog.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndBlogs;





import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnxiousBlogImg from '../assets/final-attachment.jpg';
import AnxiousMind from '../assets/anxious-mind.png';
import './IndBlogs.css';
import DOMPurify from 'dompurify';


const IndBlogs = (BlogData) => {
    const sanitizedContent = DOMPurify.sanitize(BlogData.description);


    const stripHtmlTags = (htmlContent) => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlContent;
        return tempElement.textContent || tempElement.innerText || '';
      };

  const [blogData, setBlogData] = useState(null);
  const [isSticky, setIsSticky] = useState(true);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const { id } = useParams(); // Extracting blog ID from URL params

  useEffect(() => {
    // Fetch blog data by ID
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blog/${id}`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (leftSectionRef.current && rightSectionRef.current) {
        const leftSectionBottom = leftSectionRef.current.getBoundingClientRect().bottom;
        const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top;

        if (leftSectionBottom < rightSectionTop) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ind-blogs-pg-container">
      <div className="ind-blogs-pg-heading-container">
        <div className="ind-blogs-pg-heading">{blogData.title}</div>
      </div>
      <div className="ind-blogs-pg-main-content">
        <div className="ind-blogs-pg-left-section" ref={leftSectionRef}>
          <img
            src={blogData.image}
            alt={blogData.title}
            className="ind-blogs-pg-blog-image"
          />
          <h2 className="ind-blogs-pg-blog-title">{blogData.title}</h2>
          <div
            className="ind-blogs-pg-description"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          />
          {/* <p className="ind-blogs-pg-paragraph">{stripHtmlTags(blogData.description)}</p> */}
          {/* Add more content here as needed */}
        </div>
        <div className="ind-blogs-pg-right-section" ref={rightSectionRef} style={{ position: isSticky ? 'sticky' : 'static' }}>
          <h3 className="ind-blogs-pg-recommended-blogs-heading">Recommended Blogs</h3>
          <div className="ind-blogs-pg-recommended-item">
            <img
              src={AnxiousBlogImg} // Replace with actual image path
              alt="Recommended"
              className="ind-blogs-pg-recommended-image"
            />
            <a href="#recommended1" className="ind-blogs-pg-recommended-link">Read more about Anxious Mind</a>
          </div>
          <div className="ind-blogs-pg-recommended-item">
            <img
              src={AnxiousMind} // Replace with actual image path
              alt="Recommended"
              className="ind-blogs-pg-recommended-image"
            />
            <a href="#recommended2" className="ind-blogs-pg-recommended-link">Read more about Anxious Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndBlogs;
