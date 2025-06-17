// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import './Journal.css';

// function JournalPg() {
//   const [isPreset, setIsPreset] = useState(true);
//   const [customAffirmations, setCustomAffirmations] = useState(['']);
//   const [selectedAffirmations, setSelectedAffirmations] = useState([]);
//   const [mood, setMood] = useState('');
//   const [customGratitude, setCustomGratitude] = useState(['']);
//   const [selectedGratitude, setSelectedGratitude] = useState([]);
//   const [audioFile, setAudioFile] = useState(null);
//   const [mediaFile, setMediaFile] = useState(null);

//   const presetAffirmations = [
//     'I am capable of achieving my goals.',
//     'I embrace positivity in all aspects of my life.',
//     'I am worthy of love and respect.',
//     'I choose to be happy right now.',
//     'I am constantly growing and improving.'
//   ];

//   const presetGratitude = [
//     'Family and friends',
//     'Good health',
//     'A home to live in',
//     'Opportunities to learn and grow',
//     'The beauty of nature'
//   ];

//   const handleAffirmationChange = (index, event) => {
//     const newAffirmations = [...customAffirmations];
//     newAffirmations[index] = event.target.value;
//     setCustomAffirmations(newAffirmations);
//   };

//   const addNewAffirmationField = () => {
//     setCustomAffirmations([...customAffirmations, '']);
//   };

//   const handleGratitudeChange = (index, event) => {
//     const newGratitude = [...customGratitude];
//     newGratitude[index] = event.target.value;
//     setCustomGratitude(newGratitude);
//   };

//   const addNewGratitudeField = () => {
//     setCustomGratitude([...customGratitude, '']);
//   };

//   const handleSubmit = () => {
//     if (isPreset) {
//       if (selectedAffirmations.length > 0) {
//         const selected = presetAffirmations.filter((_, index) => selectedAffirmations.includes(index));
//         alert(`You have selected: \n${selected.join('\n')}`);
//       } else {
//         alert('Please select at least one affirmation.');
//       }
//     } else {
//       const enteredAffirmations = customAffirmations.filter(aff => aff.trim() !== '');
//       if (enteredAffirmations.length > 0) {
//         alert(`You have entered: \n${enteredAffirmations.join('\n')}`);
//       } else {
//         alert('Please enter at least one affirmation.');
//       }
//     }
//   };

//   const handleGratitudeSubmit = () => {
//     const selectedPreset = presetGratitude.filter((_, index) => selectedGratitude.includes(index));
//     const enteredGratitude = customGratitude.filter(grat => grat.trim() !== '');

//     if (selectedPreset.length > 0 || enteredGratitude.length > 0) {
//       alert(`You are grateful for: \n${[...selectedPreset, ...enteredGratitude].join('\n')}`);
//     } else {
//       alert('Please select or enter at least one thing you are grateful for.');
//     }
//   };

//   const handleAudioUpload = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   const handleMediaUpload = (event) => {
//     setMediaFile(event.target.files[0]);
//   };

