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
