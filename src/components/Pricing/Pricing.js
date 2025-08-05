import React from 'react';
import { Button } from '../../globalStyles';
import { GiFloatingCrystal, GiRock, GiCutDiamond, GiCrystalBars } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Mentorship Pricing</PricingHeading>
          <PricingContainer>

            {/* Free Trial Plan */}
            <PricingCard to='/Free'>
              <PricingCardInfo>
                <PricingCardIcon><GiFloatingCrystal /></PricingCardIcon>
                <PricingCardPlan>Free Trial</PricingCardPlan>
                <PricingCardCost>₹0</PricingCardCost>
                <PricingCardLength>10 min</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1-on-1 Trial Session</PricingCardFeature>
                  <PricingCardFeature>Google Meet Call</PricingCardFeature>
                  <PricingCardFeature>Goal Understanding</PricingCardFeature>
                  <PricingCardFeature>Try Before You Commit</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Try Free</Button>
              </PricingCardInfo>
            </PricingCard>

  
            {/* Basic Plan – ₹99 */}
            <PricingCard to='/starter'>
              <PricingCardInfo>
                <PricingCardIcon><GiRock /></PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingCardCost>₹99</PricingCardCost>
                <PricingCardLength>30 min</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1-on-1 Mentorship</PricingCardFeature>
                  <PricingCardFeature>Resume Review</PricingCardFeature>
                  <PricingCardFeature>Internship/Placement Strategy</PricingCardFeature>
                  <PricingCardFeature>Google Meet Call</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* Mid Plan – ₹499 */}
            <PricingCard to='/Advance'>
              <PricingCardInfo>
                <PricingCardIcon><GiCrystalBars /></PricingCardIcon>
                <PricingCardPlan>Advanced</PricingCardPlan>
                <PricingCardCost>₹499</PricingCardCost>
                <PricingCardLength>2x 45 min</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Mock Interview</PricingCardFeature>
                  <PricingCardFeature>Portfolio / Resume Review</PricingCardFeature>
                  <PricingCardFeature> Referral Guidance & Support</PricingCardFeature>
                  <PricingCardFeature>450+ HR Contacts & Emails</PricingCardFeature>


                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* Premium Plan – ₹999 */}
            <PricingCard to='/Premium'>
              <PricingCardInfo>
                <PricingCardIcon><GiCutDiamond /></PricingCardIcon>
                <PricingCardPlan>Premium</PricingCardPlan>
                <PricingCardCost>₹999</PricingCardCost>
                <PricingCardLength>5x 30-min sessions</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>2 Mock Interviews</PricingCardFeature>
                <PricingCardFeature>Resource Sharing</PricingCardFeature>
                <PricingCardFeature>Actionable Roadmap</PricingCardFeature>
                <PricingCardFeature>5+ Referrals & Paid F.P</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
