import React, { createContext, useState } from 'react';
import Address from './Address/Address'; 
import './Footer.css';

export const MyContext = createContext();

const Footer = () => {

  const [addressInText, setAddressInText] = useState('Musterstraße 12 10115 Berlin Deutschland');
  
  return (
    <div className="page-container">
      
      <footer className="footer">
        <div className="container">
          <div className="row footer-container">
            <div className="col-12 col-sm-4 footer-section">
              <h2>Contact Us</h2>
              <MyContext.Provider value={addressInText}>
                <Address />
              </MyContext.Provider>
              <p>Phone: +49 30 123456</p>
            </div>
            <div className="col-12 col-sm-4 footer-section">
              <h2>Follow Us</h2>
              <a href="https://www.facebook.com" className="social-link">Facebook</a>
              <a href="https://www.instagram.com" className="social-link">Instagram</a>
              <a href="https://www.twitter.com" className="social-link">Twitter</a>
            </div>
            <div className="col-12 col-sm-4 footer-section">
              <h2>Opening Hours</h2>
              <p>Mon-Fri: 10am - 10pm</p>
              <p>Sat-Sun: 11am - 11pm</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Best Doner Place. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
