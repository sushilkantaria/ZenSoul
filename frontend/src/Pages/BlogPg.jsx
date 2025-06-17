import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BlogPg.css';

const BlogPg = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(''); // Add state for selected category
  const totalSlides = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/allblogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      new Audio('https://example.com/beep.mp3').play();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      new Audio('https://example.com/beep.mp3').play();
    }
  };

  const handleBlogClick = (id) => {
    navigate(`/IndBlogs/${id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category when a button is clicked
    setCurrentSlide(0); // Reset the slide to the first one
  };

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="individual-blog-pg-container">
      <div className="individual-blog-pg-section">
        <div className="individual-blog-pg-row">
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Addiction')}>Addiction</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Anger')}>Anger</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Anxiety')}>Anxiety</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Depression')}>Depression</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Disorder')}>Disorder</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Happiness')}>Happiness</button>
        </div>
        <div className="individual-blog-pg-row">
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Meditation')}>Meditation</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Self-Improvement')}>Self-Improvement</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Stress')}>Stress</button>
          <button className="individual-blog-pg-button" onClick={() => handleCategoryClick('Understanding Emotions')}>Understanding Emotions</button>
        </div>
      </div>

      <div className="individual-blog-pg-slider">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            className={`individual-blog-pg-slide ${
              currentSlide === index ? 'active' : ''
            }`}
            key={index}
          >
            <div className="individual-blog-pg-cards-section">
              {[...Array(3)].map((_, rowIndex) => (
                <div className="individual-blog-pg-card-row" key={rowIndex}>
                  {filteredBlogs
                    .slice(index * 9 + rowIndex * 3, index * 9 + rowIndex * 3 + 3)
                    .map((blog) => (
                      <div
                        className="individual-blog-pg-card"
                        key={blog.id}
                        onClick={() => handleBlogClick(blog.id)}
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="individual-blog-pg-card-img"
                        />
                        <h3 className="individual-blog-pg-card-heading">
                          {blog.title}
                        </h3>
                        <button
                          className="individual-blog-pg-read-more-button"
                          onClick={() => handleBlogClick(blog.id)}
                        >
                          Read More
                        </button>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="individual-blog-pg-pagination">
        <button
          className="individual-blog-pg-pagination-button"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`individual-blog-pg-pagination-number ${
              currentSlide === index ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="individual-blog-pg-pagination-button"
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPg;
