// import React, { useState } from 'react';
// // import './Attachment.css';

// const AttachmentStyleQuiz = () => {
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Descriptions for each attachment style
//   const descriptions = {
//     Secure: 'You have a secure attachment style, which means you’re comfortable with intimacy and independence. You’re able to form healthy relationships where you trust others and feel confident in their care and support. This balance allows you to enjoy closeness while also respecting your own and others’ boundaries. Keep nurturing these positive connections—they’re a wonderful foundation for lasting relationships.',
//     Anxious: 'You may have an anxious attachment style, which means you deeply value your relationships but sometimes worry about their stability. It’s normal to seek reassurance and to care about your connections deeply. Remember, your sensitivity is a strength, and it shows how much you care. Try to communicate openly with loved ones about your feelings, and practice self-compassion. Your relationships can thrive with understanding and mutual support.',
//     Avoidant: 'You might have an avoidant attachment style, which means you value your independence and often prefer to keep a certain distance in relationships. It’s okay to need space and to cherish your autonomy—these are important aspects of who you are. While closeness can feel overwhelming at times, gently exploring vulnerability and building trust can help you feel more connected and secure in your relationships.',
//     Disorganized: 'You may have a disorganized attachment style, which means your relationships can sometimes feel confusing or unpredictable. It’s possible that you’ve experienced mixed signals in the past, leading to a blend of longing for closeness and fear of it. It’s important to be kind to yourself as you navigate these feelings. Seeking supportive and understanding relationships, and perhaps professional guidance, can help you find the stability and connection you’re looking for.'
//   };

//   // Handle the change of selected answer
//   const handleAnswerChange = (question, answer) => {
//     setAnswers(prevAnswers => ({ ...prevAnswers, [question]: answer }));
//   };

//   // Calculate the result based on user answers
//   const calculateResult = () => {
//     const counts = { Secure: 0, Anxious: 0, Avoidant: 0, Disorganized: 0 };

//     // Update counts based on user answers
//     Object.values(answers).forEach(answer => {
//       counts[answer] += 1;
//     });

//     // Find the attachment style with the highest count
//     const sortedResults = Object.entries(counts).sort((a, b) => b[1] - a[1]);
//     setResult(sortedResults[0][0]);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalQuestions = 15; // Assuming there are 15 questions in total
//     if (Object.keys(answers).length === totalQuestions) {
//       setIsSubmitted(true);
//       calculateResult();
//     } else {
//       alert('Please answer all questions before submitting.');
//     }
//   };

//   return (
//     <div className="quiz-container">
//       <h1>Discover Your Attachment Style</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Question blocks */}
//         <div className="question-block">
//           <h2>1. How do you feel when someone close to you starts to spend less time with you and more time with someone else?</h2>
//           <div className="options">
//             <label>
//               <input type="radio" name="q1" onChange={() => handleAnswerChange('q1', 'Secure')} />
//               Meh, it doesn’t faze me. We each have other relationships and that’s okay.
//             </label>
//             <label>
//               <input type="radio" name="q1" onChange={() => handleAnswerChange('q1', 'Anxious')} />
//               Honestly, I get a bit jealous and feel insecure.
//             </label>
//             <label>
//               <input type="radio" name="q1" onChange={() => handleAnswerChange('q1', 'Avoidant')} />
//               I don’t even think about it.
//             </label>
//             <label>
//               <input type="radio" name="q1" onChange={() => handleAnswerChange('q1', 'Disorganized')} />
//               I worry they may replace the relationship they have with me.
//             </label>
//           </div>
//         </div>

//       {/* Question 2 */}
//       <div className="question-block">
//         <h2>2. You're going through a rough patch. Do you reach out to someone for support?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q2" value="option1" onChange={() => handleAnswerChange('q2', 'Secure')}/> 
//             Yes, I ask for help and openly share my feelings.
//           </label>
//           <label>
//             <input type="radio" name="q2" value="option2" onChange={() => handleAnswerChange('q2', 'Anxious')}/> 
//             I’m hesitant because I’m afraid nobody will be there for me.
//           </label>
//           <label>
//             <input type="radio" name="q2" value="option3" onChange={() => handleAnswerChange('q2', 'Avoidant')}/> 
//             Nope, I can deal with it on my own.
//           </label>
//           <label>
//             <input type="radio" name="q2" value="option4" onChange={() => handleAnswerChange('q2', 'Disorganized')}/> 
//             It’s hard to ask for help.
//           </label>
//         </div>
//       </div>

