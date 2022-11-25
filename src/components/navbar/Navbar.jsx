import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <h2 className='logo'>Wael Latrache</h2>
        <ul className='nav-list'>
           <li><Link to="/" className='nav-link'>About</Link></li>
           <li><Link to="/projects" className='nav-link'>Projects</Link></li>
           <li><Link to="/services" className='nav-link'>Services</Link></li>
           <li><Link to="/blog" className='nav-link'>Blog</Link></li> 
           <li><Link to="/gifts" className='nav-link'>Gifts</Link></li>
        </ul>
        <button className='nav-btn'>Let's Talk</button>
      </div>  
    </div>
  )
}

export default Navbar