import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <section className="hero">
      
      <div className="ambient-glow"></div>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-grid">
       
        <div className="hero-content">
          <span className="hero-badge">THE UNISEX REVOLUTION</span>
          <h1 className="hero-title">
            SHARP LINES.<br />
            <span className="gradient-text">BOLD STYLES.</span><br />
            NO LABELS.
          </h1>
          <p className="hero-subtitle">
            A premium, high-contrast barbing experience crafted carefully for both girls and boys. Where raw barber precision meets high-fashion styling.
          </p>
          <div className="hero-actions">
            <a href="/booknow" className="btn-primary">
              <span>BOOK AN APPOINTMENT</span>
            </a>
            <a href="/lookbook" className="btn-secondary">
              EXPLORE LOOKS
            </a>
          </div>
        </div>

        
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            <div className="visual-card card-masculine">
              <div className="card-overlay">
                <span className="card-tag">SHARP & TEXTURED</span>
              </div>
            </div>
            <div className="visual-card card-feminine">
              <div className="card-overlay">
                <span className="card-tag">SLEEK & EDGY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;