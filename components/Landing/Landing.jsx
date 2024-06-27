import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import your CSS file for styling

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Landing Page Content */}
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            {/* Centered and bold "SocialDigitalWings" */}
            <h1 className="landing-title">SocialDigitalWings</h1>
            <p className="lead">
              Welcome to Social Digital Wings, where creativity takes flight in the digital realm! At 
              Social Digital Wings, we are not just a Best Digital Marketing Agency; 
            </p>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
