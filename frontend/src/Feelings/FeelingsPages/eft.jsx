import React from 'react';
import './Anxious.css';
// import { Link } from 'react-router-dom';

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function Eft() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Emotional freedom technique - EFT  &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section yoga-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('What is EFT tapping?')}>What is EFT tapping?</li>
                        <li onClick={() => scrollToSection('What Are the EFT Tapping Points?')}>What Are the EFT Tapping Points?</li>
                        <li onClick={() => scrollToSection('EFT tapping in 5 steps')}>EFT tapping in 5 steps </li>
                        <li onClick={() => scrollToSection('Possible Benefits of EFT Tapping')}>Possible Benefits of EFT Tapping</li>
                        
                    </ul>
                </div>

                <div className="anxiety-pg-ind-section yoga-pg-ind-middle">
                    <section id="What is EFT tapping?">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>What is EFT tapping?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Emotional freedom technique (EFT) is an alternative treatment for physical pain and emotional distress. It’s also referred to as tapping or psychological acupressure.                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Tapping, or EFT, is a mind-body therapy that draws on the traditional Chinese medicine (TCM) practice of acupuncture. It involves tapping key acupressure points (acupoints) on the hands, face, and body with your fingertips while focusing on uncomfortable feelings or concerns, and using positive affirmations to neutralize those feelings, according to EFT International (PDF).
                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Research suggests that EFT tapping can relieve stress, diminish cravings, improve performance, and even help relieve symptoms of post-traumatic stress disorder (PTSD).
                        </p>
                    </section>

                    <section id="What Are the EFT Tapping Points?">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>What Are the EFT Tapping Points?</h2>
                    
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> <b>Eyebrow (EB) </b> Where the eyebrows start at the bridge of the nose </li>

                            <li> <b> Side of the Eye (SE) </b>  On the bone along the outside of either eye</li>

                            <li> <b>Side of the Eye (SE)</b> On the top of the cheekbone under either eye.</li>

                            <li> <b>Under the Nose (UN)</b> The area beneath the nose and above the upper lip</li>

                            <li> <b>Chin Point (Ch)</b> The crease between your bottom lip and chin </li>

                            <li> <b>Chin Point (Ch)</b> About two inches below and to the side of where your collar bones meet </li>

                            <li> <b>Under the Arm (UA)</b> On each side, about four inches beneath the armpits</li>

                            <li> <b>Top of the Head (TOH)</b> Directly on the crown of your head </li>

                            <li> <b>Karate Chop (KC)</b> The outer edge of the hand, on the opposite side from the thumb </li>
                        </ol>
                    </section>

                    <section id="EFT tapping in 5 steps">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>EFT tapping in 5 steps </h2>
                        
                        
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Identify the Issue</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Start by thinking about the problem or emotion you want to address. This could be anxiety, stress, a specific fear, or any negative feeling. Be as specific as possible. For example, instead of just "stress," think of what is causing it, like "feeling overwhelmed by work."
                            </p> 
                            </li>


                             <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Identify the Issue</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Start by thinking about the problem or emotion you want to address. This could be anxiety, stress, a specific fear, or any negative feeling. Be as specific as possible. For example, instead of just "stress," think of what is causing it, like "feeling overwhelmed by work."
                            </p> 
                            </li>


                            
                            <li><h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Rate the Intensity</h3>

<p className='anxiety-pg-ind-content-of-anxiety'>
Once you’ve identified the issue, rate the intensity of your negative feeling on a scale from 0 to 10, where 10 is the most intense. This will help you track your progress as you go through the EFT process. For example, if your anxiety feels like an 8 out of 10, make a note of it.
</p></li>


                            <li><h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Set a Setup Statement</h3>

<p className='anxiety-pg-ind-content-of-anxiety'>
Now create a simple sentence that acknowledges the issue while accepting yourself. The structure is: "Even though I [issue], I deeply and completely accept myself." For example, "Even though I feel overwhelmed by work, I deeply and completely accept myself." Say this setup statement three times while tapping on the "karate chop" point (the outer edge of your hand, below the pinky).
</p></li>
                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Start Tapping the Points</h3>

<p className='anxiety-pg-ind-content-of-anxiety'>
Begin tapping lightly on specific points of the body, using two fingers, while repeating a reminder phrase like “this stress” or “this fear.” Tap each point about 5-7 times. The common tapping points are:
                        <ol>
                            <li>The top of your head</li>
                            <li>The beginning of your eyebrows</li>
                            <li>The side of your eyes</li>
                            <li>Under your eyes</li>
                            <li>Under your nose</li>
                            <li>Your chin</li>
                            <li>Your collarbone</li>
                            <li>Under your arms (about 4 inches below the armpit)</li>

                        </ol>
</p>  </li>
                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Focus on the Emotion</h3>

<p className='anxiety-pg-ind-content-of-anxiety'>
As you tap through the points, stay focused on the emotion or problem you identified earlier. Keep repeating your reminder phrase (“this anxiety” or “this stress”) while you tap. If your thoughts start to drift, gently bring them back to the issue at hand. The goal is to feel a release or reduction in intensity.
</p></li>
                        </ol>
                    </section>

                    <section id="Possible Benefits of EFT Tapping">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>Possible Benefits of EFT Tapping</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        EFT tapping offers several potential health benefits. These studies cited below examine EFT performed within the clinical context of research trials, which may bolster the possible wellness perks of standard EFT in everyday practice, though more research is needed to better understand EFT outside of a clinical context. Clinical EFT should only be administered by a licensed therapist.
                        </p>

                        
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li><b>Reduces Stress and Anxiety:</b> EFT can help alleviate stress and anxiety by calming the nervous system and promoting relaxation.</li>
                            
                            <li><b> Manages Pain: </b> EFT has been shown to be effective in managing physical pain, including chronic pain conditions.</li>

                            <li><b>Overcomes Phobias:</b>  EFT can help individuals overcome phobias by reducing fear responses and associated anxiety.</li>
                            
                            <li><b> Improves Mood: </b>  EFT can boost mood and reduce feelings of depression and sadness.</li>
                            
                            <li><b>Promotes Emotional Healing: </b> EFT can facilitate emotional healing by releasing trapped emotions and resolving emotional traumas. </li>
                            
                            <li><b> Supports Weight Loss: </b>  EFT can help manage emotional eating and cravings, supporting weight loss efforts.</li>
                            
                    
                        </ol>
                    </section>



                </div>
            </div>
        </div>
    );
}

export default Eft;