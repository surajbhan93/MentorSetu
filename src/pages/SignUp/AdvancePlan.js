import React from 'react';
import './StarterPlan.css';
import st99Img from '../../images/st99.jpg';

const AdvancePlan = () => {
  return (
    <div className="starter-wrapper">
      <div className="starter-content">
        <div className="starter-left">
          <h1 className="starter-title">Advance Mentorship Plan</h1>
          <p className="starter-price">₹499</p>
          <p className="starter-duration">90 Minutes – 1-on-1 Deep Dive</p>

          <ul className="starter-features">
            <li>✅ <b>45 minuts:</b> Resume/Profile Review (LinkedIn, GitHub, Portfolio)</li>
            <li>✅ <b>45 minuts</b> 1 Mock Interview (Tech/HR/Product)</li>
            <li>✅ Referral Guidance & Support</li>
            <li>✅ Personalized Next Steps Plan</li>
            <li>💡 Bonus: List of companies actively hiring in your domain</li>
          </ul>

          <div className="starter-cta-buttons">
            <a
              href="https://topmate.io/mentorsetu/1662640?utm_source=public_profile&utm_campaign=mentorsetu&timezone=Asia%2FKolkata&time=2025-08-03T16%3A35%3A00"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button"
            >
              Book Now
            </a>
            {/* <a
              href="https://your-payment-gateway.com/pay499"
              target="_blank"
              rel="noopener noreferrer"
              className="starter-button pay-now"
            >
              Pay Now
            </a> */}
          </div>

          <p className="coupon-info">🎁 <strong>Use Coupon Code:</strong> <code>Suraj499-10</code> to get <strong>10% Discount</strong></p>
        </div>

        <div className="starter-right">
          <img src={st99Img} alt="Mentorship" className="starter-image" />
        </div>
      </div>

      <div className="starter-description">
        <h2>🚀 What’s Included:</h2>
        <ul>
          <li>✅ 1 Mock Interview (Tech/HR/Product) – Simulate a real interview with a mentor from your target domain (SDE, Data, Design, Marketing, etc.)</li>
          <li>✅ Resume/Profile Review – Feedback on your resume, LinkedIn, GitHub, or portfolio.</li>
          <li>✅ Referral Support – Genuine guidance on where and how to apply + internal referral (if applicable)</li>
          <li>✅ Next Steps Plan – Personalized advice for your next 1–2 months</li>
          <li>💡 Bonus: Suggestions for companies currently hiring</li>
        </ul>

        <h3>🧠 Who’s it for?</h3>
        <ul>
          <li>Students/Working pros preparing for internships or full-time roles</li>
          <li>Anyone applying to product-based companies, startups, or MNCs</li>
          <li>Anyone confused about what to fix before applying</li>
        </ul>

        <h3>About MentorSetu</h3>
        <p>MentorSetu.ai is India’s first hybrid platform combining personalized mentorship and real-world project exposure for students — from Class 9 to college, even dropouts.</p>
        <ul>
          <li>✔️ 30+ Mentors (IITians, NEET Toppers, Industry Experts)</li>
          <li>✔️ 10+ Client Collaborations | 50+ Freelance Projects Delivered</li>
          <li>✔️ 500+ Students already mentored</li>
        </ul>
        <p>We focus on outcomes: Learn → Mentor → Work. You grow by real experience — not just lectures.</p>
      </div>
    </div>
  );
};

export default AdvancePlan;
