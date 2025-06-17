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
    "How often do you find yourself yelling or raising your voice when you're upset?",
    "How frequently do you get irritated by minor inconveniences?",
    "When someone disagrees with you, how often do you feel anger building up inside you?",
    "How often do you feel like you need to leave a situation to avoid losing your temper?",
    "When someone makes a mistake at work or school, how often do you feel frustrated?",
    "How frequently do you argue with family members?",
    "How often do you get upset when things don’t go as planned?",
    "How often do you feel angry when someone interrupts you?",
    "How frequently do you lose your temper when playing competitive games or sports?",
    "How often do you find yourself holding grudges?",
    "How often do you get upset when someone doesn't understand what you're saying?",
    "When someone doesn't follow through on a promise, how often do you feel anger?",
    "How often do you find yourself thinking about past events that made you angry?",
    "When someone criticizes you, how often do you feel angry?",
    "How frequently do you argue with friends over small things?",
    "How often do you feel angry when someone blames you for something you didn’t do?",
    "How often do you feel your heart rate increase when you get angry?",
    "How often do you find it hard to forgive someone who has wronged you?",
    "How frequently do you get angry when someone takes your things without asking?",
    "How frequently do you find yourself regretting things you said or did in anger?"
];

const options = ["Never", "Occasionally", "Sometimes", "Often", "Always"];

// Descriptions for different anger levels
const descriptions = {
    Low: 'You generally manage your anger well. Continue practicing healthy coping mechanisms.',
    Moderate: 'You experience anger occasionally, but it’s manageable. Reflect on ways to handle your emotions more effectively.',
    High: 'You experience significant anger and might struggle with various aspects of daily life. It could be helpful to seek support and explore strategies to manage your anger more effectively.',
    Severe: 'Your level of anger appears to be intense and could be impacting your life significantly. Seeking help from a professional is highly recommended to receive appropriate support and treatment.'
  };

const calculateResult = (answers) => {
    const totalScore = answers.reduce((sum, answer) => sum + optionScores[answer], 0);
    
    if (totalScore <= 20) return { level: 'Low'};
    if (totalScore <= 40) return { level: 'Moderate'};
    if (totalScore <= 60) return { level: 'High'};
    return { level: 'Severe'};
};

const Anger = () => {
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
            <h1 className='attachment-style-pg-heading'>Measure Your Anger Thermometer</h1>
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
 {/* Display result */}
{isSubmitted && result && (
        <div className="attachment-style-pg-result">
          <h2 className='attachment-style-pg-result-h2'>Your Attachment Style : {result.level}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result.level]}</p>
        </div>
        )}
        </div>
    );
};

export default Anger;
