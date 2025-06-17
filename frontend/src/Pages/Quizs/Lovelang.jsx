import React, { useState } from 'react';
import './Attachment.css';

const LoveLanguageQuiz = () => {
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const descriptions = {
    wordsOfAffirmation: 'If your love language is Words of Affirmation, you value verbal expressions of affection, praise, and appreciation. Compliments, affirmations, and kind words are vital to you and help you feel loved and valued. Positive reinforcement and verbal support from your loved ones mean a lot and strengthen your relationships.',
    actsOfService: 'If your love language is Acts of Service, you feel loved when others show their care through helpful actions. Small or big acts of service, like doing chores or running errands, demonstrate thoughtfulness and consideration. When others take the initiative to ease your burden or assist you, it speaks volumes about their love and commitment.',
    receivingGifts: 'If your love language is Receiving Gifts, you appreciate tangible symbols of love and thoughtfulness. It’s not about the monetary value but the thought and effort behind the gift. Whether it is a small token or a grand gesture, receiving gifts makes you feel cherished and recognized. It’s the gesture that counts and shows how much you’re valued.',
    qualityTime: 'If your love language is Quality Time, you value undivided attention and meaningful interaction. Spending focused time together, engaging in activities, and having deep conversations are essential to you. Feeling truly heard and understood when with someone is what makes you feel most loved and connected.',
    physicalTouch: 'If your love language is Physical Touch, you express and receive love through physical gestures. Hugs, kisses, holding hands, and other forms of touch make you feel secure and valued. Physical closeness and affection are crucial in making you feel loved and emotionally connected.'
  };
  

  // Handle the change of selected option
  const handleOptionChange = (question, language) => {
    setResponses(prevResponses => ({...prevResponses,[question]: language,
    }));
  };

  // Calculate the result based on user responses
  const calculateResult = () => {
    const counts = {
      wordsOfAffirmation: 0,
      actsOfService: 0,
      receivingGifts: 0,
      qualityTime: 0,
      physicalTouch: 0,
    };

    // Update counts based on user responses
    Object.values(responses).forEach(language => {
      counts[language] += 1;
    });

   // Find the attachment style with the highest count
   const sortedResults = Object.entries(counts).sort((a, b) => b[1] - a[1]);
   setResult(sortedResults[0][0]);
 };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalQuestions = 20; // Assuming there are 16 questions in total
    if (Object.keys(responses).length === totalQuestions) {
      setIsSubmitted(true);
      calculateResult();
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="attachment-style-pg-quiz-container">
      <h1 className='attachment-style-pg-heading'>What Is Your Love Language?</h1>
      <form className='attachment-style-pg-form' onSubmit={handleSubmit}>
        {/* Question blocks */}
        <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>1. What makes you feel most loved?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q1" onClick={() => handleOptionChange('q1', 'wordsOfAffirmation')} />
          Hearing "I love you" or other compliments.
        </label>
        <label>
          <input type="radio" name="q1" onClick={() => handleOptionChange('q1', 'actsOfService')} />
          Someone doing something kind or helpful for you.
        </label>
        <label>
          <input type="radio" name="q1" onClick={() => handleOptionChange('q1', 'receivingGifts')} />
          Receiving a thoughtful gift.
        </label>
        <label>
          <input type="radio" name="q1" onClick={() => handleOptionChange('q1', 'qualityTime')} />
          Spending uninterrupted time with someone.
        </label>
        <label>
          <input type="radio" name="q1" onClick={() => handleOptionChange('q1', 'physicalTouch')} />
          A hug or physical affection.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>2. What do you value most in a relationship?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q2" onClick={() => handleOptionChange('q2', 'wordsOfAffirmation')} />
          Verbal praise and encouragement.
        </label>
        <label>
          <input type="radio" name="q2" onClick={() => handleOptionChange('q2', 'actsOfService')} />
          Practical help with tasks.
        </label>
        <label>
          <input type="radio" name="q2" onClick={() => handleOptionChange('q2', 'receivingGifts')} />
          Surprise gifts and tokens of affection.
        </label>
        <label>
          <input type="radio" name="q2" onClick={() => handleOptionChange('q2', 'qualityTime')} />
          Shared activities and conversations.
        </label>
        <label>
          <input type="radio" name="q2" onClick={() => handleOptionChange('q2', 'physicalTouch')} />
          Physical closeness and touch.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>3. How do you express love to others?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q3" onClick={() => handleOptionChange('q3', 'wordsOfAffirmation')} />
          Complimenting and affirming them.
        </label>
        <label>
          <input type="radio" name="q3" onClick={() => handleOptionChange('q3', 'actsOfService')} />
          Doing things to help them out.
        </label>
        <label>
          <input type="radio" name="q3" onClick={() => handleOptionChange('q3', 'receivingGifts')} />
          Giving them gifts.
        </label>
        <label>
          <input type="radio" name="q3" onClick={() => handleOptionChange('q3', 'qualityTime')} />
          Spending time with them.
        </label>
        <label>
          <input type="radio" name="q3" onClick={() => handleOptionChange('q3', 'physicalTouch')} />
          Physical affection, like hugs.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>4. Which situation would make you feel most appreciated?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q4" onClick={() => handleOptionChange('q4', 'wordsOfAffirmation')} />
          Someone telling you how much they appreciate you.
        </label>
        <label>
          <input type="radio" name="q4" onClick={() => handleOptionChange('q4', 'actsOfService')} />
          Someone helping you with a project.
        </label>
        <label>
          <input type="radio" name="q4" onClick={() => handleOptionChange('q4', 'receivingGifts')} />
          Receiving a thoughtful present.
        </label>
        <label>
          <input type="radio" name="q4" onClick={() => handleOptionChange('q4', 'qualityTime')} />
          Spending a whole day together doing something you love.
        </label>
        <label>
          <input type="radio" name="q4" onClick={() => handleOptionChange('q4', 'physicalTouch')} />
          Being held or touched.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>5. What's your ideal way to spend time with a loved one?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q5" onClick={() => handleOptionChange('q5', 'wordsOfAffirmation')} />
          Having deep conversations and sharing feelings.
        </label>
        <label>
          <input type="radio" name="q5" onClick={() => handleOptionChange('q5', 'actsOfService')} />
          Working together on a project.
        </label>
        <label>
          <input type="radio" name="q5" onClick={() => handleOptionChange('q5', 'receivingGifts')} />
          Exchanging gifts.
        </label>
        <label>
          <input type="radio" name="q5" onClick={() => handleOptionChange('q5', 'qualityTime')} />
          Doing activities together.
        </label>
        <label>
          <input type="radio" name="q5" onClick={() => handleOptionChange('q5', 'physicalTouch')} />
          Cuddling or holding hands.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>6. What do you miss the most when you're away from your partner?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q6" onClick={() => handleOptionChange('q6', 'wordsOfAffirmation')} />
          Their words of encouragement.
        </label>
        <label>
          <input type="radio" name="q6" onClick={() => handleOptionChange('q6', 'actsOfService')} />
          Their help with daily tasks.
        </label>
        <label>
          <input type="radio" name="q6" onClick={() => handleOptionChange('q6', 'receivingGifts')} />
          The little gifts they give you.
        </label>
        <label>
          <input type="radio" name="q6" onClick={() => handleOptionChange('q6', 'qualityTime')} />
          Spending time together.
        </label>
        <label>
          <input type="radio" name="q6" onClick={() => handleOptionChange('q6', 'physicalTouch')} />
          Physical intimacy.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>7. What gesture from a friend would mean the most to you?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q7" onClick={() => handleOptionChange('q7', 'wordsOfAffirmation')} />
          A sincere compliment.
        </label>
        <label>
          <input type="radio" name="q7" onClick={() => handleOptionChange('q7', 'actsOfService')} />
          Helping you with something important.
        </label>
        <label>
          <input type="radio" name="q7" onClick={() => handleOptionChange('q7', 'receivingGifts')} />
          Giving you a meaningful gift.
        </label>
        <label>
          <input type="radio" name="q7" onClick={() => handleOptionChange('q7', 'qualityTime')} />
          Hanging out with you for an afternoon.
        </label>
        <label>
          <input type="radio" name="q7" onClick={() => handleOptionChange('q7', 'physicalTouch')} />
          Giving you a hug.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>8. How do you like to show appreciation?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q8" onClick={() => handleOptionChange('q8', 'wordsOfAffirmation')} />
          By telling someone how much you value them.
        </label>
        <label>
          <input type="radio" name="q8" onClick={() => handleOptionChange('q8', 'actsOfService')} />
          By doing something for them.
        </label>
        <label>
          <input type="radio" name="q8" onClick={() => handleOptionChange('q8', 'receivingGifts')} />
          By giving them a gift.
        </label>
        <label>
          <input type="radio" name="q8" onClick={() => handleOptionChange('q8', 'qualityTime')} />
          By spending time with them.
        </label>
        <label>
          <input type="radio" name="q8" onClick={() => handleOptionChange('q8', 'physicalTouch')} />
          By hugging them or holding hands.
        </label>
        </div>
      </div>

      <div  className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>9. What's the most meaningful compliment someone could give you?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q9" onClick={() => handleOptionChange('q9', 'wordsOfAffirmation')} />
          Praise for something you've done well.
        </label>
        <label>
          <input type="radio" name="q9" onClick={() => handleOptionChange('q9', 'actsOfService')} />
          Saying thank you for your help.
        </label>
        <label>
          <input type="radio" name="q9" onClick={() => handleOptionChange('q9', 'receivingGifts')} />
          Saying that they love a gift you gave them.
        </label>
        <label>
          <input type="radio" name="q9" onClick={() => handleOptionChange('q9', 'qualityTime')} />
          Saying they enjoy spending time with you.
        </label>
        <label>
          <input type="radio" name="q9" onClick={() => handleOptionChange('q9', 'physicalTouch')} />
          Saying they love being close to you.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>10. Which action would mean the most to you?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q10" onClick={() => handleOptionChange('q10', 'wordsOfAffirmation')} />
          Receiving a handwritten note or message.
        </label>
        <label>
          <input type="radio" name="q10" onClick={() => handleOptionChange('q10', 'actsOfService')} />
          Someone going out of their way to help you.
        </label>
        <label>
          <input type="radio" name="q10" onClick={() => handleOptionChange('q10', 'receivingGifts')} />
          Someone surprising you with a gift.
        </label>
        <label>
          <input type="radio" name="q10" onClick={() => handleOptionChange('q10', 'qualityTime')} />
          Someone spending quality time with you.
        </label>
        <label>
          <input type="radio" name="q10" onClick={() => handleOptionChange('q10', 'physicalTouch')} />
          Someone giving you a long hug.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>11. How do you like to receive apologies?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q11" onClick={() => handleOptionChange('q11', 'wordsOfAffirmation')} />
          Hearing the words "I'm sorry" with sincerity.
        </label>
        <label>
          <input type="radio" name="q11" onClick={() => handleOptionChange('q11', 'actsOfService')} />
          Someone making amends by doing something to make up for it.
        </label>
        <label>
          <input type="radio" name="q11" onClick={() => handleOptionChange('q11', 'receivingGifts')} />
          Receiving a peace offering or gift.
        </label>
        <label>
          <input type="radio" name="q11" onClick={() => handleOptionChange('q11', 'qualityTime')} />
          Spending time together to talk it out.
        </label>
        <label>
          <input type="radio" name="q11" onClick={() => handleOptionChange('q11', 'physicalTouch')} />
          A comforting touch or hug.
        </label>
        </div>
      </div>

      <div  className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>12. What would make you feel most appreciated by a partner?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q12" onClick={() => handleOptionChange('q12', 'wordsOfAffirmation')} />
          Them telling you how much they value you.
        </label>
        <label>
          <input type="radio" name="q12" onClick={() => handleOptionChange('q12', 'actsOfService')} />
          Them helping you with something important.
        </label>
        <label>
          <input type="radio" name="q12" onClick={() => handleOptionChange('q12', 'receivingGifts')} />
          Them giving you a thoughtful gift.
        </label>
        <label>
          <input type="radio" name="q12" onClick={() => handleOptionChange('q12', 'qualityTime')} />
          Them spending time with you.
        </label>
        <label>
          <input type="radio" name="q12" onClick={() => handleOptionChange('q12', 'physicalTouch')} />
          Them being affectionate.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>13. How do you like to comfort someone when they're upset?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q13" onClick={() => handleOptionChange('q13', 'wordsOfAffirmation')} />
          Offering words of support and understanding.
        </label>
        <label>
          <input type="radio" name="q13" onClick={() => handleOptionChange('q13', 'actsOfService')} />
          Doing something helpful for them.
        </label>
        <label>
          <input type="radio" name="q13" onClick={() => handleOptionChange('q13', 'receivingGifts')} />
          Giving them something to cheer them up.
        </label>
        <label>
          <input type="radio" name="q13" onClick={() => handleOptionChange('q13', 'qualityTime')} />
          Spending time with them and listening.
        </label>
        <label>
          <input type="radio" name="q13" onClick={() => handleOptionChange('q13', 'physicalTouch')} />
          Giving them a hug or patting their back.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>14. What's your preferred way to celebrate a special occasion?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q14" onClick={() => handleOptionChange('q14', 'wordsOfAffirmation')} />
          Hearing or reading heartfelt messages.
        </label>
        <label>
          <input type="radio" name="q14" onClick={() => handleOptionChange('q14', 'actsOfService')} />
          Having someone take care of everything for you.
        </label>
        <label>
          <input type="radio" name="q14" onClick={() => handleOptionChange('q14', 'receivingGifts')} />
          Receiving gifts from loved ones.
        </label>
        <label>
          <input type="radio" name="q14" onClick={() => handleOptionChange('q14', 'qualityTime')} />
          Spending the day with someone special.
        </label>
        <label>
          <input type="radio" name="q14" onClick={() => handleOptionChange('q14', 'physicalTouch')} />
          Enjoying a hug, kiss, or other physical closeness.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>15. What would make your day better?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q15" onClick={() => handleOptionChange('q15', 'wordsOfAffirmation')} />
          Receiving a kind and encouraging message.
        </label>
        <label>
          <input type="radio" name="q15" onClick={() => handleOptionChange('q15', 'actsOfService')} />
          Someone helping you with a task or chore.
        </label>
        <label>
          <input type="radio" name="q15" onClick={() => handleOptionChange('q15', 'receivingGifts')} />
          Receiving a surprise gift.
        </label>
        <label>
          <input type="radio" name="q15" onClick={() => handleOptionChange('q15', 'qualityTime')} />
          Spending quality time with a friend or loved one.
        </label>
        <label>
          <input type="radio" name="q15" onClick={() => handleOptionChange('q15', 'physicalTouch')} />
          A warm hug from someone you care about.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>16. What's the best way for someone to make you feel loved?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q16" onClick={() => handleOptionChange('q16', 'wordsOfAffirmation')} />
          Telling you how much they love you.
        </label>
        <label>
          <input type="radio" name="q16" onClick={() => handleOptionChange('q16', 'actsOfService')} />
          Doing something for you without being asked.
        </label>
        <label>
          <input type="radio" name="q16" onClick={() => handleOptionChange('q16', 'receivingGifts')} />
          Surprising you with a gift.
        </label>
        <label>
          <input type="radio" name="q16" onClick={() => handleOptionChange('q16', 'qualityTime')} />
          Planning a special day together.
        </label>
        <label>
          <input type="radio" name="q16" onClick={() => handleOptionChange('q16', 'physicalTouch')} />
          Giving you a lot of physical affection.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>17. How do you like to end a day spent with someone you love?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q17" onClick={() => handleOptionChange('q17', 'wordsOfAffirmation')} />
          By sharing what you appreciate about them.
        </label>
        <label>
          <input type="radio" name="q17" onClick={() => handleOptionChange('q17', 'actsOfService')} />
          Doing something to help them unwind.
        </label>
        <label>
          <input type="radio" name="q17" onClick={() => handleOptionChange('q17', 'receivingGifts')} />
          Giving them a small token of appreciation.
        </label>
        <label>
          <input type="radio" name="q17" onClick={() => handleOptionChange('q17', 'qualityTime')} />
          Talking or enjoying time together before bed.
        </label>
        <label>
          <input type="radio" name="q17" onClick={() => handleOptionChange('q17', 'physicalTouch')} />
          With a hug, kiss, or cuddle.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>18. What's the most thoughtful thing someone could do for you?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q18" onClick={() => handleOptionChange('q18', 'wordsOfAffirmation')} />
          Write a heartfelt note or message.
        </label>
        <label>
          <input type="radio" name="q18" onClick={() => handleOptionChange('q18', 'actsOfService')} />
          Offer to help you with something important.
        </label>
        <label>
          <input type="radio" name="q18" onClick={() => handleOptionChange('q18', 'receivingGifts')} />
          Surprise you with a gift.
        </label>
        <label>
          <input type="radio" name="q18" onClick={() => handleOptionChange('q18', 'qualityTime')} />
          Spend time with you doing something you both enjoy.
        </label>
        <label>
          <input type="radio" name="q18" onClick={() => handleOptionChange('q18', 'physicalTouch')} />
          Give you a comforting touch or hug.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>19. What would you appreciate most on a tough day?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q19" onClick={() => handleOptionChange('q19', 'wordsOfAffirmation')} />
          Hearing words of encouragement and support.
        </label>
        <label>
          <input type="radio" name="q19" onClick={() => handleOptionChange('q19', 'actsOfService')} />
          Someone taking care of something for you.
        </label>
        <label>
          <input type="radio" name="q19" onClick={() => handleOptionChange('q19', 'receivingGifts')} />
          Receiving a gift that shows someone is thinking of you.
        </label>
        <label>
          <input type="radio" name="q19" onClick={() => handleOptionChange('q19', 'qualityTime')} />
          Spending time with a close friend or loved one.
        </label>
        <label>
          <input type="radio" name="q19" onClick={() => handleOptionChange('q19', 'physicalTouch')} />
          Receiving a hug or some kind of physical comfort.
        </label>
        </div>
      </div>

      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>20. What's the best way to start your day?</h2>
        <div className="attachment-style-pg-options">
        <label>
          <input type="radio" name="q20" onClick={() => handleOptionChange('q20', 'wordsOfAffirmation')} />
          Hearing or reading something inspiring.
        </label>
        <label>
          <input type="radio" name="q20" onClick={() => handleOptionChange('q20', 'actsOfService')} />
          Having someone do something to help you start the day smoothly.
        </label>
        <label>
          <input type="radio" name="q20" onClick={() => handleOptionChange('q20', 'receivingGifts')} />
          Receiving a small morning surprise or gift.
        </label>
        <label>
          <input type="radio" name="q20" onClick={() => handleOptionChange('q20', 'qualityTime')} />
          Spending time with a loved one before starting your day.
        </label>
        <label>
          <input type="radio" name="q20" onClick={() => handleOptionChange('q20', 'physicalTouch')} />
          Getting a morning hug or kiss.
        </label>
        </div>
      </div>
        {/* Submit Button */}
        <div className="attachment-style-pg-submit-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </form>

      {/* Display result after submission */}
      {isSubmitted && result && (
        <div className="attachment-style-pg-result">
          <h2 className='attachment-style-pg-result-h2'>Your Love Language: {result}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result]}</p>
        </div>
      )}
    </div>
  );
};

export default LoveLanguageQuiz;