//   return (
//     <div className="ind-journal11-pg-container">
//       <h1 className="ind-journal11-pg-heading">Start Your Daily Journaling Journey</h1>
//       <div className="ind-journal11-pg-row ind-journal11-pg-row-1">
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-1">
//           {/* <h2 className="ind-journal-pg-calendar-nd-writing-section-heading">Calendar Section</h2> */}
//           <Calendar />
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-2">
//           <div className="ind-journal11-pg-affirmation-buttons">
//             <button onClick={() => setIsPreset(true)} className={`affirmation-btn ${isPreset ? 'active' : ''}`}>Preset</button>
//             <button onClick={() => setIsPreset(false)} className={`affirmation-btn ${!isPreset ? 'active' : ''}`}>Customize</button>
//           </div>
//           <div className={`ind-journal11-pg-affirmation-content ${!isPreset && customAffirmations.length > 5 ? 'scrollable' : ''}`}>
//             {isPreset ? (
//               <div>
//                 {presetAffirmations.map((affirmation, index) => (
//                   <div key={index}>
//                     <label>
//                       <input 
//                         type="checkbox" 
//                         value={index}
//                         onChange={() => {
//                           if (selectedAffirmations.includes(index)) {
//                             setSelectedAffirmations(selectedAffirmations.filter(i => i !== index));
//                           } else {
//                             setSelectedAffirmations([...selectedAffirmations, index]);
//                           }
//                         }} 
//                       />
//                       {affirmation}
//                     </label>
//                   </div>
//                 ))}
//                 <button onClick={handleSubmit} className="affirmation-submit-btn">Record</button>
//               </div>
//             ) : (
//               <div>
//                 {customAffirmations.map((affirmation, index) => (
//                   <div key={index}>
//                     <input 
//                       type="text" 
//                       className="affirmation-input"
//                       value={affirmation} 
//                       onChange={(event) => handleAffirmationChange(index, event)} 
//                       placeholder={`Affirmation ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//                 <button onClick={addNewAffirmationField} className="add-affirmation-btn">Add Another Affirmation</button>
//                 <button onClick={handleSubmit} className="affirmation-submit-btn">Submit</button>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-3">
//           <h2>How is your mood right now?</h2>
//           <div className="mood-options">
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="happy" 
//                 checked={mood === 'happy'}
//                 onChange={() => setMood('happy')}
//               />
//               Happy
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="neutral" 
//                 checked={mood === 'neutral'}
//                 onChange={() => setMood('neutral')}
//               />
//               Neutral
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="sad" 
//                 checked={mood === 'sad'}
//                 onChange={() => setMood('sad')}
//               />
//               Sad
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="angry" 
//                 checked={mood === 'angry'}
//                 onChange={() => setMood('angry')}
//               />
//               Angry
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="excited" 
//                 checked={mood === 'excited'}
//                 onChange={() => setMood('excited')}
//               />
//               Excited
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="ind-journal11-pg-row ind-journal11-pg-row-2">
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-4">
//           <h2>What are you grateful for?</h2>
//           <div className={`ind-journal11-pg-gratitude-content ${customGratitude.length > 2 ? 'scrollable' : ''}`}>
//             {presetGratitude.map((gratitude, index) => (
//               <div key={index}>
//                 <label>
//                   <input 
//                     type="checkbox" 
//                     value={index}
//                     onChange={() => {
//                       if (selectedGratitude.includes(index)) {
//                         setSelectedGratitude(selectedGratitude.filter(i => i !== index));
//                       } else {
//                         setSelectedGratitude([...selectedGratitude, index]);
//                       }
//                     }} 
//                   />
//                   {gratitude}
//                 </label>
//               </div>
//             ))}
//             {customGratitude.map((gratitude, index) => (
//               <div key={index}>
//                 <input 
//                   type="text" 
//                   value={gratitude} 
//                   onChange={(event) => handleGratitudeChange(index, event)} 
//                   placeholder={`Gratitude ${index + 1}`}
//                 />
//               </div>
//             ))}
//             <button onClick={addNewGratitudeField} className="add-gratitude-btn">Add Another Gratitude</button>
//             <button onClick={handleGratitudeSubmit} className="gratitude-submit-btn">Submit</button>
//           </div>
//         </div>
//       </div>
//       <div className="ind-journal11-pg-section ind-journal11-pg-section-5">
//         <h2>Upload Audio/Video</h2>
//         <input type="file" accept="audio/*" onChange={handleAudioUpload} />
//         <input type="file" accept="video/*" onChange={handleMediaUpload} />
//       </div>
//       <div className="ind-journal11-pg-section ind-journal11-pg-section-5">
//         <h2>Journal</h2>
//         <textarea placeholder="Write about your day..." rows="5"></textarea>
//         <button className="journal-submit-btn">Save Journal</button>
//       </div>
//     </div>
//   );
// }

// export default JournalPg;





// import React, { useState, useRef } from 'react';
// import Calendar from 'react-calendar';
// import './Journal.css';

