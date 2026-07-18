import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-ambient-glow"></div>
      
      <div className="about-container">
     
        <div className="about-grid">
          
          
          <div className="about-visuals">
            <div className="image-frame-container">
              <div className="main-frame-glow"></div>
              <div className="about-image-wrapper primary-frame">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" 
                  alt="Barber grooming client" 
                  className="about-img"
                />
              </div>
              <div className="about-image-wrapper offset-frame">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c-Dn7vRQflO9E1A3gBpwXg5SAGo4GQKi07rpDPVuBXbTXeVnplRgaHC6&s=10" 
                  alt="Stylist cutting short hair styling" 
                  className="about-img"
                />
              </div>
            </div>
          </div>


          <div className="about-content">
            <span className="about-badge">OUR MANIFESTO</span>
            <h2 className="about-title">
              WHERE PRECISION MEETS <span className="rose-gradient-text">FLUIDITY</span>
            </h2>
            <div className="about-divider-line"></div>
            
            <p className="about-description">
              We broke the boundaries of the traditional shop setup. No division, no labels, just exceptional craft. Whether it's a razor-sharp fade, an avant-garde texture crop, or a bold color change, our chairs are open to everyone.
            </p>
            <p className="about-description secondary-text">
              Every detail is engineered to give you an upscale experience—from our slow-pour artisan hair treatments to our custom music tracking. We don’t just cut hair; we sculpt your personal brand identity.
            </p>

           
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-glow"></div>
                <h4 className="stat-number">100<span className="stat-plus">+</span></h4>
                <p className="stat-label">DAILY STYLES CREATED</p>
              </div>
              <div className="stat-card">
                <div className="stat-glow"></div>
                <h4 className="stat-number">100<span className="stat-percent">%</span></h4>
                <p className="stat-label">UNISEX INCLUSIVE FOCUS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;