//       {/* Question 3 */}
//       <div className="question-block">
//         <h2>3. How comfortable are you with being emotionally vulnerable?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q3" value="option1" onChange={() => handleAnswerChange('q3', 'Secure')}/> 
//             Pretty comfortable, I can share my inner thoughts with others.
//           </label>
//           <label>
//             <input type="radio" name="q3" value="option2" onChange={() => handleAnswerChange('q3', 'Anxious')}/> 
//             It takes a while to feel comfortable enough to trust someone with my feelings, but I get there anyway.
//           </label>
//           <label>
//             <input type="radio" name="q3" value="option3" onChange={() => handleAnswerChange('q3', 'Avoidant')}/> 
//             Not at all. I avoid being vulnerable as much as possible.
//           </label>
//           <label>
//             <input type="radio" name="q3" value="option4" onChange={() => handleAnswerChange('q3', 'Disorganized')}/> 
//             I have a tough time opening up and I keep my emotions to myself.
//           </label>
//         </div>
//       </div>

//       {/* Question 4 */}
//       <div className="question-block">
//         <h2>4. Your partner or close friend wants to spend time alone. How do you react?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q4" value="option1" onChange={() => handleAnswerChange('q4', 'Secure')}/> 
//             I understand and respect the need for personal space.
//           </label>
//           <label>
//             <input type="radio" name="q4" value="option2" onChange={() => handleAnswerChange('q4', 'Anxious')}/> 
//             I worry and feel insecure because I don’t know their intentions.
//           </label>
//           <label>
//             <input type="radio" name="q4" value="option3" onChange={() => handleAnswerChange('q4', 'Avoidant')}/> 
//             It doesn’t bother me; I’d rather be doing my own thing.
//           </label>
//           <label>
//             <input type="radio" name="q4" value="option4" onChange={() => handleAnswerChange('q4', 'Disorganized')}/> 
//             I feel a bit hurt and rejected but I get it.
//           </label>
//         </div>
//       </div>

//       {/* Question 5 */}
//       <div className="question-block">
//         <h2>5. How do you deal with conflicts in relationships?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q5" value="option1" onChange={() => handleAnswerChange('q5', 'Secure')}/> 
//             I focus on the issues and try to find a resolution.
//           </label>
//           <label>
//             <input type="radio" name="q5" value="option2" onChange={() => handleAnswerChange('q5', 'Anxious')}/> 
//             I get anxious and try to resolve things by people-pleasing.
//           </label>
//           <label>
//             <input type="radio" name="q5" value="option3" onChange={() => handleAnswerChange('q5', 'Avoidant')}/> 
//             I shut down and avoid confrontation or conflict.
//           </label>
//           <label>
//             <input type="radio" name="q5" value="option4" onChange={() => handleAnswerChange('q5', 'Disorganized')}/> 
//             I get defensive. It’s hard to see things from the other person’s POV.
//           </label>
//         </div>
//       </div>

//       {/* Question 6 */}
//       <div className="question-block">
//         <h2>6. Do you trust other people?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q6" value="option1" onChange={() => handleAnswerChange('q6', 'Secure')}/> 
//             Generally sure, I believe they have good intentions.
//           </label>
//           <label>
//             <input type="radio" name="q6" value="option2" onChange={() => handleAnswerChange('q6', 'Anxious')}/> 
//             I trust them for the most part, but I still remain cautious.
//           </label>
//           <label>
//             <input type="radio" name="q6" value="option3" onChange={() => handleAnswerChange('q6', 'Avoidant')}/> 
//             It’s pretty hard to trust people completely.
//           </label>
//           <label>
//             <input type="radio" name="q6" value="option4" onChange={() => handleAnswerChange('q6', 'Disorganized')}/> 
//             I rarely trust others and often think they don’t have good intentions.
//           </label>
//         </div>
//       </div>

