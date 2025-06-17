import React from 'react';
import './meter.css';

const Meter = ({ stressLevel }) => {
  const getDegree = (level) => {
    switch (level) {
      case 'Very Low':
        return '0deg';
      case 'Low':
        return '36deg';
      case 'Moderate':
        return '72deg';
      case 'High':
        return '108deg';
      case 'Very High':
        return '144deg';
      default:
        return '0deg';
    }
  };

  return (
    <div className="stress-meter">
      <div className="meter">
        <div
          className="needle"
          style={{
            left: '50%', // Position the needle horizontally at the middle of the meter
            bottom: '0', // Position the needle at the bottom of the meter
            transform: `translateX(-100%) rotate(${getDegree(stressLevel)})`, // Move the needle to the left and rotate
          }}
        ></div>
      </div>
      <div className="labels">
        <span>Very Low</span>
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Very High</span>
      </div>
    </div>
  );
};

export default Meter;
