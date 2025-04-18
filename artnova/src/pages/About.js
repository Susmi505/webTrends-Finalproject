// Created by Claude, based on your design
import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import { motion } from 'framer-motion'; 

function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Curator and Art Director",
      image: "assets/images/team1.jpg",
      bio: "John brings over 15 years of experience in the art world. With a background in Fine Arts from the University of Arts London, he has curated exhibitions across Europe and North America. His vision drives our gallery's artistic direction.",
      expertise: ["Contemporary Art", "Exhibition Design", "Artist Relations"],
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Lead Artist and Exhibitor",
      image: "assets/images/team2.jpg",
      bio: "An accomplished artist with works featured in major collections worldwide, Jane leads our artist community and exhibition program. Her innovative approach to mixed media has earned her multiple awards and recognition.",
      expertise: ["Mixed Media", "Installation Art", "Mentorship"],
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Gallery Manager",
      image: "assets/images/team3.jpg",
      bio: "Michael ensures the seamless operation of our gallery space. With a background in Art Management and Business Administration, he bridges the gap between artistic vision and practical execution.",
      expertise: ["Gallery Operations", "Event Planning", "Client Relations"],
      social: {
        instagram: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Timeline data
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Our gallery was founded with a mission to showcase emerging local talent."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "We moved to our current location and expanded our exhibition space."
    },
    {
      year: "2019",
      title: "International Recognition",
      description: "Our gallery received its first international award for curatorial excellence."
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Launched our online platform to reach art lovers globally."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Continuing to innovate and bring exceptional art experiences."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "This gallery has transformed how I experience contemporary art. Their curation is exceptional.",
      author: "Sarah J., Art Collector",
      image: "assets/images/testimonial1.jpg"
    },
    {
      quote: "As an emerging artist, finding a platform that truly values artistic integrity is rare. This gallery does exactly that.",
      author: "Mark T., Featured Artist",
      image: "assets/images/testimonial2.jpg"
    },
    {
      quote: "The community events and workshops hosted here have connected me with fellow art enthusiasts in meaningful ways.",
      author: "Lisa R., Gallery Member",
      image: "assets/images/testimonial3.jpg"
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTeamMemberClick = (id) => {
    setActiveTeamMember(activeTeamMember === id ? null : id);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
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



      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="value-creativity"></i>
              </div>
              <h3>Creativity</h3>
              <p>We celebrate creative expression in all its forms and encourage artistic innovation that pushes boundaries.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="value-quality"></i>
              </div>
              <h3>Quality</h3>
              <p>We maintain the highest standards in our curation, presentation, and visitor experience.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="value-community"></i>
              </div>
              <h3>Community</h3>
              <p>We foster meaningful connections between artists, art enthusiasts, and the broader community.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="value-integrity"></i>
              </div>
              <h3>Integrity</h3>
              <p>We operate with transparency, honesty, and respect in all our relationships and business practices.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="value-diversity"></i>
              </div>
              <h3>Diversity</h3>
              <p>We embrace diverse perspectives, styles, and voices in the art we showcase and the community we build.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="value-education"></i>
              </div>
              <h3>Education</h3>
              <p>We believe in the power of art education to enrich lives and create deeper appreciation for creative work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <div className="accent-line"></div>
            <p>The passionate individuals behind ArtVibe Gallery</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div 
                className={`team-card ${activeTeamMember === member.id ? 'active' : ''}`} 
                key={member.id}
                onClick={() => handleTeamMemberClick(member.id)}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href={member.social.instagram} aria-label="Instagram"><i className="social-instagram"></i></a>
                    <a href={member.social.linkedin} aria-label="LinkedIn"><i className="social-linkedin"></i></a>
                    <a href={member.social.twitter} aria-label="Twitter"><i className="social-twitter"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  
                  <div className="team-details">
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-expertise">
                      <h4>Expertise</h4>
                      <ul>
                        {member.expertise.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Gallery Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Artists Featured</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Exhibitions Held</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Visitors Annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Community Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}

export default About;