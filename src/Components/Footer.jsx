import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-column brand-col">
          <a href="#home" className="footer-logo">
            UNISEX<span className="logo-accent">CUTS</span>
          </a>
          <p className="footer-tagline">
            Sharp lines, bold textures, no labels. Re-engineering the premium barbing and hair-styling experience for both girls and boys.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="social-link" aria-label="Instagram">IG</a>
            <a href="#tiktok" className="social-link" aria-label="TikTok">TK</a>
            <a href="#youtube" className="social-link" aria-label="YouTube">YT</a>
          </div>
        </div>

       
        <div className="footer-column links-col">
          <h4 className="footer-heading">NAVIGATION</h4>
          <ul className="footer-links-list">
            <li><a href="#home" className="f-link">HOME</a></li>
            <li><a href="#services" className="f-link">SERVICES</a></li>
            <li><a href="#lookbook" className="f-link">LOOKBOOK</a></li>
            <li><a href="#about" className="f-link">ABOUT US</a></li>
          </ul>
        </div>

       
        <div className="footer-column hours-col">
          <h4 className="footer-heading">THE SCHEDULE</h4>
          <ul className="hours-list">
            <li>
              <span className="day">TUE — FRI</span>
              <span className="time">09:00 AM — 08:00 PM</span>
            </li>
            <li>
              <span className="day">SATURDAY</span>
              <span className="time">09:00 AM — 06:00 PM</span>
            </li>
            <li>
              <span className="day">SUN — MON</span>
              <span className="time-closed">CLOSED</span>
            </li>
          </ul>
        </div>

      </div>

     
      <div className="footer-bottom">
        <div className="bottom-wrapper">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} UNISEXCUTS. ALL RIGHTS RESERVED.
          </p>
          <p className="designer-signature">
            CRAFTED BY <span className="sig-highlight">ANSELM NANCY</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;