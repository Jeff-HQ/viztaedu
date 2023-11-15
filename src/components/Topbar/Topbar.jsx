import React, { useState } from 'react';
import './Topbar.css';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  return (
    <div className={`topbar-div ${menuOpen ? 'menu-open' : ''}`}>
      <div className={`topbar-wrapper ${menuOpen ? 'blur-background' : ''}`}>
        <div className='image-container'>
          <img src='./Images/cropped-VIZTAEDU-LOGO.png' alt='Logo'></img>
        </div>
        <div
          id="hamburger-4"
          className={`hamburger menu ${menuOpen ? 'open' : ''}`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <ul className={`menu-items ${menuOpen ? 'show' : ''}`}>
            <li><a>Blog</a></li>
            <li><a>Projects</a></li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
