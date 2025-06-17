import React from 'react';
import './Anxious.css';
import { Link, useLocation } from 'react-router-dom';

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

function AnxietyPg() {
    return (
        <div className="anxiety-pg-ind-container">
            <h2 className="anxiety-pg-ind-heading">Let's Get Rid of It Together &#129309;</h2>
            <div className="anxiety-pg-ind-sections">
                <div className="anxiety-pg-ind-section anxiety-pg-ind-left">
                    <ul className="anxiety-pg-ind-left-list">
                        <li onClick={() => scrollToSection('what-is-anxiety')}>What is Anxiety?</li>
                        <li onClick={() => scrollToSection('signs-and-symptoms')}>What are the signs and symptoms of Anxiety?</li>
                        <li onClick={() => scrollToSection('contributing-factors')}>What are the contributing factors of Anxiety?</li>
                        <li onClick={() => scrollToSection('solutions')}>Solutions provided by us.</li>
                        <li onClick={() => scrollToSection('clinical-trials')}>How can one find a clinical trial for Anxiety?</li>
                        <li onClick={() => scrollToSection('blogs')}>Blogs related to Anxiety.</li>
                    </ul>
                </div>
                <div className="anxiety-pg-ind-section anxiety-pg-ind-middle">
                    <section id="what-is-anxiety">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety-center'>What is Anxiety?</h2> 
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Occasional anxiety is a normal part of life. Many people worry about things such as health, money, or family problems. But anxiety disorders involve more than temporary worry or fear. For people with an anxiety disorder, the anxiety does not go away and can get worse over time. The symptoms can interfere with daily activities such as job performance, schoolwork, and relationships.
                        </p>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            There are several types of anxiety disorders, including generalized anxiety disorder, panic disorder, social anxiety disorder, and various phobia-related disorders.
                        </p>
                    </section>

                    <section id="signs-and-symptoms">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety-center'>What are the signs and symptoms of anxiety?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            People with an anxiety disorder may experience excessive fear or worry about a specific situation (for example, a panic attack or social situation) or, in the case of generalized anxiety disorder, about a broad range of everyday situations. They typically experience these symptoms over an extended period – at least several months. Usually, they avoid the situations that make them anxious.
                        </p>
                        <h3 className='anxiety-pg-ind-h3'>Other symptoms of anxiety disorders may include:</h3>
                        <ul className='anxiety-pg-ind-ul'>
                            <li>Trouble concentrating or making decisions</li>
                            <li>Feeling irritable, tense, or restless</li>
                            <li>Experiencing nausea or abdominal distress</li>
                            <li>Having heart palpitations</li>
                            <li>Sweating, trembling, or shaking</li>
                            <li>Trouble sleeping</li>
                            <li>Having a sense of impending danger, panic, or doom.</li>
                        </ul>
                    </section>

                    <section id="contributing-factors">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety-center'>What are the contributing factors of anxiety?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Anxiety disorders, like other mental health conditions, result from a complex interaction of social, psychological, and biological factors. Anyone can have an anxiety disorder, but people who have lived through abuse, severe losses, or other adverse experiences are more likely to develop one.
                        </p>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Anxiety disorders are closely related to and affected by physical health. Many of the impacts of anxiety (such as physical tension, nervous system hyperactivity, or harmful use of alcohol) are also known risk factors for diseases such as cardiovascular disease. In turn, people with these diseases may also find themselves experiencing anxiety disorders due to the difficulties associated with managing their conditions.
                        </p>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Effective community-based approaches to prevent anxiety include parental education and school-based programs to enhance social and emotional learning and build positive coping in children and adolescents. Exercise programs can also be effective in preventing anxiety disorders in adults.
                        </p>
                    </section>

                    <section id="solutions">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety-center'>Solutions provided by us:</h2>
                        <ul className='anxiety-pg-ind-solutions-list'>
                            <Link to="/JournalPgFeelings" ><li className='anxiety-pg-ind-solutions-list-sublist'>Journalling </li></Link>
                            <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Activities specially curated for you.</li></Link>
                            <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Meditation - a very helpful method.</li></Link>
                            <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Activities for somatic release.</li></Link>
                            <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Podcasts for you.</li></Link>
                            {/* <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Playlists</li></Link> */}
                            <Link to="#" ><li className='anxiety-pg-ind-solutions-list-sublist'>Sounds of nature.</li></Link>
                        </ul>
                    </section>

                    <section id="clinical-trials">
                        <h2 className='anxiety-pg-ind-h2-heading-of-anxiety-center'>How can I find a clinical trial for anxiety?</h2>
                        <p className='anxiety-pg-ind-content-of-anxiety'>
                            Clinical trials are research studies that look at new ways to prevent, detect, or treat diseases and conditions. The goal of clinical trials is to determine if a new test or treatment works and is safe. Although individuals may benefit from being part of a clinical trial, participants should be aware that the primary purpose of a clinical trial is to gain new scientific knowledge so that others may be better helped in the future.
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

export default AnxietyPg;