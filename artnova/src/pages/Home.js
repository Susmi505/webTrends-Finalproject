import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

function Home() {


    return (
        <div className="home">
            <section className="banner">
                <div className="banner-content">
                    <h1><span className="highlight">Experience</span> the Fusion of Art and Emotion</h1>
                    <p>Dive into our curated collections and exhibitions that celebrate artistic diversity</p>
                    <div className="cta-container">
                        <button className="primary-btn">Explore Gallery</button>
                        <button className="secondary-btn">Meet Artists</button>
                    </div>
                </div>
            </section>

            <section className="about-home">
                <div className="about-content">
                    <div className="about-image">
                        <img src={require('../assets/images/featured.jpg')} alt="Gallery" />
                        <div className="accent-shape"></div>
                    </div>
                    <div className="about-text">
                        <h2>Our <span className="highlight">Story</span></h2>
                        <p>ArtNova is a modern digital space that celebrates artistic expression. Our mission is to bring diverse art collections to the fingertips of art lovers worldwide.</p>
                        <p className="subtle-text">Founded in 2022, we've curated works from over 500 artists across the globe.</p>
                        <button className="outline-btn">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="collections">
                <div className="section-header">
                    <h2>Featured <span className="highlight">Collections</span></h2>
                    <p className="section-subtitle">Explore our most popular art pieces from talented artists</p>
                </div>
                <div className="grid">
                    <div className="collection-card">
                        <div className="card-image">
                            <img src={require('../assets/images/art1.jpg')} alt="Art 1" />
                            <div className="overlay">
                                <button className="view-btn">View</button>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Abstract Dreams</h3>
                            <p className="artist">by Emma Rose</p>
                            <p className="description">A journey through color and emotion in abstract form</p>
                            <button className="text-btn">View Details <span className="arrow">→</span></button>
                        </div>
                    </div>
                    <div className="collection-card">
                        <div className="card-image">
                            <img src={require('../assets/images/art2.jpg')} alt="Art 2" />
                            <div className="overlay">
                                <button className="view-btn">View</button>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Nature's Pulse</h3>
                            <p className="artist">by Liam Brooks</p>
                            <p className="description">Exploring the rhythmic patterns found in natural landscapes</p>
                            <button className="text-btn">View Details <span className="arrow">→</span></button>
                        </div>
                    </div>
                    <div className="collection-card">
                        <div className="card-image">
                            <img src={require('../assets/images/art3.jpg')} alt="Art 3" />
                            <div className="overlay">
                                <button className="view-btn">View</button>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Urban Symphony</h3>
                            <p className="artist">by Ava Smith</p>
                            <p className="description">The harmonious chaos of metropolitan life captured on canvas</p>
                            <button className="text-btn">View Details <span className="arrow">→</span></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="exhibitions">
                <div className="section-header">
                    <h2>Upcoming <span className="highlight">Exhibitions</span></h2>
                    <p className="section-subtitle">Mark your calendars for these exceptional art events</p>
                </div>
                <div className="exhibition-list">
                    <div className="exhibition">
                        <div className="exhibition-image">
                            <img src={require('../assets/images/exb1.jpg')} alt="Exhibition 1" />
                            <div className="date-badge">
                                <span className="month">May</span>
                                <span className="day">20</span>
                            </div>
                        </div>
                        <div className="exhibition-content">
                            <h3>Light & Shadow</h3>
                            <p className="exhibition-date">May 20 - June 10, 2025</p>
                            <p className="exhibition-desc">An exploration of contrast and duality through various artistic mediums</p>
                            <button className="primary-btn small">Learn More</button>
                        </div>
                    </div>
                    <div className="exhibition">
                        <div className="exhibition-image">
                            <img src={require('../assets/images/exb2.jpg')} alt="Exhibition 2" />
                            <div className="date-badge">
                                <span className="month">Jun</span>
                                <span className="day">15</span>
                            </div>
                        </div>
                        <div className="exhibition-content">
                            <h3>Whispers of Nature</h3>
                            <p className="exhibition-date">June 15 - July 5, 2025</p>
                            <p className="exhibition-desc">A celebration of the subtle beauty found in natural elements</p>
                            <button className="primary-btn small">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div className="newsletter-content">
                    <h2>Stay <span className="highlight">Inspired</span></h2>
                    <p>Subscribe to our newsletter for exhibition updates and exclusive content</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit" className="primary-btn">Subscribe</button>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Home;