//       {/* Question 7 */}
//       <div className="question-block">
//         <h2>7. How do you feel about emotional closeness?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q7" value="option1" onChange={() => handleAnswerChange('q7', 'Secure')}/> 
//             As long as we have good boundaries, I welcome emotional closeness.
//           </label>
//           <label>
//             <input type="radio" name="q7" value="option2" onChange={() => handleAnswerChange('q7', 'Anxious')}/> 
//             It’s both comforting and worrying when someone gets too close.
//           </label>
//           <label>
//             <input type="radio" name="q7" value="option3" onChange={() => handleAnswerChange('q7', 'Avoidant')}/> 
//             Think indifferent, I’m not really affected by emotional closeness.
//           </label>
//           <label>
//             <input type="radio" name="q7" value="option4" onChange={() => handleAnswerChange('q7', 'Disorganized')}/> 
//             It makes me feel anxious and overwhelmed.
//           </label>
//         </div>
//       </div>

//       {/* Question 8 */}
//       <div className="question-block">
//         <h2>8. A friend or partner expresses their needs in the relationship with you. How do you react?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q8" value="option1" onChange={() => handleAnswerChange('q8', 'Secure')}/> 
//             I listen and respond, respecting their needs.
//           </label>
//           <label>
//             <input type="radio" name="q8" value="option2" onChange={() => handleAnswerChange('q8', 'Anxious')}/> 
//             I become concerned that I’m not good enough for them.
//           </label>
//           <label>
//             <input type="radio" name="q8" value="option3" onChange={() => handleAnswerChange('q8', 'Avoidant')}/> 
//             I feel uncomfortable and try to deflect the conversation.
//           </label>
//           <label>
//             <input type="radio" name="q8" value="option4" onChange={() => handleAnswerChange('q8', 'Disorganized')}/> 
//             I’m not sure how to respond. It’s confusing.
//           </label>
//         </div>
//       </div>

//       {/* Question 9 */}
//       <div className="question-block">
//         <h2>9. When you're in a relationship, do you worry about abandonment?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q9" value="option1" onChange={() => handleAnswerChange('q9', 'Secure')}/> 
//             No, I trust my relationships are solid.
//           </label>
//           <label>
//             <input type="radio" name="q9" value="option2" onChange={() => handleAnswerChange('q9', 'Anxious')}/> 
//             I regularly ask my partner to reassure me they won’t leave me.
//           </label>
//           <label>
//             <input type="radio" name="q9" value="option3" onChange={() => handleAnswerChange('q9', 'Avoidant')}/> 
//             I’m comfortable alone, so I’m not pressed about it.          </label>
//           <label>
//             <input type="radio" name="q9" value="option4" onChange={() => handleAnswerChange('q9', 'Disorganized')}/> 
//             I worry about it sometimes, but not too much.
//           </label>
//         </div>
//       </div>

//       {/* Question 10 */}
//       <div className="question-block">
//         <h2>10. Your partner wants to be physically close to you regularly. How do you feel about that?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q10" value="option1" onChange={() => handleAnswerChange('q10', 'Secure')}/> 
//             I like physical touch and intimacy with those I care about.          </label>
//           <label>
//             <input type="radio" name="q10" value="option2" onChange={() => handleAnswerChange('q10', 'Anxious')}/> 
//             It can sometimes feel comforting, but other times it’s uncomfortable.          </label>
//           <label>
//             <input type="radio" name="q10" value="option3" onChange={() => handleAnswerChange('q10', 'Avoidant')}/> 
//             I usually avoid physical touch and try to keep a good distance.          </label>
//           <label>
//             <input type="radio" name="q10" value="option4" onChange={() => handleAnswerChange('q10', 'Disorganized')}/> 
//             Too much physical closeness makes me uncomfortable.          </label>
//         </div>
//       </div>

