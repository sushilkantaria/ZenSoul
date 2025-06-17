// import React, { useState } from 'react';
// import './Stressmeter.css';
// import Meter from './meter';

// const questions = [
//   'Do you turn to unhealthy food indulgences such as eating junk food, consuming excessive nicotine or caffeine, or eating sugary foods when feeling overwhelmed?',
//   'During work hours, do you have a hard time staying focused and concentrating on the task-at-hand?',
//   'Do you feel like withdrawing from family, friends, and isolating yourself?',
//   'Do you feel irritable, annoyed, or angry over trivial issues?',
//   'How often in the past have you felt impatient with delays, lack of control, or anger at uncontrollable situations?',
//   'How often do you deny or ignore your problems in the hope that they will go away?',
//   'How often do you experience mood swings or low self-confidence or self-esteem?',
//   'How often do you feel a loss of appetite or feel a desire to binge or skip meals?',
//   'How often do you find yourself unable to make decisions (even smaller ones)?',
//   'If you feel sad, do you know where to find support and companionship?',
//   'How often do you feel that you are a disappointment or a failure to your family and friends?',
//   'How often do you find yourself dwelling on the past or ruminating about your past mistakes and worrying about the future or things that haven’t happened yet?',
//   'How often do you procrastinate on tasks due to feeling overwhelmed?',
//   'Do you have difficulty relaxing and taking things easy?',
//   'Do you find it difficult to delegate tasks or ask for help when needed?',
// ];

// const Stressmeter = () => {
//   const [responses, setResponses] = useState(Array(15).fill(1));
//   const [stressLevel, setStressLevel] = useState('');
//   const [showResult, setShowResult] = useState(false);

//   const handleChange = (index, value) => {
//     const newResponses = [...responses];
//     newResponses[index] = parseInt(value, 10);
//     setResponses(newResponses);
//   };

//   const calculateStressLevel = () => {
//     const totalScore = responses.reduce((acc, curr) => acc + curr, 0);
//     let level = '';
//     if (totalScore <= 15) level = 'Very Low';
//     else if (totalScore <= 30) level = 'Low';
//     else if (totalScore <= 45) level = 'Moderate';
//     else if (totalScore <= 60) level = 'High';
//     else level = 'Very High';
//     setStressLevel(level);
//     setShowResult(true);
//   };

//   return (
//     <div className="stressmeter-container">
//       <h1 className="stressmeter-title">Stress-O-Meter</h1>
//       {questions.map((question, index) => (
//         <div key={index} className="stressmeter-question">
//           <label>{question}</label>
//           <div className="stressmeter-options">
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value="1"
//                 checked={responses[index] === 1}
//                 onChange={(e) => handleChange(index, e.target.value)}
//               />{' '}
//               Never
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value="2"
//                 checked={responses[index] === 2}
//                 onChange={(e) => handleChange(index, e.target.value)}
//               />{' '}
//               Rarely
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value="3"
//                 checked={responses[index] === 3}
//                 onChange={(e) => handleChange(index, e.target.value)}
//               />{' '}
//               Sometimes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value="4"
//                 checked={responses[index] === 4}
//                 onChange={(e) => handleChange(index, e.target.value)}
//               />{' '}
//               Usually
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${index}`}
//                 value="5"
//                 checked={responses[index] === 5}
//                 onChange={(e) => handleChange(index, e.target.value)}
//               />{' '}
//               Always
//             </label>
//           </div>
//         </div>
//       ))}
//       <button className="stressmeter-button" onClick={calculateStressLevel}>Calculate Stress Level</button>
//       {showResult && (
//         <div className="stressmeter-result">
//           <h2>Your Stress Level</h2>
//           <p>{stressLevel}</p>
//           <Meter stressLevel={stressLevel} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stressmeter;


import React, { useState } from 'react';
// import './Stressmeter.css';

const questions = [
  'Do you turn to unhealthy food indulgences such as eating junk food, consuming excessive nicotine or caffeine, or eating sugary foods when feeling overwhelmed?',
  'During work hours, do you have a hard time staying focused and concentrating on the task-at-hand?',
  'Do you feel like withdrawing from family, friends, and isolating yourself?',
  'Do you feel irritable, annoyed, or angry over trivial issues?',
  'How often in the past have you felt impatient with delays, lack of control, or anger at uncontrollable situations?',
  'How often do you deny or ignore your problems in the hope that they will go away?',
  'How often do you experience mood swings or low self-confidence or self-esteem?',
  'How often do you feel a loss of appetite or feel a desire to binge or skip meals?',
  'How often do you find yourself unable to make decisions (even smaller ones)?',
  'If you feel sad, do you know where to find support and companionship?',
  'How often do you feel that you are a disappointment or a failure to your family and friends?',
  'How often do you find yourself dwelling on the past or ruminating about your past mistakes and worrying about the future or things that haven’t happened yet?',
  'How often do you procrastinate on tasks due to feeling overwhelmed?',
  'Do you have difficulty relaxing and taking things easy?',
  'Do you find it difficult to delegate tasks or ask for help when needed?',
];

const options = ['Never', 'Rarely', 'Sometimes', 'Usually', 'Always'];

const Stressmeter = () => {
  const [responses, setResponses] = useState(Array(15).fill(1));
  const [stressLevel, setStressLevel] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = parseInt(value, 10);
    setResponses(newResponses);
  };

  const calculateStressLevel = () => {
    const totalScore = responses.reduce((acc, curr) => acc + curr, 0);
    let level = '';
    if (totalScore <= 15) level = 'Very Low';
    else if (totalScore <= 30) level = 'Low';
    else if (totalScore <= 45) level = 'Moderate';
    else if (totalScore <= 60) level = 'High';
    else level = 'Very High';
    setStressLevel(level);
    setShowResult(true);
  };

  return (
    <div className="attachment-style-pg-quiz-container">
      <h1 className="attachment-style-pg-heading">Stress-O-Meter</h1>
      <form className="attachment-style-pg-form" onSubmit={(e) => e.preventDefault()}>
        {questions.map((question, index) => (
          <div key={index} className="attachment-style-pg-question-block">
            <h2 className="attachment-style-pg-h2">
              {index + 1}. {question}
            </h2>
            <div className="attachment-style-pg-options">
              {options.map((option, optIndex) => (
                <label key={optIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={optIndex + 1}
                    checked={responses[index] === optIndex + 1}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="attachment-style-pg-submit-button">
          <button type="button" onClick={calculateStressLevel}>
            Calculate Stress Level
          </button>
        </div>
      </form>
      {showResult && (
        <div className="attachment-style-pg-result">
          <h2 className="attachment-style-pg-result-h2">Your Stress Level: {stressLevel}</h2>
          <p className="attachment-style-pg-result-p-tag">Based on your answers, your stress level is categorized as {stressLevel}. Consider reflecting on your current lifestyle and seeking ways to manage stress effectively.</p>
        </div>
      )}
    </div>
  );
};

export default Stressmeter;