// function JournalPg() {
//   const [isPreset, setIsPreset] = useState(true);
//   const [customAffirmations, setCustomAffirmations] = useState(['']);
//   const [selectedAffirmations, setSelectedAffirmations] = useState([]);
//   const [mood, setMood] = useState('');
//   const [customGratitude, setCustomGratitude] = useState(['']);
//   const [selectedGratitude, setSelectedGratitude] = useState([]);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [mediaFile, setMediaFile] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const audioPlayerRef = useRef(null);

//   const presetAffirmations = [
//     'I am capable of achieving my goals.',
//     'I embrace positivity in all aspects of my life.',
//     'I am worthy of love and respect.',
//     'I choose to be happy right now.',
//     'I am constantly growing and improving.',
//     'I am surrounded by love and support.',
//     'I handle stress with ease and grace.',
//     'My body is healthy and strong.',
//     'I am confident and capable.',
//     'Abundance flows freely into my life.',
//   ];

//   const presetGratitude = [
//     'Family and friends',
//     'Good health',
//     'A home to live in',
//     'Opportunities to learn and grow',
//     'The beauty of nature'
//   ];

//   const handleAffirmationChange = (index, event) => {
//     const newAffirmations = [...customAffirmations];
//     newAffirmations[index] = event.target.value;
//     setCustomAffirmations(newAffirmations);
//   };

//   const addNewAffirmationField = () => {
//     setCustomAffirmations([...customAffirmations, '']);
//   };

//   const handleGratitudeChange = (index, event) => {
//     const newGratitude = [...customGratitude];
//     newGratitude[index] = event.target.value;
//     setCustomGratitude(newGratitude);
//   };

//   const addNewGratitudeField = () => {
//     setCustomGratitude([...customGratitude, '']);
//   };

//   const handleSubmit = () => {
//     if (isPreset) {
//       if (selectedAffirmations.length > 0) {
//         const selected = presetAffirmations.filter((_, index) => selectedAffirmations.includes(index));
//         alert(`You have selected: \n${selected.join('\n')}`);
//       } else {
//         alert('Please select at least one affirmation.');
//       }
//     } else {
//       const enteredAffirmations = customAffirmations.filter(aff => aff.trim() !== '');
//       if (enteredAffirmations.length > 0) {
//         alert(`You have entered: \n${enteredAffirmations.join('\n')}`);
//       } else {
//         alert('Please enter at least one affirmation.');
//       }
//     }
//   };

//   const handleGratitudeSubmit = () => {
//     const selectedPreset = presetGratitude.filter((_, index) => selectedGratitude.includes(index));
//     const enteredGratitude = customGratitude.filter(grat => grat.trim() !== '');

//     if (selectedPreset.length > 0 || enteredGratitude.length > 0) {
//       alert(`You are grateful for: \n${[...selectedPreset, ...enteredGratitude].join('\n')}`);
//     } else {
//       alert('Please select or enter at least one thing you are grateful for.');
//     }
//   };

//   const toggleRecording = async () => {
//     if (isRecording) {
//       // Stop recording
//       if (mediaRecorder) {
//         mediaRecorder.stop();
//         setIsRecording(false);
//       }
//     } else {
//       // Start recording
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//           const recorder = new MediaRecorder(stream);
//           setMediaRecorder(recorder);

//           const chunks = [];
//           recorder.ondataavailable = (event) => {
//             if (event.data.size > 0) {
//               chunks.push(event.data);
//             }
//           };

//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: 'audio/wav' });
//             setAudioBlob(blob);
//             const url = URL.createObjectURL(blob);
//             if (audioPlayerRef.current) {
//               audioPlayerRef.current.src = url;
//             }
//           };

//           recorder.start();
//           setIsRecording(true);
//         } catch (err) {
//           console.error('Error accessing audio devices.', err);
//         }
//       } else {
//         alert('Your browser does not support audio recording.');
//       }
//     }
//   };

//   const saveRecording = () => {
//     if (audioBlob) {
//       const url = URL.createObjectURL(audioBlob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'recording.wav';
//       a.click();
//       URL.revokeObjectURL(url);
//     }
//   };

//   const handleMediaUpload = (event) => {
//     setMediaFile(event.target.files[0]);
//   };