//       {/* Question 11 */}
//       <div className="question-block">
//         <h2>11. What was your relationship like with your parents or caregivers in early childhood?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q11" value="option1" onChange={() => handleAnswerChange('q11', 'Secure')}/> 
//             I felt loved, supported, safe, and understood.          </label>
//           <label>
//             <input type="radio" name="q11" value="option2" onChange={() => handleAnswerChange('q11', 'Anxious')}/> 
//             Sometimes I felt a closeness; other times they seemed distant and unavailable.          </label>
//           <label>
//             <input type="radio" name="q11" value="option3" onChange={() => handleAnswerChange('q11', 'Avoidant')}/> 
//             I don’t remember feeling close to them.          </label>
//           <label>
//             <input type="radio" name="q11" value="option4" onChange={() => handleAnswerChange('q11', 'Disorganized')}/> 
//             We didn’t have shared affection, or they were abusive.          </label>
//         </div>
//       </div>

//       {/* Question 12 */}
//       <div className="question-block">
//         <h2>12. What do you usually do when someone close to you gets upset or emotional?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q12" value="option1" onChange={() => handleAnswerChange('q12', 'Secure')}/> 
//             I try to be supportive and comfort them.          </label>
//           <label>
//             <input type="radio" name="q12" value="option2" onChange={() => handleAnswerChange('q12', 'Anxious')}/> 
//             I try to help but I have to make sure I’m okay too.          </label>
//           <label>
//             <input type="radio" name="q12" value="option3" onChange={() => handleAnswerChange('q12', 'Avoidant')}/> 
//             I get annoyed that someone is asking for my support.          </label>
//           <label>
//             <input type="radio" name="q12" value="option4" onChange={() => handleAnswerChange('q12', 'Disorganized')}/> 
//             It can be overwhelming, and I’m often not sure how to help.          </label>
//         </div>
//       </div>

//       {/* Question 13 */}
//       <div className="question-block">
//         <h2>13. Your best friend needs a place to stay. How do you feel about sharing your space?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q13" value="option1" onChange={() => handleAnswerChange('q13', 'Secure')}/> 
//             I’m comfortable and glad to share my space with them.          </label>
//           <label>
//             <input type="radio" name="q13" value="option2" onChange={() => handleAnswerChange('q13', 'Anxious')}/> 
//             They can stay, but they need to give me personal space when I need it.          </label>
//           <label>
//             <input type="radio" name="q13" value="option3" onChange={() => handleAnswerChange('q13', 'Avoidant')}/> 
//             It feels like they’re invading my personal space, which makes me anxious.          </label>
//           <label>
//             <input type="radio" name="q13" value="option4" onChange={() => handleAnswerChange('q13', 'Disorganized')}/> 
//             I really prefer they find somewhere else to stay.          </label>
//         </div>
//       </div>

//       {/* Question 14 */}
//       <div className="question-block">
//         <h2>14. What's your general experience with making friends?</h2>
//         <div className="options">
//           <label>
//             <input type="radio" name="q14" value="option1" onChange={() => handleAnswerChange('q14', 'Secure')}/> 
//             I don’t have a problem making new friends.          </label>
//           <label>
//             <input type="radio" name="q14" value="option2" onChange={() => handleAnswerChange('q14', 'Anxious')}/> 
//             I want to make new friends but worry people won’t like me.          </label>
//           <label>
//             <input type="radio" name="q14" value="option3" onChange={() => handleAnswerChange('q14', 'Avoidant')}/> 
//             I don’t really think I need more friends.          </label>
//           <label>
//             <input type="radio" name="q14" value="option4" onChange={() => handleAnswerChange('q14', 'Disorganized')}/> 
//             I’m not great at making new friends because we end up arguing eventually.          </label>
//         </div>
//       </div>


//         {/* Question 15 */}
//         <div className="question-block">
//           <h2>15. How do you feel when a friendship or romantic relationship ends?</h2>
//           <div className="options">
//             <label>
//               <input type="radio" name="q15" onChange={() => handleAnswerChange('q15', 'Secure')} />
//               I’m sad but I can move on and make new connections.
//             </label>
//             <label>
//               <input type="radio" name="q15" onChange={() => handleAnswerChange('q15', 'Anxious')} />
//               I’m sad and afraid of being alone.
//             </label>
//             <label>
//               <input type="radio" name="q15" onChange={() => handleAnswerChange('q15', 'Avoidant')} />
//               I probably didn’t get too attached to them, so it doesn’t really affect me.
//             </label>
//             <label>
//               <input type="radio" name="q15" onChange={() => handleAnswerChange('q15', 'Disorganized')} />
//               It’s really hard to let go.
//             </label>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display result after submission */}
//       {isSubmitted && result && (
//         <div className="result">
//           <h2>Your Attachment Style: {result}</h2>
//           <p>{descriptions[result]}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AttachmentStyleQuiz;



