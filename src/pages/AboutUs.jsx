import React from 'react';
import Staff from '../components/staff/Staff';
import './CSS/container.css';
import '../components/staff/StaffMembers/StaffMembers.css';
import './CSS/AboutUs.css';

function AboutUs({ picture }) {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="aboutUs-container"> 
        <div className="aboutUs-content"> 
            <Staff />
        </div>
    </div>
  );
}

export default AboutUs;



