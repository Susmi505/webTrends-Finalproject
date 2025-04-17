// Created by [Your Name]

import '../assets/css/style.css';

import React, { useState } from 'react';
import img1 from '../assets/images/art1.jpg';
import img2 from '../assets/images/art2.jpg';
import img3 from '../assets/images/art3.jpg';
import img4 from '../assets/images/art4.jpg';
import img5 from '../assets/images/art5.jpg';
import img6 from '../assets/images/art6.jpg';

const images = [img1, img2, img3, img4, img5,img6];
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imgSrc) => setSelectedImage(imgSrc);
  const closePopup = () => setSelectedImage(null);

  return (
    <div>
      {/* Banner */}
      <section className="gallery-banner">
        <h1>Our Art Gallery</h1>
        <p>Click on an artwork to view it in full size</p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <h1>Our Art Gallery</h1>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Art ${index + 1}`} onClick={() => openPopup(img)} />
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {selectedImage && (
        <div className="popup" onClick={closePopup}>
          <span className="close">&times;</span>
          <img className="popup-content" src={selectedImage} alt="Enlarged Art" />
        </div>
      )}
    </div>
  );
};


export default Gallery;
