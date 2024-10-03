import React from 'react';
import './Footer.css';
import Logo from '../assets/logo_dark.png';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-up">
          <div>
            <img width="250" height="250" src={Logo} alt="Logo" />
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plan-wedding">Plan Wedding</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className='footer-links'>
            <h2 className="text-dark">Our Team</h2>
            <div className="text-dark">
            <a target='_blank' href="https://www.linkedin.com/in/khushi-chaudhary-01383622b/"><img src={LinkedInIcon} alt="Li" /> Khushi Chaudhary</a>
            </div>
            <div className="text-dark">
            <a target='_blank' href="https://www.linkedin.com/in/nitish-kumar-899086221/"><img src={LinkedInIcon} alt="Li" /> Nitish Kumar</a>
            </div>
          </div>
        </div>
        <div className="footer-down">
          <div className="text-dark">
            Wed Charm &copy; 2024, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
