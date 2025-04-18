// Created by [Your Name]

import '../assets/css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/art1.jpg';
import img2 from '../assets/images/art2.jpg';
import img3 from '../assets/images/art3.jpg';
import img4 from '../assets/images/art4.jpg';
import img5 from '../assets/images/art5.jpg';
import img6 from '../assets/images/art6.jpg';

const images = [
  { src: img1, title: "Abstract Vision", artist: "Elena Clarke" },
  { src: img2, title: "Urban Dreams", artist: "Marcus Webb" },
  { src: img3, title: "Natural Harmony", artist: "Sofia Patel" },
  { src: img4, title: "Geometric Wonder", artist: "James Lin" },
  { src: img5, title: "Coastal Serenity", artist: "Olivia Torres" },
  { src: img6, title: "Modern Expression", artist: "David Chen" }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const openPopup = (img) => setSelectedImage(img);
  const closePopup = () => setSelectedImage(null);

  return (
    <div className="gallery-page">
      {/* Banner */}
     <section className="about-hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About ArtVibe Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Where Passion Meets Artistic Expression
              </motion.p>
            </div>
          </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <h1>Featured Artworks</h1>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              className="gallery-item" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="image-container" onClick={() => openPopup(img)}>
                <img src={img.src} alt={img.title} />
                <div className="image-overlay">
                  <h3>{img.title}</h3>
                  <p>by {img.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {selectedImage && (
        <motion.div 
          className="popup" 
          onClick={closePopup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="close">&times;</span>
          <motion.div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <img className="popup-content" src={selectedImage.src} alt={selectedImage.title} />
            <div className="popup-info">
              <h3>{selectedImage.title}</h3>
              <p>Artist: {selectedImage.artist}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;