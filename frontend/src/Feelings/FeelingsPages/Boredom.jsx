import React from 'react';
import './Anxious.css';
import { Link ,useLocation} from 'react-router-dom';


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

function BoredomPg() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">We need to <strike>kill </strike><strong><span> , </span>Embrace</strong> this Boredom together ! &#x1F917;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section anxiety-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('What is Boredom')}>What is Boredom?</li>
                        <li onClick={() => scrollToSection('The Science of Boredom')}>The Science of Boredom:</li>
                        <li onClick={() => scrollToSection('How to cope with boredom?')}>How to cope with boredom:</li>
                        <li onClick={() => scrollToSection('Conclusion')}>Conclusion</li>
                        <li onClick={() => scrollToSection('blogs')}>Blogs related to Stress.</li>
                    </ul>
                </div>
                <div className="anxiety-pg-ind-section anxiety-pg-ind-middle">
                    <section id="What is Boredom">
                        <h2 className='anxiety-pg-ind-heading-of-anxiety'>What is Boredom?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Boredom is a state of mind characterized by a lack of interest or engagement with one's current activities or surroundings. It often arises when a person feels that their tasks or experiences are monotonous, unchallenging, or unfulfilling. Boredom can occur when there is a perceived absence of stimulation or meaningful activity, leading to feelings of restlessness, dissatisfaction, or frustration. While boredom can sometimes be a temporary and mild feeling, it can also become more pronounced if it persists over time, potentially affecting mood and motivation.
                        </p>

                    </section>

                    <section id="The Science of Boredom">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>The Science of Boredom:</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Boredom is a result of how our brain handles stimulation. When we're engaged in exciting or rewarding activities, our brain releases chemicals like dopamine that make us feel good. However, if we’re stuck in repetitive or unstimulating situations, our brain doesn’t get the same level of pleasure, which leads to feelings of boredom. Essentially, boredom happens when our brain's reward system is not being activated as it normally would.
                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        On a cognitive level, boredom occurs when there's a mismatch between what we expect from an activity and what it actually provides. Our brain is always on the lookout for new and interesting experiences. If something feels too monotonous or unchallenging, our brain struggles to stay focused, which can make us feel restless and uninterested. This explains why boredom can make us feel like we need to seek out new activities or challenges to regain a sense of engagement and satisfaction.
                        </p>

                    </section>

                    <section id="How to cope with boredom?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>How to cope with boredom?</h2>
                        <ul>
                            <Link to="#" ><li>Journalling </li></Link>
                            <Link to="#" ><li>Activities specially curated for your mood swings.</li></Link> {/* https://www.alivewithideas.com/blog/a-boring-blog-about-doing-nothing/ */}
                            <Link to="#" ><li>Meditation - a very helpful method.</li></Link>
                            {/* <Link to="#" ><li>Activities for somatic release.</li></Link> */}
                            <Link to="#" ><li>Listen to Podcasts.</li></Link>
                            <Link to="#" ><li>Playlists</li></Link>
                            <Link to="#" ><li>Sit with nature.</li></Link>
                        </ul>
                    </section>


                    <section id="Conclusion">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Conclusion</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            <strong>Embrace Boredom</strong>
                        Embracing boredom can be a surprisingly enriching experience. Instead of viewing boredom as something negative, it can be seen as a valuable opportunity for introspection and self-discovery. When we allow ourselves to experience moments of boredom, we create space for our minds to wander and reflect. This unstructured time can lead to new insights, creative ideas, and a deeper understanding of ourselves. By accepting boredom rather than resisting it, we open ourselves to the possibility of growth and self-awareness.
                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        In a world that constantly demands our attention and provides endless distractions, embracing boredom helps us reconnect with our inner selves. It encourages us to slow down and appreciate the simplicity of the present moment. Without the constant bombardment of stimuli, we have a chance to engage in meaningful thought, pursue passions that may have been overlooked, or simply enjoy the tranquility of stillness. This gentle acceptance of boredom allows us to find beauty in the ordinary and gain a fresh perspective on our lives.
                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Moreover, embracing boredom can foster resilience and adaptability. Learning to be comfortable with inactivity and unproductive moments helps us develop patience and mindfulness. Instead of filling every minute with tasks or entertainment, we become more adept at navigating life's quiet periods. This skill not only enhances our emotional well-being but also prepares us to handle challenges with a calm and collected mindset. By making peace with boredom, we enrich our lives and cultivate a more balanced and fulfilling existence.
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

export default BoredomPg;