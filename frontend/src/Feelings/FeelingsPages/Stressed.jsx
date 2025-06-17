import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import './Anxious.css';

function scrollToSection(id) {
    const scrollContainer = document.querySelector('.anxiety-pg-ind-middle');
    const element = document.getElementById(id);
    if (element && scrollContainer) {
        const offsetTop = element.offsetTop;
        scrollContainer.scrollTo({
            top: offsetTop - scrollContainer.offsetTop,
            behavior: 'smooth'
        });
    }
}

function StressedPg() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Let's Destress our lives! &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section anxiety-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('what-is-stress')}>What is Stress?</li>
                        {/* <li onClick={() => scrollToSection('signs-and-symptoms')}>What are the signs and symptoms of Anxiety?</li> */}
                        <li onClick={() => scrollToSection('How does stress affect us ?')}>How does stress affect us ?</li>
                        <li onClick={() => scrollToSection('What are the signs of Stress')}>What are the signs of Stress?</li>
                        <li onClick={() => scrollToSection('Ways to manage Stress:')}>Some solutions to manage Stress:</li>
                        <li onClick={() => scrollToSection('Does everyone reacts to stress the same?')}>Does everyone reacts to stress the same?</li>
                        <li onClick={() => scrollToSection('Should we expect to be stressed in difficult situations?')}>Should we expect to be stressed in difficult situations?</li>
                        <li onClick={() => scrollToSection('blogs')}>Blogs related to Stress.</li>
                    </ul>
                </div>
                <div className="anxiety-pg-ind-section anxiety-pg-ind-middle">
                    <section id="what-is-stress">
                        <h2 className='anxiety-pg-ind-heading-of-anxiety'>What is Stress?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stress is a natural part of life, something we all experience when faced with challenges or uncertainties. It’s our body's way of signaling that something needs our attention, a reminder that we might need to take a step back or address a pressing issue. Just as our bodies alert us to potential dangers, stress serves as a cue that we need to navigate our circumstances carefully. A small amount of stress can even be beneficial, pushing us to stay alert and motivated. However, when stress becomes overwhelming, it can take a toll on our well-being, affecting our mood, health, and overall happiness.</p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Just as a garden needs sunlight, water, and attention to thrive, our minds and bodies need consistent care to maintain a sense of inner peace. By investing in ourselves and learning how to handle stress effectively, we create a more harmonious inner landscape. So let’s take the time to discover and apply ways to nurture our well-being, transforming stress from a burdensome force into an opportunity for growth and self-improvement.
                        </p>
                    </section>

                    <section id="How does stress affect us ?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>How does stress affect us ?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stress affects both the mind and the body. A little bit of stress is good and can help us perform daily activities. Too much stress can cause physical and mental health problems. Learning how to cope with stress can help us feel less overwhelmed and support our mental and physical well-being.
                        </p>
                    </section>

                    <section id="What are the signs of Stress">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>What are the signs of Stress ?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stress makes it hard for us to relax and can come with a range of emotions, including anxiety and irritability. When stressed, we may find it difficult to concentrate. We may experience headaches or other body pains, an upset stomach or trouble sleeping. We may find we lose our appetite or eat more than usual. Chronic stress can worsen pre-existing health problems and may increase our use of alcohol, tobacco and other substances.
                        </p>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stressful situations can also cause or exacerbate mental health conditions, most commonly anxiety and depression, which require access to health care. When we suffer from a mental health condition, it may be because our symptoms of stress have become persistent and have started affecting our daily functioning, including at work or school.
                        </p>
                       
                    </section>

                    <section id="Ways to manage Stress:">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Some solutions to manage Stress:</h2>
                        <ul>
                            <Link to="#" ><li>Journalling </li></Link>
                            <Link to="#" ><li>Activities specially curated for your mood swings.</li></Link>
                            <Link to="#" ><li>Meditation - a very helpful method.</li></Link>
                            <Link to="#" ><li>Activities for somatic release.</li></Link>
                            <Link to="#" ><li>Podcasts for you.</li></Link>
                            <Link to="#" ><li>Playlists</li></Link>
                            <Link to="#" ><li>Sounds of nature.</li></Link>
                        </ul>
                    </section>

                    <section id="Does everyone reacts to stress the same?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Does everyone reacts to stress the same?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Not everyone reacts to stress in the same way—our responses can vary just like flowers in a garden each have their unique needs. Some may feel motivated by stress, using it as a catalyst for action, while others might find it overwhelming, affecting their daily lives. Understanding these differences is crucial, as each person has their own ways of coping. By recognizing and respecting these individual reactions, and offering compassion and support, we can better manage stress and help ourselves and others flourish, even in challenging times.
                        </p>
                    </section>

                    <section id="Should we expect to be stressed in difficult situations?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Should we expect to be stressed in difficult situations?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Yes, it is natural to feel stressed in challenging situations such as job interviews, school exams, unrealistic workloads, an insecure job, or conflict with family, friends or colleagues. For many people stress reduces over time as the situation improves or as they learn to cope emotionally with the situation. Stress tends to be widespread during events such as major economic crises, disease outbreaks, natural disasters, war, and community violence. 
                        </p>
                    </section>


                    <section id="blogs">
                        <div className="anxiety-pg-ind-card-row">
                            <div className="anxiety-pg-ind-card">
                                <a href="blog-link-1">
                                    <img src="https://via.placeholder.com/356x250" alt="Blog 1" className="anxiety-pg-ind-card-img" />
                                    <h3 className="anxiety-pg-ind-card-title">Blog Title 1</h3>
                                </a>
                            </div>
                            <div className="anxiety-pg-ind-card">
                                <a href="blog-link-2">
                                    <img src="https://via.placeholder.com/356x250" alt="Blog 2" className="anxiety-pg-ind-card-img" />
                                    <h3 className="anxiety-pg-ind-card-title">Blog Title 2</h3>
                                </a>
                            </div>
                        </div>
                        <div className="anxiety-pg-ind-card-row">
                            <div className="anxiety-pg-ind-card">
                                <a href="blog-link-3">
                                    <img src="https://via.placeholder.com/356x250" alt="Blog 3" className="anxiety-pg-ind-card-img" />
                                    <h3 className="anxiety-pg-ind-card-title">Blog Title 3</h3>
                                </a>
                            </div>
                            <div className="anxiety-pg-ind-card">
                                <a href="blog-link-4">
                                    <img src="https://via.placeholder.com/356x250" alt="Blog 4" className="anxiety-pg-ind-card-img" />
                                    <h3 className="anxiety-pg-ind-card-title">Blog Title 4</h3>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
               
            </div>
        </div>
    );
}

export default StressedPg;