import React from 'react';
import './HeroSection.css'; // Import your CSS
// import bgcol from '../Assets/bgcol.jpg'; // Image Path

import Aboutsection from './Aboutsection'; // Import About Section
import Footersection from './Footersection'; // Import Footer Section

const HeroSection = () => {
  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Footer">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero" id="hero">
        {/* <img src={bgcol} alt="Hero" className="hero-img" /> */}
        <div className="hero-text">
          <h1>Welcome to My Website</h1>
          <p>Discover amazing content and services</p>
          <a href="#footer" className="cta-button">Contact Us</a>
        </div>
        
        <Aboutsection />
        <Footersection />
      </section>
    </div>
  );
};

export default HeroSection;
