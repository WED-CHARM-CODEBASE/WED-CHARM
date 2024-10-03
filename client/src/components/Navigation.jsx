import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pre-navbar">
      <nav className="navbar">
        <div className="logo">
          <img width="50" height="50" src={Logo} alt="Logo" />
          <Link to="/">Wed Charm</Link>
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/plan-wedding" onClick={toggleMenu}>
              Plan Wedding
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={toggleMenu}>
              Support
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
