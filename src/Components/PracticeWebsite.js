import React from 'react';
import amazon from '../Assets/amazon.png';
import flipkart from '../Assets/flipkart.png';
import heroimage from '../Assets/heroimage.png';
import brandlogo from '../Assets/brandlogo.png';
import './Practicewebsite.css';
const PracticeWebsite = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <nav className="nav-container">
          <div className="logo">
            <img src={brandlogo} alt="logo" />
          </div>
          <ul className="nav-list">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="login-button">Login</button>
        </nav>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btns">
          <button className="shop-now-button">Shop Now</button>
          <button className="category-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="amazon-logo" />
            <img src={flipkart} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="heroimage" />
      </div>
    </main>
  );
}

export default PracticeWebsite;
