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
  "Do you feel excessively worried about everyday situations?",
  "Do you avoid certain situations because they make you anxious?",
  "I find it very hard to unwind, relax, or sit still.",
  "Do you worry about things working out in the future?",
  "I have experienced shortness of breath or felt dizzy and unsteady at times.",
  "Feeling afraid as if something awful might happen.",
  "Have you been disinterested in activities and events you’ve previously enjoyed?",
  "Do you find it hard to concentrate on simple tasks such as reading the newspaper, or watching TV?",
  "Do you avoid social situations because you feel like you would be rejected or judged for being yourself?",
  "Do you worry about the same things over and over again or obsess a lot?",
  "Do you experience sudden feelings of panic?",
  "I have been irritable and easily become annoyed.",
  "I have felt nervous and on edge.",
  "I break into tears without apparent reason.",
  "I get tired quickly.",
  "I have racing thoughts.",
  "Do you worry about things that have already happened in the past?",
  "I have had difficulties with sleep (including waking early, finding it hard to go to sleep).",
  "Have you felt more tired than usual, even on days when you got adequate sleep?",
  "When facing an uncertain or dangerous situation, do you worry about it until the situation has been resolved or passed?"
];

const options = ["Never", "Rarely", "Sometimes", "Usually", "Always"];

// Descriptions for different anxiety levels
const descriptions = {
  Low: 'You generally feel calm and have good control over your worries. Continue maintaining your healthy coping mechanisms and consider focusing on activities that enhance your well-being.',
  Moderate: 'You might experience anxiety occasionally, but it’s manageable. Reflect on ways to reduce stress and engage in relaxation techniques to better handle anxious feelings.',
  High: 'You experience significant anxiety and might struggle with various aspects of daily life. It could be helpful to seek support from a professional and explore strategies to manage your anxiety more effectively.',
  Severe: 'Your level of anxiety appears to be intense and could be impacting your life significantly. Seeking help from a mental health professional is highly recommended to receive appropriate support and treatment.'
};

const calculateResult = (answers) => {
  const totalScore = answers.reduce((sum, answer) => sum + optionScores[answer], 0);
  
  if (totalScore <= 20) return { level: 'Low' };
  if (totalScore <= 40) return { level: 'Moderate' };
  if (totalScore <= 60) return { level: 'High' };
  return { level: 'Severe' };
};

const AnxietyQuiz = () => {
  const totalQuestions = questions.length;
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: option
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
    <div className="attachment-style-pg-quiz-container">
      <h1 className='attachment-style-pg-heading'>How Anxious Are You?</h1>
      <form className="attachment-style-pg-form" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="attachment-style-pg-question-block">
            <h2 className='attachment-style-pg-h2'>{index + 1}. {question}</h2>
            <div className="attachment-style-pg-options">
              {options.map((option, optIndex) => (
                <label key={optIndex}>
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
          <h2 className='attachment-style-pg-result-h2'>Your Anxiety Level: {result.level}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result.level]}</p>
        </div>
      )}
    </div>
  );
};

export default AnxietyQuiz;
