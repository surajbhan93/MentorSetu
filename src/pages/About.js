import React from 'react';
import './About_section.css';
import about from '../images/about.png';
import { FaChalkboardTeacher, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">

      {/* MVP Notice */}
      <div className="mvp-banner">
        🚧 This is an MVP version built for a 1.5-month testing and validation phase. The full-scale platform is under development.
      </div>

      {/* Hero Section */}
      <div className="about-hero fade-in">
        <h1 className="hero-title">
          MentorSetu.ai – India’s first hybrid career & skills platform
        </h1>
        <p className="hero-subtext">
          Personalized mentorship meets real-world work: from class 9 to college & beyond.
        </p>
      </div>

      {/* Mission Section */}
      <section className="vision-section fade-in">
        <h2>Not Just Guidance — Real Growth</h2>
        <p>
          MentorSetu.ai connects students with top mentors and real startup projects to build experience, portfolios, and clarity in their career paths.
          Whether you're preparing for JEE/NEET, building a coding portfolio, or exploring freelance/content careers — we’ve got you.
        </p>
        <img src={about} alt="Mentorship Model" className="about-diagram" />
      </section>

      {/* Validation Phase Achievements */}
      <section className="validation-achievements fade-in">
        <h2>🚀 What We Achieved in Just 1 Month (Validation Phase)</h2>
        <div className="validation-grid">
          <div className="stat-card">
            <FaChalkboardTeacher className="icon" />
            <h3>50+ Mentors and expert</h3>
            <p>Onboarded across tech, design, and career domains</p>
          </div>
          <div className="stat-card">
            <FaLaptopCode className="icon" />
            <h3>10+ Companies</h3>
            <p>Engaged in real-time client project partnerships</p>
          </div>
          <div className="stat-card">
            <FaUserGraduate className="icon" />
            <h3>400+ Mentees</h3>
            <p>Impacted across schools, colleges & career explorers</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="model-section slide-up">
        <h2>What Students Get</h2>
        <div className="model-grid">
          <div className="model-box">
  <ul>
    <li>✅ 1-on-1 mentorship from IITians, NEET toppers, founders & industry experts</li>
    <li>✅ Real startup projects from 10+ verified partner companies</li>
    <li>✅ Internship, freelance & paid client-based work</li>
    <li>✅ Career paths across engineering, design, content, freelancing & more</li>
    <li>✅ AI-based mentor matching + regional language support</li>
    <li>✅ Progress tracking dashboard + mentor feedback system</li>
    <li>✅ Resume & LinkedIn profile building with expert review</li>
    <li>✅ Guaranteed referrals for top-performing mentees</li>
    <li>✅ Live masterclasses, bootcamps & community meetups</li>
    <li>✅ College-to-career roadmap, even for Tier 2/3 students & dropouts</li>
  </ul>
</div>

        </div>
      </section>

      {/* Model Breakdown */}
      <section className="model-section slide-up">
        <h2>How MentorSetu Works</h2>
        <div className="model-grid">
          <div className="model-box">
            <h3>B2C: Mentorship Platform</h3>
            <ul>
              <li>1-on-1 sessions (₹199–₹999)</li>
              <li>Group mentorship & bootcamps</li>
              <li>Career, academic & skill guidance</li>
              <li>Progress dashboard & reviews</li>
            </ul>
          </div>
          <div className="model-box">
            <h3>B2B: Client Work Platform</h3>
            <ul>
              <li>Startup projects for student freelancers</li>
              <li>Experience letters, certificates & payments</li>
              <li>Client-mentor collaboration</li>
              <li>Portfolio-building outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section fade-in">
        <h2>Vision Statement</h2>
        <p className="tagline">
          "Har student ke liye ek sacha mentor aur ek sahi mauka."
        </p>
        <a href="/join-mentor" className="cta-button">
          Join as Mentor or Client
        </a>
      </section>
    </div>
  );
};

export default About;
