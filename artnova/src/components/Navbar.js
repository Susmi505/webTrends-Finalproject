// Created by Susmi Rani

import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
      // State for navbar transparency effect
      const [scrolled, setScrolled] = useState(false);
    
      // Handling scroll effect for navbar
      useEffect(() => {
          const handleScroll = () => {
              const isScrolled = window.scrollY > 50;
              if (isScrolled !== scrolled) {
                  setScrolled(isScrolled);
              }
          };
          
          window.addEventListener('scroll', handleScroll);
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, [scrolled]);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="logo">
        <span className="logo-accent">Art</span>Nova
    </div>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
  );
}

export default Navbar;
