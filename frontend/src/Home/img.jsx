import React, { useState, useEffect } from 'react';
import './img.css';
import img1 from '../Home/jor1.jpeg';
import img2 from '../Home/jor2.jpeg';
import img3 from '../Home/jor3.jpeg';

const images = [
  {
    src: img1,
    info: 'Information about image 1',
  },
  {
    src: img2,
    info: 'Information about image 2',
  },
  {
    src: img3,
    info: 'Information about image 3',
  },
];

const ImageSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { src, info } = images[currentImageIndex];

  return (
    <div className="journal-section">
      <div className="image-container">
        <img src={src} alt="Slideshow" className="journal-image" />
      </div>
      <div className="sticky-note">
        {info}
      </div>
      <div className='journal-info'>
      <div className='journal-heading'> 
        <h1>Pour your heart out </h1>
      </div>
      <div className='journal-description'>
        <p>Journaling is the practice of regularly writing down your thoughts, feelings, experiences, and reflections. It can take various forms and serve multiple purposes, including personal reflection, goal setting and planning, creative expression, and gratitude development. Plus, anyone can learn how to write a journal and start.</p>
      </div>
      <div className='journal-button'>
        <button>Start Jounaling</button>
      </div>
      </div>
    </div>
  );
};

export default ImageSection;
