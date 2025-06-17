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

function MoodSwingsPg() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">It's okay to have Mood - Swings &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section anxiety-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('What are Mood Swings?')}>What are Mood Swings?</li>
                        {/* <li onClick={() => scrollToSection('signs-and-symptoms')}>What are the signs and symptoms of Anxiety?</li> */}
                        <li onClick={() => scrollToSection('Common causes of mood swings:')}>Common causes of mood swings:</li>
                        {/* <li onClick={() => scrollToSection('What are the signs of Stress')}>What are the signs of Stress?</li> */}
                        <li onClick={() => scrollToSection('Ways to help reduce mood swings:')}>Ways to help reduce mood swings:</li>
                        {/* <li onClick={() => scrollToSection('Does everyone reacts to stress the same?')}>Does everyone reacts to stress the same?</li> */}
                        <li onClick={() => scrollToSection('Conclusion')}>Conclusion</li>
                        <li onClick={() => scrollToSection('blogs')}>Blogs related to Mood Swings.</li>
                    </ul>
                </div>
                <div className="anxiety-pg-ind-section anxiety-pg-ind-middle">
                    <section id="What are Mood Swings?">
                        <h2 className='anxiety-pg-ind-heading-of-anxiety'>What are Mood Swings?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Experiencing “moodiness” or irritability every now and then is completely normal. It can happen when you’re feeling stressed, hungry, or tired. However, experiencing mood swings frequently and consistently may indicate that you have an underlying health problem.
                        </p>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Mood swings in men and mood swings in women can have a major impact on your quality of life, mental health, and overall well-being, but identifying their root cause can empower you to make healthy lifestyle changes or seek the treatment you need to start feeling better. Here, we’ll go over potential causes of mood swings, related health conditions, common questions, and more—so keep reading.                        
                        </p>
                    </section>

                    <section id="Common causes of mood swings:">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Common causes of mood swings:</h2>
                        <strong>Nutritional deficiency - </strong>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Common symptoms of nutritional deficiencies include irritability, mood swings, fatigue, brain fog, and depression. To help prevent diet-related mood changes, start eating less sugar and fewer processed foods, and eat a higher amount of whole foods such as fruits, vegetables, nuts, seeds, leafy greens, and lean protein. If you’re not sure whether your diet is contributing to mood swings, be sure to consult with a healthcare provider.                           
                        </p>

                        <strong>Perimenopause and menopause - </strong>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Perimenopause is the transition period leading up to a woman’s last menstrual period, typically beginning in her mid- to late 40s and lasting several years. During this phase, women may experience a range of symptoms, including irregular menstrual periods, depression, intense mood swings, hot flashes, and weight gain. Mood swings in perimenopause are often attributed to fluctuations in estrogen, progesterone, and serotonin—a neurotransmitter that helps regulate mood. If you suspect that these mood swings are linked to perimenopause, consider taking an at-home Perimenopause Test. This test can measure hormone levels affected by this transitional period and help determine if hormonal changes are contributing to your symptoms.                          
                        </p>
                        
                        <strong>Thyroid conditions - </strong>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        An imbalance in thyroid hormones can lead to mood swings and other issues if not treated. Both high and low thyroid hormone levels can disrupt the production of other hormones in the body. Hyperthyroidism, which affects about 1.2% of people in the U.S., involves an overactive thyroid that produces too many hormones. On the other hand, hypothyroidism, affecting 4.6% of people in the U.S., involves an underactive thyroid that produces too few hormones. Common symptoms of thyroid problems include fatigue, depression, mental fog, and constipation. If left untreated, these disorders can increase the risk of osteoporosis, stroke, and heart failure. To find out if a thyroid condition is causing your mood swings, consider discussing it with your healthcare provider and taking an at-home Thyroid Test.                      
                        </p>

                        <strong>Chronic stress - </strong>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Stress is a natural response to threats, danger, and difficult situations. When you're stressed, your body releases higher levels of cortisol and adrenaline to help you cope, while suppressing other hormones that regulate mood, hunger, and reproduction. Once the stressful event is over, cortisol levels usually drop, and hormone balance is restored. However, with chronic stress, cortisol levels can remain elevated for extended periods, leading to a hormonal imbalance that may cause severe mood swings. Untreated chronic stress can also increase the risk of mental health disorders, heart disease, gastrointestinal issues, and sleep disturbances. If you suspect chronic stress is affecting your mood and sleep, consider taking an at-home Sleep & <Link to="#" >Stress Test</Link> to check your cortisol levels and determine if it's time to consult your healthcare provider.                        
                        </p>

                        <strong>Low blood sugar - </strong>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Skipping meals or eating small food portions can make you feel irritable, short-tempered, and moody due to low blood sugar, or glucose. Fluctuations in glucose can upset the balance of other hormones to cause rapid mood swings and other symptoms including fatigue, anxiety, shakiness, and mental confusion.                        
                        </p>

                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        If your mood swings tend to occur after long periods of going without food, make a conscious effort to eat more regularly throughout the day. Keep healthy snacks on-hand such as nuts, apples, or carrots to help you maintain your blood glucose and energy levels until your next meal.                      
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

                    <section id="Ways to help reduce mood swings:">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Ways to help reduce mood swings:</h2>
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

                    

                    <section id="Conclusion">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety'>Conclusion</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                        Experiencing occasional moodiness or irritability is normal, but frequent and intense mood swings might indicate an underlying health issue. Common causes include stress, hormonal changes, nutritional deficiencies, thyroid imbalances, and certain medications. Identifying the root cause is essential for effective management and improving quality of life. Tests such as the Perimenopause Test, Thyroid Test, and Sleep & Stress Test can be useful tools in determining whether these factors are contributing to your mood swings. If symptoms persist or significantly impact your well-being, consulting with a healthcare provider is crucial for proper diagnosis and treatment.
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

export default MoodSwingsPg;