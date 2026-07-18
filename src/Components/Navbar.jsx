import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          UNISEX<span className="accent-text">CUTS</span>
        </a>

        
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

       
     <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
  <li className="nav-item">
    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
  </li>
  <li className="nav-item">
    <Link to="/lookbook" className="nav-link" onClick={closeMenu}>Lookbook</Link>
  </li>
  <li className="nav-item">
    <Link to="/aboutus" className="nav-link" onClick={closeMenu}>About Us</Link>
  </li>
  <li className="nav-item">
    <Link to="/reviews" className="nav-link" onClick={closeMenu}>Reviews</Link>
  </li>
  <li className="nav-item">
    <Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
  </li>
  <li className="nav-item mobile-only">
    <Link to="/booknow" className="nav-btn" onClick={closeMenu}>Book Now</Link>
  </li>
</ul>

        
        <div className="nav-actions">
          <a href="#booking" className="nav-btn">Book Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;