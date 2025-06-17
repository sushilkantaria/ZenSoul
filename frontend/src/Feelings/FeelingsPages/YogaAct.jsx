import React from 'react';
import './Anxious.css';
// import { Link } from 'react-router-dom';
import childP from '../../assets/child-pose.jpg'
import yoga2nd from '../../assets/yoga2nd.jpg';
import yoga3rd from '../../assets/yogawarrior.jpg';
import yoga4th from '../../assets/yoga4th.jpg';
import yoga5th from '../../assets/yoga5th.jpg';
import yoga6th from '../../assets/yoga6th.jpg';
import yoga7th from '../../assets/yoga7th.jpg';
import yoga8th from '../../assets/yoga8th.jpg';
import yoga9th from '../../assets/yoga9th.jpg';
import yoga10th from '../../assets/yoga10th.jpg';



function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function YogaAct() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Yoga Poses to release negative Emotions. &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section yoga-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('yoga-benefits')}>How does yoga helps release Anxiety?</li>
                        <li onClick={() => scrollToSection('child-pose')}>1. Child's Pose (Balasana) </li>
                        <li onClick={() => scrollToSection('pigeon-pose')}>2. Reclined Pigeon Pose - Eka Pada Rajakapotasana</li>
                        <li onClick={() => scrollToSection('Warrior-pose')}>3. Humble Warrior Pose - Baddha Virabhadrasana</li>
                        <li onClick={() => scrollToSection('triangle-pose')}>4. Triangle Pose - Trikonasana </li>
                        <li onClick={() => scrollToSection('pyramid-pose')}>5. Pyramid Pose - Parsvottanasana</li>
                        <li onClick={() => scrollToSection('forward-fold')}>6. Standing Forward Fold - Uttanasana </li>
                        <li onClick={() => scrollToSection('side-twist')}>7. Side Twist</li>
                        <li onClick={() => scrollToSection('tree-pose')}>8. Tree Pose - Vrksasana</li>
                        <li onClick={() => scrollToSection('mountain')}>9. Mountain Pose - Tadasana</li>
                        <li onClick={() => scrollToSection('sleep')}>10. Corpse Pose - Savasana</li>
                    </ul>
                </div>

                <div className="anxiety-pg-ind-section yoga-pg-ind-middle">
                    <section id="yoga-benefits">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>How does yoga helps release Anxiety?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Yoga helps release anxiety through a combination of physical and mental techniques. Deep breathing exercises, such as pranayama, calm the nervous system and reduce stress hormones. Yoga poses, or asanas, stretch and strengthen the body, promoting relaxation and reducing muscle tension. Meditation and mindfulness practices help to focus the mind, reduce rumination, and cultivate a sense of present-moment awareness. By addressing both physical and mental aspects of anxiety, yoga provides a holistic approach to managing stress and promoting overall well-being.
                        </p>
                    </section>

                    <section id="child-pose">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>1. Child's Pose (Balasana)</h2>
                        <img src={childP} className='yoga-act-imgs' alt="Child's Pose" />
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            This is a foundational pose in many types of yoga, as it offers an opportunity to reset both your body and mind. Kristin adds that it's also an ideal pose for focusing on your breath.
                        </p>
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> Come to your hands and knees on the mat.</li>
                            <li> Spread your knees as wide as your mat, keeping the tops of your feet on the floor with your big toes touching.</li>
                            <li> Rest your belly between your thighs and place your forehead on the floor. You can also stack your hands in front of you and put your forehead on top of them if that's more comfortable.</li>
                            <li> If you're not stacking your hands, stretch your arms in front of you with your palms facing toward the floor or with your palms facing up, whichever feels better to you.</li>
                            <li> As you stay in this pose, pay attention to your breath, softening during the exhales.</li>
                        </ol>
                    </section>

                    <section id="pigeon-pose">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>2. Reclined Pigeon Pose (Eka Pada Rajakapotasana)</h2>
                        <img src={yoga2nd} className='yoga-act-imgs' alt="Reclined Pigeon Pose" />
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            This pose releases tension in your hips, which can sometimes help alleviate anxious feelings. This variation, done on your back, can help you feel more supported so that you can stay in the pose longer.
                        </p>
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li>Lie on your back with your knees bent and feet on the ground.</li>
                            <li>Cross your left foot over your right quad, placing your left ankle below your right knee.</li>
                            <li> Lift your right foot so that your shin is parallel to the ground.</li>
                            <li> Hold the back of your right leg and gently pull it toward your chest.</li>
                            <li> When you feel a comfortable stretch, hold there for one to three minutes.</li>
                            <li> Switch sides and repeat.</li>
                        </ol>
                    </section>

                    <section id="Warrior-pose">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>3. Humble Warrior Pose (Baddha Virabhadrasana)</h2>
                        <img src={yoga3rd} className='yoga-act-imgs' alt="Humble Warrior Pose" />
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            This pose releases tension in your hips, which can sometimes help alleviate anxious feelings. This variation, done on your back, can help you feel more supported so that you can stay in the pose longer.
                        </p>
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li>Start in Warrior 2 Pose (Virabhadrasana 2).</li>
                            <li> Point the toes of your back foot toward the long side of your mat and the toes of your front foot toward the front of your mat.</li>
                            <li> Lift your chest, roll your shoulders back, and extend your arms straight out from your shoulders.</li>
                            <li>Bend your front knee until your thigh is parallel to the floor at a 90-degree angle.</li>
                            <li> Bring your arms behind your back and interlace your fingers.</li>
                            <li> Gently bend forward toward your front leg and rotate slightly outward.</li>
                        </ol>
                    </section>

                    <section id="triangle-pose">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>4. Triangle Pose (Trikonasana)</h2>
                        <img src={yoga4th} className='yoga-act-imgs' alt="Triangle Pose" />
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Because this pose focuses on stretching one side of your body at a time, it can help deepen your breath, which may help reduce anxiety.
                        </p>
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> Start in Warrior 2 Pose with your right foot in front and your left foot parallel to the back of your mat.</li>
                            <li> Straighten your front leg but keep a slight bend in both knees. Extend your arms out, parallel with the floor.</li>
                            <li> Reach forward with your right hand so that your left hip rocks back slightly.</li>
                            <li> Slowly lower your right hand toward your right shin and extend your left arm straight up toward the ceiling.</li>
                            <li> Hold for five breaths then switch sides.</li>
                        </ol>
                    </section>

                    <section id="pyramid-pose">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>5. Pyramid Pose (Parsvottanasana)</h2>
                        <img src={yoga5th} className='yoga-act-imgs' alt="Pyramid Pose" />
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Any type of forward fold, like this pose, tends to help you go inward. That can help you focus more fully on your breath and body awareness.
                        </p>
                        <ol className='anxiety-pg-ind-ul-yoga' >
                            <li>Start in Mountain Pose (Tadasana), standing at the top of your mat.</li>
                            <li> Step your left foot back a few feet and angle it about 45 degrees outward.</li>
                            <li> Rotate your hips toward the front of the mat and rest your hands on your hips.</li>
                            <li> Bend forward over your right leg, keeping your hips level and spine straight.</li>
                            <li>Hold for five breaths, then switch sides.</li>
                        </ol>
                    </section>

                    <section id="forward-fold">
                         <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>6. Standing Forward Fold (Uttanasana)  </h2>
                         <img src={yoga6th} className='yoga-act-imgs' alt="Forward folding Pose" />
                         <p className='anxiety-pg-ind-content-of-anxiety'>
                         This pose offers a mind-body connection. Focus on deepening into the pose with long exhales.
                         </p>

                         <ol className='anxiety-pg-ind-ul-yoga' >
                             <li>Stand at the front or back of your mat, with your feet about hip-width distance apart.</li>
                             <li>Bend your knees slightly and hinge forward from the hips until your chest is against your thighs. Let your arms dangle forward, or place them on your shins, whichever is most comfortable for you.</li>
                             <li>As you inhale, think of lengthening your spine, bringing your head closer to the ground. As you exhale, focus on softening your chest and shoulders so you melt more fully into your thighs.  </li>
                            
                         </ol>
                        
                     </section>


         <section id="side-twist">
                       <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>7. Side Twist </h2>
                       <img src={yoga7th} className='yoga-act-imgs' alt="Forward folding Pose" />
                         <p className='anxiety-pg-ind-content-of-anxiety'>
                         A twist can give you a fresh perspective on how your body moves, Kristin says. This simple can help you turn inward, calming your mind.
                         </p>

                         <ol className='anxiety-pg-ind-ul-yoga'>
                             <li>Lie down on your back and bend your knees. Place the soles of your feet on the floor and position your arms out in a T shape, with your palms facing up. </li>
                             <li>Press into your feet to lift your hips slightly off the floor and shift them about an inch to your right. This helps your hips "stack" when you move into the twist, which takes pressure off your lower back. Lower your hips back down. </li>

                             <li>Cross your right leg over your left.  </li>

                             <li>Let your legs drop gently to the left as far as they'll go before your right shoulder comes off the floor.</li>

                             <li>Stay here for 30 seconds to a minute, then come back up and recenter your hips while uncrossing your legs. </li>

                             <li>Switch sides and repeat.  </li>
                            
                         </ol>
                        
                     </section>



                     <section id="tree-pose">
                         <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>8. Tree Pose (Vrksasana) </h2>
                         <img src={yoga8th} className='yoga-act-imgs' alt="Forward folding Pose" />
                         <p className='anxiety-pg-ind-content-of-anxiety'>
                         Although this is a balance pose, it also makes you feel grounded, which Kristin says is an important part of reducing anxious feelings.
                         </p>

                        <ol className='anxiety-pg-ind-ul-yoga'>
                             <li>Stand with your feet together and your knees slightly bent. Bring your hands to your hips or your palms together in front of your heart.</li>
                             <li>Shift your weight into your right foot and lift your left foot as you bend your left knee and open your knee to the left side. </li>
                             <li>Place the sole of your left foot against your ankle, calf, or upper thigh. Avoid placing your foot against your knee since this can create too much lateral pressure on your knee. </li>
                             <li>Raise your arms if it feels comfortable as a way to challenge your balance. </li>
                             <li>Hold for five breaths, then switch sides. </li>
                            
                         </ol>
                        
                     </section>


                     <section id="mountain">
                         <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>9. Mountain Pose (Tadasana) </h2>

                         <img src={yoga9th} className='yoga-act-imgs' alt="Forward folding Pose" />

                         <p className='anxiety-pg-ind-content-of-anxiety'>
                         This is another grounding pose and offers a good opportunity to deepen your breath, Kristin says. To feel more present in your body, try closing your eyes.
                         </p>

                         <ol className='anxiety-pg-ind-ul-yoga'>
                             <li>Stand with your feet either shoulder-width distance apart or hip-width distance apart, whichever makes you feel most comfortable. Put a slight bend in the knees. </li>
                             <li> Shrug your shoulders up by your ears, then imagine your shoulder blades coming together and relaxing downward. This will bring your shoulders into a neutral, relaxed position. </li>
                             <li>Your arms will hang by your sides. For an added shoulder release, face your palms forward. </li>
                             <li>Breathe here for 30 seconds to a minute, or longer if you feel like you're relaxing more with each breath. </li>
                            
                         </ol>
                        
                     </section>



                     <section id="sleep">
                         <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>10. Corpse Pose (Savasana) </h2>

                         <img src= {yoga10th} className='yoga-act-imgs' alt="Forward folding Pose" />

                         <p className='anxiety-pg-ind-content-of-anxiety'>
                         As a resting pose at the end of a class or a series of poses, this is a chance to relax all parts of your body and just let go, Kristin says. Take deep breaths and feel a sense of release in your body and your mind.
                         </p>
                       
                        
                     </section>

                </div>
            </div>
        </div>
    );
}

export default YogaAct;