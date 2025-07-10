import React from "react";

const Security = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <div className="security-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h2 className="section-title">100% Secure Payments</h2>
          <p className="section-subtitle">
            Your financial information is protected with bank-level security and
            encryption
          </p>
        </div>

        <div className="security-badges">
          <div className="security-badge">
            <i className="fas fa-lock"></i>
            <p>SSL Encrypted</p>
          </div>
          <div className="security-badge">
            <i className="fab fa-cc-visa"></i>
            <p>Visa Secured</p>
          </div>
          <div className="security-badge">
            <i className="fab fa-cc-mastercard"></i>
            <p>Mastercard</p>
          </div>
          <div className="security-badge">
            <i className="fas fa-university"></i>
            <p>Bank Grade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
