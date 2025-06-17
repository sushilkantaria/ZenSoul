// import React from 'react';
// import './Meditation.css';

// const Meditation = () => {
//   return (
//     <div className="med-class">
//       <div className="med-button-row">
//         <button className="med-button">Anxious</button>
//         <button className="med-button">Stressed</button>
//         <button className="med-button">Frustrated</button>
//         <button className="med-button">Mood Swings</button>
//         <button className="med-button">Boredom</button>
//       </div>
//       <div className="med-container">
//         <div className="med-row">
//           <div className="med-card">
//             <div className="med-card-image">
//               {/* Replace with an actual image or content */}
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 1</h3>
//           </div>
//           <div className="med-card">
//             <div className="med-card-image">
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 2</h3>
//           </div>
//           <div className="med-card">
//             <div className="med-card-image">
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 3</h3>
//           </div>
//         </div>
//         <div className="med-row">
//           <div className="med-card">
//             <div className="med-card-image">
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 4</h3>
//           </div>
//           <div className="med-card">
//             <div className="med-card-image">
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 5</h3>
//           </div>
//           <div className="med-card">
//             <div className="med-card-image">
//               <p>Image</p>
//             </div>
//             <h3 className="med-card-title">Title 6 title 89optitle 89optitle 89optitle 89optitle 89optitle 89optitle 89optitle</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Meditation;








// import React, { useState, useEffect } from 'react';
// import './Meditation.css';

// const Meditation = () => {
//   const [meditations, setMeditations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMeditations = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/allmeditations');
//         if (!response.ok) {
//           throw new Error('Failed to fetch meditations');
//         }
//         const data = await response.json();
//         console.log("Fetched Meditations Data:", data);
//         setMeditations(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeditations();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="meditation-page">
//       <h1 className="meditation-page-heading">Find Your Calm with Meditations</h1>
//       <p className="meditation-page-subheading">Carefully curated meditations for every mood.</p>

//       <div className="meditation-wrapper">
//         <section className="meditation-video-section">
//           <div className="meditation-video-container">
//             {meditations.map((meditation, index) => {
//               const videoLink = meditation.link || '';
//               const videoId = videoLink.split('v=')[1]?.split('&')[0] || '';

//               console.log("YouTube Link:", videoLink); // Debugging
//               console.log("Video ID:", videoId); // Debugging

//               return (
//                 <div className="meditation-card" key={index}>
//                   {videoId ? (
//                     <iframe
//                       width="100%"
//                       height="200"
//                       src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
//                       title={meditation.title}
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   ) : (
//                     <p>Invalid YouTube Link</p>
//                   )}
//                   <p className="meditation-card-title">{meditation.title}</p>
//                   <p className="meditation-card-description">{meditation.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Meditation;







import React, { useState, useEffect } from 'react';
import './Meditation.css';

const Meditation = () => {
  const [meditations, setMeditations] = useState([]);
  const [filteredMeditations, setFilteredMeditations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeditations = async () => {
      try {
        const response = await fetch('http://localhost:4000/allmeditations'); // Adjust with actual backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch meditations');
        }
        const data = await response.json();
        setMeditations(data);
        setFilteredMeditations(data); // Set initial filtered meditations
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeditations();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredMeditations(meditations); // Show all meditations if no category is selected
    } else {
      setFilteredMeditations(meditations.filter(meditation => meditation.category === category));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="meditation-page">
      <h1 className="meditation-page-heading">Find Your Calm with Meditations</h1>
      <p className="meditation-page-subheading">Carefully curated meditations for every mood.</p>

      <div className="meditation-category-buttons">
        <button className="meditation-category-button" onClick={() => handleCategoryClick('Anxious')}>Anxious</button>
        <button className="meditation-category-button" onClick={() => handleCategoryClick('Stressed')}>Stressed</button>
        <button className="meditation-category-button" onClick={() => handleCategoryClick('Frustrated')}>Frustrated</button>
        <button className="meditation-category-button" onClick={() => handleCategoryClick('Boredom')}>Boredom</button>
        <button className="meditation-category-button" onClick={() => handleCategoryClick('Mood Swings')}>Mood Swings</button>
      </div>

      <div className="meditation-list">
        {filteredMeditations.map((meditation, index) => {
          const videoId = meditation.link?.split('v=')[1] || '';
          return (
            <div className="meditation-card" key={index}>
              {videoId ? (
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                  title={meditation.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Invalid YouTube Link</p>
              )}
              <p className="meditation-card-title">{meditation.title}</p>
              <p className="meditation-card-description">{meditation.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meditation;
