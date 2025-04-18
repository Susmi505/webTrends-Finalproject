// Created by Divyang

import React,{useState} from 'react';
import '../assets/css/style.css';
import { motion } from 'framer-motion';
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    // Simulate successful submission
    setIsSubmitted(true);
    setError(null);

    // Reset form (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us">
    <section className="contact-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact ArtNova Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Unveiling Stories Through the Colors of Imagination
        </motion.p>
      </div>
    </section>

    <div className="contact-details-container">
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h4>Call Us:</h4>
          <p>+1 234 567 890</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h4>Email Us:</h4>
          <p>info@company.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Our Location:</h4>
          <p>123 Art Avenue, City, Country</p>
        </div>
      </div>
    </div>

    <div className="contact-row">
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        {isSubmitted ? (
          <p className="success-msg">Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0527135961716!2d144.96315731531725!3d-37.81362777975113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d46316e944b%3A0x5045675218ce8e0!2z5YyX5Lqs5rOh5LqM5rSx5r-W5YW25bF7!5e0!3m2!1sen!2sus!4v1630539547527!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  
  );
}

export default Contact;
