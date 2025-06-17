import React, { useState } from 'react';
import './Attachment.css';

const Colorquiz = () => {
  const questions = [
    {
      question: "What’s your favorite type of weather?",
      options: [
        { text: "Warm and sunny", color: "Red" },
        { text: "Clear and cool", color: "Green" },
        { text: "Bright and mild", color: "Blue" },
        { text: "Stormy and dramatic", color: "Black" },
        { text: "Snowy and peaceful", color: "White" },
      ],
    },
    {
      question: "Which season do you prefer?",
      options: [
        { text: "Spring", color: "Green" },
        { text: "Summer", color: "Red" },
        { text: "Fall", color: "Black" },
        { text: "Winter", color: "White" },
        { text: "Any season, as long as it's calm and pleasant", color: "Blue" },
      ],
    },
    {
      question: "How do you like to spend your weekends?",
      options: [
        { text: "Playing sports or exercising", color: "Red" },
        { text: "Hiking or being outdoors", color: "Green" },
        { text: "Visiting art galleries or museums", color: "Blue" },
        { text: "Attending concerts or nightclubs", color: "Black" },
        { text: "Relaxing at home or spending time with family", color: "White" },
      ],
    },
    {
      question: "Which interior design style do you prefer?",
      options: [
        { text: "Modern and minimalistic", color: "White" },
        { text: "Rustic and natural", color: "Green" },
        { text: "Elegant and sophisticated", color: "Black" },
        { text: "Bright and colorful", color: "Red" },
        { text: "Coastal and relaxed", color: "Blue" },
      ],
    },
    {
      question: "How do you handle stress?",
      options: [
        { text: "By being active or working out", color: "Red" },
        { text: "By spending time in nature", color: "Green" },
        { text: "By meditating or doing yoga", color: "Blue" },
        { text: "By listening to music or writing", color: "Black" },
        { text: "By talking to friends or family", color: "White" },
      ],
    },
    {
      question: "What’s your favorite type of movie?",
      options: [
        { text: "Action or thriller", color: "Red" },
        { text: "Documentary or nature film", color: "Green" },
        { text: "Drama or romance", color: "Blue" },
        { text: "Horror or mystery", color: "Black" },
        { text: "Comedy or family movie", color: "White" },
      ],
    },
    {
      question: "How would your friends describe you?",
      options: [
        { text: "Energetic and passionate", color: "Red" },
        { text: "Calm and reliable", color: "Green" },
        { text: "Creative and imaginative", color: "Blue" },
        { text: "Intense and mysterious", color: "Black" },
        { text: "Kind and nurturing", color: "White" },
      ],
    },
    {
      question: "What’s your ideal vacation spot?",
      options: [
        { text: "A bustling city", color: "Red" },
        { text: "A tranquil forest", color: "Green" },
        { text: "A serene beach", color: "Blue" },
        { text: "A historic site", color: "Black" },
        { text: "A snowy mountain retreat", color: "White" },
      ],
    },
    {
      question: "What’s your favorite type of book?",
      options: [
        { text: "Adventure or fantasy", color: "Red" },
        { text: "Nature or science", color: "Green" },
        { text: "Poetry or classics", color: "Blue" },
        { text: "Mystery or horror", color: "Black" },
        { text: "Inspirational or self-help", color: "White" },
      ],
    },
    {
      question: "What’s your favorite type of food?",
      options: [
        { text: "Spicy and bold flavors", color: "Red" },
        { text: "Fresh and organic", color: "Green" },
        { text: "Light and healthy", color: "Blue" },
        { text: "Rich and savory", color: "Black" },
        { text: "Comfort food", color: "White" },
      ],
    },
    {
      question: "What’s your dream job?",
      options: [
        { text: "Athlete or performer", color: "Red" },
        { text: "Environmentalist or gardener", color: "Green" },
        { text: "Artist or designer", color: "Blue" },
        { text: "Detective or researcher", color: "Black" },
        { text: "Teacher or caregiver", color: "White" },
      ],
    },
    {
      question: "Which quality do you value most in others?",
      options: [
        { text: "Passion", color: "Red" },
        { text: "Honesty", color: "Green" },
        { text: "Creativity", color: "Blue" },
        { text: "Intelligence", color: "Black" },
        { text: "Compassion", color: "White" },
      ],
    },
    {
      question: "What’s your favorite time of day?",
      options: [
        { text: "Morning", color: "Red" },
        { text: "Midday", color: "Green" },
        { text: "Sunset", color: "Blue" },
        { text: "Night", color: "Black" },
        { text: "Early evening", color: "White" },
      ],
    },
    {
      question: "How do you celebrate your birthday?",
      options: [
        { text: "Throwing a big party", color: "Red" },
        { text: "Spending the day outdoors", color: "Green" },
        { text: "Having a quiet dinner with close friends", color: "Blue" },
        { text: "Going on an adventure or trip", color: "Black" },
        { text: "Relaxing at home with family", color: "White" },
      ],
    },
    {
      question: "What’s your favorite type of art?",
      options: [
        { text: "Abstract and modern", color: "Red" },
        { text: "Landscape and nature", color: "Green" },
        { text: "Watercolor or pastel", color: "Blue" },
        { text: "Gothic or dark", color: "Black" },
        { text: "Realistic and detailed", color: "White" },
      ],
    },
    {
      question: "How do you feel about change?",
      options: [
        { text: "Excited and enthusiastic", color: "Red" },
        { text: "Calm and accepting", color: "Green" },
        { text: "Thoughtful and reflective", color: "Blue" },
        { text: "Analytical and cautious", color: "Black" },
        { text: "Comfortable and adaptable", color: "White" },
      ],
    },
    {
      question: "How do you express yourself creatively?",
      options: [
        { text: "Through bold, expressive art", color: "Red" },
        { text: "Through nature-inspired crafts", color: "Green" },
        { text: "Through calm, detailed drawings", color: "Blue" },
        { text: "Through intense, dramatic performances", color: "Black" },
        { text: "Through gentle, thoughtful writing", color: "White" },
      ],
    },
    {
      question: "How do you prefer to communicate?",
      options: [
        { text: "With energy and enthusiasm", color: "Red" },
        { text: "With calm and clarity", color: "Green" },
        { text: "With thoughtful words", color: "Blue" },
        { text: "With deep, intense discussions", color: "Black" },
        { text: "With kindness and understanding", color: "White" },
      ],
    },
    {
      question: "What’s your favorite way to relax?",
      options: [
        { text: "Being active and productive", color: "Red" },
        { text: "Being in nature", color: "Green" },
        { text: "Listening to music or reading", color: "Blue" },
        { text: "Exploring new ideas or places", color: "Black" },
        { text: "Spending time with loved ones", color: "White" },
      ],
    },
    {
      question: "What’s your preferred social setting?",
      options: [
        { text: "Large, energetic gatherings", color: "Red" },
        { text: "Small, intimate groups", color: "Green" },
        { text: "Creative or artistic settings", color: "Blue" },
        { text: "Deep, intellectual discussions", color: "Black" },
        { text: "Comfortable, familiar environments", color: "White" },
      ],
    },
  ];

const [score, setScore] = useState({ Red: 0, Green: 0, Blue: 0, Black: 0, White: 0 });
const [answers, setAnswers] = useState({});
const [error, setError] = useState('');
const [result, setResult] = useState('');
const [description, setDescription] = useState('');

const handleOptionChange = (questionIndex, color) => {
const prevColor = answers[questionIndex];

if (prevColor) {
  // If an answer for this question was already selected, decrease the previous score
  setScore((prevScore) => ({
    ...prevScore,
    [prevColor]: prevScore[prevColor] - 1,
  }));
}

setAnswers((prevAnswers) => ({
  ...prevAnswers,
  [questionIndex]: color,
}));

setScore((prevScore) => ({
  ...prevScore,
  [color]: prevScore[color] + 1,
}));
};


const handleSubmit = (event) => {
  event.preventDefault(); // Prevent page refresh on form submission

  if (Object.keys(answers).length < questions.length) {
    alert('Please answer all questions before submitting.');
  } else {
    setError('');
    const { resultColor, resultDescription } = getResultColor();
    setResult(resultColor);
    setDescription(resultDescription);
    }
};

const getResultColor = () => {
  const maxScore = Math.max(...Object.values(score));
  const resultColor = Object.keys(score).find((key) => score[key] === maxScore);

  const colorDescriptions = {
    Red: "RED: Passionate, energetic, and bold.",
    Green: "GREEN: Nature-loving, calm, and reliable.",
    Blue: "BLUE: Creative, thoughtful, and relaxed.",
    Black: "BLACK: Intense, dramatic, and intellectual.",
    White: "WHITE: Peaceful, kind, and nurturing.",
  };

  return {
    resultColor,
    resultDescription: colorDescriptions[resultColor],
  };
};

return (
  <div className="attachment-style-pg-quiz-container">
  <h1 className='attachment-style-pg-heading'>Find your color Personality</h1>
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
                  value={option.color}
                  checked={answers[questionIndex] === option.color}
                  onChange={() => handleOptionChange(questionIndex, option.color)}
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
        <h2 className='attachment-style-pg-result-h2'>Your Personality Color is: {result}</h2>
        <p className='attachment-style-pg-result-p-tag'>{description}</p>
      </div>
    )}
  </div>
);
};

export default Colorquiz;