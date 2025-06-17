import React, { useState } from 'react';
import './Attachment.css';

// Define scoring for each option
const optionScores = {
  never: 0,
  rarely: 1,
  sometimes: 2,
  usually: 3,
  always: 4,
};

const questions = [
  "How often do you feel unhappy doing so many things alone?",
  "How often do you feel you have nobody to talk to?",
  "How often do you feel as if nobody really understands you?",
  "How often do you find yourself waiting for people to call or write?",
  "How often do you feel starved for company?",
  "How often do you feel it is difficult for you to make friends?",
  "How often do you feel shut out and excluded by others?",
  "How often do you feel disconnected from the people you're with?",
  "When you want to talk about a feeling or something important to you, do you feel like nobody is there for you?",
  "How often do you feel like you have no close friends?",
  "Do you feel like there's no community or group you're part of?",
  "How often are you waiting for others to reach out and feel let down when they don't?",
  "Do you feel excluded in social situations?",
  "How often do you feel like you're not getting the emotional support you need?",
  "How often do you feel that you are 'in tune' with the people around you?",
  "How often do you feel that you lack companionship?",
  "How often do you feel that you are no longer close to anyone?",
  "How often do you feel that your interests and ideas are not shared by those around you?",
  "How often do you feel that your relationships with others are not meaningful?",
  "How often do you feel isolated from others?",
];

const options = ["never", "rarely", "sometimes", "usually", "always"];

// Descriptions for different loneliness levels
const descriptions = {
  Low: 'You have a wonderful balance in your social life. It’s natural to feel lonely every now and then, but you seem to manage these moments well. Your strong connections and ability to enjoy your own company are great strengths. Keep cherishing those relationships and doing the things that bring you happiness.',
  Moderate: 'You may feel lonely from time to time, which is completely normal. It’s a sign that you might be craving a bit more connection or deeper bonds with others. Consider reaching out to friends, joining a group, or exploring new activities that help you feel more connected. Sometimes, a little extra effort in nurturing relationships can make a big difference.',
  High: 'It seems like you’re feeling quite lonely, and that’s okay—it’s important to acknowledge these feelings. This could be an opportunity to open up to someone you trust or explore new ways to connect with others. Whether it’s through hobbies, community activities, or simply talking to someone who cares, taking small steps can help you feel more supported and less alone.',
  Severe: 'Your feelings of loneliness are strong, and they might be weighing heavily on you. Please remember that it’s okay to ask for support—you don’t have to face this alone. Reaching out to friends, family, or a professional can be the first step towards feeling better. There are people who care about you and want to help, so don’t hesitate to lean on them when you need to.'
};

const calculateResult = (answers) => {
  const totalScore = answers.reduce((sum, answer) => sum + optionScores[answer], 0);
  
  if (totalScore <= 20) return { level: 'Low' };
  if (totalScore <= 40) return { level: 'Moderate' };
  if (totalScore <= 60) return { level: 'High' };
  return { level: 'Severe' };
};

const LonelinessQuiz = () => {
  const totalQuestions = questions.length;
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index, value) => {
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
      <h1 className='attachment-style-pg-heading'>Loneliness Quiz</h1>
      <form className='attachment-style-pg-form' onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="attachment-style-pg-question-block">
            <h2 className='attachment-style-pg-h2'>{index + 1}. {question}</h2>
            <div className="attachment-style-pg-options">
              {options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
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
          <h2 className='attachment-style-pg-result-h2'>Your Loneliness Level: {result.level}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result.level]}</p>
        </div>
      )}
    </div>
  );
};

export default LonelinessQuiz;
