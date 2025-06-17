import React, { useRef, useState } from 'react';
import './Sounds.css';
import Waves from '../FeelingsPages/soundsMp3/waves.mp3';
import waves from '../../assets/soundImgs/waves1111.avif';

import bird from '../../assets/soundImgs/birds111.avif';
import birds from '../FeelingsPages/soundsMp3/birds.mp3';

import Sb from '../../assets/soundImgs/singingBowl.jpg';
import SB from '../FeelingsPages/soundsMp3/singingBowl.mp3';

import rainImg from '../../assets/soundImgs/rain111.jpg';
import rainMP from './soundsMp3/rain.mp3';

import handpan from '../../assets/soundImgs/handpan.jpg';
import handpaNs from './soundsMp3/handpan11.mp3';

import grass from '../../assets/soundImgs/grass1.avif';
import crickets from './soundsMp3/crickets.mp3';

const Sounds = () => {
  const audioRefs = useRef([]);
  const [volumes, setVolumes] = useState(Array(6).fill(1)); // Separate volume for each audio
  const [speeds, setSpeeds] = useState(Array(6).fill(1)); // Separate speed for each audio

  // Array of sounds with names
  const sounds = [
    { src: Waves, img: waves, name: 'Waves' },
    { src: birds, img: bird, name: 'Birds' },
    { src: SB, img: Sb, name: 'Singing Bowl' },
    { src: rainMP, img: rainImg, name: 'Rain' },
    { src: handpaNs, img: handpan, name: 'Handpan' },
    { src: crickets, img: grass, name: 'Crickets' },
  ];

  // Play/Pause function
  const handlePlayPause = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      audio.paused ? audio.play() : audio.pause();
    }
  };

  // Volume change handler
  const handleVolumeChange = (event, index) => {
    const newVolumes = [...volumes];
    newVolumes[index] = event.target.value;
    setVolumes(newVolumes);
    if (audioRefs.current[index]) {
      audioRefs.current[index].volume = newVolumes[index];
    }
  };

  // Updated Speed change handler
  const handleSpeedChange = (event, index) => {
    const newSpeeds = [...speeds];
    // Parse the value and ensure it is within the supported range
    let newSpeed = parseFloat(event.target.value);
    newSpeed = Math.max(0.5, Math.min(newSpeed, 4)); // Clamping the speed between 0.5 and 4
    newSpeeds[index] = newSpeed;
    setSpeeds(newSpeeds);

    if (audioRefs.current[index]) {
      audioRefs.current[index].playbackRate = newSpeed;
    }
  };

  return (
    <section className="sOUnd-section">
      <div className="sOUnd-background"></div>
      {[0, 1].map((row) => (
        <div key={row} className="sOUnd-row">
          {sounds.slice(row * 3, row * 3 + 3).map((sound, index) => (
            <div key={index} className="sOUnd-card">
              <img
                src={sound.img}
                alt={`sound ${index + 1}`}
                className="sOUnd-image"
                onClick={() => handlePlayPause(row * 3 + index)}
              />
              <audio
                ref={(el) => (audioRefs.current[row * 3 + index] = el)}
                src={sound.src}
              />
              <div className="sOUnd-controls">
                <div
                  className="sOUnd-name"
                  onClick={() => handlePlayPause(row * 3 + index)}
                >
                  {sound.name}
                </div>
                <label>
                  Volume:
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volumes[row * 3 + index]}
                    onChange={(e) => handleVolumeChange(e, row * 3 + index)}
                  />
                </label>
                <label>
                  Speed:
                  <input
                    type="range"
                    min="0.5"
                    max="24.3"
                    step="0.1"
                    value={speeds[row * 3 + index]}
                    onChange={(e) => handleSpeedChange(e, row * 3 + index)}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Sounds;