import React from 'react';
import st99Img from '../../images/st99.jpg';

const StarterPlan = () => {
  return (
    <div className="starter-wrapper">
      <div className="starter-content">
        <div className="starter-left">
          <h1 className="starter-title">Starter Mentorship Plan</h1>
          <p className="starter-price">₹99</p>
          <p className="starter-duration">30 Minutes – 1-on-1 Session</p>

          <ul className="starter-features">
            <li>Doubt Solving (Resume, Coding, Projects, etc.)</li>
            <li>Career & Branch Guidance + Study Abroad Tips</li>
            <li>Internship & Placement Strategy (incl. MANG, Startups)</li>
            <li>Freelance/Skill Roadmap by Real Professionals</li>
            <li>Google Meet Live Video Session</li>
          </ul>

          <div className="starter-cta-buttons">
            <a
              href="https://topmate.io/mentorsetu/1662634?utm_source=public_profile&utm_campaign=mentorsetu&timezone=Asia%2FKolkata&time=2025-08-03T16%3A35%3A00"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button"
            >
              Book Now
            </a>
          </div>
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
        <h2>📌 What’s this session about?</h2>
        <p>
          This is a 30-minute personalized mentorship session for just ₹99, where you can connect 1-on-1 with a verified mentor — an IITian, NEET Topper, or Industry Expert.
        </p>
        <p>It’s perfect for you if you're:</p>
        <ul>
          <li>Learning Coding, Design, Content, or Freelancing</li>
          <li>Confused about your College Branch or Career Path</li>
          <li>Stuck in a Project or Subject Doubt</li>
          <li>Looking for Internship/Placement Guidance from Real Professionals</li>
        </ul>

        <h3>🧠 What You'll Get:</h3>
        <ul>
          <li>✅ 1-on-1 Live Session (Google Meet)</li>
          <li>✅ Resume Review</li>
          <li>✅ Internship/Placement Strategy – Tips from MANG/Startup Mentors (how can appraoch companies)</li>
          <li>✅ Doubt Solving – Academic or Skill-based</li>
          <li>✅ Career Clarity – Branch, College, Job, Study Abroad (Confused student)</li>
          <li>✅ Personalized Roadmap + Session Notes</li>
        </ul>
        <h3>🎯 Why Choose This Plan?</h3>
        <ul>
          <li>Expert guidance at just ₹99</li>
          <li>Talk to someone who’s already done it – not just generic advice</li>
          <li>Real help from real mentors for real results</li>
        </ul>

        <p>🎁 <strong>Use Coupon Code:</strong> <code>Suraj99-10</code> to get a <strong>10% Discount</strong></p>
        <p>🔗 Book now and take one solid step toward your goal. We’re here to guide, support, and unlock your full potential.</p>
      </div>
    </div>
  );
};

export default StarterPlan;
