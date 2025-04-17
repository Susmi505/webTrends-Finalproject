import React from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
        <section className="banner">
          <div className="banner-content">
            <h1>Experience the Fusion of Art and Emotion</h1>
            <p>Dive into our curated collections and exhibitions</p>
            <button>Explore Gallery</button>
          </div>
        </section>
  
        <section className="about-home">
          <div className="about-content">
            <img src={require('../assets/images/featured.jpg')} alt="Gallery" />
            <div>
              <h2>Our Story</h2>
              <p>ArtVibe is a modern digital space that celebrates artistic expression. Our mission is to bring diverse art collections to the fingertips of art lovers worldwide.</p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
  
        <section className="collections">
          <h2>Featured Collections</h2>
          <div className="grid">
            <div className="collection-card">
              <img src={require('../assets/images/art1.jpg')} alt="Art 1" />
              <h3>Abstract Dreams</h3>
              <p>by Emma Rose</p>
              <button>View Details</button>
            </div>
            <div className="collection-card">
              <img src={require('../assets/images/art2.jpg')} alt="Art 2" />
              <h3>Nature’s Pulse</h3>
              <p>by Liam Brooks</p>
              <button>View Details</button>
            </div>
            <div className="collection-card">
              <img src={require('../assets/images/art3.jpg')} alt="Art 3" />
              <h3>Urban Symphony</h3>
              <p>by Ava Smith</p>
              <button>View Details</button>
            </div>
          </div>
        </section>
  
        <section className="exhibitions">
          <h2>Upcoming Exhibitions</h2>
          <div className="exhibition-list">
            <div className="exhibition">
              <img src={require('../assets/images/exb1.jpg')} alt="Exhibition 1" />
              <div>
                <h3>Light & Shadow</h3>
                <p>May 20 - June 10</p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="exhibition">
              <img src={require('../assets/images/exb2.jpg')} alt="Exhibition 2" />
              <div>
                <h3>Whispers of Nature</h3>
                <p>June 15 - July 5</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
  
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 ArtVibe Gallery. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Home;
