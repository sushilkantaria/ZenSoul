import React from 'react';
import './Anxious.css';


function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function ActJ() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Journaling for Emotional Wellness  &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section yoga-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('Journaling for Emotional Wellness')}>Is Journaling important for Emotional Wellness</li>
                        <li onClick={() => scrollToSection('Journaling benefits')}>What Are the benefits of journaling ?</li>
                        <li onClick={() => scrollToSection('How to journal')}>How to journal ?</li>
                       
                        
                    </ul>
                </div>

                <div className="anxiety-pg-ind-section yoga-pg-ind-middle">
                    <section id="Journalin for Emotional Wellness">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>Is Journaling important for Emotional Wellness</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>

                        When you were a teenager, you might have kept a diary hidden under your mattress. It was a place to confess your struggles and fears without judgment or punishment. It likely felt good to get all of those thoughts and feelings out of your head and down on paper. The world seemed clearer.

                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        You may have stopped using a diary once you reached adulthood. But the concept and its benefits still apply as a grown up. Now it’s called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.
                        </p>

                    </section>

                    <section id="Journaling benefits">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>What Are benefits of Journaling ?</h2>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you:
                        </p>

                    
                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> <b>Reduce stress</b> </li>

                            <li> <b> Manage Anxiety  </b>  </li>

                            <li> <b>Cope with depression</b></li>

                        </ol>


                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Journaling helps control your symptoms and improve your mood by:
                        </p>

                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> Helping you prioritize problems, fears, and concerns </li>

                            <li>Tracking any symptoms day-to-day so that you can recognize triggers and learn ways to better control them </li>

                            <li>Providing an opportunity for positive self-talk and identifying negative thoughts and behaviors</li>

                        </ol>


                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        When you have a problem and you're stressed, keeping a journal can help you identify what’s causing that stress or anxiety. Once you’ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress.                        </p>

                        
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Keep in mind that journaling is just one aspect of a healthy lifestyle for better managing stress, anxiety, and mental health conditions. To get the most benefits, be sure you also:                        </p>
                        

                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> Relax and meditate each day. </li>

                            <li>Eat a healthy, balanced diet.</li>

                            <li>Exercise regularly—get in some activity every day.</li>

                            <li> Treat yourself to plenty of sleep each night. </li>
                            <li> Stay away from alcohol and drugs. </li>
                        </ol>


                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Use your journal to make sure you follow these guidelines daily.</p>

                    </section>





                    <section id="How to journal">
                        <h2 className='yoga-pg-ind-h2-heading-of-anxiety-center'>How to journal </h2>
                        
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Try these tips to help you get started with journaling: </p>

                        <ol className='anxiety-pg-ind-ul-yoga'>
                            <li> 
                                <b> Try to write every day. </b> Set aside a few minutes every day to write. This will help you to write in your journal regularly. </li>

                            <li> <b>Make it easy.</b> Keep a pen and paper handy at all times. Then when you want to write down your thoughts, you can. You can also keep a journal on your smartphone.</li>

                            <li> <b>Write or draw whatever feels right</b> Your journal doesn't need to follow any certain structure. It's your own private place to discuss and create whatever you want to express your feelings. Let the words and ideas flow freely. Don't worry about spelling mistakes or what other people might think.</li>

                            <li><b>Use your journal as you see fit.</b> You don't have to share your journal with anyone. If you do want to share some of your thoughts with trusted friends and loved ones, you could show them parts of your journal. </li>
                        </ol>


                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Keeping a journal helps you create order when your world feels like it’s in chaos. You get to know yourself by revealing your most private fears, thoughts, and feelings. Look at your writing time as personal relaxation time. It's a time when you can de-stress and wind down. Write in a place that's relaxing and soothing, maybe with a cup of tea. Look forward to your journaling time. And know that you're doing something good for your mind and body. </p>
                        
                       
                    </section>

                </div>
            </div>
        </div>
    );
}

export default ActJ;