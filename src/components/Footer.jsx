import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <img className='footer-logo' src="https://i.pinimg.com/736x/a0/df/ef/a0dfefda1a9bf940233179e84a33b023.jpg" />
        </div>
        <div className="footer-section">
          <h2 className="logo"> TOP SPORT</h2>
          <p>Your daily dose of sports updates, and scores.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/watch">Teams</Link></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="http://www.facebook.com" 
               target='_blank' 
               rel='noopener noreferrer' className='my-link'> <img  className='facebook' src="https://i.pinimg.com/736x/17/c8/5b/17c85b69e2f7c225acc344187bb80631.jpg"/></a>
            <a href="http://twitter.com"
               target='_blank'  
               rel='noopener noreferrer' className='my-link'> <img className='twitter' src="https://i.pinimg.com/736x/b3/ea/ac/b3eaacd7a29063b62d6c3b242032b7fd.jpg" /></a>
            <a href="http://www.instagram.com" 
               target='_blank' 
               rel='noopener noreferrer' className='my-link'><img className='instagram' src="https://i.pinimg.com/736x/76/c6/e9/76c6e995fff09c28958343b3867ae58d.jpg"/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TOPSport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;