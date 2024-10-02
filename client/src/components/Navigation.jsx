import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";



const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div>
      <nav className="navbar">
        <div className="logo"><Link to="/">Wed Charm</Link></div>
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to = '/login' onClick={toggleMenu}>Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;