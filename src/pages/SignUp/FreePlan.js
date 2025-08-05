import React from 'react';
import './FreePlan.css';
import st99Img from '../../images/st99.jpg';

const FreePlan = () => {
  return (
    <div className="starter-wrapper">
      <div className="starter-content">
        <div className="starter-left">
          <h1 className="starter-title">Free Discovery Call</h1>
          <p className="starter-price">₹0</p>
          <p className="starter-duration">5-10 Minutes – 1-on-1 Video Call</p>

          <ul className="starter-features">
            <li>Understand your goals & learning needs</li>
            <li>Get personalized mentorship suggestions</li>
            <li>Explore roadmap & project opportunities</li>
            <li>Book future 1-on-1 or group mentorship</li>
          </ul>

          <div className="starter-cta-buttons">
            <a
              href="https://topmate.io/mentorsetu/1662613?utm_source=public_profile&utm_campaign=mentorsetu"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button"
            >
              Book Free Call
            </a>
          </div>
        </div>

        <div className="starter-right">
          <img
            src={st99Img}
            alt="Discovery Mentorship Call"
            className="starter-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
