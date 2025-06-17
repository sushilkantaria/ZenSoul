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





// code 2 with slide effect and jump back to 1st card
// import React, { useState } from 'react';
// import './PodcastCarousel.css'; // Import the CSS for the animation

// const podcasts = [
//   { id: 1, title: 'Podcast 1', image: 'podcast1.jpg' },
//   { id: 2, title: 'Podcast 2', image: 'podcast2.jpg' },
//   { id: 3, title: 'Podcast 3', image: 'podcast3.jpg' },
//   { id: 4, title: 'Podcast 4', image: 'podcast4.jpg' },
//   { id: 5, title: 'Podcast 5', image: 'podcast5.jpg' },
//   { id: 6, title: 'Podcast 6', image: 'podcast6.jpg' },
//   { id: 7, title: 'Podcast 7', image: 'podcast7.jpg' },
//   { id: 8, title: 'Podcast 8', image: 'podcast8.jpg' },
//   { id: 9, title: 'Podcast 9', image: 'podcast9.jpg' },
//   { id: 10, title: 'Podcast 10', image: 'podcast10.jpg' }
// ];

// const PodcastCarousel = () => {
//   const [visibleStartIndex, setVisibleStartIndex] = useState(0);

//   const handleNext = () => {
//     setVisibleStartIndex((prevIndex) => (prevIndex + 1) % podcasts.length);
//   };

//   const getTransformStyle = () => {
//     return { transform: `translateX(-${visibleStartIndex * 10}%)` }; // Shifting 20% for each card
//   };

//   return (
//     <div>
//       {/* New Section with Next Button and Slide Effect */}
//       <div className="sliding-podcasts-container">
//         <div className="sliding-podcasts" style={getTransformStyle()}>
//           {podcasts.map((podcast, index) => (
//             <div key={index} className="podcast-card">
//               <img src={podcast.image} alt={podcast.title} className="podcast-image" />
//               <div className="podcast-title">{podcast.title}</div>
//             </div>
//           ))}
//         </div>
//         <button className="next-button" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PodcastCarousel;







//code 3 with sliding effect and loop
// import React, { useState, useEffect } from 'react';
// import './PodcastCarousel.css';

// const podcasts = [
//   { id: 1, title: 'Podcast 1', image: 'podcast1.jpg' },
//   { id: 2, title: 'Podcast 2', image: 'podcast2.jpg' },
//   { id: 3, title: 'Podcast 3', image: 'podcast3.jpg' },
//   { id: 4, title: 'Podcast 4', image: 'podcast4.jpg' },
//   { id: 5, title: 'Podcast 5', image: 'podcast5.jpg' },
//   { id: 6, title: 'Podcast 6', image: 'podcast6.jpg' },
//   { id: 7, title: 'Podcast 7', image: 'podcast7.jpg' },
//   { id: 8, title: 'Podcast 8', image: 'podcast8.jpg' },
//   { id: 9, title: 'Podcast 9', image: 'podcast9.jpg' },
//   { id: 10, title: 'Podcast 10', image: 'podcast10.jpg' },
// ];

// const PodcastCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const visiblePodcasts = [
//     ...podcasts,
//     ...podcasts,
//   ];

//   const handleNext = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setStartIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => {
//         if (startIndex === podcasts.length) {
//           setIsTransitioning(false);
//           setStartIndex(0); // Reset to beginning without transition
//         } else {
//           setIsTransitioning(false);
//         }
//       }, 500); // Match transition duration

//       return () => clearTimeout(timer);
//     }
//   }, [startIndex, isTransitioning]);

//   return (
//     <div className="sliding-podcasts-container">
//       <div
//         className="sliding-podcasts"
//         style={{
//           transform: `translateX(-${(startIndex % podcasts.length) * 20}%)`,
//           transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
//         }}
//       >
//         {visiblePodcasts.map((podcast, i) => (
//           <div key={i} className="podcast-card">
//             <img src={podcast.image} alt={podcast.title} className="podcast-image" />
//             <div className="podcast-title">{podcast.title}</div>
//           </div>
//         ))}
//       </div>
//       <button className="next-button" onClick={handleNext}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default PodcastCarousel;
