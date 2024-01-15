// Navbar.js

import React, { useState } from 'react';
import './navbar.css';
import { logo } from '../../assets/index.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar' data-aos= 'fade-down'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isOpen && (
          <ul className='nav-links menu'>
            <li className="links"><a href="#menu">Menu</a> </li>
            <li className="links"><a href="#news">News</a></li>
            <li className="links"><a href="#events">Fine Dining</a></li>
            <li className="links"><a href="#aboutUS">About Us</a></li>
            <li className="links"><a href="#footer">Contact</a></li>

            <li className='links'>
              <button className='nav-btn-sign-in'>Sign In</button>
            </li>
          </ul>
        )}
      </div>

      <div className='big-navbar-links'>
        <ul className='nav-links'>
          <li className="links"><a href="#menu">Menu</a> </li>
          <li className="links"><a href="#news">News</a></li>
          <li className="links"><a href="#events">Fine Dining</a></li>
          <li className="links"><a href="#aboutUS">About Us</a></li>
          <li className="links"><a href="#footer">Contact</a></li>

          <li className='links'>
            <button className='nav-btn-sign-in'>Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