//   const handleFinalSubmit = () => {
//     if (mood || selectedAffirmations.length || customGratitude.some(grat => grat.trim() !== '') || document.querySelector('.notebook-textarea').value.trim()) {
//       alert('Your records have been stored.');
//       window.location.reload(); // Refresh the page
//     } else {
//       alert('Please fill out at least one section.');
//     }
//   };

//   return (
//     <div className="ind-journal11-pg-container">
//       <h1 className="ind-journal11-pg-heading">Start Your Daily Journaling Journey</h1>
//       <div className="ind-journal11-pg-row ind-journal11-pg-row-1">
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-1">
//           <Calendar />
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-2">
//           <div className="ind-journal11-pg-affirmation-buttons">
//             <button onClick={() => setIsPreset(true)} className={`affirmation-btn ${isPreset ? 'active' : ''}`}>Preset</button>
//             <button onClick={() => setIsPreset(false)} className={`affirmation-btn ${!isPreset ? 'active' : ''}`}>Customize</button>
//           </div>
//           <div className="ind-journal11-pg-affirmation-content">
//             {isPreset ? (
//               <div>
//                 {presetAffirmations.slice(0, 15).map((affirmation, index) => (
//                   <div key={index}>
//                     <label>
//                       <input 
//                         type="checkbox" 
//                         value={index}
//                         onChange={() => {
//                           if (selectedAffirmations.includes(index)) {
//                             setSelectedAffirmations(selectedAffirmations.filter(i => i !== index));
//                           } else {
//                             setSelectedAffirmations([...selectedAffirmations, index]);
//                           }
//                         }} 
//                       />
//                       {affirmation}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="affirmation-whole-contents">
//                 {customAffirmations.map((affirmation, index) => (
//                   <div key={index} className="affirmation-input-content-nd-btns">
//                     <input 
//                       type="text" 
//                       className="affirmation-input"
//                       value={affirmation} 
//                       onChange={(event) => handleAffirmationChange(index, event)} 
//                       placeholder={`Affirmation ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//                 <div className="affirmation-buttons">
//                   <button onClick={addNewAffirmationField} className="add-affirmation-btn">Add Another Affirmation</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-3">
//           <h2>How is your mood right now?</h2>
//           <div className="mood-options">
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="happy" 
//                 checked={mood === 'happy'}
//                 onChange={() => setMood('happy')}
//               />
//               Happy
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="neutral" 
//                 checked={mood === 'neutral' }     
//                 />
//                   Neutral
//                 </label>
//                 <label>
//                   <input 
//                     type="radio" 
//                     name="mood" 
//                     value="sad" 
//                     checked={mood === 'sad'}
//                     onChange={() => setMood('sad')}
//                   />
//                   Sad
//                 </label>
//                 <label>
//                   <input 
//                     type="radio" 
//                     name="mood" 
//                     value="angry" 
//                     checked={mood === 'angry'}
//                     onChange={() => setMood('angry')}
//                   />
//                   Angry
//                 </label>
//                 <label>
//                   <input 
//                     type="radio" 
//                     name="mood" 
//                     value="excited" 
//                     checked={mood === 'excited'}
//                     onChange={() => setMood('excited')}
//                   />
//                   Excited
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="ind-journal11-pg-row ind-journal11-pg-row-2">
//             <div className="ind-journal11-pg-section ind-journal11-pg-section-4">
//               <h2>What are you grateful for?</h2>
//               <div className={`ind-journal11-pg-gratitude-content ${customGratitude.length > 2 ? 'scrollable' : ''}`}>
//                 {presetGratitude.map((gratitude, index) => (
//                   <div key={index}>
//                     <label>
//                       <input 
//                         type="checkbox" 
//                         value={index}
//                         onChange={() => {
//                           if (selectedGratitude.includes(index)) {
//                             setSelectedGratitude(selectedGratitude.filter(i => i !== index));
//                           } else {
//                             setSelectedGratitude([...selectedGratitude, index]);
//                           }
//                         }} 
//                       />
//                       {gratitude}
//                     </label>
//                   </div>
//                 ))}
//                 {customGratitude.map((gratitude, index) => (
//                   <div key={index}>
//                     <input 
//                       type="text" 
//                       value={gratitude} 
//                       onChange={(event) => handleGratitudeChange(index, event)} 
//                       placeholder={`Gratitude ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button onClick={addNewGratitudeField} className="add-gratitude-btn">Add More</button>
//             </div>
//             <div className="ind-journal11-pg-section ind-journal11-pg-section-5">
//               <h2 className='ind-journal11-pg-writing-heading'>Write Your Feelings</h2>
//               <textarea 
//                 className="notebook-textarea" 
//                 placeholder="Express your thoughts and feelings here..."
//               ></textarea>
//               <div className="media-upload-section">
//                 <div className="audio-recording-section">
//                   <button 
//                     onClick={toggleRecording} 
//                     className={`record-btn ${isRecording ? 'recording' : ''}`}
//                   >
//                     {isRecording ? 'Stop Recording' : 'Start Recording'}
//                   </button>
//                   <button 
//                     onClick={saveRecording} 
//                     className={`save-btn ${!audioBlob ? 'disabled' : ''}`}
//                   >
//                     Save Recording
//                   </button>
//                   <audio ref={audioPlayerRef} controls></audio>
//                   {isRecording && (
//   <div className="recording-animation">
//     {[...Array(30)].map((_, index) => (
//       <div key={index} className="wave"></div>
//     ))}
//   </div>
// )}
//                 </div>
//                 <label htmlFor="media-upload">Share a Memory (Image/Video):</label>
//                 <input 
//                   type="file" 
//                   id="media-upload" 
//                   accept="image/,video/" 
//                   onChange={handleMediaUpload} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="ind-journal11-pg-submit-container">
//             <button onClick={handleFinalSubmit} className="submit-all-btn">Submit All</button>
//           </div>
//         </div>
//       );
//     }
    
