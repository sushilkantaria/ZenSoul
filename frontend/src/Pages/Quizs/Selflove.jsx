import React, { useState } from 'react';
import './Attachment.css';

// Define scoring for each option
const optionScores = {
  Never: 0,
  Rarely: 1,
  Sometimes: 2,
  Usually: 3,
  Always: 4,
};

const questions = [
  "I accept myself as I am.",
  "I take time to care for my physical health.",
  "I forgive myself for past mistakes.",
  "I set healthy boundaries in my relationships.",
  "I acknowledge my strengths and achievements.",
  "I speak to myself with positive affirmations.",
  "I make time for activities that I enjoy.",
  "I prioritize my mental well-being.",
  "I practice self-compassion during tough times.",
  "I take breaks when I need them.",
  "I nurture my body with healthy foods.",
  "I invest time in my personal growth.",
  "I surround myself with supportive people.",
  "I express my needs and desires.",
  "I let go of negative self-talk.",
  "I practice gratitude for who I am.",
  "I make decisions that are in my best interest.",
  "I trust myself to handle challenges.",
  "I value my opinions and perspectives.",
  "I feel deserving of love and respect."
];

const options = ["Never", "Rarely", "Sometimes", "Usually", "Always"];

// Descriptions for different self-love levels
const descriptions = {
  'Low Self-Love': 'You may be struggling to accept and care for yourself. It’s important to remember that self-love is a journey, and it’s okay to take small steps towards nurturing yourself.',
  'Moderate Self-Love': 'You have some self-love practices in place, but there is room to grow. Consider focusing on areas where you can further support and uplift yourself.',
  'High Self-Love': 'You generally show yourself kindness and care, but there are still areas to improve. Keep building on your self-love habits and continue to prioritize your well-being.',
  'Very High Self-Love': 'You have a strong sense of self-love and practice it regularly. This is a great foundation for a healthy and fulfilling life. Keep up the wonderful work of taking care of yourself!'
};

const calculateResult = (answers) => {
  const totalScore = answers.reduce((sum, answer) => sum + optionScores[answer], 0);

  if (totalScore <= 20) return { level: 'Low Self-Love' };
  if (totalScore <= 40) return { level: 'Moderate Self-Love' };
  if (totalScore <= 60) return { level: 'High Self-Love' };
  return { level: 'Very High Self-Love' };
};

const SelfLoveQuiz = () => {
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
      <h1 className='attachment-style-pg-heading'>Self-Love Quiz</h1>
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
          <h2 className='attachment-style-pg-result-h2'>Your Self-Love Level: {result.level}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result.level]}</p>
        </div>
      )}
    </div>
  );
};

export default SelfLoveQuiz;
