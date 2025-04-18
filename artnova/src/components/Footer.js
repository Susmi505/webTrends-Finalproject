// created by Aparna
import React from 'react'
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-brand">
            <div className="footer-logo">
                <span className="logo-accent">Art</span>Nova
            </div>
            <p className="tagline">Where art meets emotion</p>
            <div className="social-icons">
                <a href="#" className="social-icon">In</a>
                <a href="#" className="social-icon">Fb</a>
                <a href="#" className="social-icon">Ig</a>
                <a href="#" className="social-icon">Tw</a>
            </div>
        </div>
        <div className="footer-links-container">
            <div className="footer-links-column">
                <h4>Explore</h4>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </div>
        
            <div className="footer-links-column">
                <h4>Contact</h4>
                <p>62A churchill street, Waterloo</p>
                <p>info@artnova.com</p>
                <p>+1 (555) 123-4567</p>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 ArtNova Gallery. All rights reserved.</p>
    </div>
</footer>
  )
}
