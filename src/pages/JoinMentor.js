import React from 'react';
import './JoinMentor.css';

const JoinMentor = () => {
  return (
    <div className="join-mentor-container">
      <div className="join-mentor-wrapper">
        <h1 className="join-mentor-title">Be the Guide You Once Needed</h1>
        <p className="join-mentor-subtext">
          Join MentorSetu as a mentor and empower students through one-on-one mentorship, career guidance, and hands-on learning.
        </p>

        <a href="https://tally.so/r/mONABM" className="join-mentor-button-link" target="_blank" rel="noopener noreferrer">
          <button className="join-mentor-button">Apply to be a Mentor</button>
        </a>

        {/* Why Become a Mentor */}
        <section className="section">
          <h2 className="section-title">Why Become a Mentor?</h2>
          <ul className="section-list">
            <li>Shape the future of students (Class 9 to College)</li>
            <li>Earn ₹199–₹999 per session</li>
            <li>Fully remote – guide students from anywhere</li>
            <li>Mentorship types: Academic, Career, Skill-based, Interview Prep</li>
            <li>Work on a flexible freelance-style model</li>
          </ul>
        </section>

        {/* Who Can Apply */}
        <section className="section">
          <h2 className="section-title">Who Can Apply?</h2>
          <p className="section-text">
            3rd+ year college students, working professionals, skilled dropouts, teachers, and alumni from IITs, NITs, IIITs, or those with relevant real-world experience.
          </p>
        </section>

        {/* Features */}
        <section className="section">
          <h2 className="section-title">Mentor Features</h2>
          <ul className="section-list">
            <li>Professional mentor profile with your skills & experience</li>
            <li>Session booking & review system</li>
            <li>Dashboard for tracking sessions and payments</li>
            <li>Certificate after 25+ impactful sessions</li>
          </ul>
        </section>

        {/* Terms & Commitment */}
        <section className="section">
          <h2 className="section-title">Important Terms Before Applying</h2>
          <ul className="section-list">
            <li>
              💼 You will work on a freelance-style basis, guiding students only when sessions are booked.
            </li>
            <li>
              ⏰ You must commit to taking out time when needed — even if you are studying or working elsewhere.
            </li>
            <li>
              🔐 You agree to a confidentiality agreement (NDA-lite) — MentorSetu data or resources cannot be shared outside.
            </li>
            <li>
              🧪 Shortlisted mentors will go through an interview, and may be asked to deliver a short demo session.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default JoinMentor;
