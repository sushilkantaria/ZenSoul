import React from 'react';
import SOM from '../assets/SOM-explorePg-removebg-preview.png';
import './Quiz.css';
import Anger from '..//assets/anger.jpeg';
import AS from '..//assets/final-attachment.jpg';
import Color from '..//assets/color.jpeg';
import Lonely from '..//assets/lonely.jpeg';
import Anxiety from '..//assets/anxious-mind.png';
import SL from '..//assets/selflove.jpeg';
import TWE from '..//assets/tunewithemotions.jpeg';
import Season from '..//assets/seasons-final.jpg';
import LL from '..//assets/lovelang2.jpeg';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-heading-section">
        <h1>Discover Your Inner Peace</h1>
      </div>
      <div className="quiz-subheading-section">
        <h2>Engage with our quizzes to learn more about your mental health and well-being.</h2>
      </div>
      <div className="stress-o-meter-wrapper-class">
        <div className="quiz-all-stress-o-meter-section">
          <div className="quiz-all-stress-o-meter-left-section">
            <img src={SOM} alt="Stress-O-Meter" />
          </div>
          <div className="quiz-all-stress-o-meter-right-section">
            <h2>How Stressed Are You?</h2>
            <p>Take our Stress-O-Meter quiz to find out your current stress levels and get personalized tips on how to manage it effectively.</p>
            <Link to='/Stressmeter' className="quiz-stress-check-button">Check your stress level!</Link>
          </div>
        </div>
      </div>
      <div className="quiz-cards-row">
        <div className="quiz-card">
         <Link to='/Attachment'>
            <img src={AS} alt="Quiz 1" />
            <h3>Discover Your Attachment Style</h3>
         </Link>
        </div>
        <div className="quiz-card">
          <Link to='/Lonely'>
            <img src={Lonely} alt="Quiz 2" />
            <h3>Uncover Your Loneliness Quotient</h3>
            </Link>
        </div>
        <div className="quiz-card">
        <Link to='/Color '>
            <img src={Color} alt="Quiz 3" />
            <h3>What Color Represents Your Personality?</h3>
            </Link>
        </div>
      </div>

      <div className="quiz-cards-row">
        <div className="quiz-card">
        <Link to='/Anxiety'>
            <img src={Anxiety} alt="Quiz 1" />
            <h3>How Anxious Are You?</h3>
            </Link>
        </div>
        <div className="quiz-card">
        <Link to='/Selflove'>
            <img src={SL} alt="Quiz 2" />
            <h3>Embrace Yourself: A Self-Love Assessment</h3>
            </Link>
        </div>
        <div className="quiz-card">
        <Link to='/Tune'>
            <img src={TWE} alt="Quiz 3" />
            <h3>Are You in Tune with Your Emotions?</h3>
            </Link>
        </div>
      </div>

<div className='quiz-footer'>
      <div className="quiz-cards-row">
        <div className="quiz-card">
        <Link to='/Seasons'>
            <img src={Season} alt="Quiz 1" />
            <h3>Which Season Best Reflects Your Personality?</h3>
            </Link>
        </div>
        <div className="quiz-card">
        <Link to='/Lovelang'>
            <img src={LL} alt="Quiz 2" />
            <h3>Identify Your Love Language</h3>
            </Link>
        </div>
        <div className="quiz-card">
        <Link to='/Anger'>
            <img src={Anger} alt="Quiz 3" />
            <h3>Measure Your Anger Thermometer</h3>
            </Link>
        </div>
      </div>
      </div>

    
    </div>
  );
};

export default QuizPage;