import React, { useState } from 'react';
import './Attachment.css';

const AttachmentStyleQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Descriptions for each attachment style
  const descriptions = {
    Secure: 'You have a secure attachment style, which means you’re comfortable with intimacy and independence. You’re able to form healthy relationships where you trust others and feel confident in their care and support. This balance allows you to enjoy closeness while also respecting your own and others’ boundaries. Keep nurturing these positive connections—they’re a wonderful foundation for lasting relationships.',
    Anxious: 'You may have an anxious attachment style, which means you deeply value your relationships but sometimes worry about their stability. It’s normal to seek reassurance and to care about your connections deeply. Remember, your sensitivity is a strength, and it shows how much you care. Try to communicate openly with loved ones about your feelings, and practice self-compassion. Your relationships can thrive with understanding and mutual support.',
    Avoidant: 'You might have an avoidant attachment style, which means you value your independence and often prefer to keep a certain distance in relationships. It’s okay to need space and to cherish your autonomy—these are important aspects of who you are. While closeness can feel overwhelming at times, gently exploring vulnerability and building trust can help you feel more connected and secure in your relationships.',
    Disorganized: 'You may have a disorganized attachment style, which means your relationships can sometimes feel confusing or unpredictable. It’s possible that you’ve experienced mixed signals in the past, leading to a blend of longing for closeness and fear of it. It’s important to be kind to yourself as you navigate these feelings. Seeking supportive and understanding relationships, and perhaps professional guidance, can help you find the stability and connection you’re looking for.'
  };

  // Handle the change of selected answer
  const handleAnswerChange = (question, answer) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [question]: answer }));
  };

  // Calculate the result based on user answers
  const calculateResult = () => {
    const counts = { Secure: 0, Anxious: 0, Avoidant: 0, Disorganized: 0 };

    // Update counts based on user answers
    Object.values(answers).forEach(answer => {
      counts[answer] += 1;
    });

    // Find the attachment style with the highest count
    const sortedResults = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setResult(sortedResults[0][0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalQuestions = 15; // Assuming there are 15 questions in total
    if (Object.keys(answers).length === totalQuestions) {
      setIsSubmitted(true);
      calculateResult();
      // setAnswers({}); 
    } else {
      alert('Please answer all the questions for accurate result generation .');
    }
  };

  return (
<div className="attachment-style-pg-quiz-container">
<h1 className='attachment-style-pg-heading'>Discover Your Attachment Style</h1>
    <form className='attachment-style-pg-form' onSubmit={handleSubmit}>
      {/* Question 1 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2' >1. How do you feel when someone close to you starts to spend less time with you and more time with someone else?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q1" value="option1" onChange={() => handleAnswerChange('q1', 'Secure')}/> 
            Meh, it doesn’t faze me. We each have other relationships and that’s okay.
          </label>
          <label>
            <input type="radio" name="q1" value="option2" onChange={() => handleAnswerChange('q1', 'Anxious')}/> 
            Honestly, I get a bit jealous and feel insecure.
          </label>
          <label>
            <input type="radio" name="q1" value="option3" onChange={() => handleAnswerChange('q1', 'Avoidant')}/> 
            I don’t even think about it.
          </label>
          <label>
            <input type="radio" name="q1" value="option4" onChange={() => handleAnswerChange('q1', 'Disorganized')}/> 
            I worry they may replace the relationship they have with me.
          </label>
        </div>
      </div>

      {/* Question 2 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>2. You're going through a rough patch. Do you reach out to someone for support?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q2" value="option1" onChange={() => handleAnswerChange('q2', 'Secure')}/> 
            Yes, I ask for help and openly share my feelings.
          </label>
          <label>
            <input type="radio" name="q2" value="option2" onChange={() => handleAnswerChange('q2', 'Anxious')}/> 
            I’m hesitant because I’m afraid nobody will be there for me.
          </label>
          <label>
            <input type="radio" name="q2" value="option3" onChange={() => handleAnswerChange('q2', 'Avoidant')}/> 
            Nope, I can deal with it on my own.
          </label>
          <label>
            <input type="radio" name="q2" value="option4" onChange={() => handleAnswerChange('q2', 'Disorganized')}/> 
            It’s hard to ask for help.
          </label>
        </div>
      </div>

      {/* Question 3 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>3. How comfortable are you with being emotionally vulnerable?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q3" value="option1" onChange={() => handleAnswerChange('q3', 'Secure')}/> 
            Pretty comfortable, I can share my inner thoughts with others.
          </label>
          <label>
            <input type="radio" name="q3" value="option2" onChange={() => handleAnswerChange('q3', 'Anxious')}/> 
            It takes a while to feel comfortable enough to trust someone with my feelings, but I get there anyway.
          </label>
          <label>
            <input type="radio" name="q3" value="option3" onChange={() => handleAnswerChange('q3', 'Avoidant')}/> 
            Not at all. I avoid being vulnerable as much as possible.
          </label>
          <label>
            <input type="radio" name="q3" value="option4" onChange={() => handleAnswerChange('q3', 'Disorganized')}/> 
            I have a tough time opening up and I keep my emotions to myself.
          </label>
        </div>
      </div>

      {/* Question 4 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>4. Your partner or close friend wants to spend time alone. How do you react?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q4" value="option1" onChange={() => handleAnswerChange('q4', 'Secure')}/> 
            I understand and respect the need for personal space.
          </label>
          <label>
            <input type="radio" name="q4" value="option2" onChange={() => handleAnswerChange('q4', 'Anxious')}/> 
            I worry and feel insecure because I don’t know their intentions.
          </label>
          <label>
            <input type="radio" name="q4" value="option3" onChange={() => handleAnswerChange('q4', 'Avoidant')}/> 
            It doesn’t bother me; I’d rather be doing my own thing.
          </label>
          <label>
            <input type="radio" name="q4" value="option4" onChange={() => handleAnswerChange('q4', 'Disorganized')}/> 
            I feel a bit hurt and rejected but I get it.
          </label>
        </div>
      </div>

      {/* Question 5 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>5. How do you deal with conflicts in relationships?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q5" value="option1" onChange={() => handleAnswerChange('q5', 'Secure')}/> 
            I focus on the issues and try to find a resolution.
          </label>
          <label>
            <input type="radio" name="q5" value="option2" onChange={() => handleAnswerChange('q5', 'Anxious')}/> 
            I get anxious and try to resolve things by people-pleasing.
          </label>
          <label>
            <input type="radio" name="q5" value="option3" onChange={() => handleAnswerChange('q5', 'Avoidant')}/> 
            I shut down and avoid confrontation or conflict.
          </label>
          <label>
            <input type="radio" name="q5" value="option4" onChange={() => handleAnswerChange('q5', 'Disorganized')}/> 
            I get defensive. It’s hard to see things from the other person’s POV.
          </label>
        </div>
      </div>

      {/* Question 6 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>6. Do you trust other people?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q6" value="option1" onChange={() => handleAnswerChange('q6', 'Secure')}/> 
            Generally sure, I believe they have good intentions.
          </label>
          <label>
            <input type="radio" name="q6" value="option2" onChange={() => handleAnswerChange('q6', 'Anxious')}/> 
            I trust them for the most part, but I still remain cautious.
          </label>
          <label>
            <input type="radio" name="q6" value="option3" onChange={() => handleAnswerChange('q6', 'Avoidant')}/> 
            It’s pretty hard to trust people completely.
          </label>
          <label>
            <input type="radio" name="q6" value="option4" onChange={() => handleAnswerChange('q6', 'Disorganized')}/> 
            I rarely trust others and often think they don’t have good intentions.
          </label>
        </div>
      </div>

      {/* Question 7 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>7. How do you feel about emotional closeness?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q7" value="option1" onChange={() => handleAnswerChange('q7', 'Secure')}/> 
            As long as we have good boundaries, I welcome emotional closeness.
          </label>
          <label>
            <input type="radio" name="q7" value="option2" onChange={() => handleAnswerChange('q7', 'Anxious')}/> 
            It’s both comforting and worrying when someone gets too close.
          </label>
          <label>
            <input type="radio" name="q7" value="option3" onChange={() => handleAnswerChange('q7', 'Avoidant')}/> 
            Think indifferent, I’m not really affected by emotional closeness.
          </label>
          <label>
            <input type="radio" name="q7" value="option4" onChange={() => handleAnswerChange('q7', 'Disorganized')}/> 
            It makes me feel anxious and overwhelmed.
          </label>
        </div>
      </div>

      {/* Question 8 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>8. A friend or partner expresses their needs in the relationship with you. How do you react?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q8" value="option1" onChange={() => handleAnswerChange('q8', 'Secure')}/> 
            I listen and respond, respecting their needs.
          </label>
          <label>
            <input type="radio" name="q8" value="option2" onChange={() => handleAnswerChange('q8', 'Anxious')}/> 
            I become concerned that I’m not good enough for them.
          </label>
          <label>
            <input type="radio" name="q8" value="option3" onChange={() => handleAnswerChange('q8', 'Avoidant')}/> 
            I feel uncomfortable and try to deflect the conversation.
          </label>
          <label>
            <input type="radio" name="q8" value="option4" onChange={() => handleAnswerChange('q8', 'Disorganized')}/> 
            I’m not sure how to respond. It’s confusing.
          </label>
        </div>
      </div>

      {/* Question 9 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>9. When you're in a relationship, do you worry about abandonment?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q9" value="option1" onChange={() => handleAnswerChange('q9', 'Secure')}/> 
            No, I trust my relationships are solid.
          </label>
          <label>
            <input type="radio" name="q9" value="option2" onChange={() => handleAnswerChange('q9', 'Anxious')}/> 
            I regularly ask my partner to reassure me they won’t leave me.
          </label>
          <label>
            <input type="radio" name="q9" value="option3" onChange={() => handleAnswerChange('q9', 'Avoidant')}/> 
            I’m comfortable alone, so I’m not pressed about it.          </label>
          <label>
            <input type="radio" name="q9" value="option4" onChange={() => handleAnswerChange('q9', 'Disorganized')}/> 
            I worry about it sometimes, but not too much.
          </label>
        </div>
      </div>

      {/* Question 10 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>10. Your partner wants to be physically close to you regularly. How do you feel about that?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q10" value="option1" onChange={() => handleAnswerChange('q10', 'Secure')}/> 
            I like physical touch and intimacy with those I care about.          </label>
          <label>
            <input type="radio" name="q10" value="option2" onChange={() => handleAnswerChange('q10', 'Anxious')}/> 
            It can sometimes feel comforting, but other times it’s uncomfortable.          </label>
          <label>
            <input type="radio" name="q10" value="option3" onChange={() => handleAnswerChange('q10', 'Avoidant')}/> 
            I usually avoid physical touch and try to keep a good distance.          </label>
          <label>
            <input type="radio" name="q10" value="option4" onChange={() => handleAnswerChange('q10', 'Disorganized')}/> 
            Too much physical closeness makes me uncomfortable.          </label>
        </div>
      </div>

      {/* Question 11 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>11. What was your relationship like with your parents or caregivers in early childhood?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q11" value="option1" onChange={() => handleAnswerChange('q11', 'Secure')}/> 
            I felt loved, supported, safe, and understood.          </label>
          <label>
            <input type="radio" name="q11" value="option2" onChange={() => handleAnswerChange('q11', 'Anxious')}/> 
            Sometimes I felt a closeness; other times they seemed distant and unavailable.          </label>
          <label>
            <input type="radio" name="q11" value="option3" onChange={() => handleAnswerChange('q11', 'Avoidant')}/> 
            I don’t remember feeling close to them.          </label>
          <label>
            <input type="radio" name="q11" value="option4" onChange={() => handleAnswerChange('q11', 'Disorganized')}/> 
            We didn’t have shared affection, or they were abusive.          </label>
        </div>
      </div>

      {/* Question 12 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>12. What do you usually do when someone close to you gets upset or emotional?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q12" value="option1" onChange={() => handleAnswerChange('q12', 'Secure')}/> 
            I try to be supportive and comfort them.          </label>
          <label>
            <input type="radio" name="q12" value="option2" onChange={() => handleAnswerChange('q12', 'Anxious')}/> 
            I try to help but I have to make sure I’m okay too.          </label>
          <label>
            <input type="radio" name="q12" value="option3" onChange={() => handleAnswerChange('q12', 'Avoidant')}/> 
            I get annoyed that someone is asking for my support.          </label>
          <label>
            <input type="radio" name="q12" value="option4" onChange={() => handleAnswerChange('q12', 'Disorganized')}/> 
            It can be overwhelming, and I’m often not sure how to help.          </label>
        </div>
      </div>

      {/* Question 13 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>13. Your best friend needs a place to stay. How do you feel about sharing your space?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q13" value="option1" onChange={() => handleAnswerChange('q13', 'Secure')}/> 
            I’m comfortable and glad to share my space with them.          </label>
          <label>
            <input type="radio" name="q13" value="option2" onChange={() => handleAnswerChange('q13', 'Anxious')}/> 
            They can stay, but they need to give me personal space when I need it.          </label>
          <label>
            <input type="radio" name="q13" value="option3" onChange={() => handleAnswerChange('q13', 'Avoidant')}/> 
            It feels like they’re invading my personal space, which makes me anxious.          </label>
          <label>
            <input type="radio" name="q13" value="option4" onChange={() => handleAnswerChange('q13', 'Disorganized')}/> 
            I really prefer they find somewhere else to stay.          </label>
        </div>
      </div>

      {/* Question 14 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>14. What's your general experience with making friends?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q14" value="option1" onChange={() => handleAnswerChange('q14', 'Secure')}/> 
            I don’t have a problem making new friends.          </label>
          <label>
            <input type="radio" name="q14" value="option2" onChange={() => handleAnswerChange('q14', 'Anxious')}/> 
            I want to make new friends but worry people won’t like me.          </label>
          <label>
            <input type="radio" name="q14" value="option3" onChange={() => handleAnswerChange('q14', 'Avoidant')}/> 
            I don’t really think I need more friends.          </label>
          <label>
            <input type="radio" name="q14" value="option4" onChange={() => handleAnswerChange('q14', 'Disorganized')}/> 
            I’m not great at making new friends because we end up arguing eventually.          </label>
        </div>
      </div>

      {/* Question 15 */}
      <div className="attachment-style-pg-question-block">
        <h2 className='attachment-style-pg-h2'>15. How do you feel when a friendship or romantic relationship ends?</h2>
        <div className="attachment-style-pg-options">
          <label>
            <input type="radio" name="q15" value="option1" onChange={() => handleAnswerChange('q15', 'Secure')}/> 
            I’m sad, but I can move on and make new connections.          </label>
          <label>
            <input type="radio" name="q15" value="option2" onChange={() => handleAnswerChange('q15', 'Anxious')}/> 
            It’s really hard to let go.          </label>
          <label>
            <input type="radio" name="q15" value="option3" onChange={() => handleAnswerChange('q15', 'Avoidant')}/> 
            I probably didn’t get too attached to them, so it doesn’t really affect me.          </label>
          <label>
            <input type="radio" name="q15" value="option4" onChange={() => handleAnswerChange('q15', 'Disorganized')}/> 
            I’m sad and afraid of being alone.          </label>
        </div>
      </div>
      <div className="attachment-style-pg-submit-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </form>

{/* Display result */}
{isSubmitted && result && (
        <div className="attachment-style-pg-result">
          <h2 className='attachment-style-pg-result-h2'>Your Attachment Style : {result}</h2>
          <p className='attachment-style-pg-result-p-tag'>{descriptions[result]}</p>
        </div>
      )}

    </div>   
  );
};

export default AttachmentStyleQuiz;