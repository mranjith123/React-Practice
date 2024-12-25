import React from 'react';
import { Link } from 'react-router-dom';
import './Navabarport.css';

function Navbarport() {
  return (
    <div className="navbar">
      <h1 className="logo">MyLogo</h1>
      <ul>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  );
}

export default Navbarport;
