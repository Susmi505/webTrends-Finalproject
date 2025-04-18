// Created by [Your Name]

import React,{useState} from 'react';
import '../assets/css/style.css';
import { motion } from 'framer-motion';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful submission
    setIsSubmitted(true);
    setError(null);
    // Simulate a form error
    // setIsSubmitted(false);
    // setError("There was an issue submitting the form.");
  };
  return (
    <div class="contact-us">
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
  
    <div class="contact-details-container">
      <div class="contact-details">
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <h4>Call Us:</h4>
          <p>+1 234 567 890</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <h4>Email Us:</h4>
          <p>info@company.com</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <h4>Our Location:</h4>
          <p>123 Art Avenue, City, Country</p>
        </div>
      </div>
    </div>
  
    <div class="contact-row">
      <div class="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
  
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
  
      <div class="map-container">
        <h3>Our Location</h3>
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0527135961716!2d144.96315731531725!3d-37.81362777975113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d46316e944b%3A0x5045675218ce8e0!2z5YyX5Lqs5rOh5LqM5rSx5r-W5YW25bF7!5e0!3m2!1sen!2sus!4v1630539547527!5m2!1sen!2sus"
          width="100%" height="300"  allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
  
  );
}

export default Contact;
