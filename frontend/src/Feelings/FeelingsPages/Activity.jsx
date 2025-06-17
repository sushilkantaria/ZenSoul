import React from 'react';
import './Activity.css';
import psych from '../../assets/Acti1.jpg';
import psych3 from '../../assets/silkAct.jpg';
import psych2 from '../../assets/activity.jpg';
import psych1 from '../../assets/pinkSilk.jpg';

const activities = [
  { title: 'Yoga Poses', description: 'Learn various yoga poses for mental wellness.', img: psych, link: '/YogaAct' },
  { title: 'Emotional Freedom Techniques (EFT)', description: 'A guide to tapping for emotional release.', img: psych2, link: '/Eft' },
  { title: 'Psychosomatic Exercises', description: 'Explore techniques to connect body and mind.', img: psych1, link: '/PSE' },
  { title: 'Journaling', description: 'Use journaling as a tool for reflection and growth.', img: psych3, link: '/ActJ' },
];

const Activity = () => {
  const handleCardClick = (link) => {
    window.location.href = link; // Redirect to the specific link
  };

  return (
    <div className="activity-container">
      {activities.map((activity, index) => (
        <div
          className="activity-card"
          key={index}
          style={{ backgroundImage: `url(${activity.img})` }}
          onClick={() => handleCardClick(activity.link)} // Handle card click
        >
          <div className="card-content">
            <h3 className="activity-h3">{activity.title}</h3>
            <p className="activity-p">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;