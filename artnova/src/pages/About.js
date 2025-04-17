// Created by [Your Name]

import React from 'react';
import '../assets/css/style.css';

function About() {
  return (
    <>
   <section class="about-us">
    <div class="container">
        {/* <!-- Banner Section --> */}
        <div class="banner">
            <img src="assets/images/about-banner.jpg" alt="About Us Banner" />
            <div class="banner-text">
                <h1>About Us</h1>
                <p>Where Passion Meets Art</p>
            </div>
        </div>

        {/* <!-- About Content --> */}
        <div class="about-content">
            <h2>Who We Are</h2>
            <p>We are a passionate team of artists and curators, dedicated to bringing the finest art from local artists to the world. Our gallery features original paintings, sculptures, and digital art created by emerging and renowned artists. Our mission is to share our love for art with a wider audience, while providing a platform for artists to showcase their work.</p>
        </div>

        {/* <!-- Our Values Section --> */}
        <div class="our-values">
            <h2>Our Values</h2>
            <div class="values">
                <div class="value-item">
                    <h3>Creativity</h3>
                    <p>We foster creativity in everything we do, from the artwork we showcase to the experiences we create.</p>
                </div>
                <div class="value-item">
                    <h3>Quality</h3>
                    <p>We hold ourselves to the highest standards when selecting artwork and curating exhibitions to ensure the best quality.</p>
                </div>
                <div class="value-item">
                    <h3>Community</h3>
                    <p>Our gallery is a space where artists and art lovers come together to celebrate the beauty and power of art.</p>
                </div>
            </div>
        </div>

        {/* <!-- Meet the Team Section --> */}
        <div class="team">
            <h2>Meet the Team</h2>
            <div class="team-members">
                <div class="team-member">
                    <img src="assets/images/team1.jpg" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>Curator and Art Director</p>
                </div>
                <div class="team-member">
                    <img src="assets/images/team2.jpg" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Lead Artist and Exhibitor</p>
                </div>
                <div class="team-member">
                    <img src="assets/images/team3.jpg" alt="Team Member 3" />
                    <h3>Michael Brown</h3>
                    <p>Gallery Manager</p>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  );
}

export default About;
