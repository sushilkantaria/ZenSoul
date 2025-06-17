import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './explorePg.css';
import SOM2 from '../assets/SOM-explorePg-removebg-preview.png';
import img1 from '..//assets/memories.jpg';
import img2 from '..//assets/journal.jpg';
import img3 from '..//assets/audio.jpg';
import AttachmentStyle from '../assets/final-attachment.jpg';
import selfLove from '../assets/selflove.jpeg';
import emotions from '../assets/tunewithemotions.jpeg';



const images = [
  {
    src: img1,
    info: 'Store your cherished memories',
  },
  {
    src: img2,
    info: 'Express your deepest feelings through writing',
  },
  {
    src: img3,
    info: 'Record audio reflections',
  },
];


function ExplorePg() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [blogs, setBlogs] = useState([]); // Define blogs state
  const navigate = useNavigate();
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { src, info } = images[currentImageIndex];

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('http://localhost:4000/allpodcasts'); // Replace with your actual backend endpoint
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


  // Loop the podcasts array to create a seamless effect
  const loopedPodcasts = [...podcasts, ...podcasts];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prevCard => (prevCard + 1) % 3);
    }, 6000); // Change card every 6 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);


  useEffect(() => {
    fetch('http://localhost:4000/allblogs')
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0,9)))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);
  

  const nextSlide = () => {
    if (currentSlide < 2) {  // Allow a maximum of 3 slides (0, 1, 2)
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleBlogClick = (id) => {
    navigate(`/IndBlogs/${id}`);
  };

  return (
    <div className='body-of-explore'>
      <div className="explore-container">
        <div className="how-are-you-feeling">
          <div className="beige-section">
            <div className="white-section">
              <div className="heading-section">
                <h2 className='explore-pg-h2'>How are you feeling today?</h2>
              </div>
              <div className="feelings-buttons-section">
              <Link to="/AnxietyPg" className="feeling-button">Anxious</Link>
              <Link to="/StressedPg" className="feeling-button">Stressed</Link>
              <Link to="/FrustratedPg" className="feeling-button">Frustrated</Link>
              <Link to="/MoodSwingsPg" className="feeling-button">MoodSwings</Link>
              <Link to="/BoredomPg" className="feeling-button">Boredom</Link>

              </div>
            </div>
          </div>
        </div>



       {/* Quiz Section */}
       <div className="quiz-section">
          <div className="quiz-wrapper">
            <div className="quiz-heading">
              <h1 className="quiz-heading-h1">Take our Quizzes</h1>
            </div>

            <div className="bfcolor-class-quiz">
              <div className="lower-of-quiz">
                <div className="quiz-card-image-container">
                  <div className="circle-image-container">
                    <img src={AttachmentStyle} alt="Attachment Style Quiz" className="circle-image" />
                  </div>
                  <Link to="/Attachment" className="quiz-button">Take Quiz</Link>
                  <h3 className="quiz-heading">What is your Attachment Style?</h3>
                </div>

                <div className="quiz-card-image-container">
                  <div className="circle-image-container">
                    <img src={selfLove} alt="Self Love Quiz" className="circle-image" />
                  </div>
                  <Link to="/Selflove" className="quiz-button">Take Quiz</Link>
                  <h3 className="quiz-heading">How much do you love yourself?</h3>
                </div>

                <div className="quiz-card-image-container">
                  <div className="circle-image-container">
                    <img src={emotions} alt="Tune with Emotions Quiz" className="circle-image" />
                  </div>
                  <Link to="/Tune" className="quiz-button">Take Quiz</Link>
                  <h3 className="quiz-heading">Tuned with your emotions?</h3>
                </div>
              </div>

              <div className="view-more-of-quiz">
                <Link to="/QuizPage" className="view-more-button-of-quiz-section">View More</Link>
              </div>
            </div>
          </div>
        </div>


                {/* journal section */}
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
        <p>Journaling is a beautiful way to embrace your thoughts and gently release emotions. At ZENSOUL, we offer a nurturing space where you can store your cherished memories, record your voice in moments of reflection, or pour your heart out through writing. Whether you're capturing a special moment or sharing your innermost feelings, our journaling feature is designed to wrap you in comfort, helping you find peace, clarity, and a deeper connection with yourself.</p>
      </div>
      <div className='journal-button'>
        <Link to='/Journal'>
        <button>Start Jounaling</button>
        </Link>
      </div>
      </div>
    </div>


        {/* Blogs section */}
        <div className="blogs-section">
        <div className="blogs-wrapper">
          <div className="blogs-heading">
            <p>Feeling stuck? We've got you covered in our blogs!</p>
          </div>
          <div className="blog-slider">
            {blogs.slice(currentSlide * 3, currentSlide * 3 + 3).map((blog) => (
              <div key={blog._id} className="blog-card" onClick={() => handleBlogClick(blog.id)}>
                <img src={blog.image} alt={blog.title} />
                <h3>{blog.title}</h3>
              </div>
            ))}
          </div>
          <div className="blog-navigation">
            <button onClick={prevSlide} className="prev-button" disabled={currentSlide === 0}>
              Previous
            </button>
            <div className="blog-dots">
              {Array.from({ length: Math.ceil(blogs.length / 3) }, (_, index) => (
                <div
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="next-button" disabled={currentSlide === 2}>
              Next
            </button>
          </div>

       </div>
       </div>



      </div>
    </div>
  );
}

export default ExplorePg;




        {/* Podcast Section */}
        {/* <div className="carousel-container">
          <div>
            <h1 className='explore-podcast-h1'>Podcast for Insightful conversations.</h1>
          </div>
          <div className="carousel">
            {loopedPodcasts.map((podcast, index) => (
              <div key={index} className="podcast-card">
                <img src={podcast.image} alt={podcast.title} className="podcast-image" />
                <div className="podcast-title">{podcast.title}</div>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className='podcast-of-explore'>
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
        </div> */}