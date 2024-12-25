import React from 'react';
import './Navbar.css';
import Education from '../Assets/Education.jpg';
import darkimg from "../Assets/darkimg.png";
import Heading from './Heading';


const Navbar = () => {
  return (
    
    <div>
      <nav className='navbar'>
        <img src={Education} alt="Logo" className='logo' />
        <ul className='nav-list'>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact Us</button></li>
        </ul>
      </nav>
      
      <div className='content'>
        <h1 className='heading'>Welcome to our Website</h1>
        <p className='paragraph'>We are excited to have you here. Explore our content.</p>
        <button className="Explore">Explore More<img src={darkimg} alt="" className='Darkimg'/></button>
 </div>
 
 <Heading/>
</div>

    
  )
}

export default Navbar;
