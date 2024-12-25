import React from 'react';
import './Site.css';

function Site() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="navbar">
          <div className="dropdown">
            <button className="dropbtn">Tutorials</button>
            <div className="dropdown-content">
              <a href="#">HTML</a>
              <a href="#">CSS</a>
              {/* Add more tutorial links here */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Exercises</button>
            <div className="dropdown-content">
              <a href="#">HTML</a>
              <a href="#">CSS</a>
              {/* Add more exercise links here */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <a href="#">Web Development</a>
              <a href="#">Mobile App Development</a>
              {/* Add more service links here */}
            </div>
          </div>
        </nav>
        <div className="search-icon">Search</div>
        <div className="signup">Sign Up</div>
        <div className="Login">Login</div>
      </header>
      {/* Add the rest of your content here */}
    </div>
  );
}

export default Site;