//     export default JournalPg;




// import React, { useState, useRef } from 'react';
// import Calendar from 'react-calendar';
// import './Journal.css';

// function JournalPg() {
//   const [isPreset, setIsPreset] = useState(true);
//   const [customAffirmations, setCustomAffirmations] = useState(['']);
//   const [selectedAffirmations, setSelectedAffirmations] = useState([]);
//   const [mood, setMood] = useState('');
//   const [customGratitude, setCustomGratitude] = useState(['']);
//   const [selectedGratitude, setSelectedGratitude] = useState([]);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [mediaFile, setMediaFile] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const audioPlayerRef = useRef(null);

//   const presetAffirmations = [
//     'I am capable of achieving my goals.',
//     'I embrace positivity in all aspects of my life.',
//     'I am worthy of love and respect.',
//     'I choose to be happy right now.',
//     'I am constantly growing and improving.',
//     'I am surrounded by love and support.',
//     'I handle stress with ease and grace.',
//     'My body is healthy and strong.',
//     'I am confident and capable.',
//     'Abundance flows freely into my life.',
//   ];

//   const presetGratitude = [
//     'Family and friends',
//     'Good health',
//     'A home to live in',
//     'Opportunities to learn and grow',
//     'The beauty of nature'
//   ];

//   const handleAffirmationChange = (index, event) => {
//     const newAffirmations = [...customAffirmations];
//     newAffirmations[index] = event.target.value;
//     setCustomAffirmations(newAffirmations);
//   };

//   const addNewAffirmationField = () => {
//     setCustomAffirmations([...customAffirmations, '']);
//   };

//   const handleGratitudeChange = (index, event) => {
//     const newGratitude = [...customGratitude];
//     newGratitude[index] = event.target.value;
//     setCustomGratitude(newGratitude);
//   };

//   const addNewGratitudeField = () => {
//     setCustomGratitude([...customGratitude, '']);
//   };

//   const handleFinalSubmit = async () => {
//     const formData = new FormData();
//     formData.append('userId', loggedInUserId); // Include the user ID
//     formData.append('mood', mood);
//     formData.append('affirmations', JSON.stringify(isPreset ? presetAffirmations.filter((_, index) => selectedAffirmations.includes(index)) : customAffirmations.filter(aff => aff.trim() !== '')));
//     formData.append('gratitude', JSON.stringify(selectedGratitude.map(index => presetGratitude[index]).concat(customGratitude.filter(grat => grat.trim() !== ''))));
//     formData.append('feelings', document.querySelector('.notebook-textarea').value.trim());

