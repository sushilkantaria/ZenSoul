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

function FrustratedPg() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Don't let Frustration take a toll over you ! &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section anxiety-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('what-is-Frustration')}>What is Frustration?</li>
                        {/* <li onClick={() => scrollToSection('signs-and-symptoms')}>What are the signs and symptoms of Anxiety?</li> */}
                        <li onClick={() => scrollToSection('Types of Frsutration: ?')}>Types of Frsutration:</li>
                        <li onClick={() => scrollToSection('Psychological and Physiological effects ')}>Psychological and Physiological effects of Frustration</li>
                        <li onClick={() => scrollToSection('Let Zensoul help you in relieving some of your frustration:')}>Let Zensoul help you in relieving some of your frustration:</li>
                        <li onClick={() => scrollToSection('Problematic Feelings or Problematic Actions?')}>Problematic Feelings or Problematic Actions?</li>
                        <li onClick={() => scrollToSection('Conclusion')}>Conclusion</li>
                        <li onClick={() => scrollToSection('blogs')}>Blogs related to Frustration.</li>
                    </ul>
                </div>
                <div className="anxiety-pg-ind-section anxiety-pg-ind-middle">
                    <section id="what-is-Frustration">
                        <h2 className='anxiety-pg-ind-heading-of-anxiety'>What is Frustration?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Feeling frustrated is an entirely natural response when confronted with impediments that thwart our aspirations or expectations. This emotional upheaval often emerges when we encounter unforeseen obstacles, whether they be technical glitches, miscommunications, or other disruptive factors beyond our immediate control. It’s crucial to acknowledge these sentiments as legitimate, yet equally important to maintain a focus on devising strategic solutions and advancing towards our goals. By identifying and addressing the root causes of frustration, and leveraging available resources and support, we can transform these challenges into opportunities for growth and progress.</p>
                        
                    </section>

                    <section id="Types of Frsutration: ?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Types of Frsutration:</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stress affects both the mind and the body. A little bit of stress is good and can help us perform daily activities. Too much stress can cause physical and mental health problems. Learning how to cope with stress can help us feel less overwhelmed and support our mental and physical well-being.
                        </p>

                        <h3>Types of Frustration:</h3>
                            <ul>
        <li>
          <strong>Situational Frustration:</strong> Arises from specific events or circumstances, such as delays, conflicts, or unforeseen obstacles.
        </li>
        <li>
          <strong>Personal Frustration:</strong> Involves internal conflicts or unmet personal goals, often linked to self-expectations or personal standards.
        </li>
        <li>
          <strong>Relational Frustration:</strong> Occurs in interactions with others, stemming from misunderstandings, conflicts, or unfulfilled expectations in relationships.
        </li>
        <li>
          <strong>Existential Frustration:</strong> Relates to broader questions about life’s meaning or purpose, often manifesting in feelings of dissatisfaction or disillusionment.
        </li>
        <li>
          <strong>Professional Frustration:</strong> Emerges from challenges in the workplace, such as lack of recognition, career stagnation, or work-related stress.
        </li>
                            </ul>
                    </section>

                    <section id="Psychological and Physiological effects ">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Psychological and Physiological effects of Frustration :</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Frustration sometimes manifests with profound psychological and physiological effects on the human brain. Psychologically, frustration can induce a cascade of stress responses, engendering feelings of helplessness and heightened anxiety. This emotional strain may impair cognitive functions such as concentration and decision-making, leaving us feeling overwhelmed. On the physiological side, frustration triggers the release of stress hormones like cortisol, which can impact brain function and exacerbate feelings of agitation. Persistent frustration may even contribute to long-term health issues, such as hypertension or immune system suppression.
                        </p>
                       
                    </section>

                    <section id="Let Zensoul help you in relieving some of your frustration:">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Let Zensoul help you in relieving some of your frustration::</h2>
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

                    <section id="Problematic Feelings or Problematic Actions?">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Problematic Feelings or Problematic Actions?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Some emotions have a bad reputation because of how people behave when they’re feeling certain ways.  Anger is a good example... it’s very common for us to think that it’s bad to feel angry because we associate it with violence and other problematic kinds of behavior. This leads to classifying emotions as bad or good, positive or negative… then leading us to want to resist any kind of discomfort and emotion that brings it on. Frustration is not exempt from that list of blacklisted emotions. Some people do and say unkind things, which only adds to the negative reputation frustration carries. Contrary to popular belief, I think that all emotions can be helpful.  While it may not feel great to be frustrated, the emotional experience of frustration can tell us a whole lot about ourselves in relation to the world around us.  In particular, the context in which we experience frustration can tell us:
                        </p>

                        <ul>
                            <li>What kinds of situations we feel challenged in</li>
                            <li>What really matters to us.</li>
                            <li>Different aspects of our lives that may or may not be working for us </li>
                            
                        </ul>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Not unlike other emotions, frustration can say a whole lot about our position on things in our lives.  From my perspective, this makes it a helpful thing to pay attention to, just like the sensations we experience when we’re hungry or thirsty. The dark side of frustration hinges on how people respond when they feel that way. In my therapy practice, people share stories of punching walls, destroying property, throwing and breaking things, putting others down and being aggressive, and even hitting other people. These are the kinds of actions that people take issue with when they say they have a problem with frustration.
                        </p>
                    </section>

                    <section id="Conclusion">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Conclusion</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Frustration can tell us when there are factors in our life to be concerned about, which puts you in a better position to address those things. If left unaddressed, some people find their sense of frustration to grow and become increasingly distressing. This is partially why frustration has developed a bad reputation, along with the fact that some people take up problematic behaviors when they feel frustrated. By acknowledging frustration as valid and expressing it in more preferred ways, it can really become a spotlight directed on those aspects of ourselves and our lives that are important to us.
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

export default FrustratedPg;