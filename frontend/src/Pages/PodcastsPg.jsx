import React, { useState, useEffect } from 'react';
import './PodcastsPg.css';
import aud1 from '../assets/podcasts/aud1.mp3';
import aud2 from '../assets/podcasts/aud2.m4a';
import aud3 from '../assets/podcasts/aud3.mp3';
import aud4 from '../assets/podcasts/aud4.mp3';
import aud5 from '../assets/podcasts/aud5.mp3';
import aud6 from '../assets/podcasts/aud6.mp3';
import aud7 from '../assets/podcasts/aud7.mp3';
import aud8 from '../assets/podcasts/aud8.mp3';
import aud9 from '../assets/podcasts/aud9.mp3';
import aud10 from '../assets/podcasts/aud10.mp3';
import CONFIG from '../config';

const PodcastsPg = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoded audio podcasts
  const audioPodcasts = [
    {
      title: 'Audio Podcast 1',
      author: 'Author 1',
      audioFile: aud1,
    },
    {
      title: 'Audio Podcast 2',
      author: 'Author 2',
      audioFile: aud2,
    },
    {
      title: 'Audio Podcast 1',
      author: 'Author 1',
      audioFile: aud3,
    },
    {
      title: 'Audio Podcast 2',
      author: 'Author 2',
      audioFile: aud4,
    },
    {
      title: 'Audio Podcast 1',
      author: 'Author 1',
      audioFile: aud5,
    },
    {
      title: 'Audio Podcast 2',
      author: 'Author 2',
      audioFile: aud6,
    },
    {
      title: 'Audio Podcast 1',
      author: 'Author 1',
      audioFile: aud7,
    },
    {
      title: 'Audio Podcast 2',
      author: 'Author 2',
      audioFile: aud8,
    },
    {
      title: 'Audio Podcast 1',
      author: 'Author 1',
      audioFile: aud9,
    },
    {
      title: 'Audio Podcast 2',
      author: 'Author 2',
      audioFile: aud10,
    },
    
    // Add the remaining 18 audio podcasts similarly
  ];

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(`${CONFIG.BASE_URL}/allpodcasts`); // Replace with your actual backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch podcasts');
        }
        const data = await response.json();
        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="podcast-pg-of-explore-page">
      <h1 className="podcast-pg-of-explore-main-heading">Endless topics. Endlessly engaging.</h1>
      <p className="podcast-pg-of-explore-handpicked-text">Handpicked. For every individual.</p>

      <div className="podcast-pg-of-explore-wrapper">
        <section className="podcast-pg-of-explore-video-podcast-section">
          <div className="podcast-pg-of-explore-card-container">
            {podcasts
              .filter(podcast => podcast.category === 'video')
              .map((podcast, index) => (
                <div className="podcast-pg-of-explore-card" key={index}>
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${podcast.youtubeLink.split('v=')[1]}?autoplay=0`}
                    title={podcast.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="podcast-pg-of-explore-card-description">{podcast.title}</p>
                </div>
              ))}
          </div>
        </section>
      </div>

      <section className="podcast-pg-of-explore-three-sections">
        {/* Top Section: Audio Podcasts */}
        <div className="podcast-pg-of-explore-section podcast-pg-of-explore-audio-section">
          <div className="podcast-pg-of-explore-audio-header">
            <h2 className="podcast-pg-of-explore-audio-header-title">Audio Podcasts</h2>
            <button className="podcast-pg-of-explore-view-more-btn">View More</button>
          </div>
          <div className="podcast-pg-of-explore-audio-list">
            {audioPodcasts.map((podcast, index) => (
              <div className="podcast-pg-of-explore-audio-item" key={index}>
                <audio controls>
                  <source src={podcast.audioFile} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="podcast-pg-of-explore-audio-info">
                  <a href="#" className="podcast-pg-of-explore-audio-title">{podcast.title}</a>
                  <div className="podcast-pg-of-explore-audio-time">{podcast.duration}</div>
                  <div className="podcast-pg-of-explore-audio-author">{podcast.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastsPg;