//     if (mediaFile) {
//       formData.append('images', mediaFile);
//     }
//     if (audioBlob) {
//       formData.append('audios', audioBlob, 'recording.wav');
//     }

//     if (mood || formData.get('affirmations').length || formData.get('gratitude').length || formData.get('feelings')) {
//       try {
//         const response = await fetch('http://localhost:4000/journal', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//           },
//           body: formData,
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         alert('Your records have been stored.');
//         console.log(result); // Handle the response as needed
//         window.location.reload(); // Refresh the page
//       } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         alert('Failed to store the journal entry.');
//       }
//     } else {
//       alert('Please fill out at least one section.');
//     }
//   };

//   const toggleRecording = async () => {
//     if (isRecording) {
//       // Stop recording
//       if (mediaRecorder) {
//         mediaRecorder.stop();
//         setIsRecording(false);
//       }
//     } else {
//       // Start recording
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//           const recorder = new MediaRecorder(stream);
//           setMediaRecorder(recorder);

//           const chunks = [];
//           recorder.ondataavailable = (event) => {
//             if (event.data.size > 0) {
//               chunks.push(event.data);
//             }
//           };

//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: 'audio/wav' });
//             setAudioBlob(blob);
//             const url = URL.createObjectURL(blob);
//             if (audioPlayerRef.current) {
//               audioPlayerRef.current.src = url;
//             }
//           };

//           recorder.start();
//           setIsRecording(true);
//         } catch (err) {
//           console.error('Error accessing audio devices.', err);
//         }
//       } else {
//         alert('Your browser does not support audio recording.');
//       }
//     }
//   };

//   const saveRecording = () => {
//     if (audioBlob) {
//       const url = URL.createObjectURL(audioBlob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'recording.wav';
//       a.click();
//       URL.revokeObjectURL(url);
//     }
//   };

//   const handleMediaUpload = (event) => {
//     setMediaFile(event.target.files[0]);
//   };

