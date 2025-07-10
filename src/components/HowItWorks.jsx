import React from "react";

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to pay any bill</p>
        </div>

        <div className="how-card-step">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Select Service</h3>
            <p className="step-description">
              Choose from electricity, internet, TV, water, or any other utility
              service
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Enter Details</h3>
            <p className="step-description">
              Input your account number and payment amount - we'll handle the
              rest
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Pay Instantly</h3>
            <p className="step-description">
              Complete your payment securely and receive instant confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
