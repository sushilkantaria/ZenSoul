// code 1 where card keeps on moving 

import React from 'react';
import './PodcastCarousel.css'; // Import the CSS for the animation

const podcasts = [
  { id: 1, title: 'Podcast 1', image: 'podcast1.jpg' },
  { id: 2, title: 'Podcast 2', image: 'podcast2.jpg' },
  { id: 3, title: 'Podcast 3', image: 'podcast3.jpg' },
  { id: 4, title: 'Podcast 4', image: 'podcast4.jpg' },
  { id: 5, title: 'Podcast 5', image: 'podcast5.jpg' },
  { id: 6, title: 'Podcast 6', image: 'podcast6.jpg' },
  { id: 7, title: 'Podcast 7', image: 'podcast7.jpg' },
  { id: 8, title: 'Podcast 8', image: 'podcast8.jpg' },
  { id: 9, title: 'Podcast 9', image: 'podcast9.jpg' },
  { id: 10, title: 'Podcast 10', image: 'podcast10.jpg' }
];

const PodcastCarousel = () => {
  // Concatenate the podcasts list with itself to create a seamless loop effect
  const loopedPodcasts = [...podcasts, ...podcasts];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {loopedPodcasts.map((podcast, index) => (
          <div key={index} className="podcast-card">
            <img src={podcast.image} alt={podcast.title} className="podcast-image" />
            <div className="podcast-title">{podcast.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastCarousel;