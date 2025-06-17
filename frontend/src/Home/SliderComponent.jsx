import React, { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slides-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="card">
              <img src={image} alt={`Blog ${index + 1}`} />
              <h3>Blog Title {index + 1}</h3>
              <p>Short description of the blog post.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
        <button onClick={nextSlide} disabled={currentSlide === images.length - 1}>Next</button>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
