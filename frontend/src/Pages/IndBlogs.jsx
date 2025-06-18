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
