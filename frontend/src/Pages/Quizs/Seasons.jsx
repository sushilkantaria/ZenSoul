import React, { useState } from 'react';
import './Attachment.css';

const SeasonQuiz = () => {
  const questions = [
    {
      question: "What’s your favorite type of weather?",
      options: [
        { text: "Warm and sunny", season: "Spring" },
        { text: "Cool and breezy", season: "Fall" },
        { text: "Hot and dry", season: "Summer" },
        { text: "Cold and snowy", season: "Winter" },
      ],
    },
    {
      question: "Which color palette do you feel most drawn to?",
      options: [
        { text: "Pastels", season: "Spring" },
        { text: "Earth tones", season: "Fall" },
        { text: "Bright and vibrant", season: "Summer" },
        { text: "Cool and muted", season: "Winter" },
      ],
    },
    {
      question: "What’s your ideal vacation spot?",
      options: [
        { text: "A blooming garden or park", season: "Spring" },
        { text: "A cozy cabin in the woods", season: "Fall" },
        { text: "A sunny beach", season: "Summer" },
        { text: "A snowy mountain resort", season: "Winter" },
      ],
    },
    {
      question: "How do you prefer to spend your weekends?",
      options: [
        { text: "Gardening or hiking", season: "Spring" },
        { text: "Reading or visiting farmers' markets", season: "Fall" },
        { text: "Going to the beach or attending festivals", season: "Summer" },
        { text: "Skiing or staying cozy indoors", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite type of clothing?",
      options: [
        { text: "Light layers and floral prints", season: "Spring" },
        { text: "Sweaters and boots", season: "Fall" },
        { text: "Shorts and tank tops", season: "Summer" },
        { text: "Coats and scarves", season: "Winter" },
      ],
    },
    {
      question: "What’s your go-to drink?",
      options: [
        { text: "Fresh lemonade or herbal tea", season: "Spring" },
        { text: "Hot cocoa or chai latte", season: "Fall" },
        { text: "Iced tea or cold brew coffee", season: "Summer" },
        { text: "Warm cider or mulled wine", season: "Winter" },
      ],
    },
    {
      question: "Which outdoor activity do you enjoy the most?",
      options: [
        { text: "Walking through gardens or parks", season: "Spring" },
        { text: "Strolling through colorful forests", season: "Fall" },
        { text: "Swimming or surfing", season: "Summer" },
        { text: "Ice skating or snowboarding", season: "Winter" },
      ],
    },
    {
      question: "How do you feel about early mornings?",
      options: [
        { text: "Energized and ready to go", season: "Spring" },
        { text: "Calm and contemplative", season: "Fall" },
        { text: "Excited to start the day", season: "Summer" },
        { text: "Prefer to sleep in and stay cozy", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite type of fruit?",
      options: [
        { text: "Strawberries or cherries", season: "Spring" },
        { text: "Apples or pears", season: "Fall" },
        { text: "Watermelon or mango", season: "Summer" },
        { text: "Oranges or pomegranates", season: "Winter" },
      ],
    },
    {
      question: "What’s your preferred home decor style?",
      options: [
        { text: "Light and airy with floral accents", season: "Spring" },
        { text: "Warm and rustic with natural elements", season: "Fall" },
        { text: "Bright and eclectic with bold colors", season: "Summer" },
        { text: "Cozy and minimalist with cool tones", season: "Winter" },
      ],
    },
    {
      question: "How do you handle stress?",
      options: [
        { text: "Taking a nature walk or gardening", season: "Spring" },
        { text: "Curling up with a book or baking", season: "Fall" },
        { text: "Exercising or socializing with friends", season: "Summer" },
        { text: "Meditating or having a warm drink by the fire", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite scent?",
      options: [
        { text: "Fresh flowers or cut grass", season: "Spring" },
        { text: "Pumpkin spice or cinnamon", season: "Fall" },
        { text: "Coconut or tropical fruits", season: "Summer" },
        { text: "Pine or peppermint", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite type of movie?",
      options: [
        { text: "Romantic comedies or family films", season: "Spring" },
        { text: "Mysteries or dramas", season: "Fall" },
        { text: "Action or adventure", season: "Summer" },
        { text: "Fantasy or holiday classics", season: "Winter" },
      ],
    },
    {
      question: "How do you decorate your home for the season?",
      options: [
        { text: "Fresh flowers and pastel colors", season: "Spring" },
        { text: "Pumpkins and autumn leaves", season: "Fall" },
        { text: "Seashells and bright colors", season: "Summer" },
        { text: "Snowflakes and twinkling lights", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite type of exercise?",
      options: [
        { text: "Yoga or pilates", season: "Spring" },
        { text: "Hiking or jogging", season: "Fall" },
        { text: "Swimming or beach volleyball", season: "Summer" },
        { text: "Skiing or indoor workouts", season: "Winter" },
      ],
    },
    {
      question: "What’s your go-to comfort food?",
      options: [
        { text: "Light salads or fruit smoothies", season: "Spring" },
        { text: "Hearty soups or stews", season: "Fall" },
        { text: "Grilled foods or ice cream", season: "Summer" },
        { text: "Hot cocoa and cookies", season: "Winter" },
      ],
    },
    {
      question: "How do you prefer to socialize?",
      options: [
        { text: "Picnics or outdoor brunches", season: "Spring" },
        { text: "Intimate dinner parties or coffee dates", season: "Fall" },
        { text: "Beach parties or barbecues", season: "Summer" },
        { text: "Cozy indoor gatherings or festive parties", season: "Winter" },
      ],
    },
    {
      question: "What’s your ideal way to unwind?",
      options: [
        { text: "Taking a nature walk or meditating", season: "Spring" },
        { text: "Reading a book by the fireplace", season: "Fall" },
        { text: "Sunbathing or attending a party", season: "Summer" },
        { text: "Snuggling under a blanket with hot cocoa", season: "Winter" },
      ],
    },
    {
      question: "How do you feel about outdoor activities?",
      options: [
        { text: "Love exploring gardens and parks", season: "Spring" },
        { text: "Enjoy hiking and bonfires", season: "Fall" },
        { text: "Can’t get enough of the beach and water sports", season: "Summer" },
        { text: "Adore skiing and snowball fights", season: "Winter" },
      ],
    },
    {
      question: "What’s your favorite thing about each season?",
      options: [
        { text: "Blossoming flowers and new growth", season: "Spring" },
        { text: "Crisp air and colorful leaves", season: "Fall" },
        { text: "Long days and vibrant activities", season: "Summer" },
        { text: "Snowy landscapes and holiday spirit", season: "Winter" },
      ],
    },
  ];

  const [score, setScore] = useState({ Spring: 0, Fall: 0, Summer: 0, Winter: 0 });
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [description, setDescription] = useState('');

  const handleOptionChange = (questionIndex, season) => {
    const prevSeason = answers[questionIndex];

    if (prevSeason) {
      // Decrease the previous score
      setScore((prevScore) => ({
        ...prevScore,
        [prevSeason]: prevScore[prevSeason] - 1,
      }));
    }

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: season,
    }));

    setScore((prevScore) => ({
      ...prevScore,
      [season]: prevScore[season] + 1,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all questions before submitting.');
    } else {
      setError('');
      const { resultSeason, resultDescription } = getResultSeason();
      setResult(resultSeason);
      setDescription(resultDescription);    
    }
  };

  const getResultSeason = () => {
    const maxScore = Math.max(...Object.values(score));
    const resultSeason = Object.keys(score).find((key) => score[key] === maxScore);

    const seasonDescriptions = {
      Spring: "SPRING: You are full of energy, love new beginnings, and appreciate the beauty in the small things.",
      Summer: "SUMMER: You are lively, outgoing, and thrive in the warmth and brightness of life.",
      Fall: "FALL: You are thoughtful, grounded, and appreciate the changing beauty of life.",
      Winter: "WINTER: You are introspective, calm, and find peace in the quiet moments of life.",
    };

    return {
      resultSeason,
      resultDescription: seasonDescriptions[resultSeason],
    };
};

  return (
    <div className="attachment-style-pg-quiz-container">
      <h1 className='attachment-style-pg-heading'>Which Season Best Represents Your Personality?</h1>
      <form className='attachment-style-pg-form' onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="attachment-style-pg-question-block">
            <h2 className='attachment-style-pg-h2'>{question.question}</h2>
            <div className="attachment-style-pg-options">
              {question.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={option.season}
                    checked={answers[questionIndex] === option.season}
                    onChange={() => handleOptionChange(questionIndex, option.season)}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          </div>
        ))}
      <div className="attachment-style-pg-submit-button">
      <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      </form>
      {result && (
        <div className="attachment-style-pg-result">
          <h2 className='attachment-style-pg-result-h2'>Your Personality Season is: {result}</h2>
          <p className='attachment-style-pg-result-p-tag'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default SeasonQuiz;
