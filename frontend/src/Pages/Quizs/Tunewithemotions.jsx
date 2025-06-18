import React, { useState } from 'react';
import './Attachment.css';

// Define scoring for each option
const optionScores = {
  Never: 0,
  Occasionally: 1,
  Sometimes: 2,
  Often: 3,
  Always: 4,
};

const questions = [
  "How often do you take time to reflect on your feelings?",
  "How regularly do you feel overwhelmed by your emotions?",
  "How often do you understand why you feel a certain way?",
  "How often do you express your emotions through writing or journaling?",
  "How often do you practice self-compassion?",
  "How regularly do you acknowledge your emotions without judgment?",
  "How often do you feel comfortable sharing your true feelings with others?",
  "How often do you meditate or practice mindfulness to connect with your emotions?",
  "How frequently do you feel that your emotions guide your decisions?",
  "How often do you feel in control of your emotions?",
  "How regularly do you feel that your emotions are valid?",
  "How often do you take breaks when feeling emotionally overwhelmed?",
  "How frequently do you apologize when your emotions negatively impact others?",
  "How often do you use creative outlets to express your emotions?",
  "How regularly do you seek professional help to understand your emotions?",
  "How frequently do you feel emotionally balanced?",
  "How often do you avoid situations that might trigger negative emotions?",
  "How regularly do you set boundaries to protect your emotional well-being?",
  "How regularly do you forgive yourself for emotional mistakes?",
  "How frequently do you feel your emotions are aligned with your actions?"
];

const options = [
  "Never",
  "Occasionally",
  "Sometimes",
  "Often",
  "Always"
];

// Descriptions for different emotional awareness levels
const descriptions = {
  'Low Emotional Awareness': 'You may need to focus more on understanding and expressing your emotions. Consider practicing mindfulness or seeking support to better connect with your feelings.',
  'Moderate Emotional Awareness': 'You have some emotional awareness practices in place, but there is room for growth. Engaging in more self-reflection and emotional exercises could enhance your emotional connection.',
  'High Emotional Awareness': 'You have a good understanding and connection with your emotions. Continue nurturing this aspect and consider deepening your emotional practices for even greater balance.',
  'Very High Emotional Awareness': 'You have a strong grasp of your emotions and consistently practice emotional self-care. Keep up the great work and continue to foster your emotional well-being.'
};

const calculateResult = (answers) => {
  const totalScore = answers.reduce((sum, answer) => sum + optionScores[answer], 0);

  if (totalScore <= 20) return { level: 'Low Emotional Awareness' };
  if (totalScore <= 40) return { level: 'Moderate Emotional Awareness' };
  if (totalScore <= 60) return { level: 'High Emotional Awareness' };
  return { level: 'Very High Emotional Awareness' };
};

const Tunewithemotions = () => {
  const totalQuestions = questions.length;
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (index, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [index]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length === totalQuestions) {
      setIsSubmitted(true);
      setResult(calculateResult(Object.values(answers)));
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className='attachment-style-pg-quiz-container'>
      <h1 className='attachment-style-pg-heading'>Are You in Tune with Your Emotions?</h1>
      <form className='attachment-style-pg-form' onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="attachment-style-pg-question-block">
            <h2 className='attachment-style-pg-h2'>{index + 1}. {question}</h2>
            <div className="attachment-style-pg-options">
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="attachment-style-pg-submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
      {isSubmitted && result && (
        <div className="attachment-style-pg-result">
          <h2 className='attachment-style-pg-result-h2'>Your Emotional Awareness Level: {result.level}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result.level]}</p>
        </div>
      )}
    </div>
  );
};

export default Tunewithemotions;
