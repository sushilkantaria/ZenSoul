import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Journal.css';

function JournalPg() {
  const [isPreset, setIsPreset] = useState(true);
  const [customAffirmations, setCustomAffirmations] = useState(['']);
  const [selectedAffirmations, setSelectedAffirmations] = useState([]);
  const [mood, setMood] = useState('');
  const [customGratitude, setCustomGratitude] = useState(['']);
  const [selectedGratitude, setSelectedGratitude] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [userId, setUserId] = useState(null); // State to store userId from localStorage
  const audioPlayerRef = useRef(null);

  const presetAffirmations = [
    'I am capable of achieving my goals.',
    'I embrace positivity in all aspects of my life.',
    'I am worthy of love and respect.',
    'I choose to be happy right now.',
    'I am constantly growing and improving.',
    'I am surrounded by love and support.',
    'I handle stress with ease and grace.',
    'My body is healthy and strong.',
    'I am confident and capable.',
    'Abundance flows freely into my life.',
  ];

  const presetGratitude = [
    'Family and friends',
    'Good health',
    'A home to live in',
    'Opportunities to learn and grow',
    'The beauty of nature',
  ];

  useEffect(() => {
    // Fetch the userId from localStorage when the component mounts
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error('No userId found in localStorage');
    }
  }, []);

  const handleAffirmationChange = (index, event) => {
    const newAffirmations = [...customAffirmations];
    newAffirmations[index] = event.target.value;
    setCustomAffirmations(newAffirmations);
  };

  const addNewAffirmationField = () => {
    setCustomAffirmations([...customAffirmations, '']);
  };

  const handleGratitudeChange = (index, event) => {
    const newGratitude = [...customGratitude];
    newGratitude[index] = event.target.value;
    setCustomGratitude(newGratitude);
  };

  const addNewGratitudeField = () => {
    setCustomGratitude([...customGratitude, '']);
  };

  const handleFinalSubmit = async () => {
    const formData = new FormData();
    console.log('Logged in user ID:', userId); // Check user ID
    formData.append('userId', userId); 
    formData.append('mood', mood);
    formData.append('affirmations', JSON.stringify(isPreset ? presetAffirmations.filter((_, index) => selectedAffirmations.includes(index)) : customAffirmations.filter(aff => aff.trim() !== '')));
    formData.append('gratitude', JSON.stringify(selectedGratitude.map(index => presetGratitude[index]).concat(customGratitude.filter(grat => grat.trim() !== ''))));
    formData.append('journalText', document.querySelector('.notebook-textarea').value.trim());

    if (mediaFile) {
        formData.append('images', mediaFile);
    }
    if (audioBlob) {
        formData.append('audios', audioBlob, 'recording.wav');
    }

    console.log('Form data before submission:', {
        userId,
        mood,
        affirmations: formData.get('affirmations'),
        gratitude: formData.get('gratitude'),
        journalText: formData.get('journalText'),
    });


    if (mood || formData.get('affirmations').length || formData.get('gratitude').length || formData.get('journalText')) {
        try {
            const response = await fetch('http://localhost:4000/journal', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            console.log('Response from server:', response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert('Your records have been stored.');
            console.log(result);
            window.location.reload();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to store the journal entry.');
        }
    } else {
        alert('Please fill out at least one section.');
    }
};



  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorder) {
        mediaRecorder.stop();
        setIsRecording(false);
      }
    } else {
      // Start recording
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);

          const chunks = [];
          recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
            }
          };

          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            setAudioBlob(blob);
            const url = URL.createObjectURL(blob);
            if (audioPlayerRef.current) {
              audioPlayerRef.current.src = url;
            }
          };

          recorder.start();
          setIsRecording(true);
        } catch (err) {
          console.error('Error accessing audio devices.', err);
        }
      } else {
        alert('Your browser does not support audio recording.');
      }
    }
  };

  const saveRecording = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'recording.wav';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleMediaUpload = (event) => {
    setMediaFile(event.target.files[0]);
  };

  return (
    <div className="ind-journal11-pg-container">
      <h1 className="ind-journal11-pg-heading">Start Your Daily Journaling Journey</h1>
      <div className="ind-journal11-pg-row ind-journal11-pg-row-1">
        <div className="ind-journal11-pg-section ind-journal11-pg-section-1">
          <Calendar />
        </div>
        <div className="ind-journal11-pg-section ind-journal11-pg-section-2">
          <div className="ind-journal11-pg-affirmation-buttons">
            <button onClick={() => setIsPreset(true)} className={`affirmation-btn ${isPreset ? 'active' : ''}`}>Preset</button>
            <button onClick={() => setIsPreset(false)} className={`affirmation-btn ${!isPreset ? 'active' : ''}`}>Customize</button>
          </div>
          <div className="ind-journal11-pg-affirmation-content">
            {isPreset ? (
              <div>
                {presetAffirmations.slice(0, 15).map((affirmation, index) => (
                  <div key={index}>
                    <label>
                      <input 
                        type="checkbox" 
                        value={index}
                        onChange={() => {
                          if (selectedAffirmations.includes(index)) {
                            setSelectedAffirmations(selectedAffirmations.filter(i => i !== index));
                          } else {
                            setSelectedAffirmations([...selectedAffirmations, index]);
                          }
                        }} 
                      />
                      {affirmation}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <div className="affirmation-whole-contents">
                {customAffirmations.map((affirmation, index) => (
                  <div key={index} className="affirmation-input-content-nd-btns">
                    <input 
                      type="text" 
                      className="affirmation-input"
                      value={affirmation} 
                      onChange={(event) => handleAffirmationChange(index, event)} 
                      placeholder={`Affirmation ${index + 1}`}
                    />
                  </div>
                ))}
                <div className="affirmation-buttons">
                  <button onClick={addNewAffirmationField} className="add-affirmation-btn">Add Another Affirmation</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="ind-journal11-pg-section ind-journal11-pg-section-3">
          <h2>How is your mood right now?</h2>
          <div className="mood-options">
            <label>
              <input 
                type="radio" 
                name="mood" 
                value="happy" 
                checked={mood === 'happy'}
                onChange={() => setMood('happy')}
              />
              Happy
            </label>
            <label>
              <input 
                type="radio" 
                name="mood" 
                value="neutral" 
                checked={mood === 'neutral'}
                onChange={() => setMood('neutral')}
              />
              Neutral
            </label>
            <label>
              <input 
                type="radio" 
                name="mood" 
                value="sad" 
                checked={mood === 'sad'}
                onChange={() => setMood('sad')}
              />
              Sad
            </label>
            <label>
              <input 
                type="radio" 
                name="mood" 
                value="angry" 
                checked={mood === 'angry'}
                onChange={() => setMood('angry')}
              />
              Angry
            </label>
            <label>
              <input 
                type="radio" 
                name="mood" 
                value="anxious" 
                checked={mood === 'anxious'}
                onChange={() => setMood('anxious')}
              />
              Anxious
            </label>
          </div>
        </div>
      </div>

      <div className="ind-journal11-pg-row ind-journal11-pg-row-2">
        <div className="notebook-section">
          <textarea className="notebook-textarea" placeholder="What's on your mind?" />
        </div>

        <div className="gratitude-section">
          <h2>Gratitude Journal</h2>
          <div className="gratitude-options">
            {presetGratitude.map((item, index) => (
              <div key={index}>
                <label>
                  <input 
                    type="checkbox" 
                    value={index}
                    onChange={() => {
                      if (selectedGratitude.includes(index)) {
                        setSelectedGratitude(selectedGratitude.filter(i => i !== index));
                      } else {
                        setSelectedGratitude([...selectedGratitude, index]);
                      }
                    }}
                  />
                  {item}
                </label>
              </div>
            ))}
          </div>
          <h3>Custom Gratitude</h3>
          {customGratitude.map((grat, index) => (
            <div key={index}>
              <input 
                type="text" 
                value={grat} 
                onChange={(event) => handleGratitudeChange(index, event)} 
                placeholder={`Gratitude ${index + 1}`} 
              />
            </div>
          ))}
          <button onClick={addNewGratitudeField}>Add Another Gratitude</button>
        </div>

        <div className="media-section">
          <h2>Record Your Day</h2>
          <div className="audio-recording">
            <button onClick={toggleRecording}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioBlob && (
              <>
                <audio ref={audioPlayerRef} controls />
                <button onClick={saveRecording}>Save Recording</button>
              </>
            )}
          </div>

          <div className="file-upload-section">
            <label htmlFor="mediaUpload">Upload a photo or video:</label>
            <input 
              type="file" 
              id="mediaUpload" 
              accept="image/*,video/*" 
              onChange={handleMediaUpload} 
            />
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button onClick={handleFinalSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default JournalPg;
