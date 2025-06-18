import React from 'react';
import './Anxious.css';
// import { Link } from 'react-router-dom';


function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function PSE() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Psychosomatic Exercises: Mind-Body Connections  &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section yoga-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('Psychosomatic exercises')}>Psychosomatic exercises</li>
                        <li onClick={() => scrollToSection('Are PSE good')}>Are somatic exercises good</li>
                        <li onClick={() => scrollToSection('What Are 11 Somatic Exercises?')}>What Are 11 Somatic Exercises? </li>
                        
                        
                    </ul>
                </div>

                <div className="anxiety-pg-ind-section yoga-pg-ind-middle">
                    <section id="Psychosomatic exercises">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>Psychosomatic exercises</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Psychosomatic exercises are physical activities that aim to address both mental and physical health. They emphasize the mind-body connection, recognizing that psychological factors can influence physical well-being and vice versa. These exercises often incorporate elements of relaxation, mindfulness, and movement to promote overall health and wellness.                       </p>

                    </section>

                    <section id="Are PSE good">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>Are somatic exercises good</h2>

                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Improved Mind-Body Connection</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Somatic Exercises are specifically designed to enhance the internal awareness of your body and its functions. Their-body oriented nature encourages you to shift your attention from your cognition and thoughts and connect to the sensations experienced in your body (8). By focusing on slow, mindful movements, you begin to understand how different parts of your body interact and function together, and how your emotions and thought impact your physical body — or certain parts of it. This heightened awareness improves your mental and emotional health by making you address those emotions and sensations stored in certain body parts.
                            </p> 
                            </li>


                             <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Relaxation and Stress Relief</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Our noisy minds and constant overthinking are some main contributors to stress. To press pause on our chaotic thought patterns, we sometimes need to move from our minds into our bodies – and this is where somatic exercises make a tremendous difference. They have a calming effect on the body and involve slow, deliberate movements which can help relax tense muscles and improve sleep. Moreover, the focus required in performing these exercises provides a break from stressors, allowing your mind to unwind and refocus.
                            </p> 
                            </li>

                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Enhanced Physical Well-being</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Regular practice of Somatic Exercises can lead to improved flexibility, balance, and strength. The movements involved help to lengthen tight muscles and strengthen weak ones, leading to better posture and ease of movement. Over time, this could reduce the risk of injuries and enhance your physical capabilities
                            </p> 
                            </li>

                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Emotional Release</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Recent trauma research shows that we don’t just experience emotions and distressing experiences in our heads – we also store them in certain body parts (9). This is what makes Somatic Exercises somehow therapeutic (6). They allow you to tap into areas of emotional tension within your body and release pent-up emotions. When emotions are experienced on a bodily level, they can be regulated through movement, shaking, or by paying attention to a particular body area. This can be particularly helpful in increasing one’s ability to regulate emotions, leading to improved emotional health and resilience.
                            </p> 
                            </li>

                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Mindful Living</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Lastly, the practice of Somatic Exercises encourages a more mindful approach to living. When you tap into your body, you realise that you’re no longer just the thoughts you have about yourself. The focus on internal awareness promotes a deeper understanding of one’s self, encouraging a more mindful and intentional approach to daily activities. This can enhance your quality of life and promote overall well-being.
                            </p> 
                            </li>

                           
                            
                             </ol>
                    </section>

                    <section id="What Are 11 Somatic Exercises?">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>What Are 11 Somatic Exercises? </h2>
                        
                        
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Diaphragmatic Breathing </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This exercise helps to activate your body’s relaxation response. It involves deep breathing into the diaphragm rather than shallow breathing from your chest.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Lie down or sit comfortably.</li>
                                <li>Place one hand on your belly and the other on your chest.</li>
                                <li>Take a slow, deep breath in through your nose, allowing your belly to rise as you fill your lungs with air. The hand on your chest must remain as still as possible. </li>
                                <li>Exhale slowly out of your mouth or nose, allowing your belly to fall.</li>
                                <li>Repeat for several minutes</li>
                               
                                </ol>
                            </p>
                            </p> 
                            </li>



                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Grounding </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Grounding techniques can help you feel more connected to your physical presence in the world.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Stand up straight and feel your feet firmly grounded on the floor. Taking your shoes off for this exercise may make you feel more comfortable.</li>

                                <li>Take a few deep breaths, focusing on the sensation of your feet connecting with the earth.</li>

                                <li>Imagine roots growing from your feet, anchoring you to the ground as you feel connected to the earth</li>

                                <li>Start shifting your weight from left to right, swaying as a tree.</li>

                                <li>Shift your weight from front to the back. </li>

                                <li>As you shift your weight, bring awareness to your center of gravity, located in the upper pelvic area and below the navel. </li>
                                
                                <li>Bring your hands on top of your lower belly and feel your center. </li>
                                
                                <li>Continue to sway from side to side and front and back while keeping the hands on top of your lower belly.</li>

                               
                                </ol>
                            </p>
                            </p> 
                            </li>



                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Body Scanning: </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This technique promotes increased bodily awareness and can help identify areas of tension or discomfort.

                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Lie down or sit comfortably.</li>
                                <li>Mentally scan your body from your toes to the head, noting any areas of tension or discomfort.</li>

                                <li>Spend a few moments focusing on each area and when you feel any tension, breathe deeply and exhale allowing the area to relax. </li>

                                <li>When you feel the body part relax, you can move to the next one.</li>

                                <li>Continue this process, until you reach your head. </li>
                               
                                </ol>
                            </p>
                            </p> 
                            </li>



                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Somatic Yoga</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            Somatic Yoga involves performing traditional yoga poses with a heightened focus on internal bodily sensations.It should be practiced with a certified somatic yoga instructor.</p>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            In somatic yoga, practitioners are encouraged to explore movements slowly and with intention, paying close attention to how each movement feels rather than striving for a specific end posture. This approach allows individuals to release tension, improve flexibility, and enhance body awareness, which can develop a greater understanding of their physical and emotional experiences.


                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Choose a yoga pose that you are comfortable with.</li>

                                <li>Place one hand on your belly and the other on your chest.</li>
                                <li>As you move into the pose, pay close attention to how each part of your body feels. </li>
                                <li>Hold the pose for a few breaths, continuing to maintain awareness of your bodily sensations.</li>
                               
                                </ol>
                            </p>
                            </p> 
                            </li>




                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Walking Meditation </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This form of meditation combines physical movement with mindfulness practice.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Begin walking at a slow, comfortable pace.</li>
                                <li>Pay attention to the sensation of your feet touching the ground, the movement of your legs and arms, and your breathing.</li>
                                <li>If your mind wanders, gently bring your attention back to the physical sensation of walking and bring your mind to the present moment. </li>
                                
                               
                                </ol>
                            </p>
                            </p> 
                            </li>




                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'>  Progressive Muscle Relaxation (PMR):</h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This technique involves consciously tensing and then releasing different muscle groups in the body to promote relaxation.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Start at one end of your body (like your toes).</li>
                                <li>Tense the muscles as tightly as you can for about 5 seconds.</li>
                                <li>Relax the muscles and notice the sensation of release. </li>
                                <li>Continue to the next muscle group (like your legs), repeating the process.</li>
                               
                                </ol>
                            </p>
                            </p> 
                            </li>



                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Sensory Awareness </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This exercise encourages a heightened awareness of your sensory experiences.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Choose a quiet place to sit or lie down.</li>
                                <li>Close your eyes and take a few deep breaths.</li>
                                <li>Tune into your senses one by one, spending a few moments focusing on what you can hear, smell, feel, taste, and see (with your eyes closed). </li>
                                
                               
                                </ol>
                            </p>
                            </p> 
                            </li>


                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> The Voo Breath </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This vocal exercise can help to stimulate your vagus nerve, promoting a sense of calm and relaxation.

                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Find a space where you feel comfortable and find yourself in a comfortable position, either sitting on a chair or on the floor.</li>

                                <li>Bring your attention to your bodily sensations and to the present moment. Notice your breath in and out. </li>

                                <li>Take a deep breath in. </li>

                                <li>As you exhale, make a “voo” sound, drawing out the vowel for as long as possible. You will feel this sound resonate through your abdomen and chest.</li>

                                <li>Repeat several times. </li>

                               
                                </ol>
                            </p>
                            </p> 
                            </li>


                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Self-Hug </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This comforting exercise can help to soothe feelings of distress.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Cross your right arm over your chest to feel your heartbeat, place your left  hand on your right shoulder.</li>

                                <li>Apply gentle pressure and rock side to side.</li>

                                <li>Take deep, calming breaths as you hold this self-hug. </li>
                                
                                </ol>
                            </p>
                            </p> 
                            </li>


                            <li> <h3 className='yoga-pg-ind-h3-heading-of-anxiety-center'> Shaking Out Tension </h3>

                            <p className='anxiety-pg-ind-content-of-anxiety'>
                            This exercise can help to release physical tension and release excess energy that may have been produced due to stress.
                            <p>Steps 
                                <ol className='anxiety-pg-ind-ul-yoga'>
                                <li>Find a space where you feel comfortable</li>

                                <li>Stand up and start shaking your body, starting with your hands and gradually incorporating your arms, torso, and legs. Imagine you are shaking off dust or sand on your body.</li>

                                <li>Shake for a few minutes, then slowly wind down. Bringing your body back to balance. </li>

                                <li>Notice how your body feels once you’ve stopped shaking.</li>
                               
                                </ol>
                            </p>
                            </p> 
                            </li>

                          </ol>
                          </section>
                   


                </div>
            </div>
        </div>
    );
}

export default PSE;