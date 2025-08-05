import React from 'react';
import './StarterPlan.css';
import st99Img from '../../images/st99.jpg';

const PremiumPlan = () => {
  return (
    <div className="starter-wrapper">
      <div className="starter-content">
        <div className="starter-left">
          <h1 className="starter-title">Premium Career Plan</h1>
          <p className="starter-price">₹999</p>
          <p className="starter-duration">5 Expert-Led Sessions (Valid for 15 Days)</p>

          <ul className="starter-features">
            <li>2 Mock Interviews – Improve confidence + communication</li>
            <li>Resume, LinkedIn & Project Portfolio Review</li>
            <li>Off-Campus Strategy Call + 450+ HR Contact Access</li>
            <li>Freelance Portfolio & Domain Project Setup</li>
            <li>Custom Roadmap + Doubt Solving (30 min)</li>
            <li>5+ Genuine Referrals from MentorSetu</li>
            <li>Lifetime Access to Mentor Community (Telegram/Discord)</li>
            <li>Google Meet Sessions – Live and 1-on-1</li>
          </ul>

          <div className="starter-cta-buttons">
            <a
              href="https://topmate.io/mentorsetu/1662655?utm_source=public_profile&utm_campaign=mentorsetu&timezone=Asia%2FKolkata&time=2025-08-03T16%3A35%3A00"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button"
            >
              Book Now
            </a>
            {/* <a
              href="https://your-payment-gateway.com/pay999"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button pay-now"
            >
              Pay Now
            </a> */}
          </div>

          <p className="starter-coupon">
            🎁 <strong>Use Coupon:</strong> <code>Suraj999-10</code> for <strong>10% OFF</strong>
          </p>
        </div>

        <div className="starter-right">
          <img
            src={st99Img}
            alt="Mentorship"
            className="starter-image"
          />
        </div>
      </div>

      <div className="starter-description">
        <h2>🚀 What's Included in the Premium Plan?</h2>
        <ul>
          <li>✅ <strong>2 Mock Interviews</strong> (30 min × 2): Get real-time experience and actionable feedback</li>
          <li>✅ <strong>Resume + LinkedIn + Project Review</strong>: Craft standout applications</li>
          <li>✅ <strong>Off-Campus Strategy</strong>: Crack hidden job markets + HR contacts</li>
          <li>✅ <strong>Freelance Portfolio Building</strong>: Start your freelance journey with confidence</li>
          <li>✅ <strong>Custom Career Roadmap + Q&A</strong>: Plan next 60–90 days with expert guidance</li>
        </ul>

        <h3>🛠️ Premium Add-Ons</h3>
        <ul>
          <li>🎯 Freelance project in your domain (Web Dev / ML / Content etc.)</li>
          <li>💼 5+ Job referrals curated by MentorSetu experts</li>
          <li>📬 450+ HR contact list + apply strategy</li>
          <li>🌐 Lifetime community access (Telegram/Discord)</li>
          <li>🗣️ Communication skill tips if needed</li>
        </ul>

        <p><strong>📅 Validity:</strong> 15 Days | <strong>💳 Price:</strong> ₹999</p>
        <p><strong>🎁 Coupon:</strong> Use <code>Suraj999-10</code> to get <strong>10% OFF</strong></p>
      </div>
    </div>
  );
};

export default PremiumPlan;