//   return (
//     <div className="ind-journal11-pg-container">
//       <h1 className="ind-journal11-pg-heading">Start Your Daily Journaling Journey</h1>
//       <div className="ind-journal11-pg-row ind-journal11-pg-row-1">
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-1">
//           <Calendar />
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-2">
//           <div className="ind-journal11-pg-affirmation-buttons">
//             <button onClick={() => setIsPreset(true)} className={`affirmation-btn ${isPreset ? 'active' : ''}`}>Preset</button>
//             <button onClick={() => setIsPreset(false)} className={`affirmation-btn ${!isPreset ? 'active' : ''}`}>Customize</button>
//           </div>
//           <div className="ind-journal11-pg-affirmation-content">
//             {isPreset ? (
//               <div>
//                 {presetAffirmations.slice(0, 15).map((affirmation, index) => (
//                   <div key={index}>
//                     <label>
//                       <input 
//                         type="checkbox" 
//                         value={index}
//                         onChange={() => {
//                           if (selectedAffirmations.includes(index)) {
//                             setSelectedAffirmations(selectedAffirmations.filter(i => i !== index));
//                           } else {
//                             setSelectedAffirmations([...selectedAffirmations, index]);
//                           }
//                         }} 
//                       />
//                       {affirmation}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="affirmation-whole-contents">
//                 {customAffirmations.map((affirmation, index) => (
//                   <div key={index} className="affirmation-input-content-nd-btns">
//                     <input 
//                       type="text" 
//                       className="affirmation-input"
//                       value={affirmation} 
//                       onChange={(event) => handleAffirmationChange(index, event)} 
//                       placeholder={`Affirmation ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//                 <div className="affirmation-buttons">
//                   <button onClick={addNewAffirmationField} className="add-affirmation-btn">Add Another Affirmation</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-3">
//           <h2>How is your mood right now?</h2>
//           <div className="mood-options">
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="happy" 
//                 checked={mood === 'happy'}
//                 onChange={() => setMood('happy')}
//               />
//               Happy
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="neutral" 
//                 checked={mood === 'neutral'}
//                 onChange={() => setMood('neutral')}
//               />
//               Neutral
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="sad" 
//                 checked={mood === 'sad'}
//                 onChange={() => setMood('sad')}
//               />
//               Sad
//             </label>
//             <label>
//               <input 
//                 type="radio" 
//                 name="mood" 
//                 value="angry" 
//                 checked={mood === 'angry'}
//                 onChange={() => setMood('angry')}
//               />
//               Angry
//             </label>
//           </div>
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-4">
//           <h2>What are you grateful for?</h2>
//           <div className="gratitude-whole-content">
//             {presetGratitude.map((item, index) => (
//               <div key={index}>
//                 <label>
//                   <input 
//                     type="checkbox" 
//                     value={index}
//                     onChange={() => {
//                       if (selectedGratitude.includes(index)) {
//                         setSelectedGratitude(selectedGratitude.filter(i => i !== index));
//                       } else {
//                         setSelectedGratitude([...selectedGratitude, index]);
//                       }
//                     }} 
//                   />
//                   {item}
//                 </label>
//               </div>
//             ))}
//             {customGratitude.map((gratitude, index) => (
//               <div key={index} className="gratitude-input-content">
//                 <input 
//                   type="text" 
//                   className="gratitude-input"
//                   value={gratitude} 
//                   onChange={(event) => handleGratitudeChange(index, event)} 
//                   placeholder={`Gratitude ${index + 1}`}
//                 />
//               </div>
//             ))}
//             <div className="gratitude-buttons">
//               <button onClick={addNewGratitudeField} className="add-gratitude-btn">Add Another Gratitude</button>
//             </div>
//           </div>
//         </div>
//         <div className="ind-journal11-pg-section ind-journal11-pg-section-5">
//           <textarea 
//             className="notebook-textarea" 
//             rows="4" 
//             placeholder="Write about your day..."
//           />
//         </div>
//       </div>
//       <div className="media-upload-section">
//         <input type="file" accept="video/*,audio/*,image/*" onChange={handleMediaUpload} />
//         <button onClick={toggleRecording} className={`record-btn ${isRecording ? 'stop' : 'start'}`}>
//           {isRecording ? 'Stop Recording' : 'Start Recording'}
//         </button>
//         {audioBlob && (
//           <div>
//             <audio ref={audioPlayerRef} controls />
//             <button onClick={saveRecording}>Download Recording</button>
//           </div>
//         )}
//       </div>
//       <button onClick={handleFinalSubmit} className="submit-journal-btn">Submit Journal Entry</button>
//     </div>
//   );
// }

// export default JournalPg;



  // const handleFinalSubmit = async () => {
  //   const formData = new FormData();
  //   formData.append('userId', loggedInUserId); // Include the user ID
  //   formData.append('mood', mood);
  //   formData.append('affirmations', JSON.stringify(isPreset ? presetAffirmations.filter((_, index) => selectedAffirmations.includes(index)) : customAffirmations.filter(aff => aff.trim() !== '')));
  //   formData.append('gratitude', JSON.stringify(selectedGratitude.map(index => presetGratitude[index]).concat(customGratitude.filter(grat => grat.trim() !== ''))));
  //   formData.append('feelings', document.querySelector('.notebook-textarea').value.trim());

  //   if (mediaFile) {
  //     formData.append('images', mediaFile);
  //   }
  //   if (audioBlob) {
  //     formData.append('audios', audioBlob, 'recording.wav');
  //   }

  //   if (mood || formData.get('affirmations').length || formData.get('gratitude').length || formData.get('feelings')) {
  //     try {
  //       const response = await fetch('http://localhost:4000/journal', {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //         body: formData,
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const result = await response.json();
  //       alert('Your records have been stored.');
  //       console.log(result); // Handle the response as needed
  //       window.location.reload(); // Refresh the page
  //     } catch (error) {
  //       console.error('There was a problem with the fetch operation:', error);
  //       alert('Failed to store the journal entry.');
  //     }
  //   } else {
  //     alert('Please fill out at least one section.');
  //   }
  // };